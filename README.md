# cordova-study

https://www.notion.so/Phonegap-Ludei-Build-HTML5-CSS-JS-Apps-dccbdd492ba842dcba245df0cfe2e7dc

https://cordova.apache.org/plugins/ 
=> 필요한 plugin 있을 때 마다 가서 확인함

# Cordova &  Phonegap Setup

## **What is cordova?**

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

#  iOS 설치

ios 설치 - 문제 없이 아주 잘됨 

- xCode 설치
- cocoapod 설치

        sudo npm install -g ios-sim
        ios-sim showdevicetypes  #해당 directory로 가서함

# Android 설치

##  ❗️ Error - Android 설치, cordova build error

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

`<preference name="android-minSdkVersion" value="19" />` 이 부분을 14에서 19로 바꿔줌 

avd machine이 실행이 안된다면, 아래 코드를 .bash_profile에 추가 

    # Android For Apache Cordova
    export ANDROID_HOME=$HOME/Library/Android/sdk
    export PATH=$PATH:$ANDROID_HOME/emulator
    export PATH=$PATH:$ANDROID_HOME/tools
    export PATH=$PATH:$ANDROID_HOME/tools/bin
    export PATH=$PATH:$ANDROID_HOME/platform-tools


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


# 개발 Tool

- compile 없이 확인하는 방법
- `chrome://inspect/` 로 들어가면 현재 돌아가는 device들을 확인할 수 있음.
- 웹개발의 development tool처럼 개발 가능

#  Basic Code

- mobile 환경을 고려해서 hover, focus, active 등의 효과를 없앰

        *, *:hover, *:focus, *:active {
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-tap-highlight-color: transparent;
            outline: none;
        }

- transition, ❗️Don't use `CSS keyframe` !

        #element {
            -webkit-transition: all .3s;
            -moz-transition: all .3s;
            -transition: all .3s;
        }

- scroll

        #scroll {
            overflow: auto;
            -webkit-overflow-scrolling: touch;
        }

- event handling

        document.addEventListener("touchstart", function(){
        
        })

- Use `prototype chain` when necessary

        function app(){
            if (window === this) {
                return new_();
            }
            return this
        }
        
        app.prototype = {
            getInfo: function(){
                console.log(v1.1.0 Cartoonsmart);
            }
        }
        
        app().getInfo()

→ take less memory. 

object 하나를 200번 만드는 것보다 shared object인 `prototype`을 사용한다.

- index.html 구조

        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Cartoonsmart</title>
            <meta name="format-detection" content="telephone=no" />
            <meta name="viewport" content="initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, width=device-width, height=device-height"/>
            <link rel="stylesheet" href="css/ratchet.css"/>
            <link rel="stylesheet" href="css/theme.css"/>
            <script src="cordova.js"></script> <!-- App이 compile 될 때 자동으로 들어감. -->
            <script src="js/ratchet.js"></script>
            <script src="js/zepto.js"></script>
          </head>
          <body ontouchstart="">
            <header class="bar bar-nav">
              <h1 class="title">Cartoonsmart</h1>
            </header>
            <div class="content">
              <div class="card">
                <ul class="table-view">
                  <li class="table-view-cell">
                    <a class="push-right" href="#Modal" data-transition="slide-in" data-selector=".device-content">
                        Open Model
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div id="Modal" class="modal">
              <script src="js/cartoonsmart.js"></script>
              <header class="bar bar-nav">
                <a class="icon icon-close pull-right" href="#Modal"></a>
                <h1 class="title">Modal</h1>
              </header>
              <div class="content">
                <p class="content-padded">Your Content goes here....</p>
              </div>
            </div>
          </body>
        </html>

# Plugin & Library & Cordova API 
 
## https://cordova.apache.org/docs/en/latest/ 
## 필요한 플러그인 모두 위에서 찾아서 쓰면 됨

### Zepto - library

https://github.com/madrobby/zepto

- Minimal Version jQuery


# ❗️ Compatability Issue

- 가상기기에서 되는게 있고 안되는게 있다.
- 실제 기기에서 되는게 있고 안되는게 있다.
- API를 보다 보면 버전마다 되는 것이 있고 안되는 것도 있다.
- 플랫폼마다 되는게 있고 안되는게 있다.
- 어떤 플러그인을 설치했더니 ios는 잘되고 android에서는 build error가 발생하는 경우가 있다.
- 테스트가 엄청 중요할 듯.

# Cordova API

- 일종의 패턴임 필요한 플러그인 찾고 가져와서 쓰고 코드 커스텀하는 것이 계속 반복

        cordova plugin -ls

⇒ 설치된 플러그인들 확인 

### Zepto - library

https://github.com/madrobby/zepto

- Minimal Version jQuery

### console

- default로 깔려있음
- debugging 용

- html/css

        <div id="Console" class="modal">
          <script src="./js/console.js"></script>
          <header class="bar bar-nav">
            <a class="icon icon-close pull-right" href="#Console"></a>
            <h1 class="title">Console</h1>
          </header>
          <div class="content">
            <ul class="table-view">
              <li class="table-view-cell"> <a id="Console1" href="#"> Log simple </a> </li>
              <li class="table-view-cell"> <a id="Console2" href="#"> Log two arguments </a> </li>
              <li class="table-view-divider"> Android Quirk: The Android console only accept's the first argument (device not emulator) and ignores all other values. </li>
              <li class="table-view-cell"> <a id="Console3" href="#"> Log object </a> </li>
              <li class="table-view-cell"> <a id="Console4" href="#"> Log array </a> </li>
              <li class="table-view-cell"> <a id="Console5" href="#"> Log var value </a> </li>
            </ul>
          </div>
        </div>

