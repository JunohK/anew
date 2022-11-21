var axios = require('axios');

<<<<<<< HEAD
require('dotenv').config({path:"../../.env"});
=======
require('dotenv').config({ path: "../../.env" });
>>>>>>> e0096d113df2eeb29a9e1019698c735ffb1c7425

var data = JSON.stringify({
    "collection": "things",
    "database": "test",
    "dataSource": "Cluster0",
    "projection": {
        "_id": 1
    }
});
            
var config = {
    method: 'post',
<<<<<<< HEAD
    url: 'https://data.mongodb-api.com/app/data-imomt/endpoint/data/v1/action/findOne',
=======
    url: 'https://data.mongodb-api.com/app/data-esuhv/endpoint/data/v1/action/findOne',
>>>>>>> e0096d113df2eeb29a9e1019698c735ffb1c7425
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': process.env.ATLAS_API,
    },
    data: data
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
