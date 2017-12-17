(function() {
    'use strict';

    angular
        .module('clientApp')
        .controller('CartDeleteController',CartDeleteController);

    CartDeleteController.$inject = ['$uibModalInstance', 'entity', 'Cart'];

    function CartDeleteController($uibModalInstance, entity, Cart) {
        var vm = this;

        vm.cart = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            Cart.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
