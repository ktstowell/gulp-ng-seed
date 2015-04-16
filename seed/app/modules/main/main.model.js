'use strict';

/***********************************************************************************************************************************************
 * APP_NAME MAIN MODEL
 ***********************************************************************************************************************************************
 * @description
 */
angular.module('APP_NAME.Main')
  .service('APP_NAME.Modules.Main.Model', ['APP_NAME.System', 'APP_NAME.Modules.Main.Resource', function(System, Resource) {
    //
    // MAIN MODEL NAMESPACE
    //------------------------------------------------------------------------------------------//
    // @description
    var Model = new System.Struct.Array();

    // Expose Model
    return Model;
  }]);