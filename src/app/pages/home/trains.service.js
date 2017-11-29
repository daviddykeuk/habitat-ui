/**
 * @author v.lugovsky
 * created on 03.05.2016
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.theme')
        .service('trains', trains);

    /** @ngInject */
    function trains($http) {

        this.getDepartures = function() {
            return $http.get("http://stavenet.ddns.net:2241/web/v1/departures");
        }
    }

})();