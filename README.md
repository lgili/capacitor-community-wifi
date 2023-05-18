# community-capacitor-wifi

wifi manager for capacitor framework

## Install

```bash
npm install community-capacitor-wifi
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`getIP()`](#getip)
* [`getSSID()`](#getssid)
* [`connect(...)`](#connect)
* [`connectPrefix(...)`](#connectprefix)
* [`disconnect()`](#disconnect)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### getIP()

```typescript
getIP() => Promise<{ ip: string; }>
```

**Returns:** <code>Promise&lt;{ ip: string; }&gt;</code>

--------------------


### getSSID()

```typescript
getSSID() => Promise<{ ssid: string; }>
```

**Returns:** <code>Promise&lt;{ ssid: string; }&gt;</code>

--------------------


### connect(...)

```typescript
connect(options: { ssid: string; password?: string; joinOnce?: boolean; isHiddenSsid?: boolean; }) => Promise<{ ssid: string; }>
```

| Param         | Type                                                                                          |
| ------------- | --------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ ssid: string; password?: string; joinOnce?: boolean; isHiddenSsid?: boolean; }</code> |

**Returns:** <code>Promise&lt;{ ssid: string; }&gt;</code>

--------------------


### connectPrefix(...)

```typescript
connectPrefix(options: { ssid: string; password?: string; joinOnce?: boolean; }) => Promise<{ ssid: string; }>
```

| Param         | Type                                                                  |
| ------------- | --------------------------------------------------------------------- |
| **`options`** | <code>{ ssid: string; password?: string; joinOnce?: boolean; }</code> |

**Returns:** <code>Promise&lt;{ ssid: string; }&gt;</code>

--------------------


### disconnect()

```typescript
disconnect() => Promise<void>
```

--------------------

</docgen-api>
