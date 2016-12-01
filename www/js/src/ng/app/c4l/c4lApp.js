// Search Results Module

// TICKETS: DL-495, DL-476, DL-477, DL-475, DL-125, DL-467,

define(function (require) {

    var templatePath = js_base_url + "ng/app/results/templates/";

    // ----- requireJS dependencies ------ //
    require('jquery', 'moreless');
    var angular = require('angular'),
        ngRoute = require('ngRoute'),
        ngAnimate = require('ngAnimate'),
        dlFacets = require('facets'),
        dlPagination = require('pagination'),
        dlSavedItems = require('savedItems'),
        dlAnimations = require('animations'),
        dlFilters = require('filters'),
        dlThumbs = require('thumbnails'),
        dlD3charts = require('d3onebar'),
        i8 = require('services/i8'),

        dlServices = require('services/fieldService');
    dlServices = require('services/searchString');
    dlServices = require('services/esSearch');
    dlServices = require('services/collectionData');
    dlServices = require('services/responsive');
    dlServices = require('services/highlighter');


    // path to templates for directives

    var c4lApp = angular.module('c4lApp', [
            'ngRoute',
            'ngAnimate',
            // 'ngSanitize',
            'dlServices',
            'dlAnimations',
            'dlFilters',
            'dlFacets',
            'dlD3charts',
            'dlSavedItems',
            'dlPagination',
            'dlThumbs'
        ],
        ['$locationProvider', function ($locationProvider) {
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
        }],
        ['$routeProvider', function ($routeProvider) {
            reloadOnSearch(false);
        }]
    ).config(["$interpolateProvider", function ($interpolateProvider) {
            $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
        }]
    );

    c4lApp.boot = function () {
        angular.bootstrap(document, ['c4lApp']);
    };

    // UPDATE TEMPLATE CACHE (tCache service in services.js)
    c4lApp.run(['tCache', function (tCache) {
        tCache.clearCache();  // clear cache on dev
        tCache.templatePath = templatePath;
        tCache.getTemplates(['results-parent.html', 'results-list2.html', 'inner-results.html']);
    }]);


    // SEARCH CONTROLLER
    // search functionality and routing
    //*******************************************************//
    c4lApp.controller('searchController',
        ['esSearchString',
            'esSearchService',
            '$scope',
            '$rootScope',
            '$location',
            'rExport',
            '$timeout',
            '$filter',
            'pageService',
            'collectionData',
            'max400',
            'highlighter',
            'facetService',
            'fieldService',
            'utility',
            function (searchString, es, $scope, $rootScope, $location, rExport, $timeout, $filter, pVars, collectionData, max400, highlighter, facetService, fieldService, utility) {


            }]);

    return c4lApp;
});
