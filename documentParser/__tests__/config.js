const { documentInclusionArray } = require('./../../documentParser/config.js')
// const mockInclusionArray = "[object Object],[object Object]"

const mockInclusionArray = [{"after": "class=\"d-none js-permalink-shortcut\" ", "before": "class=\"d-none js-permalink-shortcut\" data-hotkey=\"y\">Permalink</a>", "postIns": "", "preIns": "<html><body><h1>TEST</h1></body></html>"}, {"after": "class=\"d-none js-permalink-shortcut\" data-hotkey=\"y\">Permalink</a>", "before": "class=\"d-none js-permalink-shortcut\" data-hotkey=\"y\">Permalink</a>", "postIns": "", "preIns": ""}]

test('test 2, InclusionArray', () => {
  expect(documentInclusionArray).toEqual(mockInclusionArray);
});
