if (Lists.find().count() === 0){
	Lists.insert({
		title: "Title 1",
		items: ["item 1", "item 2", "item 3"]
	});
	Lists.insert({title: "Title 2"});
	Lists.insert({title: "Title 3"});
}