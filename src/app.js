// import 'materialize';

export class App {
    configureRouter(config, router) {
        config.title = 'Aurelia';
        config.map([
            {
                route: ['', 'welcome'],
                name: 'welcome',
                moduleId: 'welcome/welcome',
                nav: true,
                title: 'Welcome'
            },
            {
                route: 'users',
                name: 'users',
                moduleId: 'github_users/users',
                nav: true,
                title: 'Github Users'
            },
            {
                route: 'child-router',
                name: 'child-router',
                moduleId: 'child-router',
                nav: true,
                title: 'Child Router'
            },
            {
                route: 'json_data',
                name: 'json_data',
                moduleId: 'json_data/json_data',
                nav: true,
                title: 'JSON Data'
            },
            {
                route: 'sdc01',
                name: 'sdc01',
                moduleId: 'sdc/sdc01',
                nav: false,
                title: 'sdc01'
            }
        ]);

        this.router = router;
    }

    attached() {
        $('.button-collapse').sideNav({
            menuWidth: 300, // Default is 240
            edge: 'right', // Choose the horizontal origin
            closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
        });
        Waves.displayEffect();
    }
}
