const semver = require('semver');

module.exports = [
    {
        name: 'appName',
        type: 'input',
        message: 'Name of the Angular application:',
        default: 'angcord-app',
        validate: (appName) => {
            const valid = appName.match(/^(?:@[a-z0-9-~][a-z0-9-._~]*)?[a-z0-9-~][a-z0-9-._~]*$/);
            if (valid) {
                return true;
            } else {
                return `Invalid Angular app name.`
            }
        }
    },
    {
        name: 'appTitle',
        type: 'input',
        message: 'Angular app <title>',
        default: answers => answers.appName

    },
    {
        name: 'appVersion',
        type: 'input',
        message: 'Application version:',
        default: '1.0.0',
        validate: (appVersion) => {
            if (semver.valid(appVersion) != null) {
                return true;
            } else {
                return `${appVersion} has an invalid format.`
            }
        }

    },
    {
        name: 'cordovaAuthorFirstname',
        type: 'input',
        message: 'Cordova app author\'s firstname:',
        default: 'firstname',
        validate: (cordovaAuthorFirstname) => {
            if (!cordovaAuthorFirstname.match(/.*\s+.*/)) {
                    return true;
            } else {
                return `Firstname can't have spaces or be empty.`
            }
        } 
    },
    {
        name: 'cordovaAuthorLastname',
        type: 'input',
        message: 'Cordova app author\'s lastname:',
        default: 'lastname',
        validate: (cordovaAuthorLastname) => {
            if (!cordovaAuthorLastname.match(/.*\s+.*/)) {
                    return true;
            } else {
                return `Lastname can't have spaces or be empty.`
            }
        }
    },
    {
        name: 'cordovaAppName',
        type: 'input',
        message: 'Cordova app name:',
        default: answers => answers.appName,
    },
    {
        name: 'cordovaVersion',
        type: 'input',
        message: 'Cordova app version:',
        default: answers => answers.appVersion,
        validate: (cordovaVersion) => {
            if (semver.valid(cordovaVersion) != null) {
                return true;
            } else {
                return `${cordovaVersion} has an invalid format.`
            }
        }
    },
    {
        name: 'cordovaID',
        type: 'input',
        message: 'Cordova application ID:',
        default: answers => {
            return `com.${answers.cordovaAuthorFirstname.toLowerCase()}${answers.cordovaAuthorLastname.toLowerCase()}.${answers.cordovaAppName.toLowerCase()}`
        },
        validate: (cordovaAuthorFirstname) => {
            if (!cordovaAuthorFirstname.match(/.*\s+.*/)) {
                    return true;
            } else {
                return `Firstname can't have spaces or be empty.`
            }
        } 
    },
    {
        name: 'cordovaAuthorEmail',
        type: 'input',
        message: 'Cordova\'s config.xml author e-mail:',
        default: ''

    },
    {
        name: 'cordovaAuthorHref',
        type: 'input',
        message: 'Cordova\'s config.xml author href:',
        default: ''

    },
    {
        name: 'cordovaDescription',
        type: 'input',
        message: 'Cordova app description:',
        default: ''

    }
];