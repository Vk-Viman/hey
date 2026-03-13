const fs = require('fs');

fs.writeFile('write-output.txt', 'Hello World!', function (err) {
  if (err) throw err;
  console.log('File saved!');
});
