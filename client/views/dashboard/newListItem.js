Template.newListItem.events({
	'submit form' : function(e) {
		e.preventDefault();
		var x = $('[name=newItem]');
		 
		var item = {
			item: x.val(),
			purchased: false,
			needed: true,
			listId: this._id,
			submitted: new Date()
		}

		Items.insert(item);
		x.val("");
	}
});