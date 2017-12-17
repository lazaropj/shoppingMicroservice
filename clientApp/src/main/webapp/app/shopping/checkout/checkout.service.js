(function() {
    'use strict';
    angular
        .module('clientApp')
        .factory('Checkout', Checkout);

    Checkout.$inject = ['$resource', 'DateUtils'];

    function Checkout ($resource, DateUtils) {
        var resourceUrl =  'checkoutapp/' + 'api/cards/getCart';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET'}
        });
    }
})();
