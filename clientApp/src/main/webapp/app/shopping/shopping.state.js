(function() {
    'use strict';

    angular
        .module('clientApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('shopping', {
            abstract: true,
            parent: 'app'
        });
    }
})();
