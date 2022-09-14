/*
        @package    SiteAnimator/Modules/Button
  
        file:       titleModule.js
        function:   Creates the title.
  
        Last revision: 11-09-2022
 
*/

// create module function
( function( buttonApp ){
    
    // create name space
    buttonApp.content = buttonApp.content ? buttonApp.content : {};
    
    // MODULE: titleModule( html element id: parentId ) void 
    buttonApp.content.titleModule = function( parentId ) {
        
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object
        self.moduleName = 'titleModule';                    // string
        self.debugOn = true;                                // boolean
        self.parentId = parentId;                           // html element id
        self.containerOptions = {                           // named array 
            'id'                    :    buttonApp.getUiId( self.moduleName + 'Container' ),   // string 
            'element'               :   'div',              // html element type 
            'backgroundColor'       :   'transparent',      // css
        };                                                  // done named array  
        self.contentOptions = {                             // named array 
            'id'                    :    buttonApp.getUiId( self.moduleName + 'Content' ),     // string 
            'element'               :   'div',              // html element type 
            'text'                  :   'This is a demonstration of Javascript application build with modules.', // string 
            'readOnly'              :   true,               // boolean
            'textAlign'             :   'center',           // css
            'styleWidth'            :   '100%',             // css
            'styleHeight'           :   '100%',             // css
            'backgroundColor'       :   'transparent',      // css
            'color'                 :   'Chocolate',        // css
            'fontSize'              :   '1.5rem',           // css
            'marginTop'             :   '5rem',             // css
            'textShadow'            :   '2px -1px rgba( 0, 0, 0, 0.3 )',  // css
        };                                                  // done named array  
        // DONE MEMBERS     
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void
            
            // debug
            self.debug( 'title module construct' );
 
            // create html
            self.createHtml();
 
        // DONE FUNCTION: construct( void ) void
        };
        self.createHtml = function() {
        // FUNCTION: createHtml( void ) void

            // create container
            buttonApp.appendContainer( self.parentId, self.containerOptions );
            
            // add content to container
            buttonApp.appendContainer( self.containerOptions['id'], self.contentOptions );
        
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
    // DONE MODULE: titleModule( html element id: parentId ) void 
    
})( buttonApp );
// done create module function
