using Microsoft.AspNetCore.Components;

namespace ModusWebComponents.Blazor;

/// <summary>
/// A customizable panel component used to organize content in a structured layout.  This component provides 'header', 'body', and 'footer' `&lt;slot&gt;` elements for inserting custom HTML.
/// </summary>
public partial class ModusWcPanel : ComponentBase
{
    private ElementReference _elementRef;

    /// <summary>
    /// Custom CSS class to apply to the outer div.
    /// </summary>
    [Parameter] public string? CustomClass { get; set; } = "";

    /// <summary>
    /// Enable floating mode with elevated shadow.
    /// </summary>
    [Parameter] public bool? Floating { get; set; } = false;

    /// <summary>
    /// Height of the panel in pixels.
    /// </summary>
    [Parameter] public string? Height { get; set; } = "700px";

    /// <summary>
    /// Width of the panel in pixels.
    /// </summary>
    [Parameter] public string? Width { get; set; } = "350px";

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
