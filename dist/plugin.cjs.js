'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const Wifi = core.registerPlugin('Wifi', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.WifiWeb()),
});

class WifiWeb extends core.WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
    async getIP() {
        return { ip: "0.0.0.0" };
    }
    async getSSID() {
        return { ssid: "" };
    }
    async connect(options) {
        console.log(options);
        return { ssid: "" };
    }
    async connectPrefix(options) {
        console.log(options);
        return { ssid: "" };
    }
    async disconnect() {
        return;
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    WifiWeb: WifiWeb
});

exports.Wifi = Wifi;
//# sourceMappingURL=plugin.cjs.js.map
