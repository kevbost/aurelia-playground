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
            }
        ]);

        this.router = router;
    }
}
