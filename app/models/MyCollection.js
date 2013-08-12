exports.definition = {  
    config: {
        "URL": "http://api.hanlingo.com/v1/",
        //"debug": 1, 
        "adapter": {
            "type": "restapi",
            "collection_name": "MyCollection",
            "idAttribute": "id"
        }
        // "headers": { // your custom headers
            // "Accept": "application/vnd.stackmob+json; version=0",
            // "X-StackMob-API-Key": "your-stackmob-key"
        // },
        , "parentNode": "item" //your root node
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