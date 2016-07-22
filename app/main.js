"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var boot_1 = require('./js/components/boot');
var route_1 = require('./js/route');
platform_browser_dynamic_1.bootstrap(boot_1.AppComponent, [
    route_1.appRouterProviders
])
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map