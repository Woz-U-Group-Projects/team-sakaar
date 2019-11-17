'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "FirstTimeLogin" to table "bands"
 * addColumn "Twitter" to table "bands"
 *
 **/

var info = {
    "revision": 6,
    "name": "added FirsTimeLogin to bands,js",
    "created": "2019-11-06T16:17:31.580Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "addColumn",
        params: [
            "bands",
            "FirstTimeLogin",
            {
                "type": Sequelize.BOOLEAN,
                "field": "FirstTimeLogin",
                "defaultValue": 0
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "bands",
            "Twitter",
            {
                "type": Sequelize.STRING,
                "field": "Twitter"
            }
        ]
    }
];

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
