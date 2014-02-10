Template.newListItem.events({
	'click #submit' : function(e) {
		e.preventDefault();
		var x = $('[name=newItem]').val();
		 
		var item = {
			item: x,
			purchased: false,
			listId: this._id,
			submitted: new Date()
		}

		Items.insert(item);
	}
});