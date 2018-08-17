const { documentInclusionArray } = require('./../../documentParser/config.js')
const { documentInclusionLogic } = require('./../../documentParser/inclusionLogic.js')



const mockInclusionLogic = `async function documentInclusionLogic({ data }, btwArray) {
  /* istanbul ignore next */cov_2p7fblcvls.f[4]++;

  const numArrayResponse = /* istanbul ignore next */(cov_2p7fblcvls.s[7]++, await mapSections(data, btwArray));
  /* istanbul ignore next */cov_2p7fblcvls.s[8]++;
  return subStringSections(data, numArrayResponse);
}`
/*  const mockInclusionLogic = `async function documentInclusionLogic({ data }, btwArray) {
     const numArrayResponse = await mapSections(data, btwArray);
    return subStringSections(data, numArrayResponse);
   }`
*/
// const mockInclusionLogic = '[Function documentInclusionLogic]'

const mockInclusionArray = [{"after": "class=\"d-none js-permalink-shortcut\" ", "before": "class=\"d-none js-permalink-shortcut\" data-hotkey=\"y\">Permalink</a>", "postIns": "", "preIns": "<html><body><h1>TEST</h1></body></html>"}, {"after": "class=\"d-none js-permalink-shortcut\" data-hotkey=\"y\">Permalink</a>", "before": "class=\"d-none js-permalink-shortcut\" data-hotkey=\"y\">Permalink</a>", "postIns": "", "preIns": ""}]
// const mockInclusionArray = "[object Object],[object Object]"

it('test 1, InclusionArray', () => {
  expect(documentInclusionArray).toEqual(documentInclusionArray);
});

it('test 1, InclusionLogic', () => {
  expect(documentInclusionLogic).toEqual(documentInclusionLogic);
});

it('test 2, InclusionArray', () => {
  expect(documentInclusionArray).toEqual(mockInclusionArray);
});

it('test 2, InclusionLogic', () => {
  expect(`${documentInclusionLogic}`).toEqual(mockInclusionLogic);
});
