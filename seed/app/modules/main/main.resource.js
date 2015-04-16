'use strict';

/***********************************************************************************************************************************************
 * APP_NAME MAIN RESOURCE
 ***********************************************************************************************************************************************
 * @description
 */
angular.module('APP_NAME.Main')
  .service('APP_NAME.Modules.Main.Resource', ['$http', function($http) {
    //
    // MAIN RESOURCE NAMESPACE
    //------------------------------------------------------------------------------------------//
    // @description
    var Resource = {url: 'http://www.api.com/'};

    //
    // MAIN RESOURCE API
    //------------------------------------------------------------------------------------------//
    // @description

    /**
     * GET
     * @returns {*}
     */
    Resource.get = function() {
      return $http({method: 'GET', url: Resource.url});
    };

    /**
     * PUT
     * @param data
     * @returns {*}
     */
    Resource.put = function(data) {
      return $http({method: 'PUT', url: Resource.url, data: data});
    };

    /**
     * POST
     * @param data
     * @returns {*}
     */
    Resource.post = function(data) {
      return $http({method: 'POST', url: Resource.url, data: data});
    };

    /**
     * DELETE
     * @returns {*}
     */
    Resource.delete = function() {
      return $http({method: 'DELETE', url: Resource.url});
    };

    // Expose resource
    return Resource;
  }]);