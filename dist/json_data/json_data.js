'use strict';

System.register(['jquery'], function (_export, _context) {
    var $, json_data;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_jquery) {
            $ = _jquery.default;
        }],
        execute: function () {
            _export('json_data', json_data = function () {
                function json_data() {
                    _classCallCheck(this, json_data);

                    this.name = 'Kevin';
                    this.hello = 'to the Aurelia Navigation App!';
                    this.greeting = 'Welcome, ' + this.name + ', ' + this.hello;
                }

                json_data.prototype.activate = function activate() {};

                return json_data;
            }());

            _export('json_data', json_data);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzb25fZGF0YS9qc29uX2RhdGEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFPOzs7aUNBRU07QUFDVCx5QkFEUyxTQUNULEdBQWE7MENBREosV0FDSTs7QUFDVCx5QkFBSyxJQUFMLEdBQVksT0FBWixDQURTO0FBRVQseUJBQUssS0FBTCxHQUFhLGdDQUFiLENBRlM7QUFHVCx5QkFBSyxRQUFMLGlCQUE0QixLQUFLLElBQUwsVUFBYyxLQUFLLEtBQUwsQ0FIakM7aUJBQWI7O0FBRFMsb0NBT1QsK0JBQVc7O3VCQVBGIiwiZmlsZSI6Impzb25fZGF0YS9qc29uX2RhdGEuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
