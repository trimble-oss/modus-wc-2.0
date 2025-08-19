// This script will fix the generated custom-element.json file
// to provide more useful information for Storybook to generate
// auto-docs from.

const fs = require('fs');
const path = require('path');

const filePath = path.resolve(
  path.dirname(require.main.filename),
  '../src/custom-elements.json'
);
const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

data.modules.sort((a, b) => a.path.localeCompare(b.path));

data.modules.forEach((module) => {
  module.declarations.forEach((declaration) => {
    // Fixup events: Only treat EventEmitter-typed members as events
    const eventMembers =
      declaration.members?.filter((member) =>
        member.type?.text.includes('EventEmitter')
      ) || [];
    if (eventMembers.length > 0) {
      // Replace any existing events with the derived EventEmitter members
      declaration.events = [...eventMembers];
    }
    // Remove only EventEmitter members from members list (keep function props like (event: ...) => void)
    declaration.members = declaration.members?.filter(
      (member) => !member.type?.text.includes('EventEmitter')
    );

    // Remove private members
    declaration.members = declaration.members?.filter(
      (member) => member.privacy !== 'private'
    );

    // Rip data from properties to put on the attributes
    declaration.attributes?.forEach((attribute) => {
      const member = declaration.members?.find(
        (member) => member.name === attribute.fieldName
      );
      if (member) {
        attribute.description = member.description;
        // Remove properties
        declaration.members = declaration.members?.filter((m) => m !== member);
      }
    });

    declaration.attributes?.sort((a, b) => a.name.localeCompare(b.name));
    declaration.events?.sort((a, b) => a.name.localeCompare(b.name));
    declaration.members?.sort((a, b) => a.name.localeCompare(b.name));
  });
  module.declarations.sort((a, b) => a.name.localeCompare(b.name));
});

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
global.console.log('custom-elements.json has been updated.');
