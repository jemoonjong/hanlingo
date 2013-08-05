function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createTabGroup({
        id: "index"
    });
    $.__views.__alloyId23 = Alloy.createController("foodExchange", {
        id: "__alloyId23"
    });
    $.__views.__alloyId22 = Ti.UI.createTab({
        window: $.__views.__alloyId23.getViewEx({
            recurse: true
        }),
        title: "Food Exchange",
        icon: "KS_nav_ui.png",
        id: "__alloyId22"
    });
    $.__views.index.addTab($.__views.__alloyId22);
    $.__views.__alloyId26 = Alloy.createController("setting", {
        id: "__alloyId26"
    });
    $.__views.__alloyId25 = Ti.UI.createTab({
        window: $.__views.__alloyId26.getViewEx({
            recurse: true
        }),
        title: "Setting",
        icon: "KS_nav_views.png",
        id: "__alloyId25"
    });
    $.__views.index.addTab($.__views.__alloyId25);
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Globals.mainTabGroup = $.index;
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;