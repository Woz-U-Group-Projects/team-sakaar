'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "FirstTimeLogin" to table "venues"
 * changeColumn "PersonalWebsite" on table "bands"
 * changeColumn "Facebook" on table "bands"
 * changeColumn "Instagram" on table "bands"
 * changeColumn "Twitter" on table "bands"
 *
 **/

var info = {
    "revision": 8,
    "name": "noname",
    "created": "2019-11-06T21:29:30.632Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "addColumn",
        params: [
            "venues",
            "FirstTimeLogin",
            {
                "type": Sequelize.BOOLEAN,
                "field": "FirstTimeLogin",
                "defaultValue": 0
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "bands",
            "PersonalWebsite",
            {
                "type": Sequelize.STRING,
                "field": "PersonalWebsite",
                "allowNull": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "bands",
            "Facebook",
            {
                "type": Sequelize.STRING,
                "field": "Facebook",
                "allowNull": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "bands",
            "Instagram",
            {
                "type": Sequelize.STRING,
                "field": "Instagram",
                "allowNull": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "bands",
            "Twitter",
            {
                "type": Sequelize.STRING,
                "field": "Twitter",
                "allowNull": true
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
