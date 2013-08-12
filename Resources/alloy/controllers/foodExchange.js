function Controller() {
    function onClickWriteBtn() {
        Ti.UI.createAlertDialog({
            message: "로그인 검사 후 글쓰기 창으로 연결",
            ok: "OK",
            title: "한링고"
        }).show();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "foodExchange";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.foodExchange = Ti.UI.createWindow({
        backgroundColor: "#fff",
        fullscreen: false,
        id: "foodExchange"
    });
    $.__views.foodExchange && $.addTopLevelView($.__views.foodExchange);
    $.__views.__alloyId1 = Ti.UI.createButton({
        title: "Write",
        id: "__alloyId1"
    });
    onClickWriteBtn ? $.__views.__alloyId1.addEventListener("click", onClickWriteBtn) : __defers["$.__views.__alloyId1!click!onClickWriteBtn"] = true;
    $.__views.foodExchange.rightNavButton = $.__views.__alloyId1;
    var __alloyId2 = {};
    var __alloyId4 = [];
    var __alloyId6 = {
        type: "Ti.UI.ImageView",
        bindId: "userImgLabel",
        properties: {
            borderColor: "pink",
            borderWidth: 1,
            top: 10,
            left: 10,
            width: 40,
            height: 40,
            bindId: "userImgLabel"
        }
    };
    __alloyId4.push(__alloyId6);
    var __alloyId8 = {
        type: "Ti.UI.Label",
        bindId: "userNameLabel",
        properties: {
            borderColor: "blue",
            borderWidth: 1,
            top: 10,
            left: 60,
            font: {
                fontSize: 13
            },
            text: "User Name",
            bindId: "userNameLabel"
        }
    };
    __alloyId4.push(__alloyId8);
    var __alloyId10 = {
        type: "Ti.UI.Label",
        bindId: "contentLabel",
        properties: {
            borderColor: "blue",
            borderWidth: 1,
            top: 25,
            left: 60,
            right: 10,
            height: 25,
            font: {
                fontSize: 15
            },
            text: "Post Content",
            bindId: "contentLabel"
        }
    };
    __alloyId4.push(__alloyId10);
    var __alloyId12 = {
        type: "Ti.UI.Label",
        bindId: "dateLabel",
        properties: {
            borderColor: "blue",
            borderWidth: 1,
            top: 10,
            right: 10,
            font: {
                fontSize: 12
            },
            text: "0000.00.00",
            bindId: "dateLabel"
        }
    };
    __alloyId4.push(__alloyId12);
    var __alloyId3 = {
        properties: {
            height: 60,
            name: "postTemplate"
        },
        childTemplates: __alloyId4
    };
    __alloyId2["postTemplate"] = __alloyId3;
    var __alloyId13 = [];
    var __alloyId15 = [];
    $.__views.__alloyId16 = {
        template: "postTemplate",
        properties: {
            id: "__alloyId16"
        }
    };
    __alloyId15.push($.__views.__alloyId16);
    $.__views.postSection = Ti.UI.createListSection({
        id: "postSection"
    });
    __alloyId13.push($.__views.postSection);
    $.__views.postSection.items = __alloyId15;
    $.__views.listView = Ti.UI.createListView({
        sections: __alloyId13,
        templates: __alloyId2,
        id: "listView"
    });
    $.__views.foodExchange.add($.__views.listView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("alloy/moment");
    var collection = Alloy.Collections.instance("MyCollection");
    collection.on("reset", function() {
        var items = [];
        alert(JSON.stringify(collection.item));
        collection.each(function() {});
        $.postSection.setItems(items);
    });
    $.listView.addEventListener("itemclick", function(e) {
        var id = e.itemId;
        var cModel = collection.get(id);
        var foodExchangeDetailController = Alloy.createController("foodExchangeDetail", {
            title: "Detail",
            model: cModel
        });
        Alloy.Globals.mainTabGroup.activeTab.open(foodExchangeDetailController.getView());
    });
    collection.config.URL = collection.config.URL + "food_exchange/list?format=json&api_key=3d7cc4adb977bfc6e25d2392d13d6b39&page=1&offset=10";
    collection.fetch({
        success: function() {
            _.each(collection.models, function() {});
        },
        error: function() {
            Ti.API.error("hmm - this is not good!");
        }
    });
    __defers["$.__views.__alloyId1!click!onClickWriteBtn"] && $.__views.__alloyId1.addEventListener("click", onClickWriteBtn);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;