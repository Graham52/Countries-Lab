const express = require('express');
const parser = require('body-parser');
const server = express();

server.use(parser.json());
server.use(express.static('client/public'));

const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

MongoClient.connect('mongodb://localhost:27017', function(err, client) {
  if (err) {
    console.log(err);
    return;
  }
  const db = client.db('bucket_list');
  console.log('Connected to DB');
  const countriesCollection = db.collection('countries');


  //CREATE
  server.post('/api/countries', function(req, res) {
    const newCountry = req.body;

    countriesCollection.save(newCountry, function(err, result) {
      if(err) {
        console.error(err);
        res.status(500);
        res.send();
        return;
      };

      console.log('Saved!');
      res.status(201);
      res.json(result.ops[0]);
    });
  });

  //INDEX
  server.get('/api/countries', function (req, res) {
    countriesCollection.find().toArray( function (err, result) {
      if (err) {
        console.error(err);
        response.status(500);
        response.send();
        return;
      };
      res.json(result);
    });
  });


  server.listen(3000, function() {
    console.log('Listening on port 3000');
  });
});
