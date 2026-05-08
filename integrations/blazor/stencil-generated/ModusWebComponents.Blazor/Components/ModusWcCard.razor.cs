using Microsoft.AspNetCore.Components;

namespace ModusWebComponents.Blazor;

/// <summary>
/// A customizable card component used to group and display content in a way that is easily readable.  This component supports multiple slot elements including 'header' for images or custom content, 'title', 'subtitle', a default slot for main content, 'actions' for buttons or interactive elements, and 'footer'.
/// </summary>
public partial class ModusWcCard : ComponentBase
{
    private ElementReference _elementRef;

    /// <summary>
    /// Makes any \&lt;figure&gt; in the 'header' slot cover the background
    /// </summary>
    [Parameter] public bool? BackgroundFigure { get; set; } = false;

    /// <summary>
    /// Adds a hard border to the card
    /// </summary>
    [Parameter] public bool? Bordered { get; set; } = false;

    /// <summary>
    /// Custom CSS class to apply
    /// </summary>
    [Parameter] public string? CustomClass { get; set; } = "";

    /// <summary>
    /// Determines how the card is laid out
    /// Allowed values: "vertical", "horizontal"
    /// </summary>
    [Parameter] public string? Layout { get; set; } = "vertical";

    /// <summary>
    /// Determines the interior padding size
    /// Allowed values: "compact", "comfortable"
    /// </summary>
    [Parameter] public string? Padding { get; set; } = "compact";

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
