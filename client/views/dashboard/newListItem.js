Template.newListItem.events({
	'submit form' : function(e) {
		e.preventDefault();
		var x = $('[name=newItem]');
		 
		var item = {
			item: x.val(),
			purchased: false,
			needed: true,
			listId: this._id
		}

		// Items.insert(item);
		Meteor.call('addItem', item);
		x.val("");
	}
});