const fs = require('fs');

fs.readdir("./assets/images", function(err, items) {
    console.log(items);
});
