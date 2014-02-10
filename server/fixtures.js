if (Lists.find().count() === 0){
	var x = Lists.insert({
		title: "Title 1"
	});
	Lists.insert({title: "Title 2"});
	Lists.insert({title: "Title 3"});

	Items.insert({
		item: 'item 1 for title 1',
		listId : x
	});

	Items.insert({
		item: 'item 2 for title 1',
		listId : x
	});
}