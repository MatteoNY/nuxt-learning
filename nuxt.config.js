const pkg = require('./package')
const bodyParser = require('body-parser')

module.exports = {
    mode: 'universal',

    /*
     ** Headers of the page
     */
    head: {
        title: pkg.name,
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: pkg.description }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Open+Sans" }
        ]
    },

    /*
     ** Customize the progress-bar color with height and duration which is the default
     */
    loading: { color: '#3B8070', height: '4px', duration: 5000 },
    loadingIndicator: {
        name: 'circle',
        color: '#00ff00'
    },
    /* for SPA setting
   
      */

    /*
     ** Global CSS can link to ~assets/css/styles etc. global styles or ~/assets not sure need to test
     */
    css: [
        '~assets/styles/main.css'
    ],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '~plugins/core-components.js',
        '~plugins/date-filter.js'
    ],

    /*
     ** Nuxt.js modules
     */
    modules: [
        '@nuxtjs/axios',
    ],
    axios: {
        baseURL: process.env.BASE_URL ||  'https://mclearnrxjs.firebaseio.com',
        credentials: false
    },

    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {

        }

    },
    env: {
        baseUrl: process.env.BASE_URL ||  'https://mclearnrxjs.firebaseio.com',
        fbAPIKey: 'AIzaSyDMh-J4ZFYmdY_T6XgVlXijtHYJutyB_tg'
    },
    transition: {
        name: 'fade',
        mode: 'out-in'
    },
    serverMiddleware: [
            bodyParser.json(),
            '~/api'
        ]
        // middleware: 'log'
}