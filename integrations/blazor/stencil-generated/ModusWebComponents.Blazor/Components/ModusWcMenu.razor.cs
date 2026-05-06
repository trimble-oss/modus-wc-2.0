using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace ModusWebComponents.Blazor;

/// <summary>
/// A customizable menu component used to display a list of li elements vertically or horizontally.  The component supports a `&lt;slot&gt;` for injecting custom li elements inside the ul element.
/// </summary>
public partial class ModusWcMenu : ComponentBase, IAsyncDisposable
{
    [Inject] private IJSRuntime JSRuntime { get; set; } = default!;

    private ElementReference _elementRef;
    private DotNetObjectReference<ModusWcMenu>? _dotNetRef;

    /// <summary>
    /// Indicates that the menu should have a border.
    /// </summary>
    [Parameter] public bool? Bordered { get; set; }

    /// <summary>
    /// Custom CSS class to apply to the ul element.
    /// </summary>
    [Parameter] public string? CustomClass { get; set; } = "";

    /// <summary>
    /// Indicates that this menu is a submenu (dropdown).
    /// </summary>
    [Parameter] public bool? IsSubMenu { get; set; }

    /// <summary>
    /// The orientation of the menu.
    /// </summary>
    [Parameter] public string? Orientation { get; set; } = "vertical";

    /// <summary>
    /// The selection mode of the menu.
    /// </summary>
    [Parameter] public string? SelectionMode { get; set; } = "single";

    /// <summary>
    /// The size of the menu.
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

    /// <summary>
    /// Event emitted when the menu loses focus.
    /// </summary>
    [Parameter] public EventCallback<object?> OnMenuFocusout { get; set; }

    /// <summary>
    /// Event emitted when the selection changes in multiple selection mode. Emits the array of currently selected menu item elements.
    /// </summary>
    [Parameter] public EventCallback<object?> OnMenuSelectionChange { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            _dotNetRef = DotNetObjectReference.Create(this);
            await JSRuntime.InvokeVoidAsync("modusWcInterop.registerEvents", _elementRef, _dotNetRef, new[] { "menuFocusout", "menuSelectionChange" });
        }
    }

    [JSInvokable]
    public async Task HandleEvent(string eventName, object? detail)
    {
        switch (eventName)
        {
            case "menuFocusout":
                await OnMenuFocusout.InvokeAsync(detail);
                break;
            case "menuSelectionChange":
                await OnMenuSelectionChange.InvokeAsync(detail);
                break;
        }
    }

    public async ValueTask DisposeAsync()
    {
        if (_dotNetRef != null)
        {
            try
            {
                await JSRuntime.InvokeVoidAsync("modusWcInterop.cleanup", _elementRef);
            }
            catch (JSDisconnectedException) { }
            _dotNetRef.Dispose();
            _dotNetRef = null;
        }
        GC.SuppressFinalize(this);
    }
}
