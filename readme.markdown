# Cicada

Cicada is a system for populating a page with multiple javascript plugins 

## Example

    // Register the page sections:
    Cicada.registerSection( "page-section" , "#media");
    Cicada.registerSection( "user-area" , "#user");    

    // Register the plugins
    Cicada.registerPlugin( "page-section" , function( element ) {
        element.addClass("unknown").text( "User unknown" );
        Cicada.registerObjectListener( "User" , function( user ){
            element.removeClass("unknown");
            element.text( user.name );
        });
    } );

    // Initialize the registered plugins:
    Cicada.initializePlugins();
    
    // Register the models:    
    Cicada.registerObject( "User" , {name:"Default user"} );
