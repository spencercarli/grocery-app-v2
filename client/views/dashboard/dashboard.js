Meteor.subscribe('lists');

Template.dashboard.helpers({
  list: function() {
    return Lists.find();
  }
});
