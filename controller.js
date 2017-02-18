/*global angular*/
/**
 * @author Melroy Dmello m_dmello@live.com 
 */
(function () {
    'use strict';
    angular
        .module('paymentsApp', [])
        .controller('paymentsController', paymentsController);

    paymentsController.$inject = ['paymentsService','$http'];

    function paymentsController(paymentsService,$http) {

        var paymentsCtrl = this;

        // Below are the variables of paymentsController
        
        paymentsCtrl.sortOrder      = "";
        paymentsCtrl.pageSize       = 10;
        paymentsCtrl.pageOffset     = 0;
        paymentsCtrl.alterSortOrder = alterSortOrder;

        // Invoking a service call to fetch data from JSON file
        paymentsService.getPayments().success(function (data) {
            paymentsCtrl.paymentsList = data.payments;
        });

        // function to change the sort order
        function alterSortOrder(newSortOrder) {
            paymentsCtrl.sortOrder = newSortOrder;
        }
        
        var query ="http://alfred.ngrok.io/UnivGeneral/query?query="+encodeURI("SELECT ?subject ?predicate ?object WHERE {?subject ?predicate ?object.}LIMIT 25")+ "&format=json";
        $http.get(query).success(function(data){
            console.log(data);
        })
    }
})();