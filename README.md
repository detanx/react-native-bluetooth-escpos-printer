# react-native-bluetooch-escpos-printer

React-Native plugin for the bluetooth ESC/POS & TSC printers.

Any questions or bug please raise a issue.

##Still under developement

#May support Android /IOS

## Introduce
- This is clone from https://github.com/januslo/react-native-bluetooth-escpos-printer, I added some fixes to this repository to make it work for expo.

### Installation
install via github
```bash
npm install https://github.com/detanx/react-native-bluetooth-escpos-printer.git --save
```
### Manual linking (Android)
1. You should use `expo eject` to get android folder.
2. android\build.gradle添加以下代码
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
3. android/app/build.gradle 不需要添加
```md
...
dependencies {
  ...
  implementation project(':react-native-bluetooth-escpos-printer')
}
```
4. android/settings.gradle 添加
```md
include ':react-native-bluetooth-escpos-printer'
project(':react-native-bluetooth-escpos-printer').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-bluetooth-escpos-printer/android')
```
5. android\app\src\main\java\com\inteluck\dmsapp\MainApplication.kt 添加
```md
...
+ import cn.jystudio.bluetooth.RNBluetoothEscposPrinterPackage
import android.app.Application
...