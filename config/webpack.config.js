var chalk = require("chalk");
var fs = require('fs');
var path = require('path');
var useDefaultConfig = require('@ionic/app-scripts/config/webpack.config.js');

var env = process.env.NODE_ENV || 'dev';

console.log(env);

if(env === 'dev'){
  useDefaultConfig.dev.resolve.alias = {
    "@env/environment": path.resolve(environmentPath('dev'))
  };
}

if(env === 'uat'){
  useDefaultConfig[env] = useDefaultConfig.dev;
  useDefaultConfig[env].resolve.alias = {
    "@env/environment": path.resolve(environmentPath('uat'))
  };
}

if(env === 'prod'){
  useDefaultConfig.prod.resolve.alias = {
    "@env/environment": path.resolve(environmentPath('prod'))
  };
}

function environmentPath(env) {
  var filePath = 'src/environments/environment.' + env + '.ts';
  if (!fs.existsSync(filePath)) {
    console.log(chalk.red('\n' + filePath + ' does not exist!'));
  } else {
    return filePath;
  }
}

module.exports = function () {
  return useDefaultConfig;
};
