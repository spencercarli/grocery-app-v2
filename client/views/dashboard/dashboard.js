Meteor.subscribe('lists');

Template.dashboard.helpers({
  list: function() {
    return Lists.find({ owner: Meteor.user()._id }, {sort:{submitted:-1}});
  }
});
