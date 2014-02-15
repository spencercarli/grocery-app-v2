Template.newList.events({
	'submit form': function(e){
		e.preventDefault();
		var name = $('[name=listName]');

		var list = {
			submitted: new Date(),
			title: name.val(),
			owner: Meteor.user()._id,
			sharedWith: [Meteor.user()._id]
			// sharedWith array that we loop over and check if the user is one of the people the list is shared with
			// sharedWith : this.forEach() -- check params for forEach for js 
		}

		list._id = Lists.insert(list);
		Router.go('listPage', list);
	}
});