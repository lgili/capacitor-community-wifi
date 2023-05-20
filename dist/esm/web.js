import { WebPlugin } from '@capacitor/core';
export class WifiWeb extends WebPlugin {
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
//# sourceMappingURL=web.js.map