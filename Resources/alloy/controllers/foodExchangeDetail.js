function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "foodExchangeDetail";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.foodExchangeDetail = Ti.UI.createWindow({
        backgroundColor: "#fff",
        fullscreen: false,
        id: "foodExchangeDetail"
    });
    $.__views.foodExchangeDetail && $.addTopLevelView($.__views.foodExchangeDetail);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        borderColor: "blue",
        borderWidth: 1,
        text: "Detail View",
        id: "__alloyId17"
    });
    $.__views.foodExchangeDetail.add($.__views.__alloyId17);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.getView().title = args.title;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;