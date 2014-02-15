Meteor.methods({
	shareWith: function(listId, userEmail){
		// check(userEmail, String);

		var user = Meteor.users.findOne({'emails.address':userEmail});
		
		Lists.update(listId, {
			$push: {sharedWith: user._id}
		});
		
	}
});