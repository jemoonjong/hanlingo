function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "setting";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.setting = Ti.UI.createWindow({
        backgroundColor: "#fff",
        fullscreen: false,
        title: "Setting",
        id: "setting"
    });
    $.__views.setting && $.addTopLevelView($.__views.setting);
    $.__views.__alloyId28 = Ti.UI.createLabel({
        borderColor: "blue",
        borderWidth: 1,
        text: "Setting",
        id: "__alloyId28"
    });
    $.__views.setting.add($.__views.__alloyId28);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;