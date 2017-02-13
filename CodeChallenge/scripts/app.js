(function() {

    angular.module('challenge', [])
        .controller('ChallengeController', function challengeCtrl($http) {
            var ctrl = this;

            ctrl.weekday = 'Mon';
            ctrl.name = '';

            ctrl.formatData = function() {
                return {
                    name: ctrl.name
                    weekday: ctrl.weekday
                    
                
                };
            }

            ctrl.submitFn = function() {
                console.log(`${ctrl.weekday} && ${ctrl.name}`);
                $http({ method: 'POST', url: '', data=});
            };
        });

})();