using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace ModusWebComponents.Blazor;

/// <summary>
/// A rating component that allows users to choose a rating from predefined options
/// </summary>
public partial class ModusWcRating : ComponentBase, IAsyncDisposable
{
    [Inject] private IJSRuntime JSRuntime { get; set; } = default!;

    private ElementReference _elementRef;
    private DotNetObjectReference<ModusWcRating>? _dotNetRef;

    /// <summary>
    /// Whether to allow half-ratings. Only applies to star and heart variants.
    /// </summary>
    [Parameter] public bool? AllowHalf { get; set; } = false;

    /// <summary>
    /// The number of rating items to display
    /// </summary>
    [Parameter] public double? Count { get; set; } = 5;

    /// <summary>
    /// Custom CSS class to apply
    /// </summary>
    [Parameter] public string? CustomClass { get; set; } = "";

    /// <summary>
    /// Whether the rating component is disabled
    /// </summary>
    [Parameter] public bool? Disabled { get; set; } = false;

    /// <summary>
    /// The size of the rating component
    /// </summary>
    [Parameter] public string? Size { get; set; } = "md";

    /// <summary>
    /// The current value of the rating
    /// </summary>
    [Parameter] public double? Value { get; set; } = 0;

    /// <summary>
    /// The variant of the rating scale
    /// </summary>
    [Parameter] public string? Variant { get; set; } = "smiley";

    // Function-type props skipped (not bindable from C#): getAriaLabelText

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
    /// Event emitted when the rating changes
    /// </summary>
    [Parameter] public EventCallback<ModusWcEventArgs> OnRatingChange { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            _dotNetRef = DotNetObjectReference.Create(this);
            await JSRuntime.InvokeVoidAsync("modusWcInterop.registerEvents", _elementRef, _dotNetRef, new[] { "ratingChange" });
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
            case "ratingChange":
                await OnRatingChange.InvokeAsync(__AsEventArgs(detail));
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
