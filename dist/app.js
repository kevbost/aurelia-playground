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
                    }, {
                        route: 'sdc01',
                        name: 'sdc01',
                        moduleId: 'sdc/sdc01',
                        nav: false,
                        title: 'sdc01'
                    }]);

                    this.router = router;
                };

                App.prototype.attached = function attached() {
                    $('.button-collapse').sideNav({
                        menuWidth: 300,
                        edge: 'right',
                        closeOnClick: true });
                    Waves.displayEffect();
                };

                return App;
            }());

            _export('App', App);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OzsyQkFFYTs7Ozs7OEJBQ1QsMkNBQWdCLFFBQVEsUUFBUTtBQUM1QiwyQkFBTyxLQUFQLEdBQWUsU0FBZixDQUQ0QjtBQUU1QiwyQkFBTyxHQUFQLENBQVcsQ0FDUDtBQUNJLCtCQUFPLENBQUMsRUFBRCxFQUFLLFNBQUwsQ0FBUDtBQUNBLDhCQUFNLFNBQU47QUFDQSxrQ0FBVSxpQkFBVjtBQUNBLDZCQUFLLElBQUw7QUFDQSwrQkFBTyxTQUFQO3FCQU5HLEVBUVA7QUFDSSwrQkFBTyxPQUFQO0FBQ0EsOEJBQU0sT0FBTjtBQUNBLGtDQUFVLG9CQUFWO0FBQ0EsNkJBQUssSUFBTDtBQUNBLCtCQUFPLGNBQVA7cUJBYkcsRUFlUDtBQUNJLCtCQUFPLGNBQVA7QUFDQSw4QkFBTSxjQUFOO0FBQ0Esa0NBQVUsY0FBVjtBQUNBLDZCQUFLLElBQUw7QUFDQSwrQkFBTyxjQUFQO3FCQXBCRyxFQXNCUDtBQUNJLCtCQUFPLFdBQVA7QUFDQSw4QkFBTSxXQUFOO0FBQ0Esa0NBQVUscUJBQVY7QUFDQSw2QkFBSyxJQUFMO0FBQ0EsK0JBQU8sV0FBUDtxQkEzQkcsRUE2QlA7QUFDSSwrQkFBTyxPQUFQO0FBQ0EsOEJBQU0sT0FBTjtBQUNBLGtDQUFVLFdBQVY7QUFDQSw2QkFBSyxLQUFMO0FBQ0EsK0JBQU8sT0FBUDtxQkFsQ0csQ0FBWCxFQUY0Qjs7QUF3QzVCLHlCQUFLLE1BQUwsR0FBYyxNQUFkLENBeEM0Qjs7O0FBRHZCLDhCQTRDVCwrQkFBVztBQUNQLHNCQUFFLGtCQUFGLEVBQXNCLE9BQXRCLENBQThCO0FBQzFCLG1DQUFXLEdBQVg7QUFDQSw4QkFBTSxPQUFOO0FBQ0Esc0NBQWMsSUFBZCxFQUhKLEVBRE87QUFNUCwwQkFBTSxhQUFOLEdBTk87Ozt1QkE1Q0YiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
