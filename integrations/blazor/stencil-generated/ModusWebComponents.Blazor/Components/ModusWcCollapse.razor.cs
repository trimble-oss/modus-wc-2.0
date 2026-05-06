using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace ModusWebComponents.Blazor;

/// <summary>
/// A customizable collapse component used for showing and hiding content.  The component supports a 'header' and 'content' `&lt;slot&gt;` for injecting custom HTML.
/// </summary>
public partial class ModusWcCollapse : ComponentBase, IAsyncDisposable
{
    [Inject] private IJSRuntime JSRuntime { get; set; } = default!;

    private ElementReference _elementRef;
    private DotNetObjectReference<ModusWcCollapse>? _dotNetRef;

    /// <summary>
    /// When true, renders a border-bottom on the collapse component.
    /// </summary>
    [Parameter] public bool? Bordered { get; set; } = false;

    /// <summary>
    /// Controls chevron placement.
    /// Allowed values: "left", "right"
    /// </summary>
    [Parameter] public string? ChevronPosition { get; set; } = "right";

    /// <summary>
    /// A unique identifier used to set the id attributes of various elements.
    /// </summary>
    [Parameter] public string? CollapseId { get; set; }

    /// <summary>
    /// Custom CSS class to apply to the outer div.
    /// </summary>
    [Parameter] public string? CustomClass { get; set; } = "";

    /// <summary>
    /// Controls whether the collapse is expanded or not.
    /// </summary>
    [Parameter] public bool? Expanded { get; set; } = false;

    /// <summary>
    /// Configuration options for rendering the pre-laid out collapse component. Do not set this prop if you intend to use the 'header' slot.
    /// </summary>
    [Parameter] public object? Options { get; set; }

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
    /// Event emitted when the expanded prop is internally changed.
    /// </summary>
    [Parameter] public EventCallback<ModusWcEventArgs> OnExpandedChange { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            _dotNetRef = DotNetObjectReference.Create(this);
            await JSRuntime.InvokeVoidAsync("modusWcInterop.registerEvents", _elementRef, _dotNetRef, new[] { "expandedChange" });
            if (Options != null)
                await JSRuntime.InvokeVoidAsync("modusWcInterop.setProperty", _elementRef, "options", Options);
        }
    }

    protected override async Task OnParametersSetAsync()
    {
        if (_dotNetRef != null)
        {
            await JSRuntime.InvokeVoidAsync("modusWcInterop.setProperty", _elementRef, "options", Options);
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
            case "expandedChange":
                await OnExpandedChange.InvokeAsync(__AsEventArgs(detail));
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
