const mongoose = require('mongoose');
var Task = mongoose.model('Task');

module.exports = {
    index: function (req, res) {
        res.render('index')
    },
}
