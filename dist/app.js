'use strict';

System.register([], function (_export, _context) {
  var App;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('App', App = function () {
        function App() {
          _classCallCheck(this, App);
        }

        App.prototype.configureRouter = function configureRouter(config, router) {
          config.title = 'Aurelia';
          config.map([{
            route: ['', 'welcome'],
            name: 'welcome',
            moduleId: 'welcome/welcome',
            nav: true,
            title: 'Welcome'
          }, {
            route: 'users',
            name: 'users',
            moduleId: 'github_users/users',
            nav: true,
            title: 'Github Users'
          }, {
            route: 'child-router',
            name: 'child-router',
            moduleId: 'child-router',
            nav: true,
            title: 'Child Router'
          }, {
            route: 'json_data',
            name: 'json_data',
            moduleId: 'json_data/json_data',
            nav: true,
            title: 'JSON Data'
          }]);

          this.router = router;
        };

        return App;
      }());

      _export('App', App);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztxQkFBYTs7Ozs7c0JBQ1gsMkNBQWdCLFFBQVEsUUFBUTtBQUM5QixpQkFBTyxLQUFQLEdBQWUsU0FBZixDQUQ4QjtBQUU5QixpQkFBTyxHQUFQLENBQVcsQ0FDVDtBQUNFLG1CQUFPLENBQUMsRUFBRCxFQUFLLFNBQUwsQ0FBUDtBQUNBLGtCQUFNLFNBQU47QUFDQSxzQkFBVSxpQkFBVjtBQUNBLGlCQUFLLElBQUw7QUFDQSxtQkFBTyxTQUFQO1dBTk8sRUFRVDtBQUNFLG1CQUFPLE9BQVA7QUFDQSxrQkFBTSxPQUFOO0FBQ0Esc0JBQVUsb0JBQVY7QUFDQSxpQkFBSyxJQUFMO0FBQ0EsbUJBQU8sY0FBUDtXQWJPLEVBZVQ7QUFDRSxtQkFBTyxjQUFQO0FBQ0Esa0JBQU0sY0FBTjtBQUNBLHNCQUFVLGNBQVY7QUFDQSxpQkFBSyxJQUFMO0FBQ0EsbUJBQU8sY0FBUDtXQXBCTyxFQXNCVDtBQUNFLG1CQUFPLFdBQVA7QUFDQSxrQkFBTSxXQUFOO0FBQ0Esc0JBQVUscUJBQVY7QUFDQSxpQkFBSyxJQUFMO0FBQ0EsbUJBQU8sV0FBUDtXQTNCTyxDQUFYLEVBRjhCOztBQWlDOUIsZUFBSyxNQUFMLEdBQWMsTUFBZCxDQWpDOEI7OztlQURyQiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
