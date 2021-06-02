const axios = require('axios');
const  express = require('express'),
router = express.Router();

var url = 'https://api.squarespace.com/1.0/inventory'

var opts = require('url').parse(url);
opts.headers = {
    'Authorization':'Bearer b8a0a2c0-b1a1-4dce-8a8e-7150203fb5a9',
  'User-Agent': 'javascript'
};

router.get("/",  (req,res)=>{
    axios.get(opts)
    .then(data=>{
        res.send(`<p>${JSON.stringify(data)}</p>`)
    })
    .catch((err)=>{
    res.send(`<p>${err}</p>`)
    console.log(err)
    })
    
})

module.exports = router

// {
//     "inventory": [
//         {
//             "variantId": "e657304a-7f88-462f-b762-91dc2bbbf9cd",
//             "sku": "SQ2106307",
//             "descriptor": "Linen Top / Blue [6]",
//             "quantity": 1,
//             "isUnlimited": true
//         },
//         {
//             "variantId": "dbcc363f-1041-4d9b-b55f-f5b815b8e774",
//             "sku": "SQ3341341",
//             "descriptor": "Linen Top / Blue [8]",
//             "quantity": 1,
//             "isUnlimited": true
//         },
//         {
//             "variantId": "2d446ea7-e8bb-4e62-88a8-9365f307251a",
//             "sku": "SQ4732128",
//             "descriptor": "Linen Top / Blue [0]",
//             "quantity": 3,
//             "isUnlimited": false
//         },
//         {
//             "variantId": "84ab063c-0789-491f-a4d1-1932974aca67",
//             "sku": "SQ5575073",
//             "descriptor": "Linen Top / Blue [2]",
//             "quantity": 4,
//             "isUnlimited": false
//         },
//         {
//             "variantId": "a3ba8743-a8eb-4ce7-b29d-0d3acf3c16ae",
//             "sku": "SQ5735663",
//             "descriptor": "Linen Top / Blue [4]",
//             "quantity": 9,
//             "isUnlimited": false
//         },
//         {
//             "variantId": "4b452d98-04d1-4ecb-b8be-d2c9308846d1",
//             "sku": "SQ3932241",
//             "descriptor": "The Capozzi",
//             "quantity": 1,
//             "isUnlimited": false
//         }
//     ],
//     "pagination": {
//         "nextPageUrl": null,
//         "nextPageCursor": null,
//         "hasNextPage": false
//     }
// }