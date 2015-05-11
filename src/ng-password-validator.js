'use strict';

(function () {

    angular.module('ngValidators')
        .directive('ngPasswordValidator', function () {
            return {
                restrict: 'A',
                require: 'ngModel',
                scope: {
                    ngPasswordValidator: '@'
                },
                link: function ($scope, element, attributes, controller) {

                    var pattern = '\\w*',
                        validatorString = $scope.ngPasswordValidator,
                        i = validatorString.length;

                    while (i--) {
                        switch (validatorString[i]) {
                            case 'u': pattern = '(?=.*?[A-Z])' + pattern; break;
                            case 'l': pattern = '(?=.*?[a-z])' + pattern; break;
                            case 'n': pattern = '(?=.*?\\d)' + pattern; break;
                            default:
                                var count = parseInt(validatorString[i]);
                                pattern = '(?=\\w{' + count + ',}$)' + pattern;
                                break;
                        }
                    }

                    pattern = new RegExp('^' + pattern + '$');

                    controller.$parsers.unshift(function (value) {
                        controller.$setValidity('passwordValidator', pattern.test(value));

                        return value;
                    });

                }
            };
        });

}());
