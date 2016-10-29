
app.controller('MapController',  function ($scope,$http) {
    
    var items = [];
    var addressPointsToMarkers = function (points) {
        return points.map(function (ap) {
            return items.push({
                layer: 'blue',
                lat: ap[0],
                lng: ap[1],
                icon: icons.blue
            });
        });
    };
    var addressPointsToMarkers2 = function (points) {
        return points.map(function (ap) {
            return items.push({
                layer: 'red',
                lat: ap[0],
                lng: ap[1],
                icon: icons.red
            });
        });
    };

    var icons = {
        blue: {
            type: 'div',
            iconSize: [10, 10],
            className: 'blue',
            iconAnchor: [5, 5]
        },
        red: {
            type: 'div',
            iconSize: [10, 10],
            className: 'red',
            iconAnchor: [5, 5]
        },
        green: {
            type: 'div',
            iconSize: [10, 10],
            className: 'red',
            iconAnchor: [5, 5]
        }
    }

    angular.extend($scope, {
        london: {
            lat: 51.505,
            lng: -0.09,
            zoom: 11
        },

        layers: {
            baselayers: {
                openStreetMap: {
                    name: 'OpenStreetMap',
                    type: 'xyz',
                    url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                }
            },
            overlays: {
                red: {
                    type: 'group',
                    name: 'red',
                    visible: false
                },

                blue: {
                    type: 'group',
                    name: 'blue',
                    visible: false
                }
            }
        },

        toggleLayer: function (type) {
            $scope.layers.overlays[type].visible = !$scope.layers.overlays[type].visible;
        }

    });
    $http.get('/Data/datatest.json')
       .then(function (res) {
           addressPointsToMarkers(res.data);
           console.log(res.data);
           console.log("1Http"+items);
       });
    $http.get('/Data/datatest2.json')
       .then(function (res) {
           addressPointsToMarkers2(res.data);
           console.log(res.data);
           console.log("2Http"+items);
       });
    console.log(items)
    $scope.markers = items;
});