using Microsoft.AspNetCore.Components;

namespace ModusWebComponents.Blazor;

/// <summary>
/// A customizable badge component used to create badges with different sizes, types, and colors.  The component supports a `&lt;slot&gt;` for injecting content within the badge.
/// </summary>
public partial class ModusWcBadge : ComponentBase
{
    private ElementReference _elementRef;

    /// <summary>
    /// The color variant of the badge.
    /// </summary>
    [Parameter] public string? Color { get; set; } = "primary";

    /// <summary>
    /// Custom CSS class to apply to the span element.
    /// </summary>
    [Parameter] public string? CustomClass { get; set; } = "";

    /// <summary>
    /// The size of the badge.
    /// </summary>
    [Parameter] public string? Size { get; set; } = "md";

    /// <summary>
    /// The variant of the badge.
    /// Allowed values: "counter", "filled", "outlined", "text"
    /// </summary>
    [Parameter] public string? Variant { get; set; } = "filled";

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
