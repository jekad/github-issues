app.controller('MenuController', function ($scope) {
    $scope.active = 'menu-issues';
});

app.controller('GithubController', function GithubController($scope, GitHub) {

    $scope.openRepo = function openRepo(name) {
        GitHub.getRepo(name, function (error, data) {
            if (!error) {
                $scope.activeRepo = data;
console.log($scope.activeRepo);
                GitHub.getIssues(name, function (error, data) {
                    if (!error && data.length) {
                        $scope.activeRepo.issues = data;
                    } else {
                        $scope.activeRepo.issues = [{title: 'No issues!'}];
                    }
                });
            }
            else{
               if (error.message == 'Not Found'){
                   $scope.activeRepo = {};
                   $scope.activeRepo.issues = [{title: 'No such repository!'}];
               } else {
                   console.log(error.message);
               }
            }
        });
    };
});