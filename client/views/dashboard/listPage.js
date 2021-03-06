Template.listPage.helpers({
	need: function(){
		return Items.find({ purchased: false, needed:true }, {sort: {submitted: -1}});
	},

	incart: function(){
		return Items.find({ purchased: true, needed:true }, {sort: {submitted: -1}});
	},

	trashed: function(){
		return Items.find({ needed: false }, {sort: {submitted: -1}});
	}
});

Template.listItem.rendered = function(){
	if (this.data.purchased) {
		$('.'+ this.data._id).addClass('btn-warning');
	}
};

Template.listItem.events({
	'click #purch': function(e){
		e.preventDefault();

		if (this.purchased == false){
			Items.update({ _id: this._id },{$set: {
				purchased: true
			}});
		} else {
			Items.update({ _id: this._id },{$set: {
				purchased: false
			}});
		}
	},

	'click #delete': function(e){
		e.preventDefault();

		if (this.needed == false){
			Items.update({ _id: this._id },{$set: {
				needed: true
			}});
		} else {
			Items.update({ _id: this._id },{$set: {
				needed: false
			}});
		}
	}
});
