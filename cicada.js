var Cicada = (function(){    
    var self = {};
    
    var objects = {};
    var sections = {};
    var plugins = [];

    function makeRegister( variable ) {
        return function( first , second ) {
            if ( second !== undefined ) {
                variable[first] = second;
            }
            else {
                $.merge(variable, first );
            }
            return self;
        }
    }
    
    function createObjectListeners(){
        var objectListeners = {};
        self.triggerObjectListener = function( name ) {
            objectListeners[name] = objectListeners[name] || [];
            $.each( objectListeners[name] , function(index,callback){
                callback( self.retrieve(name) );
            });
        }
        
        self.registerObjectListener = function( objectName , callback ) {
            objectListeners[objectName] = objectListeners[objectName] || [];
            objectListeners[objectName].push( callback );
        }
    };
    
    createObjectListeners();
    
    self.registerSection = makeRegister( sections );
    
    self.registerObject = function( name , obj ){
        objects[name] = obj;
        self.triggerObjectListener( name );
        return self;
    };
    
    self.registerPlugin = function( sectionName , callback ) {
        plugins.push({
            section: sectionName , 
            callback: callback
        });
        return self;
    }
    
    self.retrieve = function( objectName ) {
        return objects[objectName];
    }
    
    self.initializePlugins = function() {
        $.each( plugins , function(index,plugin){
            var element = $("<div />").addClass("cicada-component-plugin");
            plugin.callback( element );
            $(sections[plugin.section]).addClass("cicada-component-section").append( element );
        } );
    }
    
    return self;
})();

