
let run = ["$rootScope", "$templateCache", function($rootScope, $templateCache) {

    // For disabling template cache
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
        if (typeof(current) !== 'undefined'){
            $templateCache.remove(current.templateUrl);
        }
    });
}];

export default run;