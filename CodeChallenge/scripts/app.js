(function() {

    angular.module('challenge', [])
        .controller('ChallengeController', function challengeCtrl($http) {
            var ctrl = this;

            ctrl.weekday = 'Mon';
            ctrl.name = '';

            ctrl.formatData = function() {
                return {
                    name: ctrl.name,
                    weekday: ctrl.weekday
                
                };
            }

            ctrl.submitFn = function(e) {
                console.log(`${ctrl.weekday} && ${ctrl.name}`);
                e.preventDefault();
                $http({ method: 'POST', url: '/api/SubmitChallenge', data: ctrl.formatData() })
                    .success(function() {
                        alert("it was sent!");
                    });
            };
        });

})();