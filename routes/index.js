var express = require('express');
var router = express.Router();


var Websites = require("../models/website")
var Articles = require("../models/article")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/",function(req,res,next){
	const searchText = req.body.searchText;
	const searchType = req.body.searchType;

	if(searchType === "website"){
		Website.searchWebsites
		(searchText,
		function(err,websites){
			if(err){console.log(err);
				res.send(err);}
				const model ={
					websites:websites.results
				}
				res.render("website_results",model)
		});
}
	else if(searchType === "article"){
		Article.searcArticles(
			searchText,function(err,articles){
				if(err){console.log(err);
					res.send(err);}
					const model ={
						articles:articels.results
					}
			});
	}
	else{console.log("Please choose a type")}
})

module.exports = router;
