using Microsoft.AspNetCore.Components;

namespace ModusWebComponents.Blazor;

/// <summary>
/// A customizable feedback component used to provide additional context related to form input interactions.  &lt;b&gt;To use a custom icon, this component requires Modus icons to be installed in the host application. See [Modus Icon Usage](/docs/documentation-modus-icon-usage--docs) for steps.&lt;/b&gt;
/// </summary>
public partial class ModusWcInputFeedback : ComponentBase
{
    private ElementReference _elementRef;

    /// <summary>
    /// Custom CSS class to apply to the outer div element.
    /// </summary>
    [Parameter] public string? CustomClass { get; set; } = "";

    /// <summary>
    /// The Modus icon to use instead of the pre-defined icons.
    /// </summary>
    [Parameter] public string? Icon { get; set; } = "";

    /// <summary>
    /// The level informs which icon and color that will be rendered.
    /// </summary>
    [Parameter] public string? Level { get; set; }

    /// <summary>
    /// The message.
    /// </summary>
    [Parameter] public string? Message { get; set; } = "";

    /// <summary>
    /// The size of the feedback component.
    /// </summary>
    [Parameter] public string? Size { get; set; } = "md";

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