- js

    document.addEventListener("deviceready", consoleReady, false);
    
        function consoleReady() {
        
        $(function(){
        
            $('#Console1').on('touchend', function(){
            
            console.log("logged a string");
            
            });
            
            $('#Console2').on('touchend', function(){
            
            console.log( "string", 2 );
            
            });
            
            $('#Console3').on('touchend', function(){
            
            console.log( {"object":"Yup", "Num": 10} );
            
            });
            
            $('#Console4').on('touchend', function(){
            
            console.log( [ 1,"String",{"OBJ":"YUP!"},[1,2,3] ] );
            
            });
            
            $('#Console5').on('touchend', function(){
            
            var Log = [ 1,"String",{"OBJ":"YUP!"},[1,2,3] ];
            
            console.log( Log );
            
            });
        
        });
    
    }

### Device - Plugin

- Device 정보 가져옴

[https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-device/](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-device/)

❗️ ios 에서 uuid api가 바뀌어서 접근하지 못함 

- 설치

        cordova plugin add cordova-plugin-device

- html

        <div id="Device" class="modal">
              <script src="js/device.js"></script>
              <header class="bar bar-nav">
                <a class="icon icon-close pull-right" href="#Device"></a>
                <h1 class="title">Device</h1>
              </header>
              <div class="content">
                <ul class="table-view">
                  <li class="table-view-cell"> <a id="DeviceLog" href="#"> Log out device object </a> </li>
                  <li class="table-view-divider">
                    Cordova  : <span id="Dev1">device.cordova</span><br/>
                    Model  : <span id="Dev2">device.model</span><br/>
                    Platform  : <span id="Dev3">device.platform</span><br/>
        <!--            Universally Unique Identifier  : <span id="Dev4">device.uuid</span><br/>  ios에서 api 바뀜-->
                    Version  : <span id="Dev5">device.version</span><br/>
                  </li>
                </ul>
              </div>
        </div>

- js

        //항상 deviceready event를 걸어줘야함
        document.addEventListener("deviceready", deviceAPI, false);
    
        function deviceAPI(){
        
            $(function(){
                $('#DeviceLog').on('touchend', function() {
                    console.log(device);
                    $('#Dev1').html(device.cordova);
                    $('#Dev2').html(device.model);
                    $('#Dev3').html(device.platform);
                    // $('#Dev4').html(device.uuid);
                    $('#Dev5').html(device.version);
                });
            });
        
        }

### Event Handling

- cordova default API
- html

        <div id="Events" class="modal">
            <script src="js/events.js"></script>
            <header class="bar bar-nav">
                <a class="icon icon-close pull-right" href="#Events"></a>
                <h1 class="title">Events</h1>
            </header>
            <div class="content">
                <ul class="table-view">
                    <li class="table-view-cell"> Paused <span id="paused">0</span> </li>
                    <li class="table-view-cell"> resumed <span id="resumed">0</span> </li>
                    <li class="table-view-divider">Android (some versions) and others...</li>
                    <li class="table-view-cell"> Back Button <span id="backEvent">0</span> </li>
                    <li class="table-view-cell"> Volume Up <span id="volumeUp">0</span> </li>
                    <li class="table-view-cell"> Volume Down <span id="volumeDown">0</span> </li>
                    <li class="table-view-divider">Android deprecated...</li>
                    <li class="table-view-cell"> Search Button <span id="searchEvent">0</span> </li>
                    <li class="table-view-cell"> Menu Button <span id="menuEvent">0</span> </li>
                </ul>
            </div>
        </div>

- js

        //Android Activity Life Cycle, iOS View Life Cycle과 같은 것도 추적 가능하다.
        
        document.addEventListener("deviceready", eventsAPI, false);
        
        function eventsAPI() {
        
            $(function(){
        
                var paused = 0, resumed = 0, back = 0, volup = 0, voldown = 0, menu = 0, search = 0;
        
                document.addEventListener('pause', pause, false);
        
                function pause() {
                    $('#paused').html( paused += 1 );
                }
        
                document.addEventListener('resume', resume, false);
        
                function resume() {
                    $('#resumed').html( resumed += 1 );
                }
        
                // Android
        
                document.addEventListener("backbutton", backbtn, false);
        
                function backbtn() {
                    $('#backEvent').html( back += 1 );
                }
        
                document.addEventListener('volumeupbutton', volumeup, false);
        
                function volumeup() {
                    $('#volumeUp').html( volup += 1 );
                }
        
                document.addEventListener('volumedownbutton', volumedown, false);
        
                function volumedown() {
                    $('#volumeDown').html( voldown += 1 );
                }
        
                // Android deprecated
        
                document.addEventListener('menubutton', menubtn, false);
        
                function menubtn() {
                    $('#menuEvent').html( menu += 1 );
                }
        
                document.addEventListener('searchbutton', searchbtn, false);
        
                function searchbtn() {
                    $('#searchEvent').html( search += 1 );
                }
        
            });
        
        }

