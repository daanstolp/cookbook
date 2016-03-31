(function () {
    'use strict';

    angular
        .module('cookbook')
        .factory('recipesService', recipesService);

    recipesService.$inject = ['$http', '$q'];

    function recipesService($http, $q) {
        var recipesService = {
            getRecipes: getRecipes
        };

        return recipesService;

        ////////////

        function getRecipes() {
            var deferral = $q.defer();

            $http.get('/recipes')
                .then(function (result) {
                    deferral.resolve(result.data);
                }, function (error) {
                    deferral.reject();
                });

            return deferral.promise;
        }
    }
})();