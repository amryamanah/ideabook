/**
 * Created with JetBrains PhpStorm.
 * User: amryfitra
 * Date: 12/3/12
 * Time: 11:30 PM
 * To change this template use File | Settings | File Templates.
 */
"use strict";

window.onload = function () {
  var $rootElement = angular.element(window.document);
  var modules = [
    'ng',
    'MyApp',
    function($provide) {
      $provide.value('$rootElement', $rootElement)
    }
  ];

  var $injector = angular.injector(modules);

  var $compile = $injector.get('$compile');
  var compositeLinkFn = $compile($rootElement);

  var $rootScope = $injector.get('$rootScope');
  compositeLinkFn($rootScope);

  $rootScope.$apply();

}
