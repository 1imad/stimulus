var express = require('express');
var router = express.Router();
const Quote = require("motivation");
const image_finder = require("image-search-engine")

/* GET home page. */
router.get('/', (req, res) => {
  const quote = Quote.get();
  image_finder.find(quote.author,{size: "large", color: "black"})
    .then(img => {
      res.render('index', { quote: quote.text, author: quote.author, img });
    })
    .catch(err => {
      res.render('index', { quote: quote.text, author: quote.author, img: "" });
    });
});

module.exports = router;
