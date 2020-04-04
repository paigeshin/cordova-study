# cordova-study
# 🔷 Cordova &  Phone Gap Setup

### 🔵 W**hat is cordova?**

[https://cordova.apache.org/docs/en/3.0.0/guide/overview/index.html](https://cordova.apache.org/docs/en/3.0.0/guide/overview/index.html) 

- 그냥 한마디로 말하면 웹을 앱이랑 wrapping 시켜서 개발하게 함
- javascript를 swift & Objective c 또는 Java & Kotlin이랑 mapping

##  **What is phone gap?**

- [https://phonegap.com/](https://phonegap.com/)
- From the team behind Apache Cordova, the Adobe PhoneGap framework is an open source distribution of Cordova
- npm 같은 느낌인 듯

참고문서: [https://cordova.apache.org/docs/en/latest/guide/cli/](https://cordova.apache.org/docs/en/latest/guide/cli/)

##  Phonegap developer App

- 이 app 을 다운로드 받아서 ip address를 넘겨주면 자동으로 broadcasting 되면 update 한다.
- 원격으로 코드 업데이트

[https://blog.phonegap.com/update-on-the-phonegap-developer-app-ios-99e07e3309dd](https://blog.phonegap.com/update-on-the-phonegap-developer-app-ios-99e07e3309dd) 

⇒ iOS app store

##  phone gap & cordova 설치 및 기본적인 명령어들

    sudo npm install -g phonegap
    sudo npm install -g cordova

phone gap 명령어

    sudo npm install -g phonegap # 설치
    phonegap create $name # 앱만들기
    phonegap serve # 시작 
    phonegap platform add browser && phonegap platform add browser # `phonegap serve` 실행시 에러가 발생할 경우 이 명령어를 실행한다. 
    remove browser platform and add it again,

cordova 명령어

    cordova requirements 
    cordova platform add ios
    cordova platform add android
    cordova build
    cordova build ios
    cordova build android 
    cordova platform ls
    cordova run —list
    cordova run ios
    cordova run ios —target=“$iphone”
    cordova run android -target="$android"
    cordova platform rm android
    cordova platform rm ios

## ❗️ UnhandledPromiseRejectionWarning

    (node:48821) UnhandledPromiseRejectionWarning: Error [ERR_UNHANDLED_ERROR]: Unhandled error. ('The platform "browser" does not appear to be a valid cordova platform. It is missing API.js. browser not supported.')
        at CordovaEventEmitter.emit (events.js:304:17)
        at CordovaEventEmitter.emit (/usr/local/lib/node_modules/phonegap/node_modules/cordova-common/src/events.js:69:22)
        at Object.getPlatformApiFunction (/usr/local/lib/node_modules/phonegap/node_modules/cordova-lib/src/cordova/util.js:384:20)
        at Object.getPlatformApi (/usr/local/lib/node_modules/phonegap/node_modules/cordova-lib/src/platforms/platforms.js:55:32)
        at /usr/local/lib/node_modules/phonegap/node_modules/cordova-lib/src/cordova/prepare.js:52:38
        at Array.map (<anonymous>)
        at /usr/local/lib/node_modules/phonegap/node_modules/cordova-lib/src/cordova/prepare.js:50:47
        at processTicksAndRejections (internal/process/task_queues.js:97:5)
    (node:48821) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
    (node:48821) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.

`phonegap platform add browser && phonegap platform add browser` 를 실행 

##  iOS 설치

ios 설치 - 문제 없이 아주 잘됨 

- xCode 설치
- cocoapod 설치

    sudo npm install -g ios-sim
    ios-sim showdevicetypes  #해당 directory로 가ㅓㅅ.

## Android 설치

##  Error - Android 설치, cordova build error

android 설치 

- java 설치. ⇒ 이 부분은 android 내부 sdk에 설치되어있는 자바인지는 잘 모르겠음. 내 PC에는 이미 android 및 자바가 따로 따로 다 설치가 되어있었음.
- android studio 설치 후 gradle은 따로 설치해줘야함

    brew install gradle #gradle 설치 
    brew reinstall gradle #재설치 

 

에러 내용

    BUILD FAILED in 0s
    22 actionable tasks: 2 executed, 20 up-to-date
    /Users/grosso/Desktop/Programming_source/Learning/apache_cordova/concept/myfirsthybridapp/platforms/android/gradlew: Command failed with exit code 1 Error output:
    /Users/grosso/Desktop/Programming_source/Learning/apache_cordova/concept/myfirsthybridapp/platforms/android/app/src/main/AndroidManifest.xml Error:
        uses-sdk:minSdkVersion 14 cannot be smaller than version 19 declared in library [:CordovaLib] /Users/grosso/Desktop/Programming_source/Learning/apache_cordova/concept/myfirsthybridapp/platforms/android/CordovaLib/build/intermediates/library_manifest/debug/AndroidManifest.xml as the library might be using APIs not available in 14
        Suggestion: use a compatible library with a minSdk of at most 14,
            or increase this project's minSdk version to at least 19,
            or use tools:overrideLibrary="org.apache.cordova" to force usage (may lead to runtime failures)
    
    FAILURE: Build failed with an exception.
    
    * What went wrong:
    Execution failed for task ':app:processDebugManifest'.
    > Manifest merger failed : uses-sdk:minSdkVersion 14 cannot be smaller than version 19 declared in library [:CordovaLib] /Users/grosso/Desktop/Programming_source/Learning/apache_cordova/concept/myfirsthybridapp/platforms/android/CordovaLib/build/intermediates/library_manifest/debug/AndroidManifest.xml as the library might be using APIs not available in 14
          Suggestion: use a compatible library with a minSdk of at most 14,
              or increase this project's minSdk version to at least 19,
              or use tools:overrideLibrary="org.apache.cordova" to force usage (may lead to runtime failures)
    
    * Try:
    Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.

### 1차시도 - 안됨

    cordova platform rm android 
    cordova platform add android@nightly

### 2차시도 - 안됨

/platforms/android/CordovaLib/build/intermediates/library_manifest/debug/AndroidManifest.xml 로 가서 

    <?xml version="1.0" encoding="utf-8"?>
    <!--
           Licensed to the Apache Software Foundation (ASF) under one
           or more contributor license agreements.  See the NOTICE file
           distributed with this work for additional information
           regarding copyright ownership.  The ASF licenses this file
           to you under the Apache License, Version 2.0 (the
           "License"); you may not use this file except in compliance
           with the License.  You may obtain a copy of the License at
    
             http://www.apache.org/licenses/LICENSE-2.0
    
           Unless required by applicable law or agreed to in writing,
           software distributed under the License is distributed on an
           "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
           KIND, either express or implied.  See the License for the
           specific language governing permissions and limitations
           under the License.
    -->
    <manifest xmlns:android="http://schemas.android.com/apk/res/android"
        package="org.apache.cordova"
        android:versionCode="1"
        android:versionName="1.0" >
    
        <uses-sdk android:minSdkVersion="19" /> <!-- 이 라인을 삭제 -->
    
    </manifest>

### 3차시도  - **😁 Success!**

        <?xml version='1.0' encoding='utf-8'?>
        <widget id="com.phonegap.helloworld" version="1.0.0" xmlns="http://www.w3.org/ns/widgets" xmlns:gap="http://phonegap.com/ns/1.0">
            <name>helloworld</name>
            <description>
                Hello World sample application that responds to the deviceready event.
            </description>
            <author email="support@phonegap.com" href="http://phonegap.com">
                PhoneGap Team
            </author>
            <content src="index.html" />
            <preference name="DisallowOverscroll" value="true" />
            <preference name="android-minSdkVersion" value="19" /> <!-- 이부분을 14에서 19로 바꿔줌 -->
            <plugin name="cordova-plugin-battery-status" source="npm" spec="~1.2.4" />
            <plugin name="cordova-plugin-camera" source="npm" spec="~2.4.1" />
            <plugin name="cordova-plugin-media-capture" source="npm" spec="~1.4.3" />
            <plugin name="cordova-plugin-device" source="npm" spec="~1.1.6" />
            <plugin name="cordova-plugin-dialogs" source="npm" spec="~1.3.3" />
            <plugin name="cordova-plugin-file" source="npm" spec="~4.3.3" />
            <plugin name="cordova-plugin-geolocation" source="npm" spec="~2.4.3" />
            <plugin name="cordova-plugin-globalization" source="npm" spec="~1.0.7" />
            <plugin name="cordova-plugin-inappbrowser" source="npm" spec="~1.7.1" />
            <plugin name="cordova-plugin-network-information" source="npm" spec="~1.3.3" />
            <plugin name="cordova-plugin-vibration" source="npm" spec="~2.1.5" />
            <platform name="android">
                <icon density="ldpi" src="www/res/icon/android/drawable-ldpi-icon.png" />
                <icon density="mdpi" src="www/res/icon/android/drawable-mdpi-icon.png" />
                <icon density="hdpi" src="www/res/icon/android/drawable-hdpi-icon.png" />
                <icon density="xhdpi" src="www/res/icon/android/drawable-xhdpi-icon.png" />
                <icon density="xxhdpi" src="www/res/icon/android/drawable-xxhdpi-icon.png" />
                <icon density="xxxhdpi" src="www/res/icon/android/drawable-xxxhdpi-icon.png" />
                <splash density="land-ldpi" src="www/res/screen/android/drawable-land-ldpi-screen.png" />
                <splash density="land-mdpi" src="www/res/screen/android/drawable-land-mdpi-screen.png" />
                <splash density="land-hdpi" src="www/res/screen/android/drawable-land-hdpi-screen.png" />
                <splash density="land-xhdpi" src="www/res/screen/android/drawable-land-xhdpi-screen.png" />
                <splash density="land-xxhdpi" src="www/res/screen/android/drawable-land-xxhdpi-screen.png" />
                <splash density="land-xxxhdpi" src="www/res/screen/android/drawable-land-xxxhdpi-screen.png" />
                <splash density="port-ldpi" src="www/res/screen/android/drawable-port-ldpi-screen.png" />
                <splash density="port-mdpi" src="www/res/screen/android/drawable-port-mdpi-screen.png" />
                <splash density="port-hdpi" src="www/res/screen/android/drawable-port-hdpi-screen.png" />
                <splash density="port-xhdpi" src="www/res/screen/android/drawable-port-xhdpi-screen.png" />
                <splash density="port-xxhdpi" src="www/res/screen/android/drawable-port-xxhdpi-screen.png" />
                <splash density="port-xxxhdpi" src="www/res/screen/android/drawable-port-xxxhdpi-screen.png" />
            </platform>
            <platform name="ios">
                <icon height="57" platform="ios" src="www/res/icon/ios/icon.png" width="57" />
                <icon height="114" platform="ios" src="www/res/icon/ios/icon@2x.png" width="114" />
                <icon height="40" platform="ios" src="www/res/icon/ios/icon-40.png" width="40" />
                <icon height="80" platform="ios" src="www/res/icon/ios/icon-40@2x.png" width="80" />
                <icon height="50" platform="ios" src="www/res/icon/ios/icon-50.png" width="50" />
                <icon height="100" platform="ios" src="www/res/icon/ios/icon-50@2x.png" width="100" />
                <icon height="60" platform="ios" src="www/res/icon/ios/icon-60.png" width="60" />
                <icon height="120" platform="ios" src="www/res/icon/ios/icon-60@2x.png" width="120" />
                <icon height="180" platform="ios" src="www/res/icon/ios/icon-60@3x.png" width="180" />
                <icon height="72" platform="ios" src="www/res/icon/ios/icon-72.png" width="72" />
                <icon height="144" platform="ios" src="www/res/icon/ios/icon-72@2x.png" width="144" />
                <icon height="76" platform="ios" src="www/res/icon/ios/icon-76.png" width="76" />
                <icon height="152" platform="ios" src="www/res/icon/ios/icon-76@2x.png" width="152" />
                <icon height="29" platform="ios" src="www/res/icon/ios/icon-small.png" width="29" />
                <icon height="58" platform="ios" src="www/res/icon/ios/icon-small@2x.png" width="58" />
                <icon height="87" platform="ios" src="www/res/icon/ios/icon-small@3x.png" width="87" />
                <splash height="1136" platform="ios" src="www/res/screen/ios/Default-568h@2x~iphone.png" width="640" />
                <splash height="1334" platform="ios" src="www/res/screen/ios/Default-667h.png" width="750" />
                <splash height="2208" platform="ios" src="www/res/screen/ios/Default-736h.png" width="1242" />
                <splash height="1242" platform="ios" src="www/res/screen/ios/Default-Landscape-736h.png" width="2208" />
                <splash height="1536" platform="ios" src="www/res/screen/ios/Default-Landscape@2x~ipad.png" width="2048" />
                <splash height="768" platform="ios" src="www/res/screen/ios/Default-Landscape~ipad.png" width="1024" />
                <splash height="2048" platform="ios" src="www/res/screen/ios/Default-Portrait@2x~ipad.png" width="1536" />
                <splash height="1024" platform="ios" src="www/res/screen/ios/Default-Portrait~ipad.png" width="768" />
                <splash height="960" platform="ios" src="www/res/screen/ios/Default@2x~iphone.png" width="640" />
                <splash height="480" platform="ios" src="www/res/screen/ios/Default~iphone.png" width="320" />
            </platform>
            <platform name="wp8">
                <icon height="99" platform="wp8" src="www/res/icon/wp8/ApplicationIcon.png" width="99" />
                <icon height="159" platform="wp8" src="www/res/icon/wp8/Background.png" width="159" />
                <splash height="1280" platform="wp8" src="www/res/screen/wp8/screen-portrait.jpg" width="768" />
            </platform>
            <platform name="windows">
                <icon height="150" platform="windows" src="www/res/icon/windows/Square150x150Logo.scale-100.png" width="150" />
                <icon height="30" platform="windows" src="www/res/icon/windows/Square30x30Logo.scale-100.png" width="30" />
                <icon height="50" platform="windows" src="www/res/icon/windows/StoreLogo.scale-100.png" width="50" />
                <splash height="300" platform="windows" src="www/res/screen/windows/SplashScreen.scale-100.png" width="620" />
                <icon height="120" platform="windows" src="www/res/icon/windows/StoreLogo.scale-240.png" width="120" />
                <icon height="44" platform="windows" src="www/res/icon/windows/Square44x44Logo.scale-100.png" width="44" />
                <icon height="106" platform="windows" src="www/res/icon/windows/Square44x44Logo.scale-240.png" width="106" />
                <icon height="70" platform="windows" src="www/res/icon/windows/Square70x70Logo.scale-100.png" width="70" />
                <icon height="71" platform="windows" src="www/res/icon/windows/Square71x71Logo.scale-100.png" width="71" />
                <icon height="170" platform="windows" src="www/res/icon/windows/Square71x71Logo.scale-240.png" width="170" />
                <icon height="360" platform="windows" src="www/res/icon/windows/Square150x150Logo.scale-240.png" width="360" />
                <icon height="310" platform="windows" src="www/res/icon/windows/Square310x310Logo.scale-100.png" width="310" />
                <icon height="150" platform="windows" src="www/res/icon/windows/Wide310x150Logo.scale-100.png" width="310" />
                <icon height="360" platform="windows" src="www/res/icon/windows/Wide310x150Logo.scale-240.png" width="744" />
                <splash height="1920" platform="windows" src="www/res/screen/windows/SplashScreenPhone.scale-240.png" width="1152" />
            </platform>
            <access origin="*" />
            <allow-intent href="http://*/*" />
            <allow-intent href="https://*/*" />
            <allow-intent href="tel:*" />
            <allow-intent href="sms:*" />
            <allow-intent href="mailto:*" />
            <allow-intent href="geo:*" />
            <platform name="android">
                <allow-intent href="market:*" />
            </platform>
            <platform name="ios">
                <allow-intent href="itms:*" />
                <allow-intent href="itms-apps:*" />
            </platform>
        </widget>

avd machine이 실행이 안된다면, 아래 코드를 .bash_profile에 추가 

    # Android For Apache Cordova
    export ANDROID_HOME=$HOME/Library/Android/sdk
    export PATH=$PATH:$ANDROID_HOME/emulator
    export PATH=$PATH:$ANDROID_HOME/tools
    export PATH=$PATH:$ANDROID_HOME/tools/bin
    export PATH=$PATH:$ANDROID_HOME/platform-tools

`<preference name="android-minSdkVersion" value="19" />` 이 부분을 14에서 19로 바꿔줌 

적어도 `x86` 으로 돌아가는 avd machine을 하나를 설치한다

### Phone gap vs Cordova

- Phone gap
    - Phonegap is owned by Adobe
    - It allows developers  to test
- Cordova
    - Open source project through Apache foundation
    - It's not the service, or the support. It is `an app` itself

Generally `Phone gap App` is `Cordova` App



# Directory 구조

##  config.xml

- plugin 설정, android의 manifest, ios의 info.plist 같은 느낌
- 이미지 루트등 asset 파일을 설정해주는 부분이기도 함

❗️필요한 plugin 만 enable 하자

##  Security

config.xml 에서 설정해줌

    <access origin="*" /> <!-- <access origin="https://myserver"> 식으로 바꿔줌 -->
    <access origin="https://myapiserver.com"/>

## Hooks - Script.

- Give more information about the app

## Platforms

- serving 하고 있는 platform 들을 보여줌

## Plugins

- Dependency

## WWW

- 이 디렉토리에서 개발함.
- res ⇒ image assets

# Component Source

- Don't reinvent the wheel!

- [http://goratchet.com/](http://goratchet.com/)
- [https://chocolatechip-ui.github.io/](https://chocolatechip-ui.github.io/)
