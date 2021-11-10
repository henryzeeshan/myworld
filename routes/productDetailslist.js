var express = require('express');
var router = express.Router();

/* GET Home page */
router.get('/', function(req, res, next){
   var data = {

       p1Details : [
        {
            name: 'laptop',
            price: 4565,
            menu: 'samsung',
            imageUrl: 'https://www.windowscentral.com/sites/wpcentral.com/files/styles/large/public/field/image/2020/10/hp-spectre-x360-14-press-1.jpg',
            Rating: '4/5'
    
        },
        {
            name: 'pendrive',
            price: 565,
            menu: 'sony',
            imageUrl: 'https://5.imimg.com/data5/CU/GD/DI/SELLER-8573721/pendrive-wooden-box-500x500.jpg',
            Rating: '3.4/5'
    
        },
    
        {
            name: 'smartphone',
            price: 6670,
            menu: 'iphone',
            imageUrl: 'https://specials-images.forbesimg.com/imageserve/5f766465171081b47b0e73ad/960x0.jpg?fit=scale',
            Rating: '4.5/5'
    
        },
    
        {
            name: 'laptop',
            price: 688,
            menu: 'MI',
            imageUrl: 'https://www.windowscentral.com/sites/wpcentral.com/files/styles/large/public/field/image/2020/10/hp-spectre-x360-14-press-1.jpg',
            Rating: '3.8/5'
    
        }
    
       ]

   };
     data = JSON.stringify(data);
     res.send(data);

   });
    module.exports = router;
