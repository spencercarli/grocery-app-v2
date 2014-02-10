Template.newList.events({
	'submit form': function(e){
		// e.preventDefault();
		var name = $('[name=listName]');

		var list = {
			submitted: new Date(),
			title: name.val()
		}

		list._id = Lists.insert(list);
		Router.go('listPage', list);
	}
});