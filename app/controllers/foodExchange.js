function onClickWriteBtn() {
	var dialog = Ti.UI.createAlertDialog({
		message: '로그인 검사 후 글쓰기 창으로 연결',
		ok: 'OK',
		title: '한링고'
	}).show();
}

$.listView.addEventListener('itemclick', function(e) {
	var foodExchangeDetailController = Alloy.createController('foodExchangeDetail', { title : 'Detail' });
	Alloy.Globals.mainTabGroup.activeTab.open(foodExchangeDetailController.getView());
});


var collection = Alloy.createCollection("MyCollection");

collection.config.URL = collection.config.URL + 'user/content';

alert(collection);

collection.fetch({ 
    success : function(){
        _.each(collection.models, function(element, index, list){
            // We are looping through the returned models from the remote REST API
            // Implement your custom logic here
            alert(JSON.stringify(list));
        });
    },
    error : function(){
        Ti.API.error("hmm - this is not good!");
    }
});