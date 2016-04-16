'use strict';

System.register(['bootstrap', 'jquery'], function (_export, _context) {
  var $;
  return {
    setters: [function (_bootstrap) {}, function (_jquery) {
      $ = _jquery.default;
    }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ087OztBQUVBLGVBQVMsU0FBVCxDQUFtQixPQUFuQixFQUE0QjtBQUNqQyxnQkFBUSxHQUFSLENBQ0cscUJBREgsR0FEaUM7OztBQVlqQyxnQkFBUSxLQUFSLEdBQWdCLElBQWhCLENBQXFCO2lCQUFNLFFBQVEsT0FBUjtTQUFOLENBQXJCLENBWmlDO09BQTVCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
