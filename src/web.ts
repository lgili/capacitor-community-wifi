import { WebPlugin } from '@capacitor/core';

import type { WifiPlugin } from './definitions';

export class WifiWeb extends WebPlugin implements WifiPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async getIP(): Promise<{ ip: string  }> {
    return { ip: "0.0.0.0" };
  }
  
  async getSSID(): Promise<{ssid: string }> {
    return { ssid: "" }
  }

  async connect(options: { ssid: string, password?: string, authType?: string }): Promise<{ ssid: string  }> {
    console.log(options);
    return { ssid: "" };
  }
  async connectPrefix(options: { ssid: string, password?: string, authType?: string }): Promise<{ ssid: string  }> {
    console.log(options);
    return { ssid: "" };
  }
  async disconnect(): Promise<void> {
    return;
  }
}
