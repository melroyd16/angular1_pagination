/*global angular*/
(function () {
    'use strict';
    angular
        .module('paymentsApp')
        .factory('paymentsService', paymentsService);

    paymentsService.$inject = ['$http'];

    function paymentsService($http) {
        var exports = {
            getPayments: getPayments
        };
        function getPayments() {
            return $http.get('json/txn_results.json');
        }
        return exports;    
    }
})();