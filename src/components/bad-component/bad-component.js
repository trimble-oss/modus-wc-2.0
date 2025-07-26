// Bad component with multiple violations

const BadComponent = () => {
  // Using double quotes instead of single quotes
  const title = "Bad Component";
  
  // Missing error handling
  const getData = () => {
    return fetch("/api/data").then(res => res.json());
  }
  
  // Wrong event naming pattern
  const on_button_click = () => {
    console.log("clicked");
  }
  
  // Missing accessibility
  return (
    <div class="bad_component">
      <button onclick={on_button_click}>Click Me</button>
    </div>
  );
}

// Missing TypeScript
// Missing modus-wc- prefix
// Missing test file
// Missing SCSS file
// Missing Storybook file 