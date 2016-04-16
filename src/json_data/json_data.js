export class json_data {
    constructor() {
        this.name = 'Kevin';
        this.hello = 'to the Aurelia Navigation App!';
        this.greeting = `Welcome, ${this.name}, ${this.hello}`;
    }

    activate() {
        // $('.page-host').css('pointer-events', 'none')
        console.log($('h2'));
        $('h2');
    }
}
