export class sdc01 {
    heading = 'Github Users';
    shipments = [];

    constructor() {
        this.hello = 'Welcome to the Aurelia Navigation App!';
        this.current_carrier = '';
        this.current_shipment = '';
        this.current_container = '';

        this.shipments = [
            {
                carrier: 'Averitt',
                container_number: '11601',
                shipment_number: '173A259'
            },
            {
                carrier: 'UPS',
                container_number: 'None',
                shipment_number: 'None'
            },
            {
                carrier: 'Chuck (independent)',
                container_number: '15023',
                shipment_number: '584K351'
            },
            {
                carrier: 'AndAnother',
                container_number: '10012',
                shipment_number: '729G104'
            }
        ];
    }

    activate() {
        // return this.http.fetch('users')
        //     .then(response => response.json())
        //     .then(users => this.users = users);
    }

    updateValues(e) {
        this.current_carrier = e.carrier;
        this.current_shipment = e.shipment_number;
        this.current_container = e.container_number;
    }

    attached() {
        $('.shipment-info').on('click', function() {
            $('.shipment-info').removeClass('active');
            $(this).addClass('active');
            Materialize.updateTextFields();
        });
        Materialize.updateTextFields();
        $('select').material_select();
    }
}
