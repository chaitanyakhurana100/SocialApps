/**
 * Created by Swati Bhalla on 12/20/2014.
 */
var socialApp=angular.module('socialApp',['ngRoute'])
    .config(function($routeProvider){
        $routeProvider.when('/',
            {
                controller:'allApps',
                templateUrl:'views/homeview.html'
            })
            .when('/submitApp',
            {
                controller:'userActionController',
                templateUrl:'views/submitApp.html'
            })
            .when('/signUp',
            {
                controller:'navBarController',
                templateUrl:'views/signUpView.html'
            })
            .when('/userPage',
            {
                controller:'navBarController',
                templateUrl:'views/signUpView.html'
            })

        .otherwise({redirectTo:'/'});
    })
.controller('allApps', function($scope) {
        $scope.appList = [
            {
                'appName':'Track My Car',
                'appDesc':'Track My Car allows a user to park (save location) and later track (find route) the car. ',
                'appIcon':'images/trackmycar.png'
            },
            {
                'appName':'Markdown',
                'appDesc':'Track My Car allows a user to park (save location) and later track (find route) the car. ',
                'appIcon':'images/trackmycar.png'
            },
            {
                'appName':'App3',
                'appDesc':'Track My Car allows a user to park (save location) and later track (find route) the car. ',
                'appIcon':'images/trackmycar.png'
            },
            {
                'appName':'App4',
                'appDesc':'Track My Car allows a user to park (save location) and later track (find route) the car. ',
                'appIcon':'images/trackmycar.png'
            },
            {
                'appName':'App5',
                'appDesc':'Track My Car allows a user to park (save location) and later track (find route) the car. ',
                'appIcon':'images/trackmycar.png'
            }
        ];

    })
    .controller('userActionController', function($scope){

        $scope.uploadAndroid = function(){

            if($scope.hasAndroid && ($scope.userAction=="socialapps" || $scope.userAction=="socialthird" ))
                return true;
            else return false;
        }
        $scope.uploadIos = function(){
            if($scope.hasIos && ($scope.userAction=="socialapps" || $scope.userAction=="socialthird"  ))
                return true;
            else return false;
        }
        $scope.uploadWindows = function(){
            if($scope.hasWindows && ($scope.userAction=="socialapps" || $scope.userAction=="socialthird"  ))
                return true;
            else return false;
        }
        $scope.linkAndroid = function(){
            if($scope.hasAndroid && ($scope.userAction=="thirdparty" || $scope.userAction=="socialthird"))
                return true;
            else return false;
        }
        $scope.linkIos =function(){
            if($scope.hasIos && ($scope.userAction=="thirdparty" || $scope.userAction=="socialthird"))
                return true;
            else return false;
        }
        $scope.linkWindows = function(){
            if($scope.hasWindows && ($scope.userAction=="thirdparty" || $scope.userAction=="socialthird"))
                return true;
            else return false;
        }
    });

