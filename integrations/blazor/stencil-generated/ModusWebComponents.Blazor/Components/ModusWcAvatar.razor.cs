using Microsoft.AspNetCore.Components;

namespace ModusWebComponents.Blazor;

/// <summary>
/// A customizable avatar component used to create avatars with different images or user initials. When no image is provided, the component can display initials (up to 3 characters) from the initials prop. The component will extract the first letter of each word in the initials string.
/// </summary>
public partial class ModusWcAvatar : ComponentBase
{
    private ElementReference _elementRef;

    /// <summary>
    /// The image alt attribute for accessibility.
    /// </summary>
    [Parameter] public string? Alt { get; set; }

    /// <summary>
    /// Custom CSS class to apply to the inner div.
    /// </summary>
    [Parameter] public string? CustomClass { get; set; } = "";

    /// <summary>
    /// The location of the image.
    /// </summary>
    [Parameter] public string? ImgSrc { get; set; } = "";

    /// <summary>
    /// The initials to display when no image is provided.
    /// </summary>
    [Parameter] public string? Initials { get; set; } = "";

    /// <summary>
    /// The shape of the avatar.
    /// Allowed values: "circle", "square"
    /// </summary>
    [Parameter] public string? Shape { get; set; } = "circle";

    /// <summary>
    /// The size of the avatar.
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
