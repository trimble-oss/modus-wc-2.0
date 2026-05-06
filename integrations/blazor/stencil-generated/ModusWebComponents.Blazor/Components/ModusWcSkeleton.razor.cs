using Microsoft.AspNetCore.Components;

namespace ModusWebComponents.Blazor;

/// <summary>
/// A customizable skeleton component used to create skeletons of various sizes and shapes
/// </summary>
public partial class ModusWcSkeleton : ComponentBase
{
    private ElementReference _elementRef;

    /// <summary>
    /// Custom CSS class to apply to the inner div.
    /// </summary>
    [Parameter] public string? CustomClass { get; set; } = "";

    /// <summary>
    /// The height of the skeleton.
    /// </summary>
    [Parameter] public string? Height { get; set; } = "var(--modus-wc-line-height-md)";

    /// <summary>
    /// The shape of the skeleton.
    /// Allowed values: "circle", "rectangle"
    /// </summary>
    [Parameter] public string? Shape { get; set; } = "rectangle";

    /// <summary>
    /// The width of the skeleton.
    /// </summary>
    [Parameter] public string? Width { get; set; } = "100%";

    /// <summary>
    /// Content to render inside the component (default slot).
    /// </summary>
    [Parameter] public RenderFragment? ChildContent { get; set; }

    /// <summary>
    /// Additional HTML attributes to apply to the element (e.g. aria-*, data-*, id).
    /// </summary>
    [Parameter(CaptureUnmatchedValues = true)]
    public Dictionary<string, object>? AdditionalAttributes { get; set; }

}
