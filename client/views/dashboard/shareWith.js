Template.shareWith.events({
	'submit form': function(e){
		e.preventDefault();

		var email = $('[name=emailAddress]');
		Meteor.call('shareWith', this._id, email.val(), function(error, res){
			if (error){
				console.log(email.val() + " isn't a user. " + error);
			}
		});

		console.log(this.sharedWith);

		email.val('');
	}
});