Template.newList.events({
	'submit form': function(e){
		e.preventDefault();
		var name = $('[name=listName]');

		var list = {
			submitted: new Date(),
			title: name.val(),
			owner: Meteor.user()._id,
			sharedWith: [Meteor.user()._id]
		}

		list._id = Lists.insert(list);
		Router.go('listPage', list);
	}
});