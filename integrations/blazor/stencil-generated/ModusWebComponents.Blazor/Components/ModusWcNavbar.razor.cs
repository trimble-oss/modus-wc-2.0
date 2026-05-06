using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace ModusWebComponents.Blazor;

/// <summary>
/// A customizable navbar component used for top level navigation of all Trimble applications.
/// </summary>
public partial class ModusWcNavbar : ComponentBase, IAsyncDisposable
{
    [Inject] private IJSRuntime JSRuntime { get; set; } = default!;

    private ElementReference _elementRef;
    private DotNetObjectReference<ModusWcNavbar>? _dotNetRef;

    /// <summary>
    /// The open state of the apps menu.
    /// </summary>
    [Parameter] public bool? AppsMenuOpen { get; set; } = false;

    /// <summary>
    /// Applies condensed layout and styling.
    /// </summary>
    [Parameter] public bool? Condensed { get; set; } = false;

    /// <summary>
    /// The open state of the condensed menu.
    /// </summary>
    [Parameter] public bool? CondensedMenuOpen { get; set; } = false;

    /// <summary>
    /// Custom CSS class to apply to the host element.
    /// </summary>
    [Parameter] public string? CustomClass { get; set; } = "";

    /// <summary>
    /// The open state of the main menu.
    /// </summary>
    [Parameter] public bool? MainMenuOpen { get; set; } = false;

    /// <summary>
    /// The open state of the notifications menu.
    /// </summary>
    [Parameter] public bool? NotificationsMenuOpen { get; set; } = false;

    /// <summary>
    /// Debounce time in milliseconds for search input changes. Default is 300ms.
    /// </summary>
    [Parameter] public double? SearchDebounceMs { get; set; } = 300;

    /// <summary>
    /// The open state of the search input.
    /// </summary>
    [Parameter] public bool? SearchInputOpen { get; set; } = false;

    /// <summary>
    /// The open state of the user menu.
    /// </summary>
    [Parameter] public bool? UserMenuOpen { get; set; } = false;

    /// <summary>
    /// The name of the logo to display. Supports any valid 'logo-name' from the 'modus-wc-logo' component. Defaults to 'trimble'.
    /// </summary>
    [Parameter] public object? LogoName { get; set; }

    /// <summary>
    /// Text replacements for the navbar.
    /// </summary>
    [Parameter] public object? TextOverrides { get; set; }

    /// <summary>
    /// User information used to render the user card.
    /// </summary>
    [Parameter] public object? UserCard { get; set; }

    /// <summary>
    /// The visibility of individual navbar buttons. Default is user profile visible, others hidden.
    /// </summary>
    [Parameter] public object? Visibility { get; set; }

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
    /// Event emitted when the AI button is clicked or activated via keyboard.
    /// </summary>
    [Parameter] public EventCallback<ModusWcEventArgs> OnAiClick { get; set; }

    /// <summary>
    /// Event emitted when the apps button is clicked or activated via keyboard.
    /// </summary>
    [Parameter] public EventCallback<ModusWcEventArgs> OnAppsClick { get; set; }

    /// <summary>
    /// Event emitted when the apps menu open state changes.
    /// </summary>
    [Parameter] public EventCallback<bool> OnAppsMenuOpenChange { get; set; }

    /// <summary>
    /// Event emitted when the condensed menu open state changes.
    /// </summary>
    [Parameter] public EventCallback<bool> OnCondensedMenuOpenChange { get; set; }

    /// <summary>
    /// Event emitted when the help button is clicked or activated via keyboard.
    /// </summary>
    [Parameter] public EventCallback<ModusWcEventArgs> OnHelpClick { get; set; }

    /// <summary>
    /// Event emitted when the main menu open state changes.
    /// </summary>
    [Parameter] public EventCallback<bool> OnMainMenuOpenChange { get; set; }

    /// <summary>
    /// Event emitted when the user profile Access MyTrimble button is clicked or activated via keyboard.
    /// </summary>
    [Parameter] public EventCallback<ModusWcEventArgs> OnMyTrimbleClick { get; set; }

    /// <summary>
    /// Event emitted when the notifications button is clicked or activated via keyboard.
    /// </summary>
    [Parameter] public EventCallback<ModusWcEventArgs> OnNotificationsClick { get; set; }

    /// <summary>
    /// Event emitted when the notifications menu open state changes.
    /// </summary>
    [Parameter] public EventCallback<bool> OnNotificationsMenuOpenChange { get; set; }

    /// <summary>
    /// Event emitted when the search input value is changed.
    /// </summary>
    [Parameter] public EventCallback<ModusWcEventArgs> OnSearchChange { get; set; }

    /// <summary>
    /// Event emitted when the search button is clicked or activated via keyboard.
    /// </summary>
    [Parameter] public EventCallback<ModusWcEventArgs> OnSearchClick { get; set; }

