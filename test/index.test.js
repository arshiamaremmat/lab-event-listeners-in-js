const { document, dom } = require('./helpers');
const { expect, test, beforeAll, describe } = require('@jest/globals');

describe('Handling Events with JavaScript', () => {
  let changeColorButton;
  let resetColorButton;
  let textInput;
  let keyPressDisplay;
  let textInputDisplay;

  beforeAll(() => {
    // ✅ Load DOM elements after jsdom is ready
    changeColorButton = document.getElementById('changeColorButton');
    resetColorButton = document.getElementById('resetColorButton');
    textInput = document.getElementById('textInput');
    keyPressDisplay = document.getElementById('keyDisplay');
    textInputDisplay = document.getElementById('liveDisplay');

    // ✅ Now that document is ready, import index.js to attach event listeners
    require('../src/index.js');
  });

  test('should select the changeColorButton element', () => {
    expect(changeColorButton).not.toBeNull();
  });

  test('should select the resetColorButton element', () => {
    expect(resetColorButton).not.toBeNull();
  });

  test('should select the textInput element', () => {
    expect(textInput).not.toBeNull();
  });

  test('should display the key pressed by the user', () => {
    const event = new dom.window.KeyboardEvent('keydown', { key: 'A' });
    document.dispatchEvent(event);
    expect(keyPressDisplay.textContent).toContain('A');
  });

  test('should display user input in real-time', () => {
    textInput.value = 'Hello';
    const inputEvent = new dom.window.Event('input');
    textInput.dispatchEvent(inputEvent);
    expect(textInputDisplay.textContent).toContain('Hello');
  });
});