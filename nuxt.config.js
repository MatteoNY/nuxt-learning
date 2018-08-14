const pkg = require('./package')

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

    /* for SPA setting
    loadingIndicator: {
        name: 'circle',
        color: '#00ff00'
    },
      */

    /*
     ** Global CSS can link to ~assets/css/styles etc. global styles or ~/assets not sure need to test
     */
    css: [],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],

    /*
     ** Nuxt.js modules
     */
    modules: [],

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
        baseUrl: process.env.BASE_URL ||  'https://mclearnrxjs.firebaseio.com'
    },
    transition: {
        name: 'fade',
        mode: 'out-in'
    }
}