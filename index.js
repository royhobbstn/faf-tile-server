// created by people much smarter than myself
// derived from: https://github.com/chelm/mbtiles-server && https://github.com/tobinbradley/mbtiles-server

const express = require('express');
const app = express();
const MBTiles = require('@mapbox/mbtiles');
const path = require('path');
const port = 4002;

// path to the mbtiles; default is the server.js directory
const tilesDir = __dirname + '../network_data';

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET');
  res.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


// Set return header
function setContentType(type) {
  const header = {};
  // Cache
  // header["Cache-Control"] = "public, max-age=2592000";

  // request specific headers
  if (type === 'png') {
    header['Content-Type'] = 'image/png';
  }
  if (type === 'jpg') {
    header['Content-Type'] = 'image/jpeg';
  }
  if (type === 'pbf') {
    header['Content-Type'] = 'application/x-protobuf';
    header['Content-Encoding'] = 'gzip';
  }

  return header;
}

// tile cannon
app.get('/:s/:z/:x/:y.:t', function (req, res) {

  new MBTiles(path.join(tilesDir, req.params.s + '.mbtiles'), function (err, mbtiles) {

    if (err) {
      console.log('error opening database');
      return res.sendStatus(404);
    }
    else {
      mbtiles.getTile(req.params.z, req.params.x, req.params.y, function (err, tile) {
        if (err) {
          return res.sendStatus(204);
        }
        else {
          res.set(setContentType(req.params.t));
          return res.send(tile);
        }
      });
    }

  });
});

// start up the server
console.log(`Listening on port: ${port}`);
app.listen(port);