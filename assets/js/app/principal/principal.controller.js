(function() {
'use strict';

      angular
            .module('app')
            .controller('PrincipalController', PrincipalController);

      PrincipalController.inject = ['$state'];
      function PrincipalController($state) {
            var vm = this;
            vm.holaMundo = 'Hola Mundo';

            ////////////////
      }
})();