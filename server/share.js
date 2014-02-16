Meteor.methods({
	shareWith: function(listId, userEmail){
		// check(userEmail, String);

		var user = Meteor.users.findOne({'emails.address':userEmail});
		
		if (!user) {
			// throw new Meteor.Error(200, 'Not a user. We make them account');
			user = {};
			user._id = Accounts.createUser({
				email: userEmail
			});

			Accounts.sendEnrollmentEmail(user._id);
		}
			
		Lists.update(listId, {
			$push: {sharedWith: user._id}
		});
	}

	
});

var inviteUser = function(listId, email){
	var user = Accounts.createUser({
		email:email
	});
	console.log(user);
}