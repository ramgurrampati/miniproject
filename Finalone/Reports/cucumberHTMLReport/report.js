$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/features/Myapp.Feature");
formatter.feature({
  "line": 2,
  "name": "Practice Automation Website",
  "description": "",
  "id": "practice-automation-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@TestAutomation"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Valid Register",
  "description": "",
  "id": "practice-automation-website;valid-register",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the user launch the application in the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user open My Accounts Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the user fills valid username and Password",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "click on the Register button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I validate the outcomes",
  "keyword": "Then "
});
formatter.match({
  "location": "vr_tc01.the_user_launch_the_application_in_the_browser()"
});
formatter.result({
  "duration": 22856957500,
  "status": "passed"
});
formatter.match({
  "location": "vr_tc01.the_user_open_My_Accounts_Page()"
});
formatter.result({
  "duration": 20138639100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"/html/body/div[1]/div[1]/header/div[2]/nav/ul/li[2]/a\"}\n  (Session info: chrome\u003d80.0.3987.163)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-FP4LNQ8H\u0027, ip: \u0027192.168.43.77\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.163, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\ramgu\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54863}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: cd4800233a3e7ceb5f31792a09e0bc32\n*** Element info: {Using\u003dxpath, value\u003d/html/body/div[1]/div[1]/header/div[2]/nav/ul/li[2]/a}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\r\n\tat automation.pages.RegisterPage.account(RegisterPage.java:25)\r\n\tat automation.stepdefinition.vr_tc01.the_user_open_My_Accounts_Page(vr_tc01.java:23)\r\n\tat ✽.When the user open My Accounts Page(src/main/resources/features/Myapp.Feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "vr_tc01.the_user_fills_valid_username_and_Password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "vr_tc01.click_on_the_Register_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "vr_tc01.i_validate_the_outcomes()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 13,
  "name": "Invalid Register",
  "description": "",
  "id": "practice-automation-website;invalid-register",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@TC_02"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "the user launches the application in the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the user clicks on My Accounts Page",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "the user fills Invalid username and Password",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I validate the outcomes of invalid Register",
  "keyword": "Then "
});
formatter.match({
  "location": "ir_tc02.the_user_launches_the_application_in_the_browser()"
});
formatter.result({
  "duration": 16052117600,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created\nfrom chrome not reachable\n  (Session info: chrome\u003d80.0.3987.163)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-FP4LNQ8H\u0027, ip: \u0027192.168.43.77\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00E60C83+1707139]\n\tOrdinal0 [0x00DC68F1+1075441]\n\tOrdinal0 [0x00D3DE72+515698]\n\tOrdinal0 [0x00D37CA8+490664]\n\tOrdinal0 [0x00D3839B+492443]\n\tOrdinal0 [0x00D392F5+496373]\n\tOrdinal0 [0x00D34F05+478981]\n\tOrdinal0 [0x00D3ECA0+519328]\n\tOrdinal0 [0x00CECA67+182887]\n\tOrdinal0 [0x00CEBDDD+179677]\n\tOrdinal0 [0x00CE9D4B+171339]\n\tOrdinal0 [0x00CD1D4A+73034]\n\tOrdinal0 [0x00CD2DC0+77248]\n\tOrdinal0 [0x00CD2D59+77145]\n\tOrdinal0 [0x00DDBB67+1162087]\n\tGetHandleVerifier [0x00EFA966+508998]\n\tGetHandleVerifier [0x00EFA6A4+508292]\n\tGetHandleVerifier [0x00F0F7B7+594583]\n\tGetHandleVerifier [0x00EFB1D6+511158]\n\tOrdinal0 [0x00DD402C+1130540]\n\tOrdinal0 [0x00DDD4CB+1168587]\n\tOrdinal0 [0x00DDD633+1168947]\n\tOrdinal0 [0x00DF5B35+1268533]\n\tBaseThreadInitThunk [0x76526359+25]\n\tRtlGetAppContainerNamedObjectPath [0x77E37B74+228]\n\tRtlGetAppContainerNamedObjectPath [0x77E37B44+180]\n\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\r\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat Baseclass.Baseclasss.launchBrowser(Baseclasss.java:25)\r\n\tat automation.stepdefinition.ir_tc02.the_user_launches_the_application_in_the_browser(ir_tc02.java:20)\r\n\tat ✽.Given the user launches the application in the browser(src/main/resources/features/Myapp.Feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ir_tc02.the_user_clicks_on_My_Accounts_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ir_tc02.the_user_fills_Invalid_username_and_Password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ir_tc02.i_validate_the_outcomes_of_invalid_Register()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 20,
  "name": "valid Login",
  "description": "",
  "id": "practice-automation-website;valid-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@TC_03"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "the user launch the application in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "the user clicks on My Accounts",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "the user Enters the valid username and password",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I validate the outcomes of valid login",
  "keyword": "Then "
});
formatter.match({
  "location": "vl_tc03.the_user_launch_the_application_in_browser()"
});
formatter.result({
  "duration": 48972196800,
  "status": "passed"
});
formatter.match({
  "location": "vl_tc03.the_user_clicks_on_My_Accounts()"
});
formatter.result({
  "duration": 14062437400,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d80.0.3987.163)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-FP4LNQ8H\u0027, ip: \u0027192.168.43.77\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.163, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\ramgu\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:55140}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 4353362a0e30dc55ce498d1fde4a55ae\n*** Element info: {Using\u003dxpath, value\u003d/html/body/div[1]/div[1]/header/div[2]/nav/ul/li[2]/a}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\r\n\tat automation.pages.LoginPage.account(LoginPage.java:24)\r\n\tat automation.stepdefinition.vl_tc03.the_user_clicks_on_My_Accounts(vl_tc03.java:25)\r\n\tat ✽.When the user clicks on My Accounts(src/main/resources/features/Myapp.Feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "vl_tc03.the_user_Enters_the_valid_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "vl_tc03.click_on_signin_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "vl_tc03.i_validate_the_outcomes_of_valid_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 28,
  "name": "Invalid Login",
  "description": "",
  "id": "practice-automation-website;invalid-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@TC_04"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "the user launch the app in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "user clicks on My Accounts",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "the user Enters the Invalid username and password",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "click on the signin button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I validate the outcomes of invalid login",
  "keyword": "Then "
});
formatter.match({
  "location": "il_tc04.the_user_launch_the_app_in_browser()"
});
formatter.result({
  "duration": 15675341900,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created\nfrom chrome not reachable\n  (Session info: chrome\u003d80.0.3987.163)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-FP4LNQ8H\u0027, ip: \u0027192.168.43.77\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00E60C83+1707139]\n\tOrdinal0 [0x00DC68F1+1075441]\n\tOrdinal0 [0x00D3DE72+515698]\n\tOrdinal0 [0x00D37CA8+490664]\n\tOrdinal0 [0x00D3839B+492443]\n\tOrdinal0 [0x00D392F5+496373]\n\tOrdinal0 [0x00D34F05+478981]\n\tOrdinal0 [0x00D3ECA0+519328]\n\tOrdinal0 [0x00CECA67+182887]\n\tOrdinal0 [0x00CEBDDD+179677]\n\tOrdinal0 [0x00CE9D4B+171339]\n\tOrdinal0 [0x00CD1D4A+73034]\n\tOrdinal0 [0x00CD2DC0+77248]\n\tOrdinal0 [0x00CD2D59+77145]\n\tOrdinal0 [0x00DDBB67+1162087]\n\tGetHandleVerifier [0x00EFA966+508998]\n\tGetHandleVerifier [0x00EFA6A4+508292]\n\tGetHandleVerifier [0x00F0F7B7+594583]\n\tGetHandleVerifier [0x00EFB1D6+511158]\n\tOrdinal0 [0x00DD402C+1130540]\n\tOrdinal0 [0x00DDD4CB+1168587]\n\tOrdinal0 [0x00DDD633+1168947]\n\tOrdinal0 [0x00DF5B35+1268533]\n\tBaseThreadInitThunk [0x76526359+25]\n\tRtlGetAppContainerNamedObjectPath [0x77E37B74+228]\n\tRtlGetAppContainerNamedObjectPath [0x77E37B44+180]\n\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\r\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat Baseclass.Baseclasss.launchBrowser(Baseclasss.java:25)\r\n\tat automation.stepdefinition.il_tc04.the_user_launch_the_app_in_browser(il_tc04.java:19)\r\n\tat ✽.Given the user launch the app in browser(src/main/resources/features/Myapp.Feature:29)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "il_tc04.user_clicks_on_My_Accounts()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "il_tc04.the_user_Enters_the_Invalid_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "il_tc04.click_on_the_signin_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "il_tc04.i_validate_the_outcomes_of_invalid_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 36,
  "name": "Adding to Basket",
  "description": "",
  "id": "practice-automation-website;adding-to-basket",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@TC_05"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "user launches the application in the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "the  user clicks on Shop",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "the user clicks on add to basket",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "user clicks items",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I validate the outcomes of Adding to Basket",
  "keyword": "Then "
});
formatter.match({
  "location": "addcartTC_05.user_launches_the_application_in_the_browser()"
});
formatter.result({
  "duration": 15564172300,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created\nfrom chrome not reachable\n  (Session info: chrome\u003d80.0.3987.163)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-FP4LNQ8H\u0027, ip: \u0027192.168.43.77\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00E60C83+1707139]\n\tOrdinal0 [0x00DC68F1+1075441]\n\tOrdinal0 [0x00D3DE72+515698]\n\tOrdinal0 [0x00D37CA8+490664]\n\tOrdinal0 [0x00D3839B+492443]\n\tOrdinal0 [0x00D392F5+496373]\n\tOrdinal0 [0x00D34F05+478981]\n\tOrdinal0 [0x00D3ECA0+519328]\n\tOrdinal0 [0x00CECA67+182887]\n\tOrdinal0 [0x00CEBDDD+179677]\n\tOrdinal0 [0x00CE9D4B+171339]\n\tOrdinal0 [0x00CD1D4A+73034]\n\tOrdinal0 [0x00CD2DC0+77248]\n\tOrdinal0 [0x00CD2D59+77145]\n\tOrdinal0 [0x00DDBB67+1162087]\n\tGetHandleVerifier [0x00EFA966+508998]\n\tGetHandleVerifier [0x00EFA6A4+508292]\n\tGetHandleVerifier [0x00F0F7B7+594583]\n\tGetHandleVerifier [0x00EFB1D6+511158]\n\tOrdinal0 [0x00DD402C+1130540]\n\tOrdinal0 [0x00DDD4CB+1168587]\n\tOrdinal0 [0x00DDD633+1168947]\n\tOrdinal0 [0x00DF5B35+1268533]\n\tBaseThreadInitThunk [0x76526359+25]\n\tRtlGetAppContainerNamedObjectPath [0x77E37B74+228]\n\tRtlGetAppContainerNamedObjectPath [0x77E37B44+180]\n\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\r\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat Baseclass.Baseclasss.launchBrowser(Baseclasss.java:25)\r\n\tat automation.stepdefinition.addcartTC_05.user_launches_the_application_in_the_browser(addcartTC_05.java:19)\r\n\tat ✽.Given user launches the application in the browser(src/main/resources/features/Myapp.Feature:37)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "addcartTC_05.the_user_clicks_on_Shop()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "addcartTC_05.the_user_clicks_on_add_to_basket()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "addcartTC_05.user_clicks_items()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "addcartTC_05.I_validate_the_outcomes_of_Adding_to_Basket()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 44,
  "name": "Read more about a book",
  "description": "",
  "id": "practice-automation-website;read-more-about-a-book",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 43,
      "name": "@TC_06"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "the user launches the app in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "user clicks on Shop",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "user clicks Read more",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "I validate the outcomes of Read more",
  "keyword": "Then "
});
formatter.match({
  "location": "ReadmoreTc_06.the_user_launches_the_app_in_browser()"
});
formatter.result({
  "duration": 43750358500,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d80.0.3987.163)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-FP4LNQ8H\u0027, ip: \u0027192.168.43.77\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.163, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\ramgu\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:55602}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 4a5436c474e5a2663bdf3be6b2149c2e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:694)\r\n\tat Baseclass.Baseclasss.launchBrowser(Baseclasss.java:41)\r\n\tat automation.stepdefinition.ReadmoreTc_06.the_user_launches_the_app_in_browser(ReadmoreTc_06.java:18)\r\n\tat ✽.Given the user launches the app in browser(src/main/resources/features/Myapp.Feature:45)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ReadmoreTc_06.user_clicks_on_Shop()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ReadmoreTc_06.user_clicks_Read_more()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ReadmoreTc_06.i_validate_the_outcomes_of_Read_more()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 51,
  "name": "To Retrive any data from Cruises table",
  "description": "",
  "id": "practice-automation-website;to-retrive-any-data-from-cruises-table",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 50,
      "name": "@TC_07"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "the user launches the application in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "click DemoSite",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "user fills all the details",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "Clicks Register button",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I validate the results",
  "keyword": "Then "
});
formatter.match({
  "location": "DemoTc_07.the_user_launches_the_application_in_browser()"
});
formatter.result({
  "duration": 15705021600,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created\nfrom chrome not reachable\n  (Session info: chrome\u003d80.0.3987.163)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-FP4LNQ8H\u0027, ip: \u0027192.168.43.77\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00E60C83+1707139]\n\tOrdinal0 [0x00DC68F1+1075441]\n\tOrdinal0 [0x00D3DE72+515698]\n\tOrdinal0 [0x00D37CA8+490664]\n\tOrdinal0 [0x00D3839B+492443]\n\tOrdinal0 [0x00D392F5+496373]\n\tOrdinal0 [0x00D34F05+478981]\n\tOrdinal0 [0x00D3ECA0+519328]\n\tOrdinal0 [0x00CECA67+182887]\n\tOrdinal0 [0x00CEBDDD+179677]\n\tOrdinal0 [0x00CE9D4B+171339]\n\tOrdinal0 [0x00CD1D4A+73034]\n\tOrdinal0 [0x00CD2DC0+77248]\n\tOrdinal0 [0x00CD2D59+77145]\n\tOrdinal0 [0x00DDBB67+1162087]\n\tGetHandleVerifier [0x00EFA966+508998]\n\tGetHandleVerifier [0x00EFA6A4+508292]\n\tGetHandleVerifier [0x00F0F7B7+594583]\n\tGetHandleVerifier [0x00EFB1D6+511158]\n\tOrdinal0 [0x00DD402C+1130540]\n\tOrdinal0 [0x00DDD4CB+1168587]\n\tOrdinal0 [0x00DDD633+1168947]\n\tOrdinal0 [0x00DF5B35+1268533]\n\tBaseThreadInitThunk [0x76526359+25]\n\tRtlGetAppContainerNamedObjectPath [0x77E37B74+228]\n\tRtlGetAppContainerNamedObjectPath [0x77E37B44+180]\n\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\r\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat Baseclass.Baseclasss.launchBrowser(Baseclasss.java:25)\r\n\tat automation.stepdefinition.DemoTc_07.the_user_launches_the_application_in_browser(DemoTc_07.java:19)\r\n\tat ✽.Given the user launches the application in browser(src/main/resources/features/Myapp.Feature:52)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DemoTc_07.click_DemoSite()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DemoTc_07.user_fills_all_the_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DemoTc_07.clicks_Register_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DemoTc_07.i_validate_the_results()"
});
formatter.result({
  "status": "skipped"
});
});