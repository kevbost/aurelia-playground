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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzb25fZGF0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQU87OztpQ0FFTTtBQUNULHlCQURTLFNBQ1QsR0FBYTswQ0FESixXQUNJOztBQUNULHlCQUFLLElBQUwsR0FBWSxPQUFaLENBRFM7QUFFVCx5QkFBSyxLQUFMLEdBQWEsZ0NBQWIsQ0FGUztBQUdULHlCQUFLLFFBQUwsaUJBQTRCLEtBQUssSUFBTCxVQUFjLEtBQUssS0FBTCxDQUhqQztpQkFBYjs7QUFEUyxvQ0FPVCwrQkFBVzs7dUJBUEYiLCJmaWxlIjoianNvbl9kYXRhLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
