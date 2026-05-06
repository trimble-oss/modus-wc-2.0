using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace ModusWebComponents.Blazor;

/// <summary>
/// A customizable alert component used to inform the user about important events.  The component supports `&lt;slot&gt;` elements for injecting custom content and buttons.
/// </summary>
public partial class ModusWcAlert : ComponentBase, IAsyncDisposable
{
    [Inject] private IJSRuntime JSRuntime { get; set; } = default!;

    private ElementReference _elementRef;
    private DotNetObjectReference<ModusWcAlert>? _dotNetRef;

    /// <summary>
    /// The description of the alert.
    /// </summary>
    [Parameter] public string? AlertDescription { get; set; }

    /// <summary>
    /// The title of the alert.
    /// </summary>
    [Parameter] public string? AlertTitle { get; set; }

    /// <summary>
    /// Custom CSS class to apply to the outer div element.
    /// </summary>
    [Parameter] public string? CustomClass { get; set; } = "";

    /// <summary>
    /// Time taken to dismiss the alert in milliseconds
    /// </summary>
    [Parameter] public double? Delay { get; set; }

    /// <summary>
    /// Whether the alert has a dismiss button
    /// </summary>
    [Parameter] public bool? Dismissible { get; set; } = false;

    /// <summary>
    /// The Modus icon to render.
    /// </summary>
    [Parameter] public string? Icon { get; set; }

    /// <summary>
    /// The variant of the alert.
    /// Allowed values: "error", "info", "success", "warning"
    /// </summary>
    [Parameter] public string? Variant { get; set; } = "info";

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
    /// An event that fires when the alert is dismissed
    /// </summary>
    [Parameter] public EventCallback<object?> OnDismissClick { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            _dotNetRef = DotNetObjectReference.Create(this);
            await JSRuntime.InvokeVoidAsync("modusWcInterop.registerEvents", _elementRef, _dotNetRef, new[] { "dismissClick" });
        }
    }

    [JSInvokable]
    public async Task HandleEvent(string eventName, object? detail)
    {
        switch (eventName)
        {
            case "dismissClick":
                await OnDismissClick.InvokeAsync(detail);
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
