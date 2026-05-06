using Microsoft.AspNetCore.Components;

namespace ModusWebComponents.Blazor;

/// <summary>
/// A customizable input label component.  The component supports a `&lt;slot&gt;` for injecting additional custom content inside the label, such as icons or formatted text.
/// </summary>
public partial class ModusWcInputLabel : ComponentBase
{
    private ElementReference _elementRef;

    /// <summary>
    /// Additional classes for custom styling.
    /// </summary>
    [Parameter] public string? CustomClass { get; set; } = "";

    /// <summary>
    /// The `for` attribute of the label, matching the `id` of the associated input.
    /// </summary>
    [Parameter] public string? ForId { get; set; }

    /// <summary>
    /// The text to display within the label.
    /// </summary>
    [Parameter] public string? LabelText { get; set; }

    /// <summary>
    /// Whether the label indicates a required field.
    /// </summary>
    [Parameter] public bool? Required { get; set; } = false;

    /// <summary>
    /// The size of the label.
    /// </summary>
    [Parameter] public string? Size { get; set; } = "md";

    /// <summary>
    /// The text rendered beneath the label.
    /// </summary>
    [Parameter] public string? SubLabelText { get; set; }

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
