(function() {
      'use strict';

      angular.module('routes', [
            'ui.router'
      ]).config(routes);

      function routes($stateProvider, $urlRouterProvider,$locationProvider){
            $locationProvider.hashPrefix('');
            $stateProvider.state('principal',{
                  url:'/principal',
                  templateUrl:'/js/app/principal/principal.html',
                  controller:'PrincipalController',
                  controllerAs:'vm'
            });
            $urlRouterProvider.otherwise("/principal");
      }
})();