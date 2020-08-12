const mongoose = require("mongoose")
const search = require("mongoose-search-plugin")

const articleSchema = mongoose.Schema({
	title:{
		type:String,
		required:true
	},
	url:{
		type:String,
		required:true
	},
	description:{
		type:String,
	},
	created_at:{
		type:Date,
		required:Date.now
	},
	author:{
		type:String,
		default:"Anonymous"
	}
});

articleSchema.plugin(searchPlugin,{
	fields:["title","description","url","author"]
})

const Article =  mongoose.exports= mongoose.model("Article",articleSchema);
module.exports.searchArticles = function(searchText,callback){
	article.search(searchText,
		{title:1,description:1,url:1},
		{conditions:{
			title:{$exists:true},
			description:{$exists:true},
			url:{$exists:true}
		},
		sort:{title:1},
		limit:50},callback
		)
}

module.exports.addArticle = function(article,callback){
	Article.create(article,callback)
}