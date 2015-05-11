'use strict';

(function () {

    angular.module('ngValidators')
        .directive('ngEqualValidator', function () {
            return {
                restrict: 'A',
                require: 'ngModel',
                scope: {
                    ngModel: '=',
                    ngEqualValidator: '='
                },
                link: function ($scope, element, attributes, controller) {

                    function validate(value) {
                        controller.$setValidity('equalValidator', value === $scope.ngEqualValidator);
                    }

                    controller.$parsers.unshift(function (value) {
                        validate(value);

                        return value;
                    });

                    $scope.$watch('ngEqualValidator', function () {
                        validate($scope.ngModel);
                    }, true);
                }
            };
        });

}());
