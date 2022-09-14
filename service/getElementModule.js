/*
    @package    SiteAnimator\Modules\Button

    file:       getElementModule.js
    function:   Adds the functions:
                
                getElementById: tries to get the element from given id, return: element / null.
                
                to the application
                

    Last revision: 14-09-2022
 
*/    

// create module function
( function( buttonApp ){
        
    // MODULE: getUniqueIdModule( buttonApp ) void
        
    // create name space
    buttonApp.service = buttonApp.service ? buttonApp.service : {};
    
    buttonApp.service.getElementModule = function( ) {
        // PRIVATE:

        // MEMBERS:
        var self = this;                                    // object
        self.debugOn = false;                               // boolean
        self.MODULE = 'getElementModule';                   // string
        self.index = null;                                  // integer / null
        self.hideNames = true;                              // boolean
        // DONE MEMBERS     
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void
            
            // add the extensions to the application
            self.addApplicationsExtensions();
            
        // DONE FUNCTION: construct( void ) void
        };
        self.addApplicationsExtensions = function(){
        // FUNCTION addApplicationsExtensions( void ) void
        
            // add get element function
            buttonApp.getElementById = self.getById;
            
        // DONE FUNCTION: addApplicationsExtensions( void ) void
        };
        self.getById = function( id ) {
        // FUNCTION: getById( string: id ) html element / null
            
            // get the element
            return document.getElementById( id );
            
        // DONE FUNCTION: getById( string: id ) html element / null
        };
        self.debug = function( message ) {
        // FUNCTION: debug( string: message ) void
            
            // debug on
            if( self.debugOn ) {
                
                // call global debug
                buttonApp.debug( self.MODULE + ' ' + message );
                
            }
            // done debug on
            
        // DONE FUNCTION: debug( string: message ) void
        };
        
        // DONE FUNCTIONS

        // initialize the class 
        self.construct();
        // DONE PRIVATE
        
        // PUBLIC
        return {
        };
        // DONE PUBLIC
        
    };
    // DONE MODULE: getUiIdModule( void ) void 
    
})( buttonApp );
// done create module function


