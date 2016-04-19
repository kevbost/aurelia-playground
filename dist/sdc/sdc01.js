'use strict';

System.register([], function (_export, _context) {
    var sdc01;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _export('sdc01', sdc01 = function () {
                function sdc01() {
                    _classCallCheck(this, sdc01);

                    this.heading = 'Github Users';
                    this.shipments = [];

                    this.hello = 'Welcome to the Aurelia Navigation App!';
                    this.current_carrier = '';
                    this.current_shipment = '';
                    this.current_container = '';

                    this.shipments = [{
                        carrier: 'Averitt',
                        container_number: '11601',
                        shipment_number: '173A259'
                    }, {
                        carrier: 'UPS',
                        container_number: 'None',
                        shipment_number: 'None'
                    }, {
                        carrier: 'Chuck (independent)',
                        container_number: '15023',
                        shipment_number: '584K351'
                    }, {
                        carrier: 'AndAnother',
                        container_number: '10012',
                        shipment_number: '729G104'
                    }];
                }

                sdc01.prototype.activate = function activate() {};

                sdc01.prototype.updateValues = function updateValues(e) {
                    this.current_carrier = e.carrier;
                    this.current_shipment = e.shipment_number;
                    this.current_container = e.container_number;
                };

                sdc01.prototype.attached = function attached() {
                    $('.shipment-info').on('click', function () {
                        $('.shipment-info').removeClass('active');
                        $(this).addClass('active');
                        Materialize.updateTextFields();
                    });
                    Materialize.updateTextFields();
                    $('select').material_select();
                };

                return sdc01;
            }());

            _export('sdc01', sdc01);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNkYy9zZGMwMS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs2QkFBYTtBQUlULHlCQUpTLEtBSVQsR0FBYzswQ0FKTCxPQUlLOzt5QkFIZCxVQUFVLGVBR0k7eUJBRmQsWUFBWSxHQUVFOztBQUNWLHlCQUFLLEtBQUwsR0FBYSx3Q0FBYixDQURVO0FBRVYseUJBQUssZUFBTCxHQUF1QixFQUF2QixDQUZVO0FBR1YseUJBQUssZ0JBQUwsR0FBd0IsRUFBeEIsQ0FIVTtBQUlWLHlCQUFLLGlCQUFMLEdBQXlCLEVBQXpCLENBSlU7O0FBTVYseUJBQUssU0FBTCxHQUFpQixDQUNiO0FBQ0ksaUNBQVMsU0FBVDtBQUNBLDBDQUFrQixPQUFsQjtBQUNBLHlDQUFpQixTQUFqQjtxQkFKUyxFQU1iO0FBQ0ksaUNBQVMsS0FBVDtBQUNBLDBDQUFrQixNQUFsQjtBQUNBLHlDQUFpQixNQUFqQjtxQkFUUyxFQVdiO0FBQ0ksaUNBQVMscUJBQVQ7QUFDQSwwQ0FBa0IsT0FBbEI7QUFDQSx5Q0FBaUIsU0FBakI7cUJBZFMsRUFnQmI7QUFDSSxpQ0FBUyxZQUFUO0FBQ0EsMENBQWtCLE9BQWxCO0FBQ0EseUNBQWlCLFNBQWpCO3FCQW5CUyxDQUFqQixDQU5VO2lCQUFkOztBQUpTLGdDQWtDVCwrQkFBVzs7QUFsQ0YsZ0NBd0NULHFDQUFhLEdBQUc7QUFDWix5QkFBSyxlQUFMLEdBQXVCLEVBQUUsT0FBRixDQURYO0FBRVoseUJBQUssZ0JBQUwsR0FBd0IsRUFBRSxlQUFGLENBRlo7QUFHWix5QkFBSyxpQkFBTCxHQUF5QixFQUFFLGdCQUFGLENBSGI7OztBQXhDUCxnQ0E4Q1QsK0JBQVc7QUFDUCxzQkFBRSxnQkFBRixFQUFvQixFQUFwQixDQUF1QixPQUF2QixFQUFnQyxZQUFXO0FBQ3ZDLDBCQUFFLGdCQUFGLEVBQW9CLFdBQXBCLENBQWdDLFFBQWhDLEVBRHVDO0FBRXZDLDBCQUFFLElBQUYsRUFBUSxRQUFSLENBQWlCLFFBQWpCLEVBRnVDO0FBR3ZDLG9DQUFZLGdCQUFaLEdBSHVDO3FCQUFYLENBQWhDLENBRE87QUFNUCxnQ0FBWSxnQkFBWixHQU5PO0FBT1Asc0JBQUUsUUFBRixFQUFZLGVBQVosR0FQTzs7O3VCQTlDRiIsImZpbGUiOiJzZGMvc2RjMDEuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
