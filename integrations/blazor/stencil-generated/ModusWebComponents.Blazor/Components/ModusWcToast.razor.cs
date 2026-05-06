using Microsoft.AspNetCore.Components;

namespace ModusWebComponents.Blazor;

/// <summary>
/// A customizable toast component used to stack elements, positioned on the corner of a page.  The component supports a `&lt;slot&gt;` for injecting additional custom content inside the toast.
/// </summary>
public partial class ModusWcToast : ComponentBase
{
    private ElementReference _elementRef;

    /// <summary>
    /// Additional classes for custom styling.
    /// </summary>
    [Parameter] public string? CustomClass { get; set; } = "";

    /// <summary>
    /// Time taken to dismiss the toast in milliseconds
    /// </summary>
    [Parameter] public double? Delay { get; set; }

    /// <summary>
    /// The position of the toast in the parent container.
    /// </summary>
    [Parameter] public string? Position { get; set; } = "top-end";

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
