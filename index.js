/* jshint node:true */ /* global define, escape, unescape */
"use strict";

module.exports = function() {
    return (req, res, next) => {
        if (!req.secure) {
            return res.redirect('https://' + req.get('host') + req.url);
        }
        next();
    }
}