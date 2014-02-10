Meteor.subscribe('items');

Template.listPage.helpers({
	items: function(){
		return Items.find({ listId : this._id })
	}
});