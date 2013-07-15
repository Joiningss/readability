
'use strict';

var validate = require( './validation' );

module.exports = function( Readability ) {

  /**
  * @public
  * @method
  * @version 0.0.1
  * @param {string} url Url to shorten
  * @param {function} success Success callback
  * @param {function} [failure] Failure callback, defaults to the success callback if not set
  * @desc Sends an url to Readability to be parsed
  * @see {@link http://readability.com/developers/api/shortener#idp4608|Readability}
  */


  Readability.prototype.shortenUrl = function( url, success, failure ) {

    /**
    * @see {@link validate}
    */

    if( ! validate({ ressource : url, success : success }) ) {

      return;
    }

    if( ! failure || 'function' !== typeof failure ) {

      failure = success;

    }

    this.shortener.post({

      'Content-Type' : 'multipart/form-data'

    },{

      url : url

    }, function( err, data ) {

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
  * @param {string} url Url to shorten
  * @param {function} success Success callback
  * @param {function} [failure] Failure callback, defaults to the success callback if not set
  * @desc Sends an url to Readability to be parsed
  * @see {@link http://readability.com/developers/api/shortener#idp46784|Readability}
  */


  Readability.prototype.getShortenedUrlById = function( id, success, failure ) {

    /**
    * @see {@link validate}
    */

    if( ! validate({ ressource : id, success : success }) ) {

      return;

    }

    if( ! failure || 'function' !== typeof failure ) {

      failure = success;

    }

    this.shortener[ id ].get( function( err, data ) {

      if( ! err ) {

        success( data );
        return;

      }

      failure( err, data );


    });


  };

  return Readability;

};
