/*
  This file is part of rebornstorm.

  rebornstorm is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.
  rebornstorm is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with rebornstorm.  If not, see <http://www.gnu.org/licenses/>.
*/
/*eslint-env node*/
(function(){
    "use strict";
    var express = require("express");
    var app = express();
    app.get("/", function(req, res) {
        res.send("hello!");
    });
    module.exports = app;
}());
