// This file was automatically generated from "index.lmd.json"
_a8caf640((function (require, exports, module) { /* wrapped by builder */
console.log('[OK] bundle button loaded!');

}),{
"buttonTemplate": "<div><button>$1</button></div>",
"buttonView": (function (require, exports, module) { /* wrapped by builder */
var template = require('buttonTemplate');

module.exports = function (text) {
    return template.replace('$1', text);
};

})
},{});
