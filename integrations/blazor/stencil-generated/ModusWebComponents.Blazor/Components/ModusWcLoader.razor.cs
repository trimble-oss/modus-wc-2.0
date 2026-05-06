using Microsoft.AspNetCore.Components;

namespace ModusWebComponents.Blazor;

/// <summary>
/// A customizable loader component used to indicate the loading of content
/// </summary>
public partial class ModusWcLoader : ComponentBase
{
    private ElementReference _elementRef;

    /// <summary>
    /// The color of the loader.
    /// </summary>
    [Parameter] public string? Color { get; set; } = "primary";

    /// <summary>
    /// Custom CSS class to apply to the loader element.
    /// </summary>
    [Parameter] public string? CustomClass { get; set; } = "";

    /// <summary>
    /// The size of the loader.
    /// </summary>
    [Parameter] public string? Size { get; set; } = "md";

    /// <summary>
    /// The variant of the loader.
    /// </summary>
    [Parameter] public string? Variant { get; set; } = "spinner";

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
