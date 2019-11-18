'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "bands", deps: []
 * createTable "users", deps: []
 * createTable "bandRatings", deps: [bands]
 *
 **/

var info = {
    "revision": 1,
    "name": "initial_migration",
    "created": "2019-10-15T06:09:45.292Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "bands",
            {
                "BandId": {
                    "type": Sequelize.INTEGER,
                    "field": "BandId",
                    "primaryKey": true,
                    "autoIncrement": true,
                    "allowNull": false
                },
                "Name": {
                    "type": Sequelize.STRING,
                    "field": "Name"
                },
                "ContactPerson": {
                    "type": Sequelize.STRING,
                    "field": "ContactPerson"
                },
                "Genre": {
                    "type": Sequelize.STRING,
                    "field": "Genre"
                },
                "ZipCode": {
                    "type": Sequelize.INTEGER,
                    "field": "ZipCode"
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "users",
            {
                "UserId": {
                    "type": Sequelize.INTEGER,
                    "field": "UserId",
                    "primaryKey": true,
                    "autoIncrement": true,
                    "allowNull": false
                },
                "FirstName": {
                    "type": Sequelize.STRING,
                    "field": "FirstName"
                },
                "LastName": {
                    "type": Sequelize.STRING,
                    "field": "LastName"
                },
                "Username": {
                    "type": Sequelize.STRING,
                    "field": "Username",
                    "unique": true
                },
                "Password": {
                    "type": Sequelize.STRING,
                    "field": "Password"
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "bandRatings",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "BandId": {
                    "type": Sequelize.INTEGER,
                    "onUpdate": "CASCADE",
                    "onDelete": "NO ACTION",
                    "references": {
                        "model": "bands",
                        "key": "BandId"
                    },
                    "allowNull": true,
                    "field": "BandId"
                },
                "VenueId": {
                    "type": Sequelize.INTEGER,
                    "field": "VenueId"
                },
                "Rating": {
                    "type": Sequelize.INTEGER,
                    "field": "Rating"
                },
                "Review": {
                    "type": Sequelize.STRING,
                    "field": "Review"
                }
            },
            {}
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
