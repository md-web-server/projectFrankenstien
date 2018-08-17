var axios = require("axios");

function subStringSections(response, beforeAfterArray) {
  return beforeAfterArray.map(x => {
    return response.substring(x.before, x.after)
  })
}

function mapSections(response, beforeAfterArray) {
  return beforeAfterArray.map(x => {
    x.before = response.indexOf(x.before)
    x.after = response.indexOf(x.after) + x.after.length
    return x
  })
}

async function documentInclusionLogic({data}, btwArray) {
  const numArrayResponse = await mapSections(data, btwArray)
  return subStringSections(data, numArrayResponse)
}

function btw(before, after) { return { before, after } }

module.exports = { documentInclusionLogic, btw }