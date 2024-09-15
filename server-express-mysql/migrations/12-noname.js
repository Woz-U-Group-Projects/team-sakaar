'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "posts", deps: []
 * addColumn "createdAt" to table "bandRatings"
 * addColumn "createdAt" to table "bands"
 * addColumn "updatedAt" to table "bands"
 * addColumn "createdAt" to table "Tasks"
 * addColumn "updatedAt" to table "Tasks"
 * addColumn "updatedAt" to table "bandRatings"
 * addColumn "updatedAt" to table "users"
 * addColumn "createdAt" to table "venueRatings"
 * addColumn "updatedAt" to table "venueRatings"
 * addColumn "createdAt" to table "venues"
 * addColumn "updatedAt" to table "venues"
 * addColumn "createdAt" to table "users"
 *
 **/

var info = {
    "revision": 12,
    "name": "noname",
    "created": "2019-11-15T20:08:28.665Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "posts",
            {
                "UserId": {
                    "type": Sequelize.INTEGER,
                    "field": "UserId",
                    "primaryKey": true,
                    "allowNull": false
                },
                "Comment": {
                    "type": Sequelize.STRING,
                    "field": "Comment"
                },
                "UserName": {
                    "type": Sequelize.STRING,
                    "field": "UserName"
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "addColumn",
        params: [
            "bandRatings",
            "createdAt",
            {
                "type": Sequelize.DATE,
                "field": "createdAt",
                "allowNull": false
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "bands",
            "createdAt",
            {
                "type": Sequelize.DATE,
                "field": "createdAt",
                "allowNull": false
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "bands",
            "updatedAt",
            {
                "type": Sequelize.DATE,
                "field": "updatedAt",
                "allowNull": false
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "Tasks",
            "createdAt",
            {
                "type": Sequelize.DATE,
                "field": "createdAt",
                "allowNull": false
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "Tasks",
            "updatedAt",
            {
                "type": Sequelize.DATE,
                "field": "updatedAt",
                "allowNull": false
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "bandRatings",
            "updatedAt",
            {
                "type": Sequelize.DATE,
                "field": "updatedAt",
                "allowNull": false
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "users",
            "updatedAt",
            {
                "type": Sequelize.DATE,
                "field": "updatedAt",
                "allowNull": false
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "venueRatings",
            "createdAt",
            {
                "type": Sequelize.DATE,
                "field": "createdAt",
                "allowNull": false
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "venueRatings",
            "updatedAt",
            {
                "type": Sequelize.DATE,
                "field": "updatedAt",
                "allowNull": false
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "venues",
            "createdAt",
            {
                "type": Sequelize.DATE,
                "field": "createdAt",
                "allowNull": false
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "venues",
            "updatedAt",
            {
                "type": Sequelize.DATE,
                "field": "updatedAt",
                "allowNull": false
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "users",
            "createdAt",
            {
                "type": Sequelize.DATE,
                "field": "createdAt",
                "allowNull": false
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
