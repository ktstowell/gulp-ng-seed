'use strict';

/***********************************************************************************************************************************************
 * APP_NAME ENTRY
 ***********************************************************************************************************************************************
 * @description
 */
angular.module('APP_NAME', [
  'ngRoute',
  'APP_NAME.Main'
]).service('APP_NAME', ['APP_NAME.Modules', 'APP_NAME.System', function(Modules, System) {
  return {
    Modules: Modules,
    System: System
  };
}]);