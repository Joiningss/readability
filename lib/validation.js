
'use strict';

/**
* @private
* @version 0.0.1
* @param {Object} arguments Object containing an url and a success parameter
* @desc Checks if the minimal number of arguments is present, most of the calls need at least an url and a callback function
* @returns {Boolean} Returns if the minimal amount of arguments is valid or not
*/

module.exports = function( params ) {

  if(
    ! params.ressource ||
    'string' !== typeof params.ressource ||
    ! params.success ||
    'function' !== typeof params.success
  ) {

    throw new Error( 'Expecting at least a ressource and a callback' );

  }

  return true;

};
