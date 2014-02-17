Meteor.methods({
	addItem: function(item){
		item.submitted = new Date();
		Items.insert(item);
	}
});