var services = angular.module('saving.services', [])
/**
 * Conexção do parse.com onde se para os token
 */
services.factory('sessionInjector', function () {
  return{
    request: function (config) {
      config.headers['X-Parse-Application-Id'] = "af9wUMJdyyCRbZ3412mWECy1LeYkqiRZTah5wvwl";
      config.headers['X-Parse-REST-API-Key']   = "3BiC6673kqaERblmnSexdcXH3weONBDenrhivDdS";
      return config;
    }
  }
});
/**
 * Metodos ["GET", "POST", "PUT"] da classe User
 * @param {module injector} $http
 */
services.service('User', function ($http) {
  var url = "https://api.parse.com/1/classes/user";
  return {
    get: function (where) {
      if (where) {
        where = "?where=" + JSON.stringify(where);
      } else {
        where = "";
      }
      return $http.get(url + where);
    },
    post: function (data) {
      return $http.post(url, data);
    },
    put: function(id, data){
      return $http.put(url + '/' + id, data);
    }
  }
});
