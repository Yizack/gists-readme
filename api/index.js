const app = require('express')();
const hbs = require('hbs');
const axios = require('axios').default;
const path = require("path");
const fs = require('fs');
const env = require('dotenv').config({ path: myPath(".env") });

var languages = "";

hbs.registerPartials(myPath("themes/partials"), function (err) {});
app.set('view engine', 'hbs');
app.set("views", myPath("themes"));

app.get('/api/', async (req, res) => {
  const { user } = req.query;
  const { n } = req.query;
  const { theme } = req.query;
  const limit = isNaN(n) || typeof n === "undefined" || n === "";

  console.log(n);

  const token = process.env.token;
  const options = {
    headers: {
      Authorization:  `token ${token}` 
    }
  };

  languages = JSON.parse(fs.readFileSync(myPath('resources/language_colors.json'), 'utf8'));

    var req = await axios.get(`https://api.github.com/users/${user}/gists`, options).then( async (response) => {
    var gists = [];
    var x = 0;
    var y = 0;
    var i = 0;
    var nextLine = false;
    
    await response.data.forEach(function(d) {
      if(limit || i < n){
        var filename = Object.keys(d.files)[0];
        var language = d.files[filename].language;
        var color = getColor(language);
        gists.push({
          "file": filename,
          "language": language,
          "color": color,
          "y" : y,
          "x" : x
        });

        if(x == 200 && !nextLine){
          x = 0;
        }
        else if (x ==0 && !nextLine) {
          x = 200;
          nextLine = true;
        }

        if(nextLine){
          nextLine = false;
          y = y - 25;
        }
        y = y + 25;
        i++;
      }
    });

    var height = y + 100;

    var parameters = {
      "gists": gists,
      "height": height
    }

    res.setHeader("Content-Type", "image/svg+xml");

    try {
      if (fs.existsSync(myPath(`themes/${theme}.hbs`))) {
        res.render(theme, parameters);
      }
      else {
        throw error;
      }
    }
    catch(e){
      res.render('default', parameters);
    }

  }); 
});


function getColor(name){
  try {
    return languages[name].color;
  }
  catch(e){
    return "#ededed";
  }
}

function myPath(file){
  return path.join(__dirname, "..", file);
}

module.exports = app;
