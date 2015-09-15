(function() {
    'use strict';

    angular.module('portfolio', []);

    angular.module('portfolio')
            .controller('PortfolioCtrl', portfolioCtrl)
            .directive('portfolioNav', portfolioNavDir);

    function Portfolio($scope) {
        var folio = this;

        folio.name = 'controller';
    }

    function portfolioNavDir() {
        return {
            restrict: 'E',
            template: '<h4>Hello, {{name}}</h4>',
            controller: 'PortfolioCtrl',
            controllerAs: 'folio',
            link: function(scope, element, attr) {
                element.find('h4').css({'background': 'red', 'width': '200px', 'height': '300px'});
                folio.name = "directive";
            }
        };
    }

})();