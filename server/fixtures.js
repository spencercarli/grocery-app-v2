if (Lists.find().count() === 0){
	var x = Lists.insert({
		title: "Title 1",
		submitted: new Date()
	});
	Lists.insert({
		title: "Title 2",
		submitted: new Date()
	});
	Lists.insert({
		title: "Title 3",
		submitted: new Date()
	});

	Items.insert({
		item: 'item 1 for title 1',
		purchased: false,
		listId : x,
		submitted: new Date()
	});

	Items.insert({
		item: 'item 2 for title 1',
		purchased: false,
		listId : x,
		submitted: new Date()
	});
}