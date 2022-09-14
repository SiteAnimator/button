/*
        @package    SiteAnimator/Modules/Button
  
        file:       exampleModule.js
        function:   Creates the HTML for the example,
                    creates the button.
  
        Last revision: 12-09-2022
 
*/

// create module function
( function( buttonApp ){
    
    // create name spaces
    buttonApp.content = buttonApp.content ? buttonApp.content : {};
    buttonApp.content.example = buttonApp.content.example ? buttonApp.content.example : {};
    // create name spaces
    
    // MODULE: exampleModule( html element id: parentId ) void 
    buttonApp.content.example.exampleModule = function( parentId ) {
        
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object
        self.moduleName = 'exampleModule';                  // string
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
            'margin'                :   '20px auto',        // css
            'maximumWidth'          :   '80%',              // css
            'minimumWidth'          :   '100px',            // css
            'minimumHeight'         :   '200px',            // css
            'backgroundColor'       :   'transparent',      // css
        };                                                  // done named array  
        self.button = null;                                 // module / null
        // DONE MEMBERS     
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void
            
            // debug
            self.debug( 'Example module construct' );
 
            // create html
            self.createHtml();
  
            // create content
            self.createContent();
  
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
        self.createContent = function() {
        // FUNCTION: createContent( void ) void

            // create button
            self.createButton();
            
        // DONE FUNCTION: createContent( void ) void
        };
        self.createButton = function() {
        // FUNCTION: createButton( void ) void
        
            // get event button module
            let buttonModule = buttonApp.content.example.buttonModule;
            
            // create button
            self.button = new buttonModule( self.contentOptions['id'] );

        // DONE FUNCTION: createButton( void ) void
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
    // DONE MODULE: exampleModule( html element id: parentId  ) void 
    
})( buttonApp );
// done create module function