### Vibration

- 이미 깔려있음

- html/css

        <div id="Vibration" class="modal">
            <script src="js/vibration.js"></script>
            <header class="bar bar-nav">
                <a class="icon icon-close pull-right" href="#Vibration"></a>
                <h1 class="title">Vibration</h1>
            </header>
            <div class="content">
                <div class="card">
                    <ul class="table-view">
                        <li class="table-view-cell"> <a id="VibrateNormal" href="#"> Vibrate </a> </li>
                        <li class="table-view-cell"> <a id="VibratePattern" href="#"> Vibrate Pattern </a> </li>
                        <li class="table-view-cell"> <a id="VibrateCancel" href="#"> Vibrate Cancel </a> </li>
                    </ul>
                </div>
            </div>
        </div>

- js

        document.addEventListener("deviceready", vibrationAPI, false);
        
        function vibrationAPI() {
        
            $(function(){
        
                // iOS ignores vibrate time and is preset
                // WP8 min 1000ms to max 5000ms
                $('#VibrateNormal').on('touchend',function(){
                    navigator.vibrate(1000);
                });
        
                // iOS and WP8 doesn't support vibrate pattern
                $('#VibratePattern').on('touchend',function(){
                    navigator.vibrate([500,2000,500,1000,500,2000,1000]);
                });
        
                // Passing 0 or empty array [] or array with the value of [0] it will cancel
                // Is NOT supported on iOS
                $('#VibrateCancel').on('touchend',function(){
                    navigator.vibrate([0]);
                });
        
            });
        
        }

### Battery

- 설치

        cordova plugin add cordova-plugin-battery-status

- html

        <div id="Battery" class="modal">
            <script src="js/battery.js"></script>
            <header class="bar bar-nav">
              <a class="icon icon-close pull-right" href="#Battery"></a>
              <h1 class="title">Battery Status</h1>
            </header>
            <div class="content">
              <div class="card">
                <ul class="table-view">
                  <li class="table-view-divider">
                    Event Fired : <span id="BatteryEvent">...</span><br/>
                    Battery level : <span id="BatteryLevel">...</span><br/>
                    Device plugged in : <span id="BatteryPlugged">...</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

- js

        document.addEventListener("deviceready", batteryStatus, false);
        
        function batteryStatus() {
        
            $(function(){
        
                window.addEventListener("batterystatus", onBatteryChange, false);
        
                function onBatteryChange(info) {
                    $('#BatteryEvent').html('Battery Status');
                    $('#BatteryLevel').html( info.level );
                    $('#BatteryPlugged').html( info.isPlugged );
                }
        
                window.addEventListener("batterylow", onBatteryLow, false);
        
                function onBatteryLow(info) {
                    $('#BatteryEvent').html('Battery Low');
                    $('#BatteryLevel').html( info.level );
                    $('#BatteryPlugged').html( info.isPlugged );
                }
        
                window.addEventListener("batterycritical", onBatteryCritical, false);
        
                function onBatteryCritical(info) {
                    $('#BatteryEvent').html('Battery Critical');
                    $('#BatteryLevel').html( info.level );
                    $('#BatteryPlugged').html( info.isPlugged );
                }
        
            });
        
        }

### In app Browser

- 앱 내부에서 브라우저 열어줌

- 설치

        cordova plugin add cordova-plugin-inappbrowser

- html

        <div id="Browser" class="modal">
            <script src="js/browser.js"></script>
            <header class="bar bar-nav">
                <a class="icon icon-close pull-right" href="#Browser"></a>
                <h1 class="title">In App Browser</h1>
            </header>
            <div class="content">
                <div class="card">
                    <ul class="table-view">
                        <li class="table-view-cell"> <a id="openNormal" href="http://www.cartoonsmart.com" target="_system"> Open Normal </a> </li>
                        <li class="table-view-cell"> <a id="openWin" href="http://www.cartoonsmart.com" target="_blank"> Open Link </a> </li>
                        <li class="table-view-cell"> <a id="openWithOptions" href="#"> Window with Option's </a> </li>
                        <li class="table-view-cell"> <a id="openWithEvents" href="#"> Open Window with Events </a> </li>
                        <li class="table-view-cell"> <a id="openCloseWin" href="#"> Open &amp; Close </a> </li>
                        <li class="table-view-cell"> <a id="passCSS" href="#"> Passing CSS </a> </li>
                        <li class="table-view-cell"> <a id="passJS" href="#"> Passing JS </a> </li>
                    </ul>
                </div>
            </div>
        </div>

