using Microsoft.AspNetCore.Components;

namespace ModusWebComponents.Blazor;

/// <summary>
/// A customizable typography component used to render text with different sizes, hierarchy, and weights.  Note: - When using heading elements (h1-h6), the default heading CSS styling can be accessed without modifying the default size (size=&quot;md&quot;) and weight (weight=&quot;normal&quot;) properties. Default styling can be overridden by providing your own custom values for the size or weight properties from the available options.   - If both slot content and `label` are provided, only the slot content will be rendered - Use the `label` prop when you need to dynamically update the text.
/// </summary>
public partial class ModusWcTypography : ComponentBase
{
    private ElementReference _elementRef;

    /// <summary>
    /// Custom CSS class to apply to the typography element.
    /// </summary>
    [Parameter] public string? CustomClass { get; set; } = "";

    /// <summary>
    /// The hierarchy of the typography component.
    /// </summary>
    [Parameter] public string? Hierarchy { get; set; } = "p";

    /// <summary>
    /// The text label to display.
    /// </summary>
    [Parameter] public string? Label { get; set; }

    /// <summary>
    /// The size of the font.
    /// </summary>
    [Parameter] public string? Size { get; set; } = "md";

    /// <summary>
    /// The weight of the text.
    /// </summary>
    [Parameter] public string? Weight { get; set; } = "normal";

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
