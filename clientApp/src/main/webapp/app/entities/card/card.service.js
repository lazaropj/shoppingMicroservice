(function() {
    'use strict';
    angular
        .module('clientApp')
        .factory('Card', Card);

    Card.$inject = ['$resource', 'DateUtils'];

    function Card ($resource, DateUtils) {
        var resourceUrl =  'checkoutapp/' + 'api/cards/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                        data.experationDate = DateUtils.convertLocalDateFromServer(data.experationDate);
                    }
                    return data;
                }
            },
            'update': {
                method: 'PUT',
                transformRequest: function (data) {
                    var copy = angular.copy(data);
                    copy.experationDate = DateUtils.convertLocalDateToServer(copy.experationDate);
                    return angular.toJson(copy);
                }
            },
            'save': {
                method: 'POST',
                transformRequest: function (data) {
                    var copy = angular.copy(data);
                    copy.experationDate = DateUtils.convertLocalDateToServer(copy.experationDate);
                    return angular.toJson(copy);
                }
            }
        });
    }
})();
