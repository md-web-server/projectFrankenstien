const documentInclusionArray = [
  {
    preIns: '<html><body><h1>TEST</h1></body></html>',
    before: 'class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>',
    after: 'class="d-none js-permalink-shortcut" ',
    postIns:''
  },
  {
    preIns: '',
    before: 'class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>',
    after: 'class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>',
    postIns: ''
  }
]

const documentExclusionLogicArray = [
  {
  before: 'class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>',
  after: 'class="d-none js-permalink-shortcut" ',
  optionalReplaceValue: ''
  },
  {
    before: 'class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>',
    after: 'class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>',
    optionalReplaceValue: ''
  }
]

module.exports = {
  documentExclusionLogicArray,
  documentInclusionArray
}
