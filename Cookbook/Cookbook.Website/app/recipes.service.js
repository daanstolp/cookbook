(function () {
    'use strict';

    angular
        .module('cookbook')
        .service('recipesService', recipesService);

    recipesService.$inject = ['$http'];

    function recipesService($http) {
        var ref = this;

        ref.getRecipes = getRecipes;

        function getRecipes() { }
    }
})();