function Controller() {
    function __alloyId4() {
        $.__views.foodExchange.removeEventListener("open", __alloyId4);
        if ($.__views.foodExchange.activity) $.__views.foodExchange.activity.onCreateOptionsMenu = function(e) {
            var __alloyId3 = {
                title: "Write",
                showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM,
                id: "__alloyId2"
            };
            $.__views.__alloyId2 = e.menu.add(_.pick(__alloyId3, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId2.applyProperties(_.omit(__alloyId3, Alloy.Android.menuItemCreateArgs));
            onClickWriteBtn ? $.__views.__alloyId2.addEventListener("click", onClickWriteBtn) : __defers["$.__views.__alloyId2!click!onClickWriteBtn"] = true;
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
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
    $.__views.foodExchange.addEventListener("open", __alloyId4);
    var __alloyId5 = {};
    var __alloyId7 = [];
    var __alloyId9 = {
        type: "Ti.UI.ImageView",
        properties: {
            borderColor: "pink",
            borderWidth: 1,
            top: 10,
            left: 10,
            width: 40,
            height: 40
        }
    };
    __alloyId7.push(__alloyId9);
    var __alloyId11 = {
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
    __alloyId7.push(__alloyId11);
    var __alloyId13 = {
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
    __alloyId7.push(__alloyId13);
    var __alloyId15 = {
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
    __alloyId7.push(__alloyId15);
    var __alloyId6 = {
        properties: {
            height: 60,
            name: "postTemplate"
        },
        childTemplates: __alloyId7
    };
    __alloyId5["postTemplate"] = __alloyId6;
    var __alloyId16 = [];
    var __alloyId18 = [];
    $.__views.__alloyId19 = {
        template: "postTemplate",
        properties: {
            id: "__alloyId19"
        }
    };
    __alloyId18.push($.__views.__alloyId19);
    $.__views.postSection = Ti.UI.createListSection({
        id: "postSection"
    });
    __alloyId16.push($.__views.postSection);
    $.__views.postSection.items = __alloyId18;
    $.__views.listView = Ti.UI.createListView({
        sections: __alloyId16,
        templates: __alloyId5,
        id: "listView"
    });
    $.__views.foodExchange.add($.__views.listView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.listView.addEventListener("itemclick", function() {
        var foodExchangeDetailController = Alloy.createController("foodExchangeDetail", {
            title: "Detail"
        });
        Alloy.Globals.mainTabGroup.activeTab.open(foodExchangeDetailController.getView());
    });
    var collection = Alloy.createCollection("MyCollection");
    collection.config.URL = collection.config.URL + "user/content";
    alert(collection);
    collection.fetch({
        success: function() {
            _.each(collection.models, function(element, index, list) {
                alert(JSON.stringify(list));
            });
        },
        error: function() {
            Ti.API.error("hmm - this is not good!");
        }
    });
    __defers["$.__views.__alloyId1!click!onClickWriteBtn"] && $.__views.__alloyId1.addEventListener("click", onClickWriteBtn);
    __defers["$.__views.__alloyId2!click!onClickWriteBtn"] && $.__views.__alloyId2.addEventListener("click", onClickWriteBtn);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;