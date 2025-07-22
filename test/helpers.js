const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

// Read the HTML file
const html = fs.readFileSync(path.resolve(__dirname, '../src/index.html'), 'utf8');

// Create the JSDOM instance with script execution enabled
const dom = new JSDOM(html, {
  runScripts: 'dangerously',
  resources: 'usable',
});

// Set up global objects to mimic a browser environment
global.window = dom.window;
global.document = dom.window.document;
global.HTMLElement = dom.window.HTMLElement;
global.KeyboardEvent = dom.window.KeyboardEvent;
global.Event = dom.window.Event;

module.exports = {
  dom,
  document: dom.window.document,
};