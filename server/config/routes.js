const mongoose = require('mongoose');
const Task = mongoose.model('Task');

var tasks = require('../controllers/pokemon.js')

module.exports = function (app) {
    app.get('/', function (req, res) {
        tasks.index(req, res);
    });
}

