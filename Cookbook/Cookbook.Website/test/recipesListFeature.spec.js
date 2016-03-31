describe('Feature: recipes list', function () {
    var $controller,
        $httpBackend,
        $rootScope,
        controller;

    beforeEach(function () {
        module('cookbook');
        inject(function (_$controller_, _$httpBackend_, _$rootScope_, recipesService) {
            $controller = _$controller_;
            $httpBackend = _$httpBackend_;
            $rootScope = _$rootScope_;

            setupTestData();

            controller = $controller('recipesController', {
                recipesService: recipesService
            });
        });
    });

    it('should display a list of recipes', function () {
        $rootScope.$apply();
        $httpBackend.flush();

        expect(controller.recipes[0]).toEqual({
            title: "Chili con carne",
            rating: 4
        });
        expect(controller.recipes[1]).toEqual({
            title: "Nacho's",
            rating: 5
        });
        expect(controller.recipes[2]).toEqual({
            title: "Andijviestampot",
            rating: 2
        });
    });

    function setupTestData() {
        $httpBackend.whenGET('/recipes')
            .respond({
                data: [
                    { title: "Chili con carne", rating: 4 },
                    { title: "Nacho's", rating: 5 },
                    { title: "Andijviestampot", rating: 2 }
                ]
            });
    }

});
