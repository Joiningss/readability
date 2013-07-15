
/*jshint expr: true*/

'use strict';

var should = require( 'should' ),
  validate = require( '../lib/validation' );


describe( 'Validation:', function() {

  describe( 'All methods', function() {

    it( 'should fail when there are less than two variables', function( done ) {

      try {

        validate({}).should.throw();

      }
      catch( err ) {

        should.equal( 'Expecting at least a ressource and a callback', err.message );

      }

      done();

    });

    it( 'should fail if the first parameter is not a string', function( done ) {

      try {

        validate({

          ressource : 1,
          success : function() {}

        }).should.throw();

      }
      catch( err ) {

        should.equal( 'Expecting at least a ressource and a callback', err.message );

      }

      done();

    });


    it( 'should fail if the second parameter is not a function', function( done ) {

      try {

        validate({

          ressource : 'string',
          success : 'not a function'

        }).should.throw();

      }
      catch( err ) {

        should.equal( 'Expecting at least a ressource and a callback', err.message );

      }

      done();

    });

    it( 'should pass if the first parameter is a string and the second one a function', function( done ) {

      var result = validate({

        ressource : 'string',
        success : function() {}

      });

      result.should.be.true;

      done();

    });

  });

});
