(function() {
    'use strict';

    angular.module('mcHayes', []);

    function RingPhotosCtrl() {
        this.name = "Ring photos controller";
        this.photos = ['/images/IMG_3186.JPG'];

        for(var i = 3187; i < 3202; i++) {
            this.photos.push('/images/IMG_' + i + '.JPG');
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