(function() {
    'use strict';

    angular
        .module('clientApp')
        .controller('CartDialogController', CartDialogController);

    CartDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'Cart', 'Product'];

    function CartDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, Cart, Product) {
        var vm = this;

        vm.cart = entity;
        vm.clear = clear;
        vm.save = save;
        vm.products = Product.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.cart.id !== null) {
                Cart.update(vm.cart, onSaveSuccess, onSaveError);
            } else {
                Cart.save(vm.cart, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('clientApp:cartUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
