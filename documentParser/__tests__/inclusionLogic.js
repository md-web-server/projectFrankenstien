const { documentInclusionLogic } = require('./../../documentParser/inclusionLogic.js')

// const mockInclusionLogic = `async function documentInclusionLogic({ data }, btwArray) {
//   const numArrayResponse = await mapSections(data, btwArray);
//   return subStringSections(data, numArrayResponse);
// }`

const mockInclusionLogic = `async function documentInclusionLogic({ data }, btwArray) {
  /* istanbul ignore next */cov_2p7fblcvls.f[4]++;

  const numArrayResponse = /* istanbul ignore next */(cov_2p7fblcvls.s[7]++, await mapSections(data, btwArray));
  /* istanbul ignore next */cov_2p7fblcvls.s[8]++;
  return subStringSections(data, numArrayResponse);
}`

test('test 2, InclusionLogic', () => {
  expect(`${documentInclusionLogic}`).toEqual(mockInclusionLogic);
});
