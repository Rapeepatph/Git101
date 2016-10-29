app.factory('mainInfo', function ($http) {
    $http.get('/Data/datatest.json')
            .success(function (data) {
                angular.extend(_this, data);
                console.log(data);
                defer.resolve();
            })
            .error(function () {
                defer.reject('could not find someFile.json');
            });
});