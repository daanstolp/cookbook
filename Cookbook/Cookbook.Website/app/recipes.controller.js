(function () {
    'use strict';

    angular
        .module('cookbook')
        .controller('recipesController', recipesController);

    recipesController.$inject = ['recipesService'];

    function recipesController(recipesService) {
        var vm = this;
        vm.recipes = [];

        activate();

        function activate() {
            recipesService.getRecipes()
                .then(function (recipes) {
                    vm.recipes = recipes.data;
                });
        }
    }
})();
