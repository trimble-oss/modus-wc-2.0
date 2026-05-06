using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace ModusWebComponents.Blazor;

public partial class ModusWcTable : ComponentBase, IAsyncDisposable
{
    [Inject] private IJSRuntime JSRuntime { get; set; } = default!;

    private ElementReference _elementRef;
    private DotNetObjectReference<ModusWcTable>? _dotNetRef;

    /// <summary>
    /// Accessibility caption for the table (visually hidden but available to screen readers).
    /// </summary>
    [Parameter] public string? Caption { get; set; }

    /// <summary>
    /// The current page number in pagination (1-based index).
    /// </summary>
    [Parameter] public double? CurrentPage { get; set; } = 1;

    /// <summary>
    /// Custom CSS class to apply to the inner div.
    /// </summary>
    [Parameter] public string? CustomClass { get; set; } = "";

    /// <summary>
    /// The density of the table, used to save space or increase readability.
    /// </summary>
    [Parameter] public string? Density { get; set; } = "comfortable";

    /// <summary>
    /// Enable hover effect on table rows.
    /// </summary>
    [Parameter] public bool? Hover { get; set; } = true;

    /// <summary>
    /// Enable pagination for the table.
    /// </summary>
    [Parameter] public bool? Paginated { get; set; } = false;

    /// <summary>
    /// Row selection mode: 'none' for no selection, 'single' for single row, 'multi' for multiple rows.
    /// Allowed values: "none", "single", "multi"
    /// </summary>
    [Parameter] public string? Selectable { get; set; } = "none";

    /// <summary>
    /// Show/hide the page size selector in pagination.
    /// </summary>
    [Parameter] public bool? ShowPageSizeSelector { get; set; } = true;

    /// <summary>
    /// Enable sorting functionality for sortable columns.
    /// </summary>
    [Parameter] public bool? Sortable { get; set; } = true;

    /// <summary>
    /// Zebra striped tables differentiate rows by styling them in an alternating fashion.
    /// </summary>
    [Parameter] public bool? Zebra { get; set; } = false;

    /// <summary>
    /// An array of column definitions.
    /// </summary>
    [Parameter] public object? Columns { get; set; }

    /// <summary>
    /// An array of data objects.
    /// </summary>
    [Parameter] public object? Data { get; set; }

    /// <summary>
    /// Enable cell editing. Either a boolean (all rows) or a predicate per row.
    /// </summary>
    [Parameter] public object? Editable { get; set; }

    /// <summary>
    /// Available options for the number of rows per page.
    /// </summary>
    [Parameter] public object? PageSizeOptions { get; set; }

    /// <summary>
    /// Array of selected row IDs. Used for controlled selection state.
    /// </summary>
    [Parameter] public object? SelectedRowIds { get; set; }

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
    /// Emits when cell editing is committed with the new value.
    /// </summary>
    [Parameter] public EventCallback<ModusWcEventArgs> OnCellEditCommit { get; set; }

    /// <summary>
    /// Emits when cell editing starts.
    /// </summary>
    [Parameter] public EventCallback<ModusWcEventArgs> OnCellEditStart { get; set; }

    /// <summary>
    /// Emits when pagination changes with the new pagination state.
    /// </summary>
    [Parameter] public EventCallback<ModusWcEventArgs> OnPaginationChange { get; set; }

    /// <summary>
    /// Emits when a row is clicked.
    /// </summary>
    [Parameter] public EventCallback<ModusWcEventArgs> OnRowClick { get; set; }

    /// <summary>
    /// Emits when row selection changes with the selected rows and their IDs.
    /// </summary>
    [Parameter] public EventCallback<ModusWcEventArgs> OnRowSelectionChange { get; set; }

    /// <summary>
    /// Emits when sorting changes with the new sorting state.
    /// </summary>
    [Parameter] public EventCallback<ModusWcEventArgs> OnSortChange { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            _dotNetRef = DotNetObjectReference.Create(this);
            await JSRuntime.InvokeVoidAsync("modusWcInterop.registerEvents", _elementRef, _dotNetRef, new[] { "cellEditCommit", "cellEditStart", "paginationChange", "rowClick", "rowSelectionChange", "sortChange" });
            if (Columns != null)
                await JSRuntime.InvokeVoidAsync("modusWcInterop.setProperty", _elementRef, "columns", Columns);
            if (Data != null)
                await JSRuntime.InvokeVoidAsync("modusWcInterop.setProperty", _elementRef, "data", Data);
            if (Editable != null)
                await JSRuntime.InvokeVoidAsync("modusWcInterop.setProperty", _elementRef, "editable", Editable);
            if (PageSizeOptions != null)
                await JSRuntime.InvokeVoidAsync("modusWcInterop.setProperty", _elementRef, "pageSizeOptions", PageSizeOptions);
            if (SelectedRowIds != null)
                await JSRuntime.InvokeVoidAsync("modusWcInterop.setProperty", _elementRef, "selectedRowIds", SelectedRowIds);
        }
    }

    protected override async Task OnParametersSetAsync()
    {
        if (_dotNetRef != null)
        {
            await JSRuntime.InvokeVoidAsync("modusWcInterop.setProperty", _elementRef, "columns", Columns);
            await JSRuntime.InvokeVoidAsync("modusWcInterop.setProperty", _elementRef, "data", Data);
            await JSRuntime.InvokeVoidAsync("modusWcInterop.setProperty", _elementRef, "editable", Editable);
            await JSRuntime.InvokeVoidAsync("modusWcInterop.setProperty", _elementRef, "pageSizeOptions", PageSizeOptions);
            await JSRuntime.InvokeVoidAsync("modusWcInterop.setProperty", _elementRef, "selectedRowIds", SelectedRowIds);
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
            case "cellEditCommit":
                await OnCellEditCommit.InvokeAsync(__AsEventArgs(detail));
                break;
            case "cellEditStart":
                await OnCellEditStart.InvokeAsync(__AsEventArgs(detail));
                break;
            case "paginationChange":
                await OnPaginationChange.InvokeAsync(__AsEventArgs(detail));
                break;
            case "rowClick":
                await OnRowClick.InvokeAsync(__AsEventArgs(detail));
                break;
            case "rowSelectionChange":
                await OnRowSelectionChange.InvokeAsync(__AsEventArgs(detail));
                break;
            case "sortChange":
                await OnSortChange.InvokeAsync(__AsEventArgs(detail));
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
