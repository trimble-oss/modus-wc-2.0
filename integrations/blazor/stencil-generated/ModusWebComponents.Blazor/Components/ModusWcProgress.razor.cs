using Microsoft.AspNetCore.Components;

namespace ModusWebComponents.Blazor;

/// <summary>
/// A customizable progress component used to show the progress of a task or show the passing of time.  The radial variant supports slotting in custom HTML to be displayed within the progress circle.
/// </summary>
public partial class ModusWcProgress : ComponentBase
{
    private ElementReference _elementRef;

    /// <summary>
    /// Custom CSS class to apply to the progress element.
    /// </summary>
    [Parameter] public string? CustomClass { get; set; } = "";

    /// <summary>
    /// The indeterminate state of the progress component.
    /// </summary>
    [Parameter] public bool? Indeterminate { get; set; } = false;

    /// <summary>
    /// A text label to render within the progress bar
    /// </summary>
    [Parameter] public string? Label { get; set; }

    /// <summary>
    /// The progress component's maximum value.
    /// </summary>
    [Parameter] public double? Max { get; set; } = 100;

    /// <summary>
    /// The value of the progress component.
    /// </summary>
    [Parameter] public double? Value { get; set; } = 0;

    /// <summary>
    /// The variant of the progress component.
    /// Allowed values: "default", "radial"
    /// </summary>
    [Parameter] public string? Variant { get; set; } = "default";

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
