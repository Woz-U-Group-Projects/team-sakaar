'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "Nothing" to table "bands"
 * addColumn "ContactPersonPhoneNumber" to table "bands"
 *
 **/

var info = {
    "revision": 9,
    "name": "noname",
    "created": "2019-11-07T21:26:39.061Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "addColumn",
        params: [
            "bands",
            "Nothing",
            {
                "type": Sequelize.STRING,
                "field": "Nothing",
                "allowNull": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "bands",
            "ContactPersonPhoneNumber",
            {
                "type": Sequelize.STRING,
                "field": "ContactPersonPhoneNumber"
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
