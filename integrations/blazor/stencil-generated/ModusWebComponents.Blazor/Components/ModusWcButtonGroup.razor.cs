using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace ModusWebComponents.Blazor;

/// <summary>
/// A customizable buttongroup component that groups multiple Modus buttons together.  The component supports a `&lt;slot&gt;` for injecting content within the buttongroup.
/// </summary>
public partial class ModusWcButtonGroup : ComponentBase, IAsyncDisposable
{
    [Inject] private IJSRuntime JSRuntime { get; set; } = default!;

    private ElementReference _elementRef;
    private DotNetObjectReference<ModusWcButtonGroup>? _dotNetRef;

    /// <summary>
    /// Color to apply to all buttons within the button group
    /// Allowed values: "primary", "secondary", "tertiary", "warning", "danger"
    /// </summary>
    [Parameter] public string? Color { get; set; }

    /// <summary>
    /// Disables all buttons within the button group
    /// </summary>
    [Parameter] public bool? Disabled { get; set; } = false;

    /// <summary>
    /// Orientation of the button group: horizontal or vertical
    /// </summary>
    [Parameter] public string? Orientation { get; set; } = "horizontal";

    /// <summary>
    /// Selection type for button group
    /// Allowed values: "default", "single", "multiple"
    /// </summary>
    [Parameter] public string? SelectionType { get; set; } = "default";

    /// <summary>
    /// Style variant to apply to all buttons within the button group
    /// Allowed values: "borderless", "filled", "outlined"
    /// </summary>
    [Parameter] public string? Variant { get; set; } = "outlined";

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
    /// Event emitted when any button in the group is clicked
    /// </summary>
    [Parameter] public EventCallback<object?> OnButtonGroupClick { get; set; }

    /// <summary>
    /// Event emitted when button selection changes
    /// </summary>
    [Parameter] public EventCallback<object?> OnButtonSelectionChange { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            _dotNetRef = DotNetObjectReference.Create(this);
            await JSRuntime.InvokeVoidAsync("modusWcInterop.registerEvents", _elementRef, _dotNetRef, new[] { "buttonGroupClick", "buttonSelectionChange" });
        }
    }

    [JSInvokable]
    public async Task HandleEvent(string eventName, object? detail)
    {
        switch (eventName)
        {
            case "buttonGroupClick":
                await OnButtonGroupClick.InvokeAsync(detail);
                break;
            case "buttonSelectionChange":
                await OnButtonSelectionChange.InvokeAsync(detail);
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
