export default ["$http", "$scope", function($http, $scope) {

    $http.get("/groups.json").success(function(data) {
        $scope.groups = data.groups;
    });
}];

