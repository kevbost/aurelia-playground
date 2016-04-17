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

                ChildRouter.prototype.attached = function attached() {
                    $('ul.tabs').tabs();
                };

                return ChildRouter;
            }());

            _export('ChildRouter', ChildRouter);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoaWxkLXJvdXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OzttQ0FBYTs7Ozt5QkFDVCxVQUFVOzs7QUFERCxzQ0FHVCwyQ0FBZ0IsUUFBUSxRQUFRO0FBQzVCLDJCQUFPLEdBQVAsQ0FBVyxDQUNQO0FBQ0ksK0JBQU8sQ0FBQyxFQUFELEVBQUssU0FBTCxDQUFQO0FBQ0EsOEJBQU0sU0FBTjtBQUNBLGtDQUFVLGlCQUFWO0FBQ0EsNkJBQUssSUFBTDtBQUNBLCtCQUFPLFNBQVA7cUJBTkcsRUFRUDtBQUNJLCtCQUFPLE9BQVA7QUFDQSw4QkFBTSxPQUFOO0FBQ0Esa0NBQVUsb0JBQVY7QUFDQSw2QkFBSyxJQUFMO0FBQ0EsK0JBQU8sY0FBUDtxQkFiRyxFQWVQO0FBQ0ksK0JBQU8sV0FBUDtBQUNBLDhCQUFNLFdBQU47QUFDQSxrQ0FBVSxxQkFBVjtBQUNBLDZCQUFLLElBQUw7QUFDQSwrQkFBTyxXQUFQO3FCQXBCRyxDQUFYLEVBRDRCOztBQXlCNUIseUJBQUssTUFBTCxHQUFjLE1BQWQsQ0F6QjRCOzs7QUFIdkIsc0NBK0JULCtCQUFXO0FBQ1Asc0JBQUUsU0FBRixFQUFhLElBQWIsR0FETzs7O3VCQS9CRiIsImZpbGUiOiJjaGlsZC1yb3V0ZXIuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
