'use strict';

/***********************************************************************************************************************************************
 * APP_NAME SYSTEM STRUCT ARRAY
 ***********************************************************************************************************************************************
 * @description
 */
angular.module('APP_NAME.System.Structs')
  .service('APP_NAME.System.Structs.Array', function() {
    var Struct = {};

    Struct.Array = function(spec) {
      this.data = [];

      return this.data;
    };

    return Struct.Array;
  });