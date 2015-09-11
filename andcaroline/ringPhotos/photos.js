(function() {
    'use strict';

    angular.module('mcHayes', []);

    function RingPhotosCtrl() {
        var vm = this;

        vm.name = "Ring photos controller";

        vm.photos = [];

        for(var i = 3186; i < 3202; i++) {
            vm.photos.push('/images/IMG_' + i + '.JPG');
        }
    }

    function ringPhotos() {
        return {
            restrict: 'E',
            controller: 'RingPhotosCtrl',
            templateUrl: 'ringPhotos/photos.html',
            link: function(scope, element) {
            }
        };
    }

    angular.module('mcHayes')
        .controller('RingPhotosCtrl', RingPhotosCtrl)
        .directive('ringPhotos', ringPhotos);
})();