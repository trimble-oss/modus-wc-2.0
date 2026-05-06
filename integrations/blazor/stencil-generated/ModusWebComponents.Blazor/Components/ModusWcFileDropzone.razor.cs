using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace ModusWebComponents.Blazor;

/// <summary>
/// File dropzone component that allows users to drag and drop files for upload.  The component supports a `&lt;slot&gt;` called 'dropzone' for adding custom content such as progress indicators or additional instructions within the dropzone area.
/// </summary>
public partial class ModusWcFileDropzone : ComponentBase, IAsyncDisposable
{
    [Inject] private IJSRuntime JSRuntime { get; set; } = default!;

    private ElementReference _elementRef;
    private DotNetObjectReference<ModusWcFileDropzone>? _dotNetRef;

    /// <summary>
    /// Accepted file types (e.g. '.jpg,.png' or 'image/*')
    /// </summary>
    [Parameter] public string? AcceptFileTypes { get; set; }

    /// <summary>
    /// Custom CSS class to apply to the file dropzone element
    /// </summary>
    [Parameter] public string? CustomClass { get; set; } = "";

    /// <summary>
    /// Disable the file input
    /// </summary>
    [Parameter] public bool? Disabled { get; set; }

    /// <summary>
    /// Custom instructions shown when files are dragged over the dropzone
    /// </summary>
    [Parameter] public string? FileDraggedOverInstructions { get; set; }

    /// <summary>
    /// Include state icon (upload, success, error)
    /// </summary>
    [Parameter] public bool? IncludeStateIcon { get; set; } = true;

    /// <summary>
    /// Custom instructions shown as the default dropzone message
    /// </summary>
    [Parameter] public string? Instructions { get; set; }

    /// <summary>
    /// Custom error message displayed when an invalid file type is selected
    /// </summary>
    [Parameter] public string? InvalidFileTypeMessage { get; set; }

    /// <summary>
    /// Maximum number of files allowed, will show error if exceeded
    /// </summary>
    [Parameter] public double? MaxFileCount { get; set; }

    /// <summary>
    /// Maximum allowed length of filename, will show error if exceeded
    /// </summary>
    [Parameter] public double? MaxFileNameLength { get; set; }

    /// <summary>
    /// Maximum total file size in bytes allowed, will show error if exceeded
    /// </summary>
    [Parameter] public double? MaxTotalFileSizeBytes { get; set; }

    /// <summary>
    /// Allow multiple file selection
    /// </summary>
    [Parameter] public bool? Multiple { get; set; }

    /// <summary>
    /// Success message displayed when files are uploaded successfully
    /// </summary>
    [Parameter] public string? SuccessMessage { get; set; }

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
    /// Event emitted when files are selected
    /// </summary>
    [Parameter] public EventCallback<ModusWcEventArgs> OnFileSelect { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            _dotNetRef = DotNetObjectReference.Create(this);
            await JSRuntime.InvokeVoidAsync("modusWcInterop.registerEvents", _elementRef, _dotNetRef, new[] { "fileSelect" });
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
            case "fileSelect":
                await OnFileSelect.InvokeAsync(__AsEventArgs(detail));
                break;
        }
    }

    /// <summary>
    /// Reset the dropzone to its initial state, clearing all error and success states
    /// </summary>
    public async Task Reset()
    {
        await JSRuntime.InvokeVoidAsync("modusWcInterop.callMethod", _elementRef, "reset");
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
