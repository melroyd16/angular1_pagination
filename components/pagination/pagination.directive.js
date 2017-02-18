(function () {
    'use strict';
    angular
        .module('paymentsApp')
        .directive('pagination', paginationDirective);

    function  paginationDirective() {
        var directive = {
            controller: paginationController,
            templateUrl: 'components/pagination/pagination.directive.html',
            restrict: 'EA',
            scope: {
                pageSize : '=pageSize',
                offset : '=offset',
                listSize : '=listSize'
            }
        };
        return directive;
    }

    paginationController.$inject = ['$scope'];

    function paginationController($scope) {
        $scope.pageLimitOptions = [3 ,5 ,10 ,15];
           
        $scope.generateDropDown = function(){
            $scope.paginationDropDown = [];
            if($scope.pageSize!=undefined && $scope.listSize!=undefined) {
                $scope.offset = 0;
                for(var i = 1; i <= $scope.listSize; i += $scope.pageSize) {
                    $scope.paginationDropDown.push({
                        text : i + "-" + ((i + $scope.pageSize - 1) > $scope.listSize ? $scope.listSize : (i + $scope.pageSize - 1)),
                        offset : i - 1
                    })
                }
            }
        }
        $scope.$watch('pageSize',$scope.generateDropDown,true);
        $scope.$watch('listSize',$scope.generateDropDown,true);
    }
})();