/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.home')
        .controller('HomePageCtrl', HomePageCtrl);

    /** @ngInject */
    function HomePageCtrl($scope, $filter, $timeout, $interval, editableOptions, editableThemes, trains) {

        var getTrains = function() {
            trains.getDepartures().then(function(res) {

                res.data.departures.all.forEach(function(train) {
                    if (train.expected_departure_time) {
                        var t = train.expected_departure_time.split(":");
                    } else {
                        var t = train.aimed_departure_time.split(":");
                    }
                    train.mins = parseInt(t[0] * 60) + parseInt(t[1]);
                })

                $scope.departures = res.data.departures.all;
            });
            $timeout(getTrains, 120000);
        }

        getTrains();

        var tick = function() {
            $scope.clock = Date.now();
            var d = new Date();
            $scope.mins = (d.getHours() * 60) + d.getMinutes();
        }
        tick();
        $interval(tick, 1000);

    }

})();