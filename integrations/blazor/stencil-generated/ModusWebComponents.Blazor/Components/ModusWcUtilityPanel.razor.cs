using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace ModusWebComponents.Blazor;

public partial class ModusWcUtilityPanel : ComponentBase, IAsyncDisposable
{
    [Inject] private IJSRuntime JSRuntime { get; set; } = default!;

    private ElementReference _elementRef;
    private DotNetObjectReference<ModusWcUtilityPanel>? _dotNetRef;

    /// <summary>
    /// Custom CSS class to apply to the outer div.
    /// </summary>
    [Parameter] public string? CustomClass { get; set; } = "";

    /// <summary>
    /// The panel is expanded or closed
    /// </summary>
    [Parameter] public bool? Expanded { get; set; } = false;

    /// <summary>
    /// Determines if the panel pushes content or displays an overlay.
    /// </summary>
    [Parameter] public bool? PushContent { get; set; } = false;

    /// <summary>
    /// Target element reference to push content when panel opens
    /// </summary>
    [Parameter] public object? TargetElement { get; set; }

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
    /// An event that fires when the panel is closed.
    /// </summary>
    [Parameter] public EventCallback OnPanelClosed { get; set; }

    /// <summary>
    /// An event that fires when the panel is opened.
    /// </summary>
    [Parameter] public EventCallback OnPanelOpened { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            _dotNetRef = DotNetObjectReference.Create(this);
            await JSRuntime.InvokeVoidAsync("modusWcInterop.registerEvents", _elementRef, _dotNetRef, new[] { "panelClosed", "panelOpened" });
            if (TargetElement != null)
                await JSRuntime.InvokeVoidAsync("modusWcInterop.setProperty", _elementRef, "targetElement", TargetElement);
        }
    }

    protected override async Task OnParametersSetAsync()
    {
        if (_dotNetRef != null)
        {
            await JSRuntime.InvokeVoidAsync("modusWcInterop.setProperty", _elementRef, "targetElement", TargetElement);
        }
    }

    [JSInvokable]
    public async Task HandleEvent(string eventName, object? detail)
    {
        switch (eventName)
        {
            case "panelClosed":
                await OnPanelClosed.InvokeAsync();
                break;
            case "panelOpened":
                await OnPanelOpened.InvokeAsync();
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
