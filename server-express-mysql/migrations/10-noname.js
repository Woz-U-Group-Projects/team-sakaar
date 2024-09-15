'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * changeColumn "BandPicture" on table "bands"
 *
 **/

var info = {
    "revision": 10,
    "name": "noname",
    "created": "2019-11-07T21:39:03.859Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "changeColumn",
    params: [
        "bands",
        "BandPicture",
        {
            "type": Sequelize.BLOB,
            "field": "BandPicture"
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
