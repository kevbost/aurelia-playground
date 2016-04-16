'use strict';

System.register([], function (_export, _context) {
  var _createClass, Welcome, UpperValueConverter;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _export('Welcome', Welcome = function () {
        function Welcome() {
          _classCallCheck(this, Welcome);

          this.heading = 'Welcome to the Aurelia Navigation App!';
          this.firstName = 'John';
          this.lastName = 'Doe';
          this.previousValue = this.fullName;
        }

        Welcome.prototype.submit = function submit() {
          this.previousValue = this.fullName;
          alert('Welcome, ' + this.fullName + '!');
        };

        Welcome.prototype.canDeactivate = function canDeactivate() {
          if (this.fullName !== this.previousValue) {
            return confirm('Are you sure you want to leave?');
          }
        };

        _createClass(Welcome, [{
          key: 'fullName',
          get: function get() {
            return this.firstName + ' ' + this.lastName;
          }
        }]);

        return Welcome;
      }());

      _export('Welcome', Welcome);

      _export('UpperValueConverter', UpperValueConverter = function () {
        function UpperValueConverter() {
          _classCallCheck(this, UpperValueConverter);
        }

        UpperValueConverter.prototype.toView = function toView(value) {
          return value && value.toUpperCase();
        };

        return UpperValueConverter;
      }());

      _export('UpperValueConverter', UpperValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUvd2VsY29tZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5QkFFYTs7OztlQUNYLFVBQVU7ZUFDVixZQUFZO2VBQ1osV0FBVztlQUNYLGdCQUFnQixLQUFLLFFBQUw7OztBQUpMLDBCQWVYLDJCQUFTO0FBQ1AsZUFBSyxhQUFMLEdBQXFCLEtBQUssUUFBTCxDQURkO0FBRVAsOEJBQWtCLEtBQUssUUFBTCxNQUFsQixFQUZPOzs7QUFmRSwwQkFvQlgseUNBQWdCO0FBQ2QsY0FBSSxLQUFLLFFBQUwsS0FBa0IsS0FBSyxhQUFMLEVBQW9CO0FBQ3hDLG1CQUFPLFFBQVEsaUNBQVIsQ0FBUCxDQUR3QztXQUExQzs7O3FCQXJCUzs7OEJBV0k7QUFDYixtQkFBVSxLQUFLLFNBQUwsU0FBa0IsS0FBSyxRQUFMLENBRGY7Ozs7ZUFYSjs7Ozs7cUNBMkJBOzs7OztzQ0FDWCx5QkFBTyxPQUFPO0FBQ1osaUJBQU8sU0FBUyxNQUFNLFdBQU4sRUFBVCxDQURLOzs7ZUFESCIsImZpbGUiOiJ3ZWxjb21lL3dlbGNvbWUuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
