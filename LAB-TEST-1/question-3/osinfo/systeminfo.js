const os = require('os');

module.exports.getSysteminfo = function () {
  str = "";
  str += "Operating System Info: ";
  str += "CPU Architecture is: ";
  str += os.arch();
  str += "Hostname is : ";
  str += os.hostname();
  str += "OS Name is : ";
  str += os.type();
  return str;
};
module.exports.getUserinfo = function () {
  str = "";
  str += "userInfo => Username: ";
  str += os.userInfo().username;
  str += "Home Directory: ";
  str += os.userInfo().homedir;
  return str;
};
