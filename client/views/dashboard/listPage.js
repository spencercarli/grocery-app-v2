Meteor.subscribe('items');

Template.listPage.helpers({
	items: function(){
		return Items.find({ listId : this._id }, {sort: {submitted: -1}});
	}
});

Template.listItem.rendered = function(){
	if (this.data.purchased) {
		$('.'+ this.data._id).addClass('btn-danger');
	}
};

Template.listItem.events({
	'click button': function(e){
		e.preventDefault();
		$('.'+ this._id).toggleClass('btn-danger');

		if (this.purchased == false){
			Items.update({ _id: this._id },{$set: {
				purchased: true
			}});
		} else {
			Items.update({ _id: this._id },{$set: {
				purchased: false
			}});
		}
	}
});
