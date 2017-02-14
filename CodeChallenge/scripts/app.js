(function() {

    var weekdays = [
        { short: 'Mon', long: 'Monday' },
        { short: 'Tues', long: 'Tuesday' },
        { short: 'Wed', long: 'Wednesday' },
        { short: 'Thurs', long: 'Thursday' },
        { short: 'Fri', long: 'Friday' },
        { short: 'Sat', long: 'Saturday' },
        { short: 'Sun', long: 'Sunday' }
    ];

    angular.module('challenge', [])
        .controller('ChallengeController',
            function challengeCtrl($http) {
                var ctrl = this;
                ctrl.weekday = 'Mon';
                ctrl.name = '';
                ctrl.color = 'Red';
                ctrl.weekdayOptions = weekdays;


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