exports.config = {
    runner: 'local',
    port: 4723,
    path: '/wd/hub',
    host: 'localhost',
    logLevel: 'info',
    framework: 'mocha',
    maxInstances:1,
<<<<<<< HEAD
    sync: true,
    mochaOpts: {
        ui: 'bdd',
        require: ['@babel/register'],
        timeout: 600000
    },
    specs: [
        'test-cases/Login/Login.spec.js',
        'test-cases/Login/LoginValidation.spec.js',
        'test-cases/Registration/Registration.spec.js',
        'test-cases/Registration/RegistrationValidation.spec.js',
=======
    // mochaOpts: {
    //     ui: 'bdd',
    //     require: ['@babel/register'],
    //     timeout: 600000
    // },
    specs: [
        'test-cases/Login/Login.spec.js',
        // 'test-cases/Login/LoginValidation.spec.js',
        // 'test-cases/Registration/Registration.spec.js',
        // 'test-cases/Registration/RegistrationValidation.spec.js',
>>>>>>> fd76bf5e (Initial commit)
        
    ],
    capabilities: [
        {
            "platformName": "Android",
            "appium:automationName": "uiautomator2",
            "appium:udid": "emulator-5554",
            "appium:appPackage": "com.wdiodemoapp",
            "appium:appActivity": ".MainActivity"
          }
      ]
   
  
<<<<<<< HEAD
 }
 
=======
 }
>>>>>>> fd76bf5e (Initial commit)
