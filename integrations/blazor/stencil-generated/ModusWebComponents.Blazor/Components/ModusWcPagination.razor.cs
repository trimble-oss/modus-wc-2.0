using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace ModusWebComponents.Blazor;

/// <summary>
/// Pagination component to navigate through pages of content
/// </summary>
public partial class ModusWcPagination : ComponentBase, IAsyncDisposable
{
    [Inject] private IJSRuntime JSRuntime { get; set; } = default!;

    private ElementReference _elementRef;
    private DotNetObjectReference<ModusWcPagination>? _dotNetRef;

    /// <summary>
    /// Total number of pages
    /// </summary>
    [Parameter] public double? Count { get; set; } = 1;

    /// <summary>
    /// Custom CSS class to apply
    /// </summary>
    [Parameter] public string? CustomClass { get; set; } = "";

    /// <summary>
    /// The next page button text. If not set, an icon control will be used.
    /// </summary>
    [Parameter] public string? NextButtonText { get; set; }

    /// <summary>
    /// The current page number
    /// </summary>
    [Parameter] public double? Page { get; set; } = 1;

    /// <summary>
    /// The previous page button text. If not set, an icon control will be used.
    /// </summary>
    [Parameter] public string? PrevButtonText { get; set; }

    /// <summary>
    /// Size of the pagination buttons
    /// </summary>
    [Parameter] public string? Size { get; set; } = "md";

    /// <summary>
    /// Aria label values for pagination buttons
    /// </summary>
    [Parameter] public object? AriaLabelValues { get; set; }

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
    /// Event emitted when page changes
    /// </summary>
    [Parameter] public EventCallback<object?> OnPageChange { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            _dotNetRef = DotNetObjectReference.Create(this);
            await JSRuntime.InvokeVoidAsync("modusWcInterop.registerEvents", _elementRef, _dotNetRef, new[] { "pageChange" });
            if (AriaLabelValues != null)
                await JSRuntime.InvokeVoidAsync("modusWcInterop.setProperty", _elementRef, "ariaLabelValues", AriaLabelValues);
        }
    }

    protected override async Task OnParametersSetAsync()
    {
        if (_dotNetRef != null)
        {
            await JSRuntime.InvokeVoidAsync("modusWcInterop.setProperty", _elementRef, "ariaLabelValues", AriaLabelValues);
        }
    }

    [JSInvokable]
    public async Task HandleEvent(string eventName, object? detail)
    {
        switch (eventName)
        {
            case "pageChange":
                await OnPageChange.InvokeAsync(detail);
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
