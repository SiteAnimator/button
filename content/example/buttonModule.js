/*
        @package    SiteAnimator/Modules/Button
  
        file:       buttonModule.js
        function:   Generates a button, 
                    a checkbox to disable / enable the button,
                    an output to show the events.
  
        Last revision: 12-09-2022
 
*/

// create module function
( function( buttonApp ){
        
    // MODULE: buttonModule( html element id: parentId ) void 
    buttonApp.content.example.buttonModule = function( parentId ) {
        
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object
        self.moduleName = 'buttonModule';                   // string
        self.debugOn = true;                                // boolean
        self.parentId = parentId;                           // html element id
        self.containerOptions = {                           // named array 
            'id'                    :    buttonApp.getUiId( self.moduleName + 'Container' ),   // string 
            'element'               :   'div',              // html element type 
            'backgroundColor'       :   'transparent',      // css
        };                                                  // done named array  
        self.topPanelOptions = {                            // named array 
            'id'                    :    buttonApp.getUiId( self.moduleName + 'TopPanel' ),     // string 
            'element'               :   'div',              // html element type 
            'padding'               :   '10px',             // css
            'display'               :   'flex',             // css
            'flexWrap'              :   'wrap',             // css
            'justifyContent'        :   'center',           // css
            'backgroundColor'       :   'transparent',      // css
        };                                                  // done named array  
        self.bottomPanelOptions = {                         // named array 
            'id'                    :    buttonApp.getUiId( self.moduleName + 'BottomPanel' ),     // string 
            'element'               :   'div',              // html element type 
            'padding'               :   '10px',             // css
            'backgroundColor'       :   'transparent',      // css
        };                                                  // done named array  
        self.buttonOptions = {                              // named array 
            'id'                    :    buttonApp.getUiId( self.moduleName + 'Button' ),     // string 
            'element'               :   'div',              // html element type 
            'text'                  :   'Button',           // string 
            'display'               :   'table',            // css 
            'padding'               :   '6px 12px',         // css
            'backgroundColor'       :   'teal',             // css
            'border'                :   'true',             // boolean
            'borderColor'           :   'black',            // css
            'borderWidth'           :   '1px',              // css
            'borderStyle'           :   'solid',            // css
            'borderRadius'          :   '4px',              // css
            'marginRight'           :   '20px',             // css
            'colors' : {                                    // named array
                'color'             :   'white',            // color
                'highlight'         :   'blue',             // color
                'disabled'          :   'gray',             // color
                'background' : {                            // named array
                    'color'         :   'teal',             // color
                    'highlight'     :   'white',            // color
                    'disabled'      :   'silver'            // color
                },                                          // done named array
                'border' : {                                // named array    
                    'color'         :   'teal',             // color
                    'highlight'     :   'red',              // color
                    'disabled'      :   'gray'              // color
                }                                           // done named array
            },                                              // done named array
            'cursor'                :   'pointer',          // css
            'state' : {                                     // named array
                'enabled'           :  true                 // boolean
            },                                              // done named array
        };                                                  // done named array  
        self.enableCheckboxOptions = {                      // named array 
            'id'                    :    buttonApp.getUiId( self.moduleName + 'Checkbox' ),     // string 
            'element'               :   'input',            // html element type 
            'type'                  :   'checkbox',         // input type 
            'text'                  :   'enabled',          // string 
            'checked'               :   true,               // css
            'marginTop'             :   '-8px',             // css
        };                                                  // done named array  
        self.outputOptions = {                              // named array 
            'id'                    :    buttonApp.getUiId( self.moduleName + 'Output' ),     // string 
            'element'               :   'div',              // html element type 
            'display'               :   'table',            // css 
            'text'                  :   'Nothing happening.', // string 
            'padding'               :   '6px 12px',         // css
            'backgroundColor'       :   'teal',             // css
            'border'                :   'true',             // boolean
            'borderColor'           :   'black',            // css
            'borderWidth'           :   '1px',              // css
            'borderStyle'           :   'solid',            // css
            'borderRadius'          :   '4px',              // css
            'margin'                :   '20px auto',        // css
        };                                                  // done named array  
        self.eventOptions = {                               // named array 
            'timerId'               :   null,               // timer id / null
            'delay'                 :   1500,               // integer
        };                                                  // done named array  
        self.messages = {                                   // named array 
            'noAction'              :   'Nothing happening',// string
            'mouseOver'             :   'Mouse is over',    // string
            'mouseOut'              :   'Mouse is out',     // string
            'click'                 :   'Button clicked',   // string
            'disable'               :   'Button disabled',  // string
            'enable'                :   'Button enabled',   // string
        };                                                  // done named array  
        self.modules = {};                                  // named array
        // DONE MEMBERS     
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void
            
            // debug
            self.debug( 'button module construct' );
 
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
            
        // DONE FUNCTION: createHtml( void ) void
        };
        self.createContent = function() {
        // FUNCTION: createContent( void ) void

            // create panels
            self.createPanels();
            
            // create button
            self.createButton();
            
            // create enable checkbox
            self.createEnableCheckbox();
            
            // create output
            self.createOutput();
            
        // DONE FUNCTION: createContent( void ) void
        };
        self.createPanels = function() {
        // FUNCTION: createPanels( void ) void

            // create top panel
            buttonApp.appendContainer( self.containerOptions['id'], self.topPanelOptions );
            
            // create bottom panel
            buttonApp.appendContainer( self.containerOptions['id'], self.bottomPanelOptions );
            
        // DONE FUNCTION: createPanels( void ) void
        };
        self.createButton = function() {
        // FUNCTION: createButton( void ) void

            // get button module
            let buttonModule = buttonApp.service.buttonModule;
            
            // create callbacks
            let callbacks = {
                'mouseOver'     :   self.mouseOver,
                'mouseOut'      :   self.mouseOut,
                'click'         :   self.click
            };
            // create callbacks
            
            // add button
            self.modules['button'] = new buttonModule( self.topPanelOptions['id'],
                                                       self.buttonOptions,
                                                       callbacks );
            // add button

        // DONE FUNCTION: createButton( void ) void
        };
        self.mouseOver = function( event, options ) {
        // FUNCTION: mouseOver( event: event, named array: options ) void

            // show output
            self.showOutput( self.messages['mouseOver'] );
            
        // DONE FUNCTION: mouseOver( event: event, named array: options ) void
        };
        self.mouseOut = function( event, options ) {
        // FUNCTION: mouseOut( event: event, named array: options ) void

            // show output
            self.showOutput( self.messages['mouseOut'] );
            
        // DONE FUNCTION: mouseOut( event: event, named array: options ) void
        };
        self.click = function( event, options ) {
        // FUNCTION: click( event: event, named array: options ) void

            // show output
            self.showOutput( self.messages['click'] );
            
        // DONE FUNCTION: click( event: event, named array: options ) void
        };
        self.createEnableCheckbox = function() {
        // FUNCTION: createEnableCheckbox( void ) void

            // create enable checkbox
            buttonApp.appendContainer( self.topPanelOptions['id'], self.enableCheckboxOptions );
            
            // add change
            buttonApp.getElementById( self.enableCheckboxOptions['id'] ).addEventListener( 'change' , self.enableCheckboxChanged );
                
        // DONE FUNCTION: createEnableCheckbox( void ) void
        };
        self.enableCheckboxChanged = function() {
        // FUNCTION: enableCheckboxChanged( event: event ) void

            // is checked
            if( buttonApp.getElementById( self.enableCheckboxOptions['id'] ).checked ){
                
                // show output
                self.showOutput( self.messages['enable'] );
            
                // disable button
                self.modules['button'].enable();

                // done
                return;
                
            }
            // is checked

            // show output
            self.showOutput( self.messages['disable'] );
            
            // disable button
            self.modules['button'].disable();

        // DONE FUNCTION: enableCheckboxChanged( event: event ) void
        };
        self.createOutput = function() {
        // FUNCTION: createOutput( void ) void

            // create output
            buttonApp.appendContainer( self.bottomPanelOptions['id'], self.outputOptions );
            
        // DONE FUNCTION: createOutput( void ) void
        };
        self.showOutput = function( message ) {
        // FUNCTION: showOutput( string: message ) void

            // clear timer
            self.clearOutputTimer();

            // set text
            buttonApp.getElementById( self.outputOptions['id'] ).innerHTML = message;

            // get event options
            let eventOptions = self.eventOptions;

            // set timer
            eventOptions['timerId'] = setTimeout( self.resetOutput, eventOptions['delay'] );

        // DONE FUNCTION: showOutput( string: message ) void
        };
        self.resetOutput = function() {
        // FUNCTION: resetOutput( void ) void

            // set text
            buttonApp.getElementById( self.outputOptions['id'] ).innerHTML = self.messages['noAction'];

        // DONE FUNCTION: resetOutput( void ) void
        };
        self.clearOutputTimer = function() {
        // FUNCTION: clearOutputTimer( void ) void

            // timer is set
            if( self.eventOptions['timerId'] !== null ){

                // clear timer
                clearTimeout( self.eventOptions['timerId'] );
                
            }
            // timer is set

        // DONE FUNCTION: clearOutputTimer( void ) void
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
    // DONE MODULE: buttonModule( html element id: parentId  ) void 
    
})( buttonApp );
// done create module function
