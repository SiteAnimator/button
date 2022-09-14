/*
        @package    SiteAnimator/Modules/Button
  
        file:       contentModule.js
        function:   Generates the HTML for the content.
  
        Last revision: 11-09-2022
 
*/

// create module function
( function( buttonApp ){
    
    // create name space
    buttonApp.content = buttonApp.content ? buttonApp.content : {};
    
    // MODULE: contentModule( void ) void 
    buttonApp.content.contentModule = function( ) {
        
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object
        self.moduleName = 'contentModule';                  // string
        self.debugOn = true;                                // boolean
        self.containerOptions = {                           // named array 
            'id'                    :   buttonApp.getUiId( self.moduleName + 'Container' ), // string 
            'element'               :   'div',              // html element type 
            'backgroundColor'       :   'transparent',      // css
        };                                                  // done named array  
        self.contentOptions = {                             // named array 
            'id'                    :   buttonApp.getUiId( self.moduleName + 'content' ), // string 
            'element'               :   'div',              // html element type 
        };                                                  // done named array  
        self.modules = {};                                  // named array
        // DONE MEMBERS     
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void
            
            // debug
            self.debug( 'content module construct' );
 
            // create html
            self.createHtml();
 
            // create content
            self.createContent();
 
        // DONE FUNCTION: construct( void ) void
        };
        self.createHtml = function() {
        // FUNCTION: createHtml( void ) void

            // create container
            buttonApp.prependContainer( document.body, self.containerOptions );
            
            // add content to container
            buttonApp.appendContainer( self.containerOptions['id'], self.contentOptions );
        
        // DONE FUNCTION: createHtml( void ) void
        };
        self.createContent = function() {
        // FUNCTION: createContent( void ) void

            // create title
            self.createTitle();

            // create intro
            self.createIntro();

            // create example
            self.createExample();

        // DONE FUNCTION: createContent( void ) void
        };
        self.createTitle = function() {
        // FUNCTION: createTitle( void ) void

            // get title module
            let titleModule = buttonApp.content.titleModule;

            // create title module
            self.modules.title = new titleModule( self.contentOptions['id'] );

        // DONE FUNCTION: createTitle( void ) void
        };
        self.createIntro = function() {
        // FUNCTION: createIntro( void ) void

            // get intro module
            let introModule = buttonApp.content.introModule;

            // create intro module
            self.modules.intro = new introModule( self.contentOptions['id'] );

        // DONE FUNCTION: createIntro( void ) void
        };
        self.createExample = function() {
        // FUNCTION: createExample( void ) void

            // get example module
            let exampleModule = buttonApp.content.example.exampleModule;

            // create example module
            self.modules.example = new exampleModule( self.contentOptions['id'] );

        // DONE FUNCTION: createExample( void ) void
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
    // DONE MODULE: contentModule( void ) void 
    
})( buttonApp );
// done create module function
