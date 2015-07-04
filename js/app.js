var app = angular.module('gitHubIssues', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'js/views/home.html'
        })
        .state('details', {
            url: '/details',
            templateUrl: 'js/views/details.html'
        });
});