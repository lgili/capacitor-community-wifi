package com.lgili.plugin.wifi;

import android.Manifest;
import android.os.Build;

import com.getcapacitor.PermissionState;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.annotation.Permission;
import com.getcapacitor.annotation.PermissionCallback;
import com.getcapacitor.JSObject;

@CapacitorPlugin(name = "Wifi",
    permissions = {
        @Permission(
            alias = "fineLocation",
            strings = { Manifest.permission.ACCESS_FINE_LOCATION }
        ),
})
public class WifiPlugin extends Plugin {

    

    private static final int API_VERSION = Build.VERSION.SDK_INT;

    Wifi wifiService;

    @Override
    public void load() {
      super.load();
      this.wifiService = new Wifi();
      this.wifiService.load(this.bridge);
    }

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", wifiService.echo(value));
        call.resolve(ret);
    }

    @PluginMethod()
    public void getIP(PluginCall call) {
        if (API_VERSION >= 23 && getPermissionState("fineLocation") != PermissionState.GRANTED) {
            requestPermissionForAlias("fineLocation", call, "accessFineLocation");
        } else {
            this.wifiService.getIP(call);
        }
        
    }

    @PluginMethod()
    public void getSSID(PluginCall call) {
        if (getPermissionState("fineLocation") != PermissionState.GRANTED) {
            requestPermissionForAlias("fineLocation", call, "accessFineLocation");
        } else {
            this.wifiService.getSSID(call);
        }        
    }
@PluginMethod()
    public void connect(PluginCall call) {
        if (!call.getData().has("ssid")) {
            call.reject("Must provide an ssid");
            return;
        }
        if (API_VERSION >= 23 && getPermissionState("fineLocation") != PermissionState.GRANTED) {
            requestPermissionForAlias("fineLocation", call, "accessFineLocation");
        } else {
            this.wifiService.connect(call);
        }

    }

    @PluginMethod()
    public void connectPrefix(PluginCall call) {
        if (!call.getData().has("ssid")) {
            call.reject("Must provide an ssid");
            return;
        }
        if (API_VERSION >= 23 && getPermissionState("fineLocation") != PermissionState.GRANTED) {
            requestPermissionForAlias("fineLocation", call, "accessFineLocation");
        } else {
            this.wifiService.connectPrefix(call);
        }

    }

    @PluginMethod()
    public void disconnect(PluginCall call) {
        this.wifiService.disconnect(call);
    }

    @PermissionCallback
    private void accessFineLocation(PluginCall call) {
        if (getPermissionState("fineLocation") == PermissionState.GRANTED) {
            if (call.getMethodName().equals("getSSID")) {
                this.wifiService.getSSID(call);
            } else if (call.getMethodName().equals("getIP")) {
                this.wifiService.getIP(call);
            } else if (call.getMethodName().equals("connect")) {
                this.wifiService.connect(call);
            } else if (call.getMethodName().equals("connectPrefix")) {
                this.wifiService.connectPrefix(call);
            }
        } else {
            call.reject("User denied permission");
        }
    }

}
