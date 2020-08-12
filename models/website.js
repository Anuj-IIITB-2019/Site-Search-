var mongoose = require('mongoose');
var search = require('mongoose-search-plugin');

var websiteSchema = mongoose.Schema({
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
});

websiteSchema.plugin(searchPlugin,{
	fields:["title","description","url"]
})

var Website = module.exports = mongoose.model('Website',websiteSchema);

module.exports.searchWebsites =function(searchText,callback){
website.search(searchText,
	{title:1,description:1,url:1},
	{conditions:
		{
		title:{$exists:true},
		description:{$exists:true},
		url:{$exists:true}
		},
	sort:{title:1},
	limit:50},callback);
}

module.exports.addWebsite = function(website,callback){

Website.create(website,callback);

}