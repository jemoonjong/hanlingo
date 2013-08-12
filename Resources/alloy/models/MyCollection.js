exports.definition = {
    config: {
        URL: "http://api.hanlingo.com/v1/",
        adapter: {
            type: "restapi",
            collection_name: "MyCollection",
            idAttribute: "id"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("MyCollection", exports.definition, []);

collection = Alloy.C("MyCollection", exports.definition, model);

exports.Model = model;

exports.Collection = collection;