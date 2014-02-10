Meteor.publish 'lists', ->
	Lists.find()

Meteor.publish 'items', ->
	Items.find()

Items.allow {
	update: (userId, doc, fields, modifier) ->
		return true
}