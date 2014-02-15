Template.shareWith.events({
	'submit form': function(e){
		e.preventDefault();

		var email = $('[name=emailAddress]');
		Meteor.call('shareWith', this._id, email.val());

		console.log(this.sharedWith);

		email.val('');
	}
});