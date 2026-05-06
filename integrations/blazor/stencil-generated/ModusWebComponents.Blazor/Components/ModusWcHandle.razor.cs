using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace ModusWebComponents.Blazor;

/// <summary>
/// A draggable handle component for resizing adjacent elements
/// </summary>
public partial class ModusWcHandle : ComponentBase, IAsyncDisposable
{
    [Inject] private IJSRuntime JSRuntime { get; set; } = default!;

    private ElementReference _elementRef;
    private DotNetObjectReference<ModusWcHandle>? _dotNetRef;

    /// <summary>
    /// The color of the button.
    /// </summary>
    [Parameter] public string? ButtonColor { get; set; } = "tertiary";

    /// <summary>
    /// The size of the button.
    /// </summary>
    [Parameter] public string? ButtonSize { get; set; } = "md";

    /// <summary>
    /// The variant of the button.
    /// Allowed values: "borderless", "filled", "outlined"
    /// </summary>
    [Parameter] public string? ButtonVariant { get; set; } = "filled";

    /// <summary>
    /// Custom CSS class to apply to the handle element.
    /// </summary>
    [Parameter] public string? CustomClass { get; set; } = "";

    /// <summary>
    /// The initial split percentage for the left/top panel (1-100). The right/bottom panel gets the remaining percentage.
    /// </summary>
    [Parameter] public double? DefaultSplit { get; set; } = 50;

    /// <summary>
    /// The density/spacing of the handle container (compact: 8px, comfortable: 12px, relaxed: 16px).
    /// Allowed values: "compact", "comfortable", "relaxed"
    /// </summary>
    [Parameter] public string? Density { get; set; } = "comfortable";

    /// <summary>
    /// The orientation of the handle.
    /// </summary>
    [Parameter] public string? Orientation { get; set; } = "horizontal";

    /// <summary>
    /// The size of the handle.
    /// Allowed values: "default", "lg", "xl", "2xl"
    /// </summary>
    [Parameter] public string? Size { get; set; } = "default";

    /// <summary>
    /// The type of handle to display.
    /// Allowed values: "bar", "button"
    /// </summary>
    [Parameter] public string? Type { get; set; } = "bar";

    /// <summary>
    /// The left target element to resize (CSS selector or HTMLElement)
    /// </summary>
    [Parameter] public object? LeftTarget { get; set; }

    /// <summary>
    /// The right target element to resize (CSS selector or HTMLElement)
    /// </summary>
    [Parameter] public object? RightTarget { get; set; }

    /// <summary>
    /// Content to render inside the component (default slot).
    /// </summary>
    [Parameter] public RenderFragment? ChildContent { get; set; }

    /// <summary>
    /// Additional HTML attributes to apply to the element (e.g. aria-*, data-*, id).
    /// </summary>
    [Parameter(CaptureUnmatchedValues = true)]
    public Dictionary<string, object>? AdditionalAttributes { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            _dotNetRef = DotNetObjectReference.Create(this);
            if (LeftTarget != null)
                await JSRuntime.InvokeVoidAsync("modusWcInterop.setProperty", _elementRef, "leftTarget", LeftTarget);
            if (RightTarget != null)
                await JSRuntime.InvokeVoidAsync("modusWcInterop.setProperty", _elementRef, "rightTarget", RightTarget);
        }
    }

    protected override async Task OnParametersSetAsync()
    {
        if (_dotNetRef != null)
        {
            await JSRuntime.InvokeVoidAsync("modusWcInterop.setProperty", _elementRef, "leftTarget", LeftTarget);
            await JSRuntime.InvokeVoidAsync("modusWcInterop.setProperty", _elementRef, "rightTarget", RightTarget);
        }
    }

    public async ValueTask DisposeAsync()
    {
        _dotNetRef?.Dispose();
        _dotNetRef = null;
        GC.SuppressFinalize(this);
    }
}
