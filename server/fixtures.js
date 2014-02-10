if (Lists.find().count() === 0){
	Lists.insert({
		title: "Title 1",
		items: [
			{
				item: 'item 1'
			},
			{
				item: 'item 2'
			},
			{
				item: 'item 3'
			}
		]
	});
	Lists.insert({title: "Title 2"});
	Lists.insert({title: "Title 3"});
}