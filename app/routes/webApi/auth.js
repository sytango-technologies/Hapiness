'use strict';

'use strict';

exports.plugin = {  
    register: (plugin, options) => {
        const Controllers = {
            auth: {
                login: require('../../controllers/web/auth/login'),
                signup: require('../../controllers/web/auth/signup'),
                logout: require('../../controllers/web/auth/logout'),
                networks: require('../../controllers/web/auth/networks')
            }
        };
    
        plugin.route([
            // Auth Routes
            {
                method: 'GET',
                path: '/',
                config: Controllers.auth.login.showForm
            }, {
                method: 'POST',
                path: '/',
                config: Controllers.auth.login.postForm
            }, {
                method: 'GET',
                path: '/login',
                config: Controllers.auth.login.showForm
            }, {
                method: 'POST',
                path: '/login',
                config: Controllers.auth.login.postForm
            }, {
                method: 'GET',
                path: '/signup',
                config: Controllers.auth.signup.showForm
            }, {
                method: 'POST',
                path: '/signup',
                config: Controllers.auth.signup.postForm
            }, {
                method: '*',
                path: '/logout',
                config: Controllers.auth.logout
            }
        ]);
    },
    pkg: require('../../../package.json'),
    name : 'auth_routes'
};
