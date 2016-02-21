xdescribe('Feature: recipes list', function () {
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

            $scope = $rootScope.$new();

            controller = $controller('recipesController', {
                $scope: $scope,
                recipesService: recipesService
            });
        });
    });

    it('should display a list of recipes', function () {
        $rootScope.$apply();

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
});
