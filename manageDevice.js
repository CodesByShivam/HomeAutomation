const fs = require('fs');

const listDevices = () => {
    let deviceList = '['+fs.readFileSync('deviceList.txt')+']'
    return JSON.parse(deviceList);
};

const addDevice = device => {
    fs.appendFile('deviceList.txt', ','+JSON.stringify(device), function (err) {
        if (err) return err.message;
        return 200;
      });
}

module.exports = {
    listDevices,
    addDevice
}