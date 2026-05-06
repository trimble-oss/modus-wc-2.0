using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace ModusWebComponents.Blazor;

/// <summary>
/// A customizable side navigation component for organizing primary navigation and content areas in an application.  The component supports a `&lt;slot&gt;` for injecting custom content inside the side navigation panel.
/// </summary>
public partial class ModusWcSideNavigation : ComponentBase, IAsyncDisposable
{
    [Inject] private IJSRuntime JSRuntime { get; set; } = default!;

    private ElementReference _elementRef;
    private DotNetObjectReference<ModusWcSideNavigation>? _dotNetRef;

    /// <summary>
    /// Whether the side navigation should collapse when clicking outside of it.
    /// </summary>
    [Parameter] public bool? CollapseOnClickOutside { get; set; } = true;

    /// <summary>
    /// Custom CSS class to apply to the inner div.
    /// </summary>
    [Parameter] public string? CustomClass { get; set; } = "";

    /// <summary>
    /// Whether the side navigation is expanded.
    /// </summary>
    [Parameter] public bool? Expanded { get; set; } = false;

    /// <summary>
    /// Maximum width of the side navigation panel in an expanded state.
    /// </summary>
    [Parameter] public string? MaxWidth { get; set; } = "256px";

    /// <summary>
    /// Mode to make side navigation either overlay or push the content for the selector specified in targetContent
    /// Allowed values: "overlay", "push"
    /// </summary>
    [Parameter] public string? Mode { get; set; } = "overlay";

    /// <summary>
    /// (optional) Specify the selector for the page's content for which paddings and margins will be set by side navigation based on the mode.
    /// </summary>
    [Parameter] public string? TargetContent { get; set; } = "";

    /// <summary>
    /// Content to render inside the component (default slot).
    /// </summary>
    [Parameter] public RenderFragment? ChildContent { get; set; }

    /// <summary>
    /// Additional HTML attributes to apply to the element (e.g. aria-*, data-*, id).
    /// </summary>
    [Parameter(CaptureUnmatchedValues = true)]
    public Dictionary<string, object>? AdditionalAttributes { get; set; }

    /// <summary>
    /// Event emitted when the expanded state changes (expanded/collapsed).
    /// </summary>
    [Parameter] public EventCallback<bool> OnExpandedChange { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            _dotNetRef = DotNetObjectReference.Create(this);
            await JSRuntime.InvokeVoidAsync("modusWcInterop.registerEvents", _elementRef, _dotNetRef, new[] { "expandedChange" });
        }
    }

    private static bool __AsBool(object? d) =>
        d is System.Text.Json.JsonElement je && (je.ValueKind == System.Text.Json.JsonValueKind.True || je.ValueKind == System.Text.Json.JsonValueKind.False) ? je.GetBoolean() : false;

    [JSInvokable]
    public async Task HandleEvent(string eventName, object? detail)
    {
        switch (eventName)
        {
            case "expandedChange":
                await OnExpandedChange.InvokeAsync(__AsBool(detail));
                break;
        }
    }

    public async ValueTask DisposeAsync()
    {
        if (_dotNetRef != null)
        {
            try
            {
                await JSRuntime.InvokeVoidAsync("modusWcInterop.cleanup", _elementRef);
            }
            catch (JSDisconnectedException) { }
            _dotNetRef.Dispose();
            _dotNetRef = null;
        }
        GC.SuppressFinalize(this);
    }
}
