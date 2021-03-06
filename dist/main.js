'use strict';

System.register(['jquery', 'materialize'], function (_export, _context) {
  var $;
  return {
    setters: [function (_jquery) {
      $ = _jquery.default;
    }, function (_materialize) {}],
    execute: function () {
      function configure(aurelia) {
        aurelia.use.standardConfiguration();


        aurelia.start().then(function () {
          return aurelia.setRoot();
        });
      }

      _export('configure', configure);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU87OztBQUdBLGVBQVMsU0FBVCxDQUFtQixPQUFuQixFQUE0QjtBQUNqQyxnQkFBUSxHQUFSLENBQ0cscUJBREgsR0FEaUM7OztBQVlqQyxnQkFBUSxLQUFSLEdBQWdCLElBQWhCLENBQXFCO2lCQUFNLFFBQVEsT0FBUjtTQUFOLENBQXJCLENBWmlDO09BQTVCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
