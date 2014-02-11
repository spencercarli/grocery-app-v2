Meteor.publish 'lists', ->
	Lists.find()

Meteor.publish 'items', ->
	Items.find()

Items.allow {
	insert: (userId, doc) ->
		return true
	update: (userId, doc, fields, modifier) ->
		return true
	remove: (userId, doc) ->
		return true
}

Lists.allow {
	insert: (userId, doc) ->
		return true
}