//window = {};
//window.node = {};
module.exports.node = {};
module.exports.node.window = {};
module.exports.window = {};

var HTMLRenderer = require('../node_modules/nodegame-server/node_modules/nodegame-window/HTMLRenderer.js');
//module.exports.node.window.HTMLRenderer = HTMLRenderer;
//module.exports.window.HTMLRenderer = HTMLRenderer;
//module.exports.HTMLRenderer = HTMLRenderer;
console.log(HTMLRenderer);
console.log(module.exports.HTMLRenderer);