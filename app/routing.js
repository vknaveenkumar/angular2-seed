"use strict";
var router_1 = require('@angular/router');
var home_1 = require('./ts/components/home');
var contact_1 = require('./ts/components/contact');
var form_1 = require('./ts/components/form');
var appRoutes = [
    { path: 'home', component: home_1.HomeComponent },
    { path: 'contact', component: contact_1.ContactComponent },
    { path: 'form', component: form_1.FormComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=routing.js.map