- js

        document.addEventListener("deviceready", inAppBrowserAPI, false);
        
        function inAppBrowserAPI() {
        
            $(function(){
        
                $('#openNormal').on('touchend',function(){
        
                    window.open('http://www.cartoonsmart.com/', '_system');
        
                });
        
                $('#openWin').on('touchend',function(){
        
                    window.open('http://www.cartoonsmart.com/', '_blank');
        
                });
        
                $('#openWithOptions').on('touchend',function(){
        
                    var optionsArr = [
                        // For all OS's
                        'location=no',
                        
                        // For Android, iOS & Windows Phone only
                        'hidden=yes',
                        
                        // Android and iOS only
                        'clearcache=yes',
                        'clearsessioncache=yes',
                        
                        // iOS only
                        // Transition style options are fliphorizontal, crossdissolve or coververtical (Default)
                        'transitionstyle=fliphorizontal',
                        'toolbar=yes',
                        'closebuttoncaption=Exit',
                        // Tool bar position options are top or bottom (Default)
                        'toolbarposition=top',
                        'disallowoverscroll=yes',
                        'enableViewportScale=yes',
                        'mediaPlaybackRequiresUserAction=yes',
                        'allowInlineMediaPlayback=yes',
                        'keyboardDisplayRequiresUserAction=no',
                        'suppressesIncrementalRendering=yes',
                        // Presentation style options are pagesheet, formsheet or fullscreen (Default)
                        'presentationstyle=formsheet',
        
                        // Android only
                        'zoom=no',
                        'hardwareback=no',
                        
                        // Windows only
                        // If location is set to no there be no control presented to user to close IAB window.
                        'fullscreen=yes'
                    ];
        
                    var options = optionsArr.join();
        
                    var browserOptions = window.open('http://www.cartoonsmart.com/', '_blank', options );
        
                    browserOptions.show();
        
                });
        
                function BrowserCallback( event ) {
                     console.log(event, event.type, event.url);
                 }
        
                $('#openWithEvents').on('touchend',function(){
        
                    var eventfulBrowser = window.open('http://www.cartoonsmart.com/', '_blank');
        
                    eventfulBrowser.addEventListener('loadstart', BrowserCallback);
                     eventfulBrowser.addEventListener('loadstop',  BrowserCallback);
                     eventfulBrowser.addEventListener('loaderror', BrowserCallback);
                     eventfulBrowser.addEventListener(  'exit',      BrowserCallback);
        
                });
        
                $('#openCloseWin').on('touchend',function(){
        
                    var browserClose = window.open('http://www.cartoonsmart.com/', '_blank');
        
                    setTimeout(function(){
                        browserClose.close();
                    },3000);
        
                });
        
                $('#passCSS').on('touchend',function(){
        
                    var browserCSS = window.open('http://www.cartoonsmart.com/', '_blank');
        
                    browserCSS.addEventListener('loadstop',  function(){
                        
                        browserCSS.insertCSS(
                            
                            { file: 'styles.css' }
        
                        );
        
                        browserCSS.insertCSS(
                            
                            { code: 'body #mobile-header { background-color:black; }' }
        
                        );
                    });
        
                });
        
        
                $('#passJS').on('touchend',function(){
        
                    var browserJS = window.open('http://www.cartoonsmart.com/', '_blank');
        
                    browserJS.addEventListener('loadstop',  function(){
                        
                        browserJS.executeScript(
                            
                            { file: 'Cartoonsmart.js', }
        
                        );
        
                        browserJS.executeScript(
                            
                            { code: 'alert("YUP");' }
        
                        );
        
                    });
        
                });
        
        
        
            });
        
        }

- option - option 값을 잘 활용하자

        //option 값을 잘 활용하자
        $('#openWithOptions').on('touchend',function(){
        
            var optionsArr = [
                // For all OS's
                'location=no',
                
                // For Android, iOS & Windows Phone only
                'hidden=yes',
                
                // Android and iOS only
                'clearcache=yes',
                'clearsessioncache=yes',
                
                // iOS only
                // Transition style options are fliphorizontal, crossdissolve or coververtical (Default)
                'transitionstyle=fliphorizontal',
                'toolbar=yes',
                'closebuttoncaption=Exit',
                // Tool bar position options are top or bottom (Default)
                'toolbarposition=top',
                'disallowoverscroll=yes',
                'enableViewportScale=yes',
                'mediaPlaybackRequiresUserAction=yes',
                'allowInlineMediaPlayback=yes',
                'keyboardDisplayRequiresUserAction=no',
                'suppressesIncrementalRendering=yes',
                // Presentation style options are pagesheet, formsheet or fullscreen (Default)
                'presentationstyle=formsheet',
        
                // Android only
                'zoom=no',
                'hardwareback=no',
                
                // Windows only
                // If location is set to no there be no control presented to user to close IAB window.
                'fullscreen=yes'
            ];
        
            var options = optionsArr.join();
        
            var browserOptions = window.open('http://www.cartoonsmart.com/', '_blank', options );
        
            browserOptions.show();
        
        });

