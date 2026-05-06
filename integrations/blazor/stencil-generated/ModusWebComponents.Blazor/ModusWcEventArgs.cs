namespace ModusWebComponents.Blazor;

/// <summary>
/// Event arguments for Modus Web Component events that carry a dynamic value.
/// The <see cref="Value"/> property contains the deserialized event detail:
/// a <c>string</c> for text-input change events, a <c>bool</c> for checkbox events,
/// a <c>double</c> for numeric events, or a JSON string for complex payloads.
/// </summary>
public class ModusWcEventArgs
{
    /// <summary>Gets the event detail value.</summary>
    public object? Value { get; }

    /// <param name="value">The deserialized event detail.</param>
    public ModusWcEventArgs(object? value) => Value = value;

    /// <inheritdoc/>
    public override string ToString() => Value?.ToString() ?? string.Empty;
}
