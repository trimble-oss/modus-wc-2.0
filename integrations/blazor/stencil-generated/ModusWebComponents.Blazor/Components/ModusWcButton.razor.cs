using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace ModusWebComponents.Blazor;

/// <summary>
/// A customizable button component used to create buttons with different sizes, variants, and types.  The component supports a slot for injecting content within the button, similar to a native HTML button.
/// </summary>
public partial class ModusWcButton : ComponentBase, IAsyncDisposable
{
    [Inject] private IJSRuntime JSRuntime { get; set; } = default!;

    private ElementReference _elementRef;
    private DotNetObjectReference<ModusWcButton>? _dotNetRef;

    /// <summary>
    /// The color variant of the button.
    /// Allowed values: "primary", "secondary", "tertiary", "warning", "danger"
    /// </summary>
    [Parameter] public string? Color { get; set; } = "primary";

    /// <summary>
    /// Custom CSS class to apply to the button element.
    /// </summary>
    [Parameter] public string? CustomClass { get; set; } = "";

    /// <summary>
    /// If true, the button will be disabled.
    /// </summary>
    [Parameter] public bool? Disabled { get; set; } = false;

    /// <summary>
    /// If true, the button will take the full width of its container.
    /// </summary>
    [Parameter] public bool? FullWidth { get; set; } = false;

    /// <summary>
    /// If true, the button will be in a pressed state (for toggle buttons).
    /// </summary>
    [Parameter] public bool? Pressed { get; set; } = false;

    /// <summary>
    /// The shape of the button.
    /// Allowed values: "circle", "ellipse", "rectangle", "square"
    /// </summary>
    [Parameter] public string? Shape { get; set; } = "rectangle";

    /// <summary>
    /// The size of the button.
    /// </summary>
    [Parameter] public string? Size { get; set; } = "md";

    /// <summary>
    /// The type of the button.
    /// Allowed values: "button", "submit", "reset"
    /// </summary>
    [Parameter] public string? Type { get; set; } = "button";

    /// <summary>
    /// The variant of the button.
    /// Allowed values: "borderless", "filled", "outlined"
    /// </summary>
    [Parameter] public string? Variant { get; set; } = "filled";

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
    /// Event emitted when the button is clicked or activated via keyboard.
    /// </summary>
    [Parameter] public EventCallback<ModusWcEventArgs> OnButtonClick { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            _dotNetRef = DotNetObjectReference.Create(this);
            await JSRuntime.InvokeVoidAsync("modusWcInterop.registerEvents", _elementRef, _dotNetRef, new[] { "buttonClick" });
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
            case "buttonClick":
                await OnButtonClick.InvokeAsync(__AsEventArgs(detail));
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