- Event Handling

        //Event Handling
                function BrowserCallback( event ) {
                     console.log(event, event.type, event.url);
                 }
        
                $('#openWithEvents').on('touchend',function(){
        
                    var eventfulBrowser = window.open('http://www.cartoonsmart.com/', '_blank');
        
                    eventfulBrowser.addEventListener('loadstart', BrowserCallback);
                     eventfulBrowser.addEventListener('loadstop',  BrowserCallback);
                     eventfulBrowser.addEventListener('loaderror', BrowserCallback);
                     eventfulBrowser.addEventListener(  'exit',      BrowserCallback);
        
                });
        
                $('#openCloseWin').on('touchend',function(){
        
                    var browserClose = window.open('http://www.cartoonsmart.com/', '_blank');
        
                    setTimeout(function(){
                        browserClose.close();
                    },3000);
        
                });
        
                $('#passCSS').on('touchend',function(){
        
                    var browserCSS = window.open('http://www.cartoonsmart.com/', '_blank');
        
                    browserCSS.addEventListener('loadstop',  function(){
                        
                        browserCSS.insertCSS(
                            
                            { file: 'styles.css' }
        
                        );
        
                        browserCSS.insertCSS(
                            
                            { code: 'body #mobile-header { background-color:black; }' }
        
                        );
                    });
        
                });
        
        
                $('#passJS').on('touchend',function(){
        
                    var browserJS = window.open('http://www.cartoonsmart.com/', '_blank');
        
                    browserJS.addEventListener('loadstop',  function(){
                        
                        browserJS.executeScript(
                            
                            { file: 'Cartoonsmart.js', }
        
                        );
        
                        browserJS.executeScript(
                            
                            { code: 'alert("YUP");' }
        
                        );
        
                    });
        
                });

### Status Bar

- default

- config.xml

        <!-- Status bar preferences -->
        <preference name="StatusBarOverlaysWebView" value="true" />
        <preference name="StatusBarBackgroundColor" value="#aaaaaa" />
        <preference name="StatusBarStyle" value="default" />

⇒ Status bar는  config에 추가해줘야함

- html

        <div id="Statusbar" class="modal">
            <script src="js/statusbar.js"></script>
            <header class="bar bar-nav">
                <a class="icon icon-close pull-right" href="#Statusbar"></a>
                <h1 class="title">Statusbar</h1>
            </header>
            <div class="content">
                <div class="card">
                    <ul class="table-view">
                        <li class="table-view-divider">Ios Only</li>
                        <li class="table-view-cell"><a id="OverlayFalse" href="#"> Overlay False </a></li>
                        <li class="table-view-cell"><a id="OverlayTrue" href="#"> Overlay True </a></li>
                        <li class="table-view-divider">Android, iOS and Windows Phone</li>
                        <li class="table-view-cell"><a id="StatusHide" href="#"> Hide </a></li>
                        <li class="table-view-cell"><a id="StatusShow" href="#"> Show </a></li>
                        <li class="table-view-cell"><a id="StatusToggle" href="#"> Toggle </a></li>
                        <li class="table-view-divider">Android 5+, iOS and Windows Phone</li>
                        <li class="table-view-cell"><a id="StatusColor" href="#"> Status Color </a></li>
                        <li class="table-view-cell"><a id="StatusColorHEX" href="#"> Status Color HEX </a></li>
                        <li class="table-view-divider">iOS and Windows Phone</li>
                        <li class="table-view-cell"><a id="StatusDefault" href="#"> Status Default </a></li>
                        <li class="table-view-cell"><a id="StatusLightContent" href="#"> Status Light Content </a></li>
                        <li class="table-view-cell"><a id="StatusBlackTranslucent" href="#"> Status Black Translucent </a></li>
                        <li class="table-view-cell"><a id="StatusBlackOpaque" href="#"> Status Black Opaque </a></li>
                    </ul>
                </div>
            </div>
        </div>

- js

        document.addEventListener("deviceready", statusbarAPI, false);
        
        function statusbarAPI() {
        
            $(function(){
        
                $('#OverlayFalse').on('touchend',function(){
                    StatusBar.overlaysWebView(false);
                });
        
                $('#OverlayTrue').on('touchend',function(){
                    StatusBar.overlaysWebView(true);
                });
        
                // iOS, Android and Windows Phone
        
                $('#StatusHide').on('touchend',function(){
                    StatusBar.hide();
                });
        
                $('#StatusShow').on('touchend',function(){
                    StatusBar.show();
                });
        
                $('#StatusToggle').on('touchend',function(){
                    
                    if(StatusBar.isVisible === true){
                        StatusBar.hide();
                    } else {
                        StatusBar.show();
                    }
        
                });
        
                // Android 5+, iOS and Windows Phone...
        
                $('#StatusColor').on('touchend',function(){
                    /* black, darkGray, lightGray, white, gray, red, green, 
                       blue, cyan, yellow, magenta, orange, purple, brown */
                    StatusBar.backgroundColorByName('blue');
                });
        
                $('#StatusColorHEX').on('touchend',function(){
                    StatusBar.backgroundColorByHexString("#ff9462");
                });
        
                // iOS and Windows Phone
        
                $('#StatusDefault').on('touchend',function(){
                    StatusBar.styleDefault();
                });
        
                $('#StatusLightContent').on('touchend',function(){
                    StatusBar.styleLightContent();
                });
        
                $('#StatusBlackTranslucent').on('touchend',function(){
                    StatusBar.styleBlackTranslucent();
                });
        
                $('#StatusBlackOpaque').on('touchend',function(){
                    StatusBar.styleBlackOpaque();
                });
        
            });
        
        }

### Networking

- 설치

        cordova plugin add cordova-plugin-network-information

