Meteor.methods({
	addList: function(list){
		var id = Lists.insert(list);
		return id;
	}
});