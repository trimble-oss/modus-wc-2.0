using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace ModusWebComponents.Blazor;

public partial class ModusWcProfileMenu : ComponentBase, IAsyncDisposable
{
    [Inject] private IJSRuntime JSRuntime { get; set; } = default!;

    private ElementReference _elementRef;
    private DotNetObjectReference<ModusWcProfileMenu>? _dotNetRef;

    /// <summary>
    /// Configuration for the first menu including title and items
    /// </summary>
    [Parameter] public object? MenuOne { get; set; }

    /// <summary>
    /// Configuration for the second menu including title and items
    /// </summary>
    [Parameter] public object? MenuTwo { get; set; }

    /// <summary>
    /// Profile menu properties containing user information
    /// </summary>
    [Parameter] public object? ProfileProps { get; set; }

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
    /// Emitted when any menu item is clicked, passing back the item value or label
    /// </summary>
    [Parameter] public EventCallback<string?> OnMenuItemClick { get; set; }

    /// <summary>
    /// Emitted when the Sign Out menu item is clicked
    /// </summary>
    [Parameter] public EventCallback OnSignOutClick { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            _dotNetRef = DotNetObjectReference.Create(this);
            await JSRuntime.InvokeVoidAsync("modusWcInterop.registerEvents", _elementRef, _dotNetRef, new[] { "menuItemClick", "signOutClick" });
            if (MenuOne != null)
                await JSRuntime.InvokeVoidAsync("modusWcInterop.setProperty", _elementRef, "menuOne", MenuOne);
            if (MenuTwo != null)
                await JSRuntime.InvokeVoidAsync("modusWcInterop.setProperty", _elementRef, "menuTwo", MenuTwo);
            if (ProfileProps != null)
                await JSRuntime.InvokeVoidAsync("modusWcInterop.setProperty", _elementRef, "profileProps", ProfileProps);
        }
    }

    protected override async Task OnParametersSetAsync()
    {
        if (_dotNetRef != null)
        {
            await JSRuntime.InvokeVoidAsync("modusWcInterop.setProperty", _elementRef, "menuOne", MenuOne);
            await JSRuntime.InvokeVoidAsync("modusWcInterop.setProperty", _elementRef, "menuTwo", MenuTwo);
            await JSRuntime.InvokeVoidAsync("modusWcInterop.setProperty", _elementRef, "profileProps", ProfileProps);
        }
    }

    private static string? __AsString(object? d) =>
        d is System.Text.Json.JsonElement je && je.ValueKind == System.Text.Json.JsonValueKind.String ? je.GetString() : d?.ToString();

    [JSInvokable]
    public async Task HandleEvent(string eventName, object? detail)
    {
        switch (eventName)
        {
            case "menuItemClick":
                await OnMenuItemClick.InvokeAsync(__AsString(detail));
                break;
            case "signOutClick":
                await OnSignOutClick.InvokeAsync();
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