- html

        <div id="Network" class="modal">
            <script src="js/network.js"></script>
            <header class="bar bar-nav">
                <a class="icon icon-close pull-right" href="#Network"></a>
                <h1 class="title">Network</h1>
            </header>
            <div class="content">
                <div class="card">
                    <ul class="table-view">
                        <li class="table-view-divider">Network type...</li>
                        <li class="table-view-cell"><a href="#" id="NetworkGet" class="push-right">Get Network Information</a></li>
                        <li class="table-view-cell" id="NetworkDisplay">...</li>
                        <li class="table-view-divider">Network Event</li>
                        <li class="table-view-cell" id="NetworkEvent">...</li>
                    </ul>
                </div>
            </div>
        </div>

- js

        document.addEventListener("deviceready", networkAPI, false);
        
        function networkAPI() {
        
            $(function(){
        
                $('#NetworkGet').on('touchend',function(){
        
                    var networkState = navigator.connection.type;
        
                    var states = {};
                    states[Connection.UNKNOWN]  = 'Unknown connection';
                    states[Connection.ETHERNET] = 'Ethernet connection';
                    states[Connection.WIFI]     = 'WiFi connection';
                    states[Connection.CELL_2G]  = 'Cell 2G connection';
                    states[Connection.CELL_3G]  = 'Cell 3G connection';
                    states[Connection.CELL_4G]  = 'Cell 4G connection';
                    states[Connection.CELL]     = 'Cell generic connection';
                    states[Connection.NONE]     = 'No network connection';
        
                    $('#NetworkDisplay').html(states[networkState]);
        
                    console.log(networkState,states);
        
                });
        
                document.addEventListener("online", onOnline, false);
        
                function onOnline() {
                    $('#NetworkEvent').html('We\'re online!');
                }
        
                document.addEventListener("offline", onOffline, false);
        
                function onOffline() {
                    $('#NetworkEvent').html('Offline please connect...');
                }
        
            });
        
        }

### Dialog

- 설치

        cordova plugin add cordova-plugin-dialogs

- html

        <div id="Dialogs" class="modal">
            <script src="js/dialog.js"></script>
            <header class="bar bar-nav">
                <a class="icon icon-close pull-right" href="#Dialogs"></a>
                <h1 class="title">Dialogs</h1>
            </header>
            <div class="content">
                <div class="card">
                    <ul class="table-view">
                        <li class="table-view-divider">Returned information...</li>
                        <li class="table-view-cell" id="DialogReturn">...</li>
                        <li class="table-view-divider">Open Dialogs</li>
                        <li class="table-view-cell"><a href="#" id="OpenDialog">Open Dialog</a></li>
                        <li class="table-view-cell"><a href="#" id="OpenConfirmDialog">Open Confirm Dialog</a></li>
                        <li class="table-view-cell"><a href="#" id="OpenPromptDialog">Open Prompt Dialog</a></li>
                        <li class="table-view-cell"><a href="#" id="OpenBeepDialog">Open Beep Dialog</a></li>
                    </ul>
                </div>
            </div>
        </div>

- js

        document.addEventListener("deviceready", dialogsAPI, false);
        
        function dialogsAPI(){
        
            $(function(){
        
                // function DialogReturned(msg) {
                //     $("#DialogReturn").html(msg);
                // }
        
                $("#OpenDialog").on("touched", function(){
                    navigator.notification.alert(
                        "You are the winner!",
                        null,
                        "Game Over",
                        "Done"
                    );
                });
        
        
            });
        
        
        }

### Accelerometer

- Gaming에 매우 중요함

- 설치

        cordova plugin add cordova-plugin-device-motion

- html

        <div id="Accelerometer" class="modal">
            <script src="js/accelerometer.js"></script>
            <header class="bar bar-nav">
                <a class="icon icon-close pull-right" href="#Accelerometer"></a>
                <h1 class="title">Accelerometer</h1>
            </header>
            <div class="content">
                <div class="card">
                    <ul class="table-view">
                        <li class="table-view-divider">Get or Watch Accelerometer</li>
                        <li class="table-view-cell"><a href="#" id="GetValues">Get Values</a></li>
                        <li class="table-view-cell"><a href="#" id="WatchValues">Watch Values</a></li>
                        <li class="table-view-cell"><a href="#" id="StopWatching">Stop Watching</a></li>
                        <li class="table-view-divider">X, Y &amp; Z Values</li>
                        <li class="table-view-cell">X : <span id="X"></span></li>
                        <li class="table-view-cell">Y : <span id="Y"></span></li>
                        <li class="table-view-cell">Z : <span id="Z"></span></li>
                        <li class="table-view-cell">Timestamp : <span id="stamp"></span></li>
                    </ul>
                </div>
            </div>
        </div>

- js

        document.addEventListener("deviceready", accelerometerAPI, false);
        
        function accelerometerAPI() {
        
            $(function(){
        
                function onSuccess(acceleration) {
                    $('#X').html(      acceleration.x          );
                    $('#Y').html(      acceleration.y          );
                    $('#Z').html(     acceleration.z          );
                    $('#stamp').html( new Date(acceleration.timestamp) );
                }
        
                function onError() {
                    $('#X, #Y, #Z, #stamp').html('Error!!');
                };
        
                $('#GetValues').on('touchend',function(){
        
                    navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
        
                });
        
                var watchID;
        
                $('#WatchValues').on('touchend',function(){
        
                    watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, { frequency: 100  } );
        
                });
        
                $('#StopWatching').on('touchend',function(){
        
                    if (watchID) {
                        navigator.accelerometer.clearWatch(watchID);
                        watchID = null;
                    }
        
                    $('#X, #Y, #Z, #stamp').html('');
        
                });
        
            });
        
        }

