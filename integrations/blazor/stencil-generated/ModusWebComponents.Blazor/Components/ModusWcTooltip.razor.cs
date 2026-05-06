using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace ModusWebComponents.Blazor;

/// <summary>
/// A customizable tooltip component used to create tooltips with different content.  The tooltip can be dismissed by pressing the Escape key when hovering over it. When forceOpen is enabled, the tooltip will remain open and can only be closed by setting forceOpen to false.
/// </summary>
public partial class ModusWcTooltip : ComponentBase, IAsyncDisposable
{
    [Inject] private IJSRuntime JSRuntime { get; set; } = default!;

    private ElementReference _elementRef;
    private DotNetObjectReference<ModusWcTooltip>? _dotNetRef;

    /// <summary>
    /// The text content of the tooltip.
    /// </summary>
    [Parameter] public string? Content { get; set; } = "";

    /// <summary>
    /// Custom CSS class to apply to the inner div.
    /// </summary>
    [Parameter] public string? CustomClass { get; set; } = "";

    /// <summary>
    /// Disables displaying the tooltip on hover
    /// </summary>
    [Parameter] public bool? Disabled { get; set; } = false;

    /// <summary>
    /// Use this attribute to force the tooltip to remain open.
    /// </summary>
    [Parameter] public bool? ForceOpen { get; set; }

    /// <summary>
    /// The position that the tooltip will render in relation to the element.
    /// Allowed values: "auto", "top", "right", "bottom", "left"
    /// </summary>
    [Parameter] public string? Position { get; set; } = "auto";

    /// <summary>
    /// The ID of the tooltip element, useful for setting the &quot;aria-describedby&quot; attribute of related elements.
    /// </summary>
    [Parameter] public string? TooltipId { get; set; }

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
    /// An event that fires when the tooltip is dismissed via Escape key
    /// </summary>
    [Parameter] public EventCallback<ModusWcEventArgs> OnDismissEscape { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            _dotNetRef = DotNetObjectReference.Create(this);
            await JSRuntime.InvokeVoidAsync("modusWcInterop.registerEvents", _elementRef, _dotNetRef, new[] { "dismissEscape" });
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
            case "dismissEscape":
                await OnDismissEscape.InvokeAsync(__AsEventArgs(detail));
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
