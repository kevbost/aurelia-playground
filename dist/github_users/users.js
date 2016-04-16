'use strict';

System.register(['aurelia-framework', 'aurelia-fetch-client', 'fetch'], function (_export, _context) {
  var inject, HttpClient, _dec, _class, Users;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaFetchClient) {
      HttpClient = _aureliaFetchClient.HttpClient;
    }, function (_fetch) {}],
    execute: function () {
      _export('Users', Users = (_dec = inject(HttpClient), _dec(_class = function () {
        function Users(http) {
          _classCallCheck(this, Users);

          this.heading = 'Github Users';
          this.users = [];

          http.configure(function (config) {
            config.useStandardConfiguration().withBaseUrl('https://api.github.com/');
          });

          this.http = http;
        }

        Users.prototype.activate = function activate() {
          var _this = this;

          return this.http.fetch('users').then(function (response) {
            return response.json();
          }).then(function (users) {
            return _this.users = users;
          });
        };

        return Users;
      }()) || _class));

      _export('Users', Users);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpdGh1Yl91c2Vycy91c2Vycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQVE7O0FBQ0E7Ozt1QkFJSyxnQkFEWixPQUFPLFVBQVA7QUFLQyxpQkFKVyxLQUlYLENBQVksSUFBWixFQUFrQjtnQ0FKUCxPQUlPOztlQUhsQixVQUFVLGVBR1E7ZUFGbEIsUUFBUSxHQUVVOztBQUNoQixlQUFLLFNBQUwsQ0FBZSxrQkFBVTtBQUN2QixtQkFDRyx3QkFESCxHQUVHLFdBRkgsQ0FFZSx5QkFGZixFQUR1QjtXQUFWLENBQWYsQ0FEZ0I7O0FBT2hCLGVBQUssSUFBTCxHQUFZLElBQVosQ0FQZ0I7U0FBbEI7O0FBSlcsd0JBY1gsK0JBQVc7OztBQUNULGlCQUFPLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsT0FBaEIsRUFDSixJQURJLENBQ0M7bUJBQVksU0FBUyxJQUFUO1dBQVosQ0FERCxDQUVKLElBRkksQ0FFQzttQkFBUyxNQUFLLEtBQUwsR0FBYSxLQUFiO1dBQVQsQ0FGUixDQURTOzs7ZUFkQSIsImZpbGUiOiJnaXRodWJfdXNlcnMvdXNlcnMuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
