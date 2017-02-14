(function() {

    angular.module('challenge', [])
        .controller('ChallengeController',
            function challengeCtrl($http) {
                var ctrl = this;
                ctrl.weekday = 'Mon';
                ctrl.name = '';
                ctrl.color = 'Red';


                ctrl.submitFn = function(e) {
                    e.preventDefault();
                    $http({ method: 'POST', url: '/api/SubmitChallenge', data: ctrl })
                        .success(function() {
                            ctrl.success = true;
                        })
                        .error(function() { console.error("Failed to send data to serve"); });
                };

            });

})();