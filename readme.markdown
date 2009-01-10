# Cicada

Cicada is a system for populating a page with multiple javascript plugins 

## Example
    var c = new Cicada();
    
    // Register the page sections:
    c.registerSection( "page-section" , "#media");
    c.registerSection( "user-area" , "#user");    

    // Register the plugins
    c.registerPlugin( "page-section" , function( element ) {
        element.addClass("unknown").text( "User unknown" );
        c.registerObjectListener( "User" , function( user ){
            element.removeClass("unknown");
            element.text( user.name );
        });
    } );

    // Initialize the registered plugins:
    c.initializePlugins();
    
    // Register the models:    
    c.registerObject( "User" , {name:"Default user"} );
