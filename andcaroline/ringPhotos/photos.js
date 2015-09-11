(function() {
    'use strict';

    angular.module('mcHayes', []);

    function RingPhotosCtrl() {
        this.name = "Ring photos controller";
    }

    function ringPhotos() {
        return {
            restrict: 'E',
            controller: 'RingPhotosCtrl',
            controllerAs: 'photo',
            templateUrl: 'ringPhotos/photos.html',
            link: function(scope, element) {
                photo.photos = [];

                for(var i = 3186; i < 3202; i++) {
                    photo.photos.push('/images/IMG_' + i + '.JPG');
                }
            }
        };
    }

    angular.module('mcHayes')
        .controller('RingPhotosCtrl', RingPhotosCtrl)
        .directive('ringPhotos', ringPhotos);
})();