    /// <summary>
    /// Event emitted when the search input open state changes.
    /// </summary>
    [Parameter] public EventCallback<bool> OnSearchInputOpenChange { get; set; }

    /// <summary>
    /// Event emitted when the user profile sign out button is clicked or activated via keyboard.
    /// </summary>
    [Parameter] public EventCallback<ModusWcEventArgs> OnSignOutClick { get; set; }

    /// <summary>
    /// Event emitted when the logo button is clicked or activated via keyboard,regardless of the `logoName` prop value.
    /// </summary>
    [Parameter] public EventCallback<ModusWcEventArgs> OnTrimbleLogoClick { get; set; }

    /// <summary>
    /// Event emitted when the user menu open state changes.
    /// </summary>
    [Parameter] public EventCallback<bool> OnUserMenuOpenChange { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            _dotNetRef = DotNetObjectReference.Create(this);
            await JSRuntime.InvokeVoidAsync("modusWcInterop.registerEvents", _elementRef, _dotNetRef, new[] { "aiClick", "appsClick", "appsMenuOpenChange", "condensedMenuOpenChange", "helpClick", "mainMenuOpenChange", "myTrimbleClick", "notificationsClick", "notificationsMenuOpenChange", "searchChange", "searchClick", "searchInputOpenChange", "signOutClick", "trimbleLogoClick", "userMenuOpenChange" });
            if (LogoName != null)
                await JSRuntime.InvokeVoidAsync("modusWcInterop.setProperty", _elementRef, "logoName", LogoName);
            if (TextOverrides != null)
                await JSRuntime.InvokeVoidAsync("modusWcInterop.setProperty", _elementRef, "textOverrides", TextOverrides);
            if (UserCard != null)
                await JSRuntime.InvokeVoidAsync("modusWcInterop.setProperty", _elementRef, "userCard", UserCard);
            if (Visibility != null)
                await JSRuntime.InvokeVoidAsync("modusWcInterop.setProperty", _elementRef, "visibility", Visibility);
        }
    }

    protected override async Task OnParametersSetAsync()
    {
        if (_dotNetRef != null)
        {
            await JSRuntime.InvokeVoidAsync("modusWcInterop.setProperty", _elementRef, "logoName", LogoName);
            await JSRuntime.InvokeVoidAsync("modusWcInterop.setProperty", _elementRef, "textOverrides", TextOverrides);
            await JSRuntime.InvokeVoidAsync("modusWcInterop.setProperty", _elementRef, "userCard", UserCard);
            await JSRuntime.InvokeVoidAsync("modusWcInterop.setProperty", _elementRef, "visibility", Visibility);
        }
    }

    private static bool __AsBool(object? d) =>
        d is System.Text.Json.JsonElement je && (je.ValueKind == System.Text.Json.JsonValueKind.True || je.ValueKind == System.Text.Json.JsonValueKind.False) ? je.GetBoolean() : false;

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
            case "aiClick":
                await OnAiClick.InvokeAsync(__AsEventArgs(detail));
                break;
            case "appsClick":
                await OnAppsClick.InvokeAsync(__AsEventArgs(detail));
                break;
            case "appsMenuOpenChange":
                await OnAppsMenuOpenChange.InvokeAsync(__AsBool(detail));
                break;
            case "condensedMenuOpenChange":
                await OnCondensedMenuOpenChange.InvokeAsync(__AsBool(detail));
                break;
            case "helpClick":
                await OnHelpClick.InvokeAsync(__AsEventArgs(detail));
                break;
            case "mainMenuOpenChange":
                await OnMainMenuOpenChange.InvokeAsync(__AsBool(detail));
                break;
            case "myTrimbleClick":
                await OnMyTrimbleClick.InvokeAsync(__AsEventArgs(detail));
                break;
            case "notificationsClick":
                await OnNotificationsClick.InvokeAsync(__AsEventArgs(detail));
                break;
            case "notificationsMenuOpenChange":
                await OnNotificationsMenuOpenChange.InvokeAsync(__AsBool(detail));
                break;
            case "searchChange":
                await OnSearchChange.InvokeAsync(__AsEventArgs(detail));
                break;
            case "searchClick":
                await OnSearchClick.InvokeAsync(__AsEventArgs(detail));
                break;
            case "searchInputOpenChange":
                await OnSearchInputOpenChange.InvokeAsync(__AsBool(detail));
                break;
            case "signOutClick":
                await OnSignOutClick.InvokeAsync(__AsEventArgs(detail));
                break;
            case "trimbleLogoClick":
                await OnTrimbleLogoClick.InvokeAsync(__AsEventArgs(detail));
                break;
            case "userMenuOpenChange":
                await OnUserMenuOpenChange.InvokeAsync(__AsBool(detail));
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
