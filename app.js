const app = angular.module('app', []);
app.directive('helloTo', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttrs) {
            console.log('-------------- compile -----------------');
            console.dir(tElement);
            console.dir(tAttrs);
            return {
                pre: function preLink(scope, iElement, iAttrs, controller) {
                    console.log('-------------- preLink -----------------');
                    console.dir(scope);
                    console.dir(iElement);
                    console.dir(iAttrs);
                    console.dir(controller);
                },
                post: function postLink(scope, iElement, iAttrs, controller) {
                    console.log('-------------- postLink -----------------');
                    console.dir(scope);
                    console.dir(iElement);
                    console.dir(iAttrs);
                    console.dir(controller);
                }
            }
        },
        controller: function ($scope, $element, $attrs) {
            console.log('------------- controller ----------------');
            console.dir($scope);
            console.dir($element);
            console.dir($attrs);
            $scope.userName = $attrs.helloTo;
        }
    }
});