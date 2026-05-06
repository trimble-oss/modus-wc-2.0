using Microsoft.AspNetCore.Components;

namespace ModusWebComponents.Blazor;

/// <summary>
/// A customizable divider component used to separate content horizontally or vertically
/// </summary>
public partial class ModusWcDivider : ComponentBase
{
    private ElementReference _elementRef;

    /// <summary>
    /// The color of the divider line.
    /// </summary>
    [Parameter] public string? Color { get; set; } = "tertiary";

    /// <summary>
    /// The content to display in the divider.
    /// </summary>
    [Parameter] public string? Content { get; set; } = "";

    /// <summary>
    /// Custom CSS class to apply to the divider element.
    /// </summary>
    [Parameter] public string? CustomClass { get; set; } = "";

    /// <summary>
    /// The orientation of the divider. This is in reference to how content will be rendered around the divider.
    /// </summary>
    [Parameter] public string? Orientation { get; set; } = "vertical";

    /// <summary>
    /// The position of the divider.
    /// Allowed values: "center", "end", "start"
    /// </summary>
    [Parameter] public string? Position { get; set; } = "center";

    /// <summary>
    /// Whether the divider is responsive or not.
    /// </summary>
    [Parameter] public bool? Responsive { get; set; } = true;

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
