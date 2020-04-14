const fs = require('fs');

const listDevices = () => {
    let deviceList = JSON.parse('['+fs.readFileSync('deviceList.txt')+']');
    deviceList.splice(0,1);
    console.log(deviceList);
    return deviceList;
};

const addDevice = device => {
    fs.appendFile('deviceList.txt', ','+JSON.stringify(device), function (err) {
        if (err) return err.message;
        return 200;
    });
}

const removeDevice = name => {
    let list = JSON.parse('['+fs.readFileSync('deviceList.txt')+']');
    for(let i=1;i<list.length;i++){
        if(name === list[i].name){
            console.log('Device Found');
            list.splice(i,1);
            i = list.length;
        }
    }
    saveData = JSON.stringify(list).replace('[','').replace(']','');
    fs.writeFileSync('deviceList.txt',saveData);
    return 'Deleted';
}

module.exports = {
    listDevices,
    addDevice,
    removeDevice
};