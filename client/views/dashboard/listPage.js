Meteor.subscribe('items');

Template.listPage.helpers({
	items: function(){
		return Items.find({ listId : this._id }, {sort: {submitted: -1}});
	}
});

Template.listItem.events({
	'click button': function(e){
		e.preventDefault();
		$('.'+ this._id).toggleClass('btn-danger');

		var x = Items.findOne(this._id);
		Items.update({ _id: this._id },{$set: {
			purchased: true
		}});
		alert(x.purchased);
	}
});
