'use strict';

(function () {

    angular.module('ngValidators')
        .directive('ngEmailValidator', function () {
            return {
                restrict: 'A',
                require: 'ngModel',
                link: function ($scope, element, attributes, controller) {

                    var pattern = /^[a-zA-Z0-9!#$%&'*+\\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/;

                    controller.$parsers.unshift(function (value) {
                        controller.$setValidity('emailValidator', pattern.test(value));

                        return value;
                    });

                }
            };
        });

}());
