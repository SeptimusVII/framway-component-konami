module.exports = function(app){
    var Konami = Object.getPrototypeOf(app).Konami = new app.Component("konami");
    //Konami.debug = true;
    Konami.createdAt      = "2.0.0";
    Konami.lastUpdate     = "2.0.0";
    Konami.version        = "1";
    Konami.factoryExclude = true;
    // Konami.loadingMsg     = "This message will display in the console when component will be loaded.";
    // Konami.requires       = [];

    Konami.prototype.onCreate = function(){
        var konami = this;
        konami.keys = [];
        konami.code = konami.code || function(){
            konami.log('Konami code fired !');
        };

        konami.exec = function(){
            konami.code();
            $(document).bind('keydown', konami.press);
            konami.keys = [];
        }

        konami.press = function(e){
            konami.keys.push(e.keyCode);
            if (konami.keys.toString().indexOf("38,38,40,40,37,39,37,39,66,65") >= 0) {
                $(document).unbind('keydown', konami.press);
                konami.exec();
            }
        }

        $(document).bind('keydown', konami.press);
    }
    return Konami;
}