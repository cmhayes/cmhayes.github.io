(function() {
    'use strict';

    angular.module('mcHayes', []);

    function RingPhotosCtrl() {
        this.name = "Ring photos controller";
        this.photos = [];

        for(var i = 3186; i < 3202; i++) {
            this.photos.push('/images/IMG_' + i + '.JPG');
        }
    }

    function ringPhotos() {
        return {
            restrict: 'E',
            controller: 'ringPhotosCtrl as photo',
            templateUrl: 'photos.html',
            link: function(scope, element) {
                
            }
        };
    }

    angular.module('mcHayes')
        .controller('RingPhotosCtrl', RingPhotosCtrl)
        .directive('ringPhotos', ringPhotos);
})();