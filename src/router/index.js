// glavna stranica za route
import Vue from 'vue'
import Router from 'vue-router'        // treba instalirati (nije po defaultu)
import Main from '../components/Main'  // defaultna routa '/'
import Help from '../components/Help'  // Help routa (stranica)

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/', component: Main  // za recursive route treba i name: 'Main'
        },
        {
            path: '/help', component: Help
        }
    ]
});