Template.newList.events({
	'submit form': function(e){
		e.preventDefault();
		var name = $('[name=listName]');

		var list = {
			title: name.val(),
			owner: Meteor.user()._id,
			sharedWith: [Meteor.user()._id]
		}

		// list._id = Lists.insert(list);
		Meteor.call('addList', list, function(error, result){
			if (error)
				alert('uhhh');

			list._id = result;
			Router.go('listPage', list);
		});
	}
});