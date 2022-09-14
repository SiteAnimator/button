/*
        @package    SiteAnimator/Modules/Button
  
        file:       introModule.js
        function:   Creates the HTML for the intro.
  
        Last revision: 11-09-2022
 
*/

// create module function
( function( buttonApp ){
    
    // create name space
    buttonApp.content = buttonApp.content ? buttonApp.content : {};
    
    // MODULE: introModule( html element id: parentId ) void 
    buttonApp.content.introModule = function( parentId ) {
        
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object
        self.moduleName = 'introModule';                    // string
        self.debugOn = true;                                // boolean
        self.parentId = parentId;                           // html element id
        self.containerOptions = {                           // named array 
            'id'                    :   buttonApp.getUiId( self.moduleName + 'Container' ), // string 
            'element'               :   'div',              // html element type 
            'backgroundColor'       :   'transparent',      // css
        };                                                  // done named array  
        self.titleOptions = {                               // named array 
            'id'                    :   buttonApp.getUiId( self.moduleName + 'Title' ), // string 
            'element'               :   'div',              // html element type 
            'text'                  :   'This is a demonstration of a button module.',  // string 
            'readOnly'              :   true,               // boolean
            'textAlign'             :   'center',           // css
            'styleWidth'            :   '100%',             // css
            'styleHeight'           :   '100%',             // css
            'backgroundColor'       :   'transparent',      // css
            'color'                 :   'LightSeaGreen',    // css
            'fontSize'              :   '1.2rem',           // css
            'marginTop'             :   '1rem',             // css
        };                                                  // done named array  
        self.introOptions = {                               // named array 
            'id'                    :   buttonApp.getUiId( self.moduleName + 'Intro' ), // string 
            'element'               :   'div',              // html element type 
            'text'                  :   'The application demonstrates the use of a button module. ',  // string 
            'readOnly'              :   true,               // boolean
            'textAlign'             :   'center',           // css
            'styleWidth'            :   '100%',             // css
            'styleHeight'           :   '100%',             // css
            'backgroundColor'       :   'transparent',      // css
            'color'                 :   'Peru',             // css
            'fontSize'              :   '1.2rem',           // css
            'marginTop'             :   '1rem',             // css
        };                                                  // done named array  
        // DONE MEMBERS     
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void
            
            // debug
            self.debug( 'intro module construct' );
 
            // create html
            self.createHtml();
 
        // DONE FUNCTION: construct( void ) void
        };
        self.createHtml = function() {
        // FUNCTION: createHtml( void ) void

            // create container
            buttonApp.appendContainer( self.parentId, self.containerOptions );
            
            // add title to container
            buttonApp.appendContainer( self.containerOptions['id'], self.titleOptions );
        
            // add intro to container
            buttonApp.appendContainer( self.containerOptions['id'], self.introOptions );
        
        // DONE FUNCTION: createHtml( void ) void
        };
        self.debug = function( message ) {
        // FUNCTION: debug( string: message ) void
            
            // debug on
            if( self.debugOn ) {
                
                // debug
                buttonApp.debug( self.moduleName + ' ' + message );
                
            }
            // done debug on
            
        // DONE FUNCTION: debug( string: message ) void
        };
        
        // initialize the class 
        self.construct();
        // DONE PRIVATE
        
        // PUBLIC
        return {
        };
        // DONE PUBLIC
        
    };
    // DONE MODULE: introModule( html element id: parentId ) void 
    
})( buttonApp );
// done create module function
