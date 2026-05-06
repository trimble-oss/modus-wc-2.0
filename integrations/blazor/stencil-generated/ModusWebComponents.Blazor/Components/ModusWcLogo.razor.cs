using Microsoft.AspNetCore.Components;

namespace ModusWebComponents.Blazor;

/// <summary>
/// A component for displaying Trimble product logos with support for both fixed and scalable sizing. Provides consistent branding across applications with various product logo options. Logo colors automatically adapt to the active Modus theme via CSS variables.
/// </summary>
public partial class ModusWcLogo : ComponentBase
{
    private ElementReference _elementRef;

    /// <summary>
    /// The alt text for accessibility. If not provided, defaults to the logo name.
    /// </summary>
    [Parameter] public string? Alt { get; set; }

    /// <summary>
    /// Custom CSS class to apply to the logo container.
    /// </summary>
    [Parameter] public string? CustomClass { get; set; } = "";

    /// <summary>
    /// Show emblem version (icon only) instead of full logo
    /// </summary>
    [Parameter] public bool? Emblem { get; set; } = false;

    /// <summary>
    /// The name of the logo to display. Accepts values like 'trimble', 'viewpoint_field_view', etc.
    /// </summary>
    [Parameter] public string? Name { get; set; }

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
