Meteor.publish 'lists', ->
	Lists.find()

Meteor.publish 'items', ->
	Items.find()