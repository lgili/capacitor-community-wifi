import { WebPlugin } from '@capacitor/core';
import type { WifiPlugin } from './definitions';
export declare class WifiWeb extends WebPlugin implements WifiPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    getIP(): Promise<{
        ip: string;
    }>;
    getSSID(): Promise<{
        ssid: string;
    }>;
    connect(options: {
        ssid: string;
        password?: string;
        authType?: string;
    }): Promise<{
        ssid: string;
    }>;
    connectPrefix(options: {
        ssid: string;
        password?: string;
        authType?: string;
    }): Promise<{
        ssid: string;
    }>;
    disconnect(): Promise<void>;
}
