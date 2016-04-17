export class ChildRouter {
    heading = 'Child Router';

    configureRouter(config, router) {
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
                route: 'json_data',
                name: 'json_data',
                moduleId: 'json_data/json_data',
                nav: true,
                title: 'JSON Data'
            }
        ]);

        this.router = router;
    }

    attached() {
        $('ul.tabs').tabs();
    }
}
