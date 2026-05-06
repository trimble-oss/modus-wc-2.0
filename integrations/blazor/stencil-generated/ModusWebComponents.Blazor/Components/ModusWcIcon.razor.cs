using Microsoft.AspNetCore.Components;

namespace ModusWebComponents.Blazor;

/// <summary>
/// A customizable icon component used to render Modus icons.  &lt;b&gt;This component requires Modus icons to be installed in the host application. See [Modus Icon Usage](/docs/documentation-modus-icon-usage--docs) for steps.&lt;/b&gt;
/// </summary>
public partial class ModusWcIcon : ComponentBase
{
    private ElementReference _elementRef;

    /// <summary>
    /// Custom CSS class to apply to the i element.
    /// </summary>
    [Parameter] public string? CustomClass { get; set; } = "";

    /// <summary>
    /// Indicates that the icon is decorative. When true, sets aria-hidden to hide the icon from screen readers.
    /// </summary>
    [Parameter] public bool? Decorative { get; set; } = true;

    /// <summary>
    /// The icon name, should match the CSS class in the icon font.
    /// </summary>
    [Parameter] public string? Name { get; set; }

    /// <summary>
    /// The icon size, can be &quot;sm&quot;, &quot;md&quot;, &quot;lg&quot; (a custom size can be specified in CSS). This adjusts the font size for the icon.
    /// </summary>
    [Parameter] public string? Size { get; set; } = "md";

    /// <summary>
    /// The icon variant, can be &quot;outlined&quot; or &quot;solid&quot;.
    /// Allowed values: "outlined", "solid"
    /// </summary>
    [Parameter] public string? Variant { get; set; }

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