### Compass

- Magnetic sensor

- 설치

        cordova plugin add cordova-plugin-device-orientation

- html

        <div id="Compass" class="modal">
            <script src="js/compass.js"></script>
            <header class="bar bar-nav">
                <a id="compassClose" class="icon icon-close pull-right" href="#Compass"></a>
                <h1 class="title">Compass</h1>
            </header>
            <div class="content">
                <div id="compassShow">
                    <p>True Heading...</p>
                    <div class="compass">
                        <img id="NeedleTrue" src="images/compass_needle.svg" alt="Compass Needle"/>
                    </div>
                    <p>Magnetic Heading...</p>
                    <div class="compass">
                        <img id="NeedleMagnetic" src="images/compass_needle.svg" alt="Compass Needle"/>
                    </div>
                    <p>
                        Accuracy: <span id="compassAccuracy">...</span> <br/>
                        Time: <span id="compassStamp">...</span>
                    </p>
                </div>
                <ul class="table-view">
                    <li class="table-view-cell"><a href="#" id="GetHeading">Get Heading</a></li>
                    <li class="table-view-cell"><a href="#" id="WatchHeading">Watch Heading</a></li>
                    <li class="table-view-cell"><a href="#" id="StopHeading">Stop Watching Heading</a></li>
                </ul>
            </div>
        </div>

- css

        #compassShow {
            position: relative;
            z-index: 2;
            background: white;
            text-align: center;
            color:#777;
            box-shadow: 0 1px 3px rgba(0,0,0,.5);
        }
        
        #compassShow p {
            padding: 25px 0;
            margin: 0;
        }
        
        #compassShow .compass {
            position: relative;
            overflow: hidden;
            width: 125px;
            height: 125px;
            background: url('../images/compass.svg') no-repeat center center;
            background-size:100% 100%;
            margin:0 auto;
        }
        
        #compassShow img {
            margin-top: 5px;
            height: 90%;
        }
        
        #compassShow p:last-child {
            text-align: left;
            padding-left: 20px;
        }

- images/compass.svg

        <?xml version="1.0" encoding="UTF-8" standalone="no"?>
        <svg
           xmlns:dc="http://purl.org/dc/elements/1.1/"
           xmlns:cc="http://creativecommons.org/ns#"
           xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
           xmlns:svg="http://www.w3.org/2000/svg"
           xmlns="http://www.w3.org/2000/svg"
           version="1.1"
           id="svg2"
           viewBox="0 0 320 320.00001"
           height="320"
           width="320">
          <defs
             id="defs4">
            <filter
               id="filter4788"
               style="color-interpolation-filters:sRGB;">
              <feFlood
                 id="feFlood4790"
                 result="flood"
                 flood-color="rgb(0,0,0)"
                 flood-opacity="0.176471" />
              <feComposite
                 id="feComposite4792"
                 result="composite1"
                 operator="out"
                 in2="SourceGraphic"
                 in="flood" />
              <feGaussianBlur
                 id="feGaussianBlur4794"
                 result="blur"
                 stdDeviation="0"
                 in="composite1" />
              <feOffset
                 id="feOffset4796"
                 result="offset"
                 dy="4.5"
                 dx="1.3" />
              <feComposite
                 id="feComposite4798"
                 result="fbSourceGraphic"
                 operator="atop"
                 in2="SourceGraphic"
                 in="offset" />
              <feColorMatrix
                 id="feColorMatrix5136"
                 values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
                 in="fbSourceGraphic"
                 result="fbSourceGraphicAlpha" />
              <feFlood
                 in="fbSourceGraphic"
                 result="flood"
                 flood-color="rgb(0,0,0)"
                 flood-opacity="0.0470588"
                 id="feFlood5138" />
              <feComposite
                 result="composite1"
                 operator="out"
                 in="flood"
                 in2="fbSourceGraphic"
                 id="feComposite5140" />
              <feGaussianBlur
                 result="blur"
                 stdDeviation="0"
                 in="composite1"
                 id="feGaussianBlur5142" />
              <feOffset
                 result="offset"
                 dy="13.8"
                 dx="26.1"
                 id="feOffset5144" />
              <feComposite
                 result="composite2"
                 operator="atop"
                 in="offset"
                 in2="fbSourceGraphic"
                 id="feComposite5146" />
            </filter>
          </defs>
          <metadata
             id="metadata7">
            <rdf:RDF>
              <cc:Work
                 rdf:about="">
                <dc:format>image/svg+xml</dc:format>
                <dc:type
                   rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
                <dc:title></dc:title>
              </cc:Work>
            </rdf:RDF>
          </metadata>
          <g
             transform="translate(0,-732.36216)"
             id="layer1">
            <circle
               transform="scale(1,-1)"
               r="160"
               cy="-892.36218"
               cx="160.00002"
               id="path4136"
               style="fill:#e6e6e6;stroke:none;stroke-width:0" />
            <circle
               r="150"
               cy="892.36218"
               cx="160"
               id="path4160"
               style="fill:#ffffff;stroke:none;stroke-width:0;filter:url(#filter4788)" />
          </g>
        </svg>

