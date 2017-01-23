var app = angular.module('app',['ngResource','ui.router']);

app.config(function($stateProvider){
    var sleepPageState = {
            name: 'sleepPage',
            url: '/sleepPage',
            templateUrl: '../views/sleepPage.tpl.html'
        },
        exercisePageState = {
            name: 'exercisePage',
            url: '/exercisePage',
            templateUrl: '../views/exercisePage.tpl.html'
        },
        dietPageState = {
            name: 'dietPage',
            url: '/dietPage',
            templateUrl: '../views/dietPage.tpl.html'
        },
        frontPageState = {
            name: 'frontPage',
            url: '/frontPage',
            templateUrl: '../views/frontPage.tpl.html'
        };

    $stateProvider.state(sleepPageState);
    $stateProvider.state(exercisePageState);
    $stateProvider.state(dietPageState);
    $stateProvider.state(frontPageState);
});
