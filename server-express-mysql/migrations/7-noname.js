'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "FirstTimeLogin" to table "users"
 *
 **/

var info = {
    "revision": 7,
    "name": "noname",
    "created": "2019-11-06T19:13:25.266Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "addColumn",
    params: [
        "users",
        "FirstTimeLogin",
        {
            "type": Sequelize.BOOLEAN,
            "field": "FirstTimeLogin",
            "defaultValue": 1
        }
    ]
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
