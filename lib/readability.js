
/*jshint loopfunc: true*/

'use strict';

var VERSION     = '0.0.1',
  // OAuth       = require( 'oauth' ),
  fermata     = require( 'fermata' );


/**
* @constructor
* @version 0.0.1
* @param {Object} [params] Optional if only using the shortener API
*/

var Readability = function( params ) {

  params = params ? params : {};


  // Api root
  var http = fermata.json( 'http://readability.com/api' ),
    https = fermata.json( 'https://readability.com/api' );

  // Shortener API
  this.shortener = http( ['shortener/v1/urls'] );

  // Parser API
  this.confidence = http( ['content/v1/confidence'] );
  this.parser = https( ['content/v1/parser'] );

  // Rest API : TODO

  var defaults = {

    // parser API client
    parserToken    : null,

    // reader client
    readerClient   : null,
    readerSecret   : null

  };

  // Overwrite defaults
  for( var param in defaults ) {

    this[ param ] = ( !! params[ param ] ) ? params[ param ] : defaults[ param ];

  }

};

require( './parser' )( Readability );
require( './shortener' )( Readability );
require( './reader' )( Readability );

Readability.VERSION = VERSION;
module.exports = Readability;
