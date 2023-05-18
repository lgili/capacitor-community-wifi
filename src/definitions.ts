export interface WifiPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  getIP(): Promise<{ ip: string }>;
  getSSID(): Promise<{ ssid: string }>;
  connect(options: {
    ssid: string,
    password?: string,
    /** iOS only: https://developer.apple.com/documentation/networkextension/nehotspotconfiguration/2887518-joinonce */
    joinOnce?: boolean,
    /** Android only: https://developer.android.com/reference/android/net/wifi/WifiNetworkSpecifier.Builder#setIsHiddenSsid(boolean) */
    isHiddenSsid?: boolean,
  }): Promise<{ ssid: string  }>;
  connectPrefix(options: {
    ssid: string,
    password?: string,
     /** iOS only: https://developer.apple.com/documentation/networkextension/nehotspotconfiguration/2887518-joinonce */
    joinOnce?: boolean,
  }): Promise<{ ssid: string  }>;
  disconnect(): Promise<void>;
}
