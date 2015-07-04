app.factory('GitHub', function GitHub($http) {

    return {
        getRepo: function getRepo(name, callback) {
            var user = name.split(' ').join('/');

            $http.get('https://api.github.com/repos/'+ user)
                .success(function (data) {
                    callback(null, data);
                })
                .error(function (e) {
                    callback(e);
                });
        },
        getIssues: function getIssues(name, callback) {
            var repo = name.split(' ').join('/');

            $http.get('https://api.github.com/repos/'+ repo + '/issues')
                .success(function (data) {
                    callback(null, data);
                })
                .error(function (e) {
                    callback(e);
                });
        }
    };
});