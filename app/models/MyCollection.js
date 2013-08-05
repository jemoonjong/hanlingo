exports.definition = {  
    config: {
        "URL": "http://colorsign.dabcode.com/v1/",
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
        // "parentNode": "news.domestic" //your root node
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