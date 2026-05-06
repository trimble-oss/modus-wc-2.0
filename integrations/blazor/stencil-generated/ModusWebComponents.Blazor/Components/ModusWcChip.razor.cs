using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace ModusWebComponents.Blazor;

/// <summary>
/// A customizable chip component used to display information in a compact area  The component supports a `&lt;slot&gt;` for injecting custom content such as avatar and icons.
/// </summary>
public partial class ModusWcChip : ComponentBase, IAsyncDisposable
{
    [Inject] private IJSRuntime JSRuntime { get; set; } = default!;

    private ElementReference _elementRef;
    private DotNetObjectReference<ModusWcChip>? _dotNetRef;

    /// <summary>
    /// Active state of chip.
    /// </summary>
    [Parameter] public bool? Active { get; set; } = false;

    /// <summary>
    /// Custom CSS class to apply to the inner div.
    /// </summary>
    [Parameter] public string? CustomClass { get; set; } = "";

    /// <summary>
    /// Whether the chip is disabled.
    /// </summary>
    [Parameter] public bool? Disabled { get; set; } = false;

    /// <summary>
    /// Whether the chip has an error.
    /// </summary>
    [Parameter] public bool? HasError { get; set; } = false;

    /// <summary>
    /// The label to display in the chip.
    /// </summary>
    [Parameter] public string? Label { get; set; } = "";

    /// <summary>
    /// The shape of the chip: 'rectangle' (default) or 'circle'.
    /// Allowed values: "rectangle", "circle"
    /// </summary>
    [Parameter] public string? Shape { get; set; } = "rectangle";

    /// <summary>
    /// Whether to show the close icon on right side of the chip.
    /// </summary>
    [Parameter] public bool? ShowRemove { get; set; } = false;

    /// <summary>
    /// The size of the chip.
    /// </summary>
    [Parameter] public string? Size { get; set; } = "md";

    /// <summary>
    /// The variant of the chip.
    /// Allowed values: "filled", "outline"
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
    /// Event emitted when the chip is clicked or activated via keyboard.
    /// </summary>
    [Parameter] public EventCallback<ModusWcEventArgs> OnChipClick { get; set; }

    /// <summary>
    /// Event emitted when the close chip icon button is clicked.
    /// </summary>
    [Parameter] public EventCallback<ModusWcEventArgs> OnChipRemove { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            _dotNetRef = DotNetObjectReference.Create(this);
            await JSRuntime.InvokeVoidAsync("modusWcInterop.registerEvents", _elementRef, _dotNetRef, new[] { "chipClick", "chipRemove" });
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
            case "chipClick":
                await OnChipClick.InvokeAsync(__AsEventArgs(detail));
                break;
            case "chipRemove":
                await OnChipRemove.InvokeAsync(__AsEventArgs(detail));
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
