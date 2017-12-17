(function() {
    'use strict';

    angular
        .module('clientApp')
        .controller('CardDetailController', CardDetailController);

    CardDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Card'];

    function CardDetailController($scope, $rootScope, $stateParams, previousState, entity, Card) {
        var vm = this;

        vm.card = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('clientApp:cardUpdate', function(event, result) {
            vm.card = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
