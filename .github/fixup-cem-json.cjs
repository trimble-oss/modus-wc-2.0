// This script will fix the generated custom-element.json file
// to provide more useful information for Storybook to generate
// auto-docs from.
// For example, Events will properly get moved to the events array.
// See the following pseudocode.
/*
modules[x].declarations[y].events += 
    modules[x].declarations[y].members[z]

    where members[z].type.text.includes('Event')
*/


// CommonJS

const fs = require('fs');
const path = require('path');

const filePath = path.resolve(path.dirname(require.main.filename), '../src/custom-elements.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

data.modules.forEach(module => {
  module.declarations.forEach(declaration => {
    // Fixup events
    const eventMembers = declaration.members?.filter(member => member.type?.text.includes('Event')) || [];
    if (eventMembers.length > 0) {
      declaration.events = declaration.events || [];
      declaration.events.push(...eventMembers);
    }
    declaration.members = declaration.members?.filter(member => !member.type?.text.includes('Event'));
  });
});

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
global.console.log('custom-elements.json has been updated.');

