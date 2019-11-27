'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "venues", deps: []
 * createTable "venueRatings", deps: [venues]
 *
 **/

var info = {
    "revision": 2,
    "name": "migration2",
    "created": "2019-10-16T01:58:44.286Z",
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
                "ContactPerson": {
                    "type": Sequelize.STRING,
                    "field": "ContactPerson"
                },
                "PhoneNumber": {
                    "type": Sequelize.INTEGER,
                    "field": "PhoneNumber"
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "venueRatings",
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
                    "field": "BandId"
                },
                "VenueId": {
                    "type": Sequelize.INTEGER,
                    "onUpdate": "CASCADE",
                    "onDelete": "NO ACTION",
                    "references": {
                        "model": "venues",
                        "key": "VenueId"
                    },
                    "allowNull": true,
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
