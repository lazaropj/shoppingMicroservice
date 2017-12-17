(function() {
    'use strict';
    angular
        .module('clientApp')
        .factory('Cart', Cart);

    Cart.$inject = ['$resource'];

    function Cart ($resource) {
        var resourceUrl =  'productapp/' + 'api/carts/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
