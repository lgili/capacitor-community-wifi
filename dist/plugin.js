var capacitorWifi = (function (exports, core) {
    'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
