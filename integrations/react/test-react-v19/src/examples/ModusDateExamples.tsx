import { useState } from 'react';
import { ModusWcDate } from '@trimble-oss/moduswebcomponents-react';

export default function ModusDateExamples() {
  const [dateValue, setDateValue] = useState('');

  const handleInputChange = (e: CustomEvent<InputEvent>) => {
    const inputEvent = e.detail;
    const input = inputEvent?.target as HTMLInputElement;
    if (input) {
      setDateValue(input.value);
    }
  };

  return (
    <>
      <h3>Date (Controlled Input)</h3>
      <div className="grid">
        <div className="grid-row">
          <ModusWcDate
            aria-label="Controlled date input"
            label="Controlled Date"
            value={dateValue}
            onInputChange={handleInputChange}
          />
          <p>Current value: <code>{dateValue || '(empty)'}</code></p>
        </div>
      </div>
    </>
  );
}
