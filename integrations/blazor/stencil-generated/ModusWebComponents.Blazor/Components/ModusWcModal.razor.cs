using Microsoft.AspNetCore.Components;

namespace ModusWebComponents.Blazor;

/// <summary>
/// A customizable modal component used to display content in a dialog.  This component supports 'header', 'content', and 'footer' `&lt;slot&gt;` elements for inserting custom HTML.
/// </summary>
public partial class ModusWcModal : ComponentBase
{
    private ElementReference _elementRef;

    /// <summary>
    /// The modal's backdrop. Specify 'static' for a backdrop that doesn't close the modal when clicked outside the modal content.
    /// Allowed values: "default", "static"
    /// </summary>
    [Parameter] public string? Backdrop { get; set; } = "default";

    /// <summary>
    /// Custom CSS class to apply
    /// </summary>
    [Parameter] public string? CustomClass { get; set; } = "";

    /// <summary>
    /// Specifies whether the modal should be displayed full-screen
    /// </summary>
    [Parameter] public bool? Fullscreen { get; set; } = false;

    /// <summary>
    /// The ID of the inner dialog element
    /// </summary>
    [Parameter] public string? ModalId { get; set; }

    /// <summary>
    /// Specifies the position of the modal
    /// Allowed values: "bottom", "center", "top"
    /// </summary>
    [Parameter] public string? Position { get; set; } = "center";

    /// <summary>
    /// Specifies whether to show the close icon button at the top right of modal
    /// </summary>
    [Parameter] public bool? ShowClose { get; set; } = true;

    /// <summary>
    /// Specifies whether to show the fullscreen toggle icon button
    /// </summary>
    [Parameter] public bool? ShowFullscreenToggle { get; set; } = false;

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
