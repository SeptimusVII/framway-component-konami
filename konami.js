module.exports = function(app){
    var Konami = Object.getPrototypeOf(app).Konami = new app.Component("konami");
    //Konami.debug = true;
    Konami.createdAt      = "2.0.0";
    Konami.lastUpdate     = "2.0.0";
    Konami.version        = "1";
    // Konami.factoryExclude = true;
    // Konami.loadingMsg     = "This message will display in the console when component will be loaded.";
    // Konami.requires       = [];

    // Konami.prototype.onCreate = function(){
    // do thing after element's creation
    // }
    return Konami;
}