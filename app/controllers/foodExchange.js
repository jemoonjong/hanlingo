var moment = require('alloy/moment');

//싱글톤으로 만들기
var collection = Alloy.Collections.instance('MyCollection');


collection.on('reset', function() {
	var items = [];

	collection.each(function(model) {
		items.push({
			userImgLabel : {
				image : 'http://hanlingo.com' + model.item.get('profile_photo')
			},
			userNameLabel : {
				text : model.get('username')
			},
			contentLabel : {
				text : model.item.get('details')
			},
			dateLabel : {
				text : moment(model.item.get('posted')).fromNow()
			},
			template : 'postTemplate',
			properties : {
				itemId : model.item.get('id')
			}
		});
	});

	$.postSection.setItems(items);
	//$.postSection.appendItems(items);
	//$.postSection.insertItemsAt(0, items);
});



function onClickWriteBtn() {
	var dialog = Ti.UI.createAlertDialog({
		message: '로그인 검사 후 글쓰기 창으로 연결',
		ok: 'OK',
		title: '한링고'
	}).show();
}

$.listView.addEventListener('itemclick', function(e) {
	var id = e.itemId;
	var cModel = collection.get(id);
	
	var foodExchangeDetailController = Alloy.createController('foodExchangeDetail', { title : 'Detail', model : cModel });
	Alloy.Globals.mainTabGroup.activeTab.open(foodExchangeDetailController.getView());
});


// var collection = Alloy.createCollection("MyCollection");

collection.config.URL = collection.config.URL + 'food_exchange/list?format=json&api_key=3d7cc4adb977bfc6e25d2392d13d6b39&page=1&offset=10';
// collection.config.parentNode = "";

collection.fetch({ 
    success : function(){
        _.each(collection.models, function(element, index, list){
            // We are looping through the returned models from the remote REST API
            // Implement your custom logic here
            //alert(JSON.stringify(list));
        });
    },
    error : function(){
        Ti.API.error("hmm - this is not good!");
    }
});