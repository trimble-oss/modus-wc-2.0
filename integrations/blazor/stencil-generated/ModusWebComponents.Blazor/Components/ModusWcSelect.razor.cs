using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace ModusWebComponents.Blazor;

/// <summary>
/// A customizable select component used to pick a value from a list of options
/// </summary>
public partial class ModusWcSelect : ComponentBase, IAsyncDisposable
{
    [Inject] private IJSRuntime JSRuntime { get; set; } = default!;

    private ElementReference _elementRef;
    private DotNetObjectReference<ModusWcSelect>? _dotNetRef;

    /// <summary>
    /// Indicates that the input should have a border.
    /// </summary>
    [Parameter] public bool? Bordered { get; set; } = true;

    /// <summary>
    /// Custom CSS class to apply to the inner div.
    /// </summary>
    [Parameter] public string? CustomClass { get; set; } = "";

    /// <summary>
    /// Whether the form control is disabled.
    /// </summary>
    [Parameter] public bool? Disabled { get; set; } = false;

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
    /// Name of the form control. Submitted with the form as part of a name/value pair.
    /// </summary>
    [Parameter] public string? Name { get; set; }

    /// <summary>
    /// A value is required for the form to be submittable.
    /// </summary>
    [Parameter] public bool? Required { get; set; } = false;

    /// <summary>
    /// The size of the input.
    /// </summary>
    [Parameter] public string? Size { get; set; } = "md";

    /// <summary>
    /// The value of the control.
    /// </summary>
    [Parameter] public string? Value { get; set; } = "";

    /// <summary>
    /// Feedback to render below the input.
    /// </summary>
    [Parameter] public object? Feedback { get; set; }

    /// <summary>
    /// The options to display in the select dropdown.
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
    /// Event emitted when the input loses focus.
    /// </summary>
    [Parameter] public EventCallback<ModusWcEventArgs> OnInputBlur { get; set; }

    /// <summary>
    /// Event emitted when the input value changes.
    /// </summary>
    [Parameter] public EventCallback<ModusWcEventArgs> OnInputChange { get; set; }

    /// <summary>
    /// Event emitted when the input gains focus.
    /// </summary>
    [Parameter] public EventCallback<ModusWcEventArgs> OnInputFocus { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            _dotNetRef = DotNetObjectReference.Create(this);
            await JSRuntime.InvokeVoidAsync("modusWcInterop.registerEvents", _elementRef, _dotNetRef, new[] { "inputBlur", "inputChange", "inputFocus" });
            if (Feedback != null)
                await JSRuntime.InvokeVoidAsync("modusWcInterop.setProperty", _elementRef, "feedback", Feedback);
            if (Options != null)
                await JSRuntime.InvokeVoidAsync("modusWcInterop.setProperty", _elementRef, "options", Options);
        }
    }

    protected override async Task OnParametersSetAsync()
    {
        if (_dotNetRef != null)
        {
            await JSRuntime.InvokeVoidAsync("modusWcInterop.setProperty", _elementRef, "feedback", Feedback);
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
            case "inputBlur":
                await OnInputBlur.InvokeAsync(__AsEventArgs(detail));
                break;
            case "inputChange":
                await OnInputChange.InvokeAsync(__AsEventArgs(detail));
                break;
            case "inputFocus":
                await OnInputFocus.InvokeAsync(__AsEventArgs(detail));
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
