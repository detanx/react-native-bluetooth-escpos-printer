# react-native-bluetooch-escpos-printer

React-Native plugin for the bluetooth ESC/POS & TSC printers.

Any questions or bug please raise a issue.

##Still under developement

#May support Android /IOS

## Introduce
- This is clone from https://github.com/januslo/react-native-bluetooth-escpos-printer, I added some fixes to this repository to make it work for expo on Android.

### Installation
install via github
```bash
npm install https://github.com/detanx/react-native-bluetooth-escpos-printer.git --save
```
### Manual linking (Android)
1. You should use `expo eject` to get android folder.
2. android/build.gradle, add the following code:
```md
def REACT_NATIVE_VERSION = new File(['node', '--print',"JSON.parse(require('fs').readFileSync(require.resolve('react-native/package.json'), 'utf-8')).version"].execute(null, rootDir).text.trim())

allprojects {
    configurations.all {
        resolutionStrategy {
            // Remove this override in 0.66, as a proper fix is included in react-native itself.
            force "com.facebook.react:react-native:" + REACT_NATIVE_VERSION
        }
    }
}
```
3. android/app/build.gradle, no need to add the following code:
```md
...
dependencies {
  ...
  implementation project(':react-native-bluetooth-escpos-printer')
}
```
4. android/settings.gradle, add the following code:
```md
include ':react-native-bluetooth-escpos-printer'
project(':react-native-bluetooth-escpos-printer').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-bluetooth-escpos-printer/android')
```
5. android/app/src/main/java/com/inteluck/dmsapp/MainApplication.kt, add the following code:
```md
...
+ import cn.jystudio.bluetooth.RNBluetoothEscposPrinterPackage
import android.app.Application
...
```
6. android\app\src\main\AndroidManifest.xml 添加权限
```md
  <uses-permission android:name="android.permission.BLUETOOTH_ADMIN" />
  <uses-permission android:name="android.permission.BLUETOOTH_CONNECT" />
  <uses-permission android:name="android.permission.BLUETOOTH" />
  <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
  <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
  <uses-permission android:name="android.permission.BLUETOOTH_SCAN" />
```
### Example
- Some dependency versions used.
```md
  "expo": "~51.0.5",
  "react": "18.2.0",
  "react-dom": "18.2.0",
  "react-native": "0.74.1",
  "react-native-permissions": "^3.9.2",
```
- [example project address](https://github.com/detanx/expo-react-native-bluetooth-escpos-printer)