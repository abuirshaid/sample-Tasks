var application = require("application");

/*
 * Define which is the main page of the app.
 */
application.mainModule = "app/views/login";

/*
 * Define constants which we will use across the application
 */
global.TELERIK_BAAS_KEY = "Rw5X5HlnO1s9E0kf";
global.TOKEN_DATA_KEY = "authenticationToken";
global.PROJECT_NAME = "To-do";
global.ANDROID_OS_NAME = "Android";

application.start();