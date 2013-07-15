
/*jshint expr: true, unused: false*/

'use strict';

var should = require( 'should' ),
  Readability = require( '../index' );


describe( 'Redability instance', function() {

  var readability;

  it( 'should have default params', function( done ) {

    readability = new Readability();

    readability.should.have.property( 'parserToken', null );
    readability.should.have.property( 'readerClient', null );
    readability.should.have.property( 'readerSecret', null );

    done();

  });

  it( 'should override default params on instanciation', function( done ) {

    readability = new Readability({

      parserToken : 'PARSER_TOKEN',
      readerClient: 'READER_CLIENT',
      readerSecret: 'READER_SECRET'

    });

    readability.should.have.property( 'parserToken', 'PARSER_TOKEN' );
    readability.should.have.property( 'readerClient', 'READER_CLIENT' );
    readability.should.have.property( 'readerSecret', 'READER_SECRET' );

    done();

  });

  it( 'should override default params after instanciation', function( done ) {

    readability = new Readability();

    readability.parserToken = 'PARSER_TOKEN';
    readability.should.have.property( 'parserToken', 'PARSER_TOKEN' );

    done();

  });

});

