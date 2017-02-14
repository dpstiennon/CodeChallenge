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
                ctrl.weekdayOptions = weekdays;
                ctrl.weekday = 'Monday';
                ctrl.name = '';
                ctrl.color = 'Red';
                ctrl.triedToSubmit = false;


                ctrl.submitFn = function(e) {
                    e.preventDefault();
                    if (ctrl.form.$valid) {
                        $http({ method: 'POST', url: '/api/SubmitChallenge', data: ctrl })
                            .success(function() {
                                ctrl.success = true;
                            })
                            .error(function() { console.error("Failed to send data to serve"); });
                    } else {
                        ctrl.triedToSubmit = true;
                    }
                };

            });

})();