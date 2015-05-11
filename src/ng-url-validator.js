'use strict';

(function () {

    angular.module('ngValidators')
        .directive('ngUrlValidator', function () {
            return {
                restrict: 'A',
                require: 'ngModel',
                link: function ($scope, element, attributes, controller) {

                    var pattern = /^https?:\/\/(([a-z0-9][a-z0-9_-]*)(\.[a-z0-9][a-z0-9_-]*)+)/i;

                    controller.$parsers.unshift(function (value) {
                        controller.$setValidity('urlValidator', pattern.test(value));

                        return value;
                    });

                }
            };
        });

}());
