using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace ModusWebComponents.Blazor;

/// <summary>
/// A customizable menu item component used to display the item portion of a menu.  This component supports a 'start-icon' `&lt;slot&gt;` that allows for custom icons to be placed at the beginning of the item.
/// </summary>
public partial class ModusWcMenuItem : ComponentBase, IAsyncDisposable
{
    [Inject] private IJSRuntime JSRuntime { get; set; } = default!;

    private ElementReference _elementRef;
    private DotNetObjectReference<ModusWcMenuItem>? _dotNetRef;

    /// <summary>
    /// </summary>
    [Parameter] public bool? Bordered { get; set; }

    /// <summary>
    /// If true, renders a checkbox at the start of the menu item.
    /// </summary>
    [Parameter] public bool? Checkbox { get; set; }

    /// <summary>
    /// Custom CSS class to apply to the li element.
    /// </summary>
    [Parameter] public string? CustomClass { get; set; } = "";

    /// <summary>
    /// The disabled state of the menu item.
    /// </summary>
    [Parameter] public bool? Disabled { get; set; }

    /// <summary>
    /// The focused state of the menu item.
    /// </summary>
    [Parameter] public bool? Focused { get; set; }

    /// <summary>
    /// Whether this menu item has a collapsible submenu. When true, the item will show a caret and handle toggle behavior.
    /// </summary>
    [Parameter] public bool? HasSubmenu { get; set; }

    /// <summary>
    /// The text rendered in the menu item.
    /// </summary>
    [Parameter] public string? Label { get; set; } = "";

    /// <summary>
    /// The selected state of the menu item.
    /// </summary>
    [Parameter] public bool? Selected { get; set; }

    /// <summary>
    /// The size of the menu item.
    /// </summary>
    [Parameter] public string? Size { get; set; } = "md";

    /// <summary>
    /// The text rendered beneath the label.
    /// </summary>
    [Parameter] public string? SubLabel { get; set; }

    /// <summary>
    /// The tooltip text to display when hovering over the menu item.
    /// </summary>
    [Parameter] public string? TooltipContent { get; set; }

    /// <summary>
    /// The position of the tooltip relative to the menu item.
    /// Allowed values: "auto", "top", "right", "bottom", "left"
    /// </summary>
    [Parameter] public string? TooltipPosition { get; set; } = "auto";

    /// <summary>
    /// The unique identifying value of the menu item.
    /// </summary>
    [Parameter] public string? Value { get; set; } = "";

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
    /// Event emitted when a menu item is selected.
    /// </summary>
    [Parameter] public EventCallback<ModusWcEventArgs> OnItemSelect { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            _dotNetRef = DotNetObjectReference.Create(this);
            await JSRuntime.InvokeVoidAsync("modusWcInterop.registerEvents", _elementRef, _dotNetRef, new[] { "itemSelect" });
        }
    }

    private static object? __AsObject(object? d) =>
        d is System.Text.Json.JsonElement je ? je.ValueKind switch {
            System.Text.Json.JsonValueKind.String => (object?)je.GetString(),
            System.Text.Json.JsonValueKind.True => (object?)true,
            System.Text.Json.JsonValueKind.False => (object?)false,
            System.Text.Json.JsonValueKind.Number => je.TryGetDouble(out double __n) ? (object?)__n : je.GetRawText(),
            System.Text.Json.JsonValueKind.Null or System.Text.Json.JsonValueKind.Undefined => null,
            _ => (object?)je
        } : d;
    private static ModusWcEventArgs __AsEventArgs(object? d) => new ModusWcEventArgs(__AsObject(d));

    [JSInvokable]
    public async Task HandleEvent(string eventName, object? detail)
    {
        switch (eventName)
        {
            case "itemSelect":
                await OnItemSelect.InvokeAsync(__AsEventArgs(detail));
                break;
        }
    }

    /// <summary>
    /// Public method to collapse the submenu if it's expanded
    /// </summary>
    public async Task CollapseSubmenu()
    {
        await JSRuntime.InvokeVoidAsync("modusWcInterop.callMethod", _elementRef, "collapseSubmenu");
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
