Meteor.publish 'lists', (userId) ->
	Lists.find { 
		# owner: userId 
		sharedWith: userId
	}

checkIfUserId = (element, index, array) ->
  element  if element is userId

Meteor.publish 'items', (listId) ->
	Items.find({listId: listId})

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