- images/compass_needle.svg

        <?xml version="1.0" encoding="UTF-8" standalone="no"?>
        <svg
           xmlns:dc="http://purl.org/dc/elements/1.1/"
           xmlns:cc="http://creativecommons.org/ns#"
           xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
           xmlns:svg="http://www.w3.org/2000/svg"
           xmlns="http://www.w3.org/2000/svg"
           version="1.1"
           id="svg2"
           viewBox="0 0 22 280.00001"
           height="280"
           width="22">
          <defs
             id="defs4">
            <filter
               id="filter4788"
               style="color-interpolation-filters:sRGB">
              <feFlood
                 id="feFlood4790"
                 result="flood"
                 flood-color="rgb(0,0,0)"
                 flood-opacity="0.176471" />
              <feComposite
                 id="feComposite4792"
                 result="composite1"
                 operator="out"
                 in2="SourceGraphic"
                 in="flood" />
              <feGaussianBlur
                 id="feGaussianBlur4794"
                 result="blur"
                 stdDeviation="0"
                 in="composite1" />
              <feOffset
                 id="feOffset4796"
                 result="offset"
                 dy="4.5"
                 dx="1.3" />
              <feComposite
                 id="feComposite4798"
                 result="fbSourceGraphic"
                 operator="atop"
                 in2="SourceGraphic"
                 in="offset" />
              <feColorMatrix
                 id="feColorMatrix5136"
                 values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
                 in="fbSourceGraphic"
                 result="fbSourceGraphicAlpha" />
              <feFlood
                 in="fbSourceGraphic"
                 result="flood"
                 flood-color="rgb(0,0,0)"
                 flood-opacity="0.0470588"
                 id="feFlood5138" />
              <feComposite
                 result="composite1"
                 operator="out"
                 in="flood"
                 in2="fbSourceGraphic"
                 id="feComposite5140" />
              <feGaussianBlur
                 result="blur"
                 stdDeviation="0"
                 in="composite1"
                 id="feGaussianBlur5142" />
              <feOffset
                 result="offset"
                 dy="13.8"
                 dx="26.1"
                 id="feOffset5144" />
              <feComposite
                 result="composite2"
                 operator="atop"
                 in="offset"
                 in2="fbSourceGraphic"
                 id="feComposite5146" />
            </filter>
          </defs>
          <metadata
             id="metadata7">
            <rdf:RDF>
              <cc:Work
                 rdf:about="">
                <dc:format>image/svg+xml</dc:format>
                <dc:type
                   rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
                <dc:title></dc:title>
              </cc:Work>
            </rdf:RDF>
          </metadata>
          <g
             transform="translate(0,-772.36216)"
             id="layer1">
            <g
               transform="translate(-148.49242,20.000022)"
               id="g5242">
              <g
                 id="g5236"
                 transform="translate(3.3e-5,3.3e-5)">
                <path
                   transform="matrix(0.11382679,0,0,0.92000534,141.17365,28.655764)"
                   d="M 248.57142,938.79076 72.865852,938.80585 160.70557,786.63282 Z"
                   id="path5186"
                   style="fill:#ff0000;stroke:none;stroke-width:0" />
                <path
                   style="fill:#808080;stroke:none;stroke-width:0"
                   id="path5234"
                   d="M 248.57142,938.79076 72.865852,938.80585 160.70557,786.63282 Z"
                   transform="matrix(-0.11382679,0,0,-0.92000534,177.76182,1756.0685)" />
              </g>
              <circle
                 style="fill:#cccccc;stroke:none;stroke-width:0"
                 id="path5240"
                 cx="159.49242"
                 cy="892.36218"
                 r="11" />
            </g>
          </g>
        </svg>

- js

        document.addEventListener("deviceready", compassAPI, false);
        
        function compassAPI() {
        
            $(function(){
        
                function compassSuccess(heading) {
                    $('#NeedleTrue').css('-webkit-transform', 'rotate('+ heading.trueHeading + 'deg)');
                    $('#NeedleMagnetic').css('-webkit-transform', 'rotate('+ heading.magneticHeading + 'deg)');
                    $('#compassAccuracy').html( heading.headingAccuracy );
                    $('#compassStamp').html( new Date(heading.timestamp) );
                };
        
                function compassError(error) {
                    alert('CompassError: ' + error.code);
                };
        
                $('#GetHeading').on('touchend',function(){
        
                    navigator.compass.getCurrentHeading(compassSuccess, compassError);
        
                });
        
                var watchCompass = false;
        
                $('#WatchHeading').on('touchend',function(){
        
                    if( watchCompass === false ) {
                        watchCompass = navigator.compass.watchHeading(compassSuccess, compassError, { 'frequency': 20 /*, 'filter':50 */ } );
                    }
        
                });
        
                $('#StopHeading , #compassClose').on('touchstart',function(){
        
                    if( watchCompass !== false ) {
                        navigator.compass.clearWatch(watchCompass);
                        watchCompass = false;
                    }
        
                });
        
                $('#StopHeading , #compassClose').on('touchend',function(){
        
                    $('#NeedleTrue , #NeedleMagnetic').removeAttr('style')
                    $('#compassAccuracy , #compassStamp').html('...');
        
                });
              
            });
        
        }
