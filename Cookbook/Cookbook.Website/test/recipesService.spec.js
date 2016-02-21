describe('recipesService', function () {
    var $controller,
        $httpBackend,
        $rootScope,
        recipesService;

    beforeEach(function () {
        module('cookbook');
        inject(function (_$controller_, _$httpBackend_, _$rootScope_, _recipesService_) {
            $controller = _$controller_;
            $httpBackend = _$httpBackend_;
            $rootScope = _$rootScope_;
            recipesService = _recipesService_;
        });
    });

    it('should return recipes from the api', function () {
        $httpBackend.whenGET("/recipes")
            .respond({
                data: [
                    { title: 'Test title', rating: 4}
                ]
            });
        recipesService.getRecipes()
            .then(function (response) {
                expect(response.data[0].title).toBe('Test title');
            });
        $httpBackend.flush();
    });
});
