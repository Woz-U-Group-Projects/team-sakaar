'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "venues", deps: [venues]
 * addColumn "BandsId" to table "bands"
 *
 **/

var info = {
    "revision": 2,
    "name": "second_migration",
    "created": "2019-10-24T20:18:56.558Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "venues",
            {
                "VenueId": {
                    "type": Sequelize.INTEGER,
                    "field": "VenueId",
                    "primaryKey": true,
                    "autoIncrement": true,
                    "allowNull": false
                },
                "Name": {
                    "type": Sequelize.STRING,
                    "field": "Name"
                },
                "Address": {
                    "type": Sequelize.STRING,
                    "field": "Address"
                },
                "City": {
                    "type": Sequelize.STRING,
                    "field": "City"
                },
                "State": {
                    "type": Sequelize.STRING,
                    "field": "State"
                },
                "ZipCode": {
                    "type": Sequelize.INTEGER,
                    "field": "ZipCode"
                },
                "ContactPerson": {
                    "type": Sequelize.STRING,
                    "field": "ContactPerson"
                },
                "Email": {
                    "type": Sequelize.STRING,
                    "field": "Email"
                },
                "VenuesId": {
                    "type": Sequelize.INTEGER,
                    "field": "VenuesId",
                    "onUpdate": "CASCADE",
                    "onDelete": "SET NULL",
                    "references": {
                        "model": "venues",
                        "key": "VenueId"
                    },
                    "allowNull": true
                }
            },
            {}
        ]
    },
    {
        fn: "addColumn",
        params: [
            "bands",
            "BandsId",
            {
                "type": Sequelize.INTEGER,
                "field": "BandsId",
                "onUpdate": "CASCADE",
                "onDelete": "SET NULL",
                "references": {
                    "model": "bands",
                    "key": "BandId"
                },
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
