"use strict";
var router_1 = require('@angular/router');
var home_1 = require('./components/home');
var contact_1 = require('./components/contact');
var form_1 = require('./components/form');
var routes = [
    { path: 'home', component: home_1.HomeComponent },
    { path: 'contact', component: contact_1.ContactComponent },
    { path: 'form', component: form_1.FormComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=route.js.map