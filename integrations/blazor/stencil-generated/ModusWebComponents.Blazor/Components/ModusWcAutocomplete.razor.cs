using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace ModusWebComponents.Blazor;

/// <summary>
/// A customizable autocomplete component used to create searchable text inputs.  The component supports a slot for injecting custom content.
/// </summary>
public partial class ModusWcAutocomplete : ComponentBase, IAsyncDisposable
{
    [Inject] private IJSRuntime JSRuntime { get; set; } = default!;

    private ElementReference _elementRef;
    private DotNetObjectReference<ModusWcAutocomplete>? _dotNetRef;

    /// <summary>
    /// Indicates that the autocomplete should have a border.
    /// </summary>
    [Parameter] public bool? Bordered { get; set; } = true;

    /// <summary>
    /// Custom CSS class to apply to host element.
    /// </summary>
    [Parameter] public string? CustomClass { get; set; } = "";

    /// <summary>
    /// The debounce timeout in milliseconds. Set to 0 to disable debouncing.
    /// </summary>
    [Parameter] public double? DebounceMs { get; set; } = 300;

    /// <summary>
    /// Whether the form control is disabled.
    /// </summary>
    [Parameter] public bool? Disabled { get; set; } = false;

    /// <summary>
    /// Show the clear button within the input field.
    /// </summary>
    [Parameter] public bool? IncludeClear { get; set; } = false;

    /// <summary>
    /// Show the search icon within the input field.
    /// </summary>
    [Parameter] public bool? IncludeSearch { get; set; } = false;

    /// <summary>
    /// The ID of the input element.
    /// </summary>
    [Parameter] public string? InputId { get; set; }

    /// <summary>
    /// Determine the control's relative ordering for sequential focus navigation (typically with the Tab key).
    /// </summary>
    [Parameter] public double? InputTabIndex { get; set; }

    /// <summary>
    /// The text to display within the label.
    /// </summary>
    [Parameter] public string? Label { get; set; }

    /// <summary>
    /// Whether the menu should remain open after an item is selected.
    /// </summary>
    [Parameter] public bool? LeaveMenuOpen { get; set; } = false;

    /// <summary>
    /// Maximum number of chips to display. When exceeded, shows expand/collapse button. Set to -1 to disable limit.
    /// </summary>
    [Parameter] public double? MaxChips { get; set; } = -1;

    /// <summary>
    /// The minimum number of characters required to render the menu.
    /// </summary>
    [Parameter] public double? MinChars { get; set; } = 0;

    /// <summary>
    /// Minimum width for the text input in pixels. When chips would make input smaller, container height increases instead.
    /// </summary>
    [Parameter] public double? MinInputWidth { get; set; } = 10;

    /// <summary>
    /// Whether the input allows multiple items to be selected.
    /// </summary>
    [Parameter] public bool? MultiSelect { get; set; } = false;

    /// <summary>
    /// Name of the form control. Submitted with the form as part of a name/value pair.
    /// </summary>
    [Parameter] public string? Name { get; set; }

    /// <summary>
    /// Text that appears in the form control when it has no value set.
    /// </summary>
    [Parameter] public string? Placeholder { get; set; } = "";

    /// <summary>
    /// Whether the value is editable.
    /// </summary>
    [Parameter] public bool? ReadOnly { get; set; } = false;

    /// <summary>
    /// A value is required for the form to be submittable.
    /// </summary>
    [Parameter] public bool? Required { get; set; } = false;

    /// <summary>
    /// Whether to show the menu whenever the input has focus, regardless of input value.
    /// </summary>
    [Parameter] public bool? ShowMenuOnFocus { get; set; } = false;

    /// <summary>
    /// A spinner that appears when set to true
    /// </summary>
    [Parameter] public bool? ShowSpinner { get; set; } = false;

    /// <summary>
    /// The size of the autocomplete (input and menu).
    /// </summary>
    [Parameter] public string? Size { get; set; } = "md";

    /// <summary>
    /// The value of the control.
    /// </summary>
    [Parameter] public string? Value { get; set; } = "";

    /// <summary>
    /// Hint for form autofill feature.
    /// </summary>
    [Parameter] public object? AutoComplete { get; set; }

    /// <summary>
    /// Feedback state for the input field.
    /// </summary>
    [Parameter] public object? Feedback { get; set; }

    /// <summary>
    /// The items to display in the menu. Creating a new array of items will ensure proper component re-render.
    /// </summary>
    [Parameter] public object? Items { get; set; }

    /// <summary>
    /// The content to display when no results are found.
    /// </summary>
    [Parameter] public object? NoResults { get; set; }

    // Function-type props skipped (not bindable from C#): customBlur, customInputChange, customItemSelect, customKeyDown

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
    /// Event emitted when a selected item chip is removed.
    /// </summary>
    [Parameter] public EventCallback<ModusWcEventArgs> OnChipRemove { get; set; }

    /// <summary>
    /// Event emitted when chips expansion state changes.
    /// </summary>
    [Parameter] public EventCallback<ModusWcEventArgs> OnChipsExpansionChange { get; set; }

    /// <summary>
    /// Event emitted when the clear button is clicked.
    /// </summary>
    [Parameter] public EventCallback OnClearClick { get; set; }

    /// <summary>
    /// Event emitted when the input loses focus.
    /// </summary>
    [Parameter] public EventCallback<ModusWcEventArgs> OnInputBlur { get; set; }

    /// <summary>
    /// Event emitted when the input value changes. This event is debounced based on the debounceMs prop.
    /// </summary>
    [Parameter] public EventCallback<ModusWcEventArgs> OnInputChange { get; set; }

    /// <summary>
    /// Event emitted when the input gains focus.
    /// </summary>
    [Parameter] public EventCallback<ModusWcEventArgs> OnInputFocus { get; set; }

    /// <summary>
    /// Event emitted when a menu item is selected.
    /// </summary>
    [Parameter] public EventCallback<ModusWcEventArgs> OnItemSelect { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            _dotNetRef = DotNetObjectReference.Create(this);
            await JSRuntime.InvokeVoidAsync("modusWcInterop.registerEvents", _elementRef, _dotNetRef, new[] { "chipRemove", "chipsExpansionChange", "clearClick", "inputBlur", "inputChange", "inputFocus", "itemSelect" });
            if (AutoComplete != null)
                await JSRuntime.InvokeVoidAsync("modusWcInterop.setProperty", _elementRef, "autoComplete", AutoComplete);
            if (Feedback != null)
                await JSRuntime.InvokeVoidAsync("modusWcInterop.setProperty", _elementRef, "feedback", Feedback);
            if (Items != null)
                await JSRuntime.InvokeVoidAsync("modusWcInterop.setProperty", _elementRef, "items", Items);
            if (NoResults != null)
                await JSRuntime.InvokeVoidAsync("modusWcInterop.setProperty", _elementRef, "noResults", NoResults);
        }
    }

    protected override async Task OnParametersSetAsync()
    {
        if (_dotNetRef != null)
        {
            await JSRuntime.InvokeVoidAsync("modusWcInterop.setProperty", _elementRef, "autoComplete", AutoComplete);
            await JSRuntime.InvokeVoidAsync("modusWcInterop.setProperty", _elementRef, "feedback", Feedback);
            await JSRuntime.InvokeVoidAsync("modusWcInterop.setProperty", _elementRef, "items", Items);
            await JSRuntime.InvokeVoidAsync("modusWcInterop.setProperty", _elementRef, "noResults", NoResults);
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
            case "chipRemove":
                await OnChipRemove.InvokeAsync(__AsEventArgs(detail));
                break;
            case "chipsExpansionChange":
                await OnChipsExpansionChange.InvokeAsync(__AsEventArgs(detail));
                break;
            case "clearClick":
                await OnClearClick.InvokeAsync();
                break;
            case "inputBlur":
                await OnInputBlur.InvokeAsync(__AsEventArgs(detail));
                break;
            case "inputChange":
                await OnInputChange.InvokeAsync(__AsEventArgs(detail));
                break;
            case "inputFocus":
                await OnInputFocus.InvokeAsync(__AsEventArgs(detail));
                break;
            case "itemSelect":
                await OnItemSelect.InvokeAsync(__AsEventArgs(detail));
                break;
        }
    }

    /// <summary>
    /// Clear the input value and reset items
    /// </summary>
    public async Task ClearInput()
    {
        await JSRuntime.InvokeVoidAsync("modusWcInterop.callMethod", _elementRef, "clearInput");
    }

    /// <summary>
    /// Programmatically close the menu
    /// </summary>
    public async Task CloseMenu()
    {
        await JSRuntime.InvokeVoidAsync("modusWcInterop.callMethod", _elementRef, "closeMenu");
    }

    /// <summary>
    /// Programmatically set focus to input
    /// </summary>
    public async Task FocusInput()
    {
        await JSRuntime.InvokeVoidAsync("modusWcInterop.callMethod", _elementRef, "focusInput");
    }

    /// <summary>
    /// Programmatically open the menu
    /// </summary>
    public async Task OpenMenu()
    {
        await JSRuntime.InvokeVoidAsync("modusWcInterop.callMethod", _elementRef, "openMenu");
    }

    /// <summary>
    /// Programmatically select an item
    /// </summary>
    public async Task SelectItem(object? item)
    {
        await JSRuntime.InvokeVoidAsync("modusWcInterop.callMethod", _elementRef, "selectItem", item);
    }

    /// <summary>
    /// Programmatically toggle the menu open/closed
    /// </summary>
    public async Task ToggleMenu()
    {
        await JSRuntime.InvokeVoidAsync("modusWcInterop.callMethod", _elementRef, "toggleMenu");
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
