
function reinitAngular() {
    console.log('reinitAngular called');
    var injector = $('[ng-app]').injector();
    var $compile = injector.get('$compile');
    var $rootScope = injector.get('$rootScope');


    var appElement = $('[ng-app]');


    $compile(appElement)($rootScope);
    $rootScope.$digest();
}



var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});