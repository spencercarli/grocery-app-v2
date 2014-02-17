Meteor.methods({
	addList: function(list){
		list.submitted = new Date();
		var id = Lists.insert(list);
		return id;
	}
});