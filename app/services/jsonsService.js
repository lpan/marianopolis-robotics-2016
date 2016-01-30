app.factory('jsonsService', ['$http', function ($http) {
  return {
    getArticles: function (callback) {
      if(typeof callback !== 'function')
        return;
      $http.get('/data/journals.json').
        then(function (data) {
          callback(data.data);
        }, function (error) {
          callback(error);
        });
    },
    getTeam: function (callback) {
      if(typeof callback !== 'function')
        return;
      $http.get('/data/team.json').
        then(function (data) {
          callback(data.data);
        }, function (error) {
          callback(error);
        });
    }
  };
}]);
