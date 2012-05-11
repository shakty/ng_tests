//window = {};
//window.node = {};
module.exports.node = {};
module.exports.node.window = {};
module.exports.window = {};


var GameMsg = require('../node_modules/nodegame-server/node_modules/nodegame-client/GameMsg.js');
module.exports.node.GameMsg = module.exports.GameMsg = GameMsg.GameMsg;

var GameState = require('../node_modules/nodegame-server/node_modules/nodegame-client/GameState.js');
module.exports.node.GameState = module.exports.GameState = GameState.GameState;

var Utils = require('../node_modules/nodegame-server/node_modules/nodegame-client/Utils.js');
module.exports.node.Utils = module.exports.Utils = Utils.Utils;

var JSUS = require('../node_modules/nodegame-server/node_modules/nodegame-client/node_modules/JSUS/jsus.js');
module.exports.node.JSUS = module.exports.JSUS = JSUS.JSUS;


var NDDB = require('../node_modules/nodegame-server/node_modules/nodegame-client/node_modules/NDDB/nddb.js');
module.exports.NDDB = NDDB.NDDB;

//var GameWindow = require('../node_modules/nodegame-server/node_modules/nodegame-window/GameWindow.js');
//module.exports.node.window = GameWindow;

var HTMLRenderer = require('../node_modules/nodegame-server/node_modules/nodegame-window/HTMLRenderer.js');
module.exports.node.window.HTMLRenderer = HTMLRenderer;
module.exports.window.HTMLRenderer = module.exports.HTMLRenderer;

console.log(module.exports.HTMLRenderer);

require('../node_modules/nodegame-server/node_modules/nodegame-window/Table.js');
var Table = module.exports.Table;


console.log(Table);

//var GameState = GameState.GameState;
//var GameStorage = require('../client/nodeGame/GameStorage.js').GameStorage;
//var GameBit = require('../client/nodeGame/GameStorage.js').GameBit;

var data = [1,2,3]; 
var dims = ['x','y','z'];

var t = new Table({});


t._add(data, dims);
t._add(data, dims);
t._add(data, dims);

//for (var i=0.1; i<5; i++) {
//	var a = [i,'a'];
//	t.addColumn(a);
//}
//
//console.log(t.fetch());
//
//t.addClass('culo2');

t.select('x','>',1)
 .addClass(['culo','c2']);

console.log('--');
console.log(t.fetch());

//t.removeClass('culo');
//console.log('--');
//console.log(t.fetch());

console.log('Getting');
var o = t.get(2);
console.log(o);
//
//console.log(t.__proto__.get.toString());
//console.log(t.get.toString());
