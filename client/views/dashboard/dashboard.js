Deps.autorun(function() {
	Meteor.subscribe('lists', Meteor.userId());
});

Session.set('userId', Meteor.userId());

Template.dashboard.helpers({
  list: function() {
    return Lists.find({ sharedWith: Meteor.user()._id }, {sort:{submitted:-1}});
  }
});
