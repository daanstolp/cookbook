describe('recipesController', function () {
    var $controller,
        $httpBackend,
        $rootScope,
        recipesService,
        recipesController;

    beforeEach(function () {
        module('cookbook');
        inject(function (_$controller_, _$httpBackend_, _$rootScope_, _recipesService_, $q) {
            $controller = _$controller_;
            $httpBackend = _$httpBackend_;
            $rootScope = _$rootScope_;
            recipesService = _recipesService_;

            var deferred = $q.defer();
            deferred.resolve({ data: [{ title: "Test Recipe" }] });
            var testData = deferred.promise;

            spyOn(recipesService, 'getRecipes').and.returnValue(testData);

            recipesController = $controller('recipesController');
        });
    });

    it('should get a list of recipes from the service', function () {
        $rootScope.$apply();

        expect(recipesService.getRecipes.calls.count()).toBe(1);
        expect(recipesController.recipes.length).toBe(1);
    });
});
