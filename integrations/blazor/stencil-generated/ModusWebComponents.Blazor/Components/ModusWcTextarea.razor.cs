using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace ModusWebComponents.Blazor;

/// <summary>
/// A customizable textarea component.
/// </summary>
public partial class ModusWcTextarea : ComponentBase, IAsyncDisposable
{
    [Inject] private IJSRuntime JSRuntime { get; set; } = default!;

    private ElementReference _elementRef;
    private DotNetObjectReference<ModusWcTextarea>? _dotNetRef;

    /// <summary>
    /// Controls automatic correction in inputted text. Support by browser varies.
    /// Allowed values: "on", "off"
    /// </summary>
    [Parameter] public string? AutoCorrect { get; set; }

    /// <summary>
    /// Indicates that the input should have a border.
    /// </summary>
    [Parameter] public bool? Bordered { get; set; } = true;

    /// <summary>
    /// Custom CSS class to apply to the textarea (supports DaisyUI).
    /// </summary>
    [Parameter] public string? CustomClass { get; set; } = "";

    /// <summary>
    /// The disabled state of the textarea.
    /// </summary>
    [Parameter] public bool? Disabled { get; set; } = false;

    /// <summary>
    /// A hint to the browser for which enter key to display.
    /// </summary>
    [Parameter] public string? Enterkeyhint { get; set; }

    /// <summary>
    /// The ID of the input element.
    /// </summary>
    [Parameter] public string? InputId { get; set; }

    /// <summary>
    /// The tabindex of the input.
    /// </summary>
    [Parameter] public double? InputTabIndex { get; set; }

    /// <summary>
    /// The text to display within the label.
    /// </summary>
    [Parameter] public string? Label { get; set; }

    /// <summary>
    /// The maximum number of characters allowed in the textarea.
    /// </summary>
    [Parameter] public double? MaxLength { get; set; }

    /// <summary>
    /// The minimum number of characters required in the textarea.
    /// </summary>
    [Parameter] public double? MinLength { get; set; }

    /// <summary>
    /// Name of the form control. Submitted with the form as part of a name/value pair.
    /// </summary>
    [Parameter] public string? Name { get; set; }

    /// <summary>
    /// The placeholder text for the textarea.
    /// </summary>
    [Parameter] public string? Placeholder { get; set; } = "";

    /// <summary>
    /// The readonly state of the textarea.
    /// </summary>
    [Parameter] public bool? Readonly { get; set; } = false;

    /// <summary>
    /// A value is required for the form to be submittable.
    /// </summary>
    [Parameter] public bool? Required { get; set; } = false;

    /// <summary>
    /// The number of visible text lines for the textarea.
    /// </summary>
    [Parameter] public double? Rows { get; set; }

    /// <summary>
    /// The size of the input.
    /// </summary>
    [Parameter] public string? Size { get; set; } = "md";

    /// <summary>
    /// The value of the textarea.
    /// </summary>
    [Parameter] public string? Value { get; set; } = "";

    /// <summary>
    /// Feedback to render below the input.
    /// </summary>
    [Parameter] public object? Feedback { get; set; }

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
    /// Emitted when the input loses focus.
    /// </summary>
    [Parameter] public EventCallback<object?> OnInputBlur { get; set; }

    /// <summary>
    /// Emitted when the input value changes.
    /// </summary>
    [Parameter] public EventCallback<object?> OnInputChange { get; set; }

    /// <summary>
    /// Emitted when the input gains focus.
    /// </summary>
    [Parameter] public EventCallback<object?> OnInputFocus { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            _dotNetRef = DotNetObjectReference.Create(this);
            await JSRuntime.InvokeVoidAsync("modusWcInterop.registerEvents", _elementRef, _dotNetRef, new[] { "inputBlur", "inputChange", "inputFocus" });
            if (Feedback != null)
                await JSRuntime.InvokeVoidAsync("modusWcInterop.setProperty", _elementRef, "feedback", Feedback);
        }
    }

    protected override async Task OnParametersSetAsync()
    {
        if (_dotNetRef != null)
        {
            await JSRuntime.InvokeVoidAsync("modusWcInterop.setProperty", _elementRef, "feedback", Feedback);
        }
    }

    [JSInvokable]
    public async Task HandleEvent(string eventName, object? detail)
    {
        switch (eventName)
        {
            case "inputBlur":
                await OnInputBlur.InvokeAsync(detail);
                break;
            case "inputChange":
                await OnInputChange.InvokeAsync(detail);
                break;
            case "inputFocus":
                await OnInputFocus.InvokeAsync(detail);
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
