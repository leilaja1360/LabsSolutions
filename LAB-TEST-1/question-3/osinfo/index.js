var firewal = require('./firewall');
var systemInfo = require('./systeminfo');
module.exports = {
    getUserinfo:systemInfo. getUserinfo,
    getSysteminfo:systemInfo.getSysteminfo,
    getStatuses:firewal.getStatuses,
};
