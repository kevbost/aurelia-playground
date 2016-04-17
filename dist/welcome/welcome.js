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

                Welcome.prototype.attached = function attached() {
                    Materialize.updateTextFields();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUvd2VsY29tZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkFFYTs7Ozt5QkFDVCxVQUFVO3lCQUNWLFlBQVk7eUJBQ1osV0FBVzt5QkFDWCxnQkFBZ0IsS0FBSyxRQUFMOzs7QUFKUCxrQ0FlVCwyQkFBUztBQUNMLHlCQUFLLGFBQUwsR0FBcUIsS0FBSyxRQUFMLENBRGhCO0FBRUwsd0NBQWtCLEtBQUssUUFBTCxNQUFsQixFQUZLOzs7QUFmQSxrQ0FvQlQseUNBQWdCO0FBQ1osd0JBQUksS0FBSyxRQUFMLEtBQWtCLEtBQUssYUFBTCxFQUFvQjtBQUN0QywrQkFBTyxRQUFRLGlDQUFSLENBQVAsQ0FEc0M7cUJBQTFDOzs7QUFyQkssa0NBMEJULCtCQUFXO0FBQ1AsZ0NBQVksZ0JBQVosR0FETzs7OzZCQTFCRjs7d0NBV007QUFDWCwrQkFBVSxLQUFLLFNBQUwsU0FBa0IsS0FBSyxRQUFMLENBRGpCOzs7O3VCQVhOOzs7OzsyQ0ErQkE7Ozs7OzhDQUNULHlCQUFPLE9BQU87QUFDViwyQkFBTyxTQUFTLE1BQU0sV0FBTixFQUFULENBREc7Ozt1QkFETCIsImZpbGUiOiJ3ZWxjb21lL3dlbGNvbWUuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
