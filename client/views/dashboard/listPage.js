Meteor.subscribe('items');

Template.listPage.helpers({
	items: function(){
		return Items.find({ listId : this._id }, {sort: {submitted: -1}});
	}
});

Template.listItem.events({
	'click #complete': function(e){
		
		Items.update({ id: this._id}, {
			purchased: true
		});
	}
});
