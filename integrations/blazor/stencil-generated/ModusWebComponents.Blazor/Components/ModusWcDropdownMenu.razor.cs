using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace ModusWebComponents.Blazor;

/// <summary>
/// A customizable dropdown menu component used to render a button and toggleable menu.  The component supports a 'button' and 'menu' `&lt;slot&gt;` for injecting custom HTML content.
/// </summary>
public partial class ModusWcDropdownMenu : ComponentBase, IAsyncDisposable
{
    [Inject] private IJSRuntime JSRuntime { get; set; } = default!;

    private ElementReference _elementRef;
    private DotNetObjectReference<ModusWcDropdownMenu>? _dotNetRef;

    /// <summary>
    /// The aria-label for the dropdown button.
    /// </summary>
    [Parameter] public string? ButtonAriaLabel { get; set; }

    /// <summary>
    /// The color variant of the button.
    /// </summary>
    [Parameter] public string? ButtonColor { get; set; } = "primary";

    /// <summary>
    /// The shape of the button.
    /// Allowed values: "circle", "ellipse", "rectangle", "square"
    /// </summary>
    [Parameter] public string? ButtonShape { get; set; } = "rectangle";

    /// <summary>
    /// The size of the button.
    /// </summary>
    [Parameter] public string? ButtonSize { get; set; } = "md";

    /// <summary>
    /// The variant of the button.
    /// Allowed values: "borderless", "filled", "outlined"
    /// </summary>
    [Parameter] public string? ButtonVariant { get; set; } = "filled";

    /// <summary>
    /// Custom CSS class to apply to the host element.
    /// </summary>
    [Parameter] public string? CustomClass { get; set; } = "";

    /// <summary>
    /// If true, the button will be disabled.
    /// </summary>
    [Parameter] public bool? Disabled { get; set; } = false;

    /// <summary>
    /// Indicates that the menu should have a border.
    /// </summary>
    [Parameter] public bool? MenuBordered { get; set; } = true;

    /// <summary>
    /// Distance between the button and menu in pixels.
    /// </summary>
    [Parameter] public double? MenuOffset { get; set; } = 10;

    /// <summary>
    /// The placement of the menu relative to the button.
    /// </summary>
    [Parameter] public string? MenuPlacement { get; set; } = "bottom-start";

    /// <summary>
    /// The size of the menu.
    /// </summary>
    [Parameter] public string? MenuSize { get; set; } = "md";

    /// <summary>
    /// Indicates that the menu is visible.
    /// </summary>
    [Parameter] public bool? MenuVisible { get; set; } = false;

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
    /// Event emitted when the menuVisible prop changes.
    /// </summary>
    [Parameter] public EventCallback<ModusWcEventArgs> OnMenuVisibilityChange { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            _dotNetRef = DotNetObjectReference.Create(this);
            await JSRuntime.InvokeVoidAsync("modusWcInterop.registerEvents", _elementRef, _dotNetRef, new[] { "menuVisibilityChange" });
        }
    }

    private static object? __AsObject(object? d) =>
        d is System.Text.Json.JsonElement je ? je.ValueKind switch {
            System.Text.Json.JsonValueKind.String => (object?)je.GetString(),
            System.Text.Json.JsonValueKind.True => (object?)true,
            System.Text.Json.JsonValueKind.False => (object?)false,
            System.Text.Json.JsonValueKind.Number => je.TryGetDouble(out double __n) ? (object?)__n : je.GetRawText(),
            System.Text.Json.JsonValueKind.Null or System.Text.Json.JsonValueKind.Undefined => null,
            _ => je.GetRawText()
        } : d;
    private static ModusWcEventArgs __AsEventArgs(object? d) => new ModusWcEventArgs(__AsObject(d));

    [JSInvokable]
    public async Task HandleEvent(string eventName, object? detail)
    {
        switch (eventName)
        {
            case "menuVisibilityChange":
                await OnMenuVisibilityChange.InvokeAsync(__AsEventArgs(detail));
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
