'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "Nothing" from table "bands"
 *
 **/

var info = {
    "revision": 11,
    "name": "noname",
    "created": "2019-11-07T22:37:08.733Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "removeColumn",
    params: ["bands", "Nothing"]
}];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
