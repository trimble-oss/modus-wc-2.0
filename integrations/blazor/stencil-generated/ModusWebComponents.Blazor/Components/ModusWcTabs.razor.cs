using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace ModusWebComponents.Blazor;

/// <summary>
/// A customizable tabs component used to create groups of tabs.  The component supports a `&lt;slot&gt;` for injecting custom tab content.
/// </summary>
public partial class ModusWcTabs : ComponentBase, IAsyncDisposable
{
    [Inject] private IJSRuntime JSRuntime { get; set; } = default!;

    private ElementReference _elementRef;
    private DotNetObjectReference<ModusWcTabs>? _dotNetRef;

    /// <summary>
    /// The current active tab
    /// </summary>
    [Parameter] public double? ActiveTabIndex { get; set; } = 0;

    /// <summary>
    /// Custom CSS class to apply to the inner div.
    /// </summary>
    [Parameter] public string? CustomClass { get; set; } = "";

    /// <summary>
    /// The size of the tabs.
    /// </summary>
    [Parameter] public string? Size { get; set; } = "md";

    /// <summary>
    /// Additional styling for the tabs.
    /// Allowed values: "boxed", "bordered", "lifted", "none"
    /// </summary>
    [Parameter] public string? TabStyle { get; set; } = "bordered";

    /// <summary>
    /// The tabs to display.
    /// </summary>
    [Parameter] public object? Tabs { get; set; }

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
    /// When a tab is switched to, this event outputs the relevant indices
    /// </summary>
    [Parameter] public EventCallback<ModusWcEventArgs> OnTabChange { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            _dotNetRef = DotNetObjectReference.Create(this);
            await JSRuntime.InvokeVoidAsync("modusWcInterop.registerEvents", _elementRef, _dotNetRef, new[] { "tabChange" });
            if (Tabs != null)
                await JSRuntime.InvokeVoidAsync("modusWcInterop.setProperty", _elementRef, "tabs", Tabs);
        }
    }

    protected override async Task OnParametersSetAsync()
    {
        if (_dotNetRef != null)
        {
            await JSRuntime.InvokeVoidAsync("modusWcInterop.setProperty", _elementRef, "tabs", Tabs);
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
            case "tabChange":
                await OnTabChange.InvokeAsync(__AsEventArgs(detail));
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
