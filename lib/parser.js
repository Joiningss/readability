
'use strict';

var validate = require( './validation' );

module.exports = function( Readability ) {

  /**
  * @public
  * @method
  * @version 0.0.1
  * @name getConfidence
  * @param {string} url Url to assess confidence
  * @param {function} success Success callback
  * @param {function} [failure] Failure callback, defaults to the success callback if not set
  * @desc Retrieves confidence index of a giver url, it represents how confident Readability is about parsing the target url
  * @see {@link http://www.readability.com/developers/api/parser#idp70864|Readability}
  */


  Readability.prototype.getConfidence = function( url, success, failure ) {

    /**
    * @see {@link validate}
    */

    if( ! validate({ ressource : url, success : success }) ) {

      return;

    }

    if( ! failure || 'function' !== typeof failure ) {

      failure = success;

    }

    this.confidence({

      token : this.parserToken,
      url   : url

    }).get( function( err, data ) {

      if( ! err ) {

        success( data );
        return;

      }

      failure( err, data );

    });

  };

  /**
  * @public
  * @method
  * @version 0.0.1
  * @param {string} url Url to parse
  * @param {function} success Success callback
  * @param {function} [failure] Failure callback, defaults to the success callback if not set
  * @desc Sends an url to Readability to be parsed
  * @see {@link http://www.readability.com/developers/api/parser#idp37344|Readability}
  */


  Readability.prototype.getParsedUrl = function( url, params, success, failure ) {

    if( 'function' === typeof params ) {

      failure = success;
      success = params;

    }

    /**
    * @see {@link validate}
    */


    if( ! validate({ ressource : url, success : success }) ) {

      return;
    }

    if( ! failure || 'function' !== typeof failure ) {

      failure = success;

    }

    this.parser({

      token : this.parserToken,
      url   : url

    }).get( function( err, data ) {

      if( ! err ) {

        success( data );
        return;

      }

      failure( err, data );

    });


  };


  return Readability;

};
