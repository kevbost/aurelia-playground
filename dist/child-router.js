'use strict';

System.register([], function (_export, _context) {
  var ChildRouter;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('ChildRouter', ChildRouter = function () {
        function ChildRouter() {
          _classCallCheck(this, ChildRouter);

          this.heading = 'Child Router';
        }

        ChildRouter.prototype.configureRouter = function configureRouter(config, router) {
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
            route: 'json_data',
            name: 'json_data',
            moduleId: 'json_data/json_data',
            nav: true,
            title: 'JSON Data'
          }]);

          this.router = router;
        };

        return ChildRouter;
      }());

      _export('ChildRouter', ChildRouter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoaWxkLXJvdXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs2QkFBYTs7OztlQUNYLFVBQVU7OztBQURDLDhCQUdYLDJDQUFnQixRQUFRLFFBQVE7QUFDOUIsaUJBQU8sR0FBUCxDQUFXLENBQ1Q7QUFDRSxtQkFBTyxDQUFDLEVBQUQsRUFBSyxTQUFMLENBQVA7QUFDQSxrQkFBTSxTQUFOO0FBQ0Esc0JBQVUsaUJBQVY7QUFDQSxpQkFBSyxJQUFMO0FBQ0EsbUJBQU8sU0FBUDtXQU5PLEVBUVQ7QUFDRSxtQkFBTyxPQUFQO0FBQ0Esa0JBQU0sT0FBTjtBQUNBLHNCQUFVLG9CQUFWO0FBQ0EsaUJBQUssSUFBTDtBQUNBLG1CQUFPLGNBQVA7V0FiTyxFQWVUO0FBQ0UsbUJBQU8sV0FBUDtBQUNBLGtCQUFNLFdBQU47QUFDQSxzQkFBVSxxQkFBVjtBQUNBLGlCQUFLLElBQUw7QUFDQSxtQkFBTyxXQUFQO1dBcEJPLENBQVgsRUFEOEI7O0FBeUI5QixlQUFLLE1BQUwsR0FBYyxNQUFkLENBekI4Qjs7O2VBSHJCIiwiZmlsZSI6ImNoaWxkLXJvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
