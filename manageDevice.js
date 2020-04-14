const fs = require('fs');

const listDevices = () => {
    let deviceList = JSON.parse('['+fs.readFileSync('deviceList.txt')+']');
    if(deviceList.length === 1){
        return 0;
    }
    deviceList.splice(0,1);
    return deviceList;
};

const addDevice = device => {
    let deviceList = listDevices();
    if(deviceList === 0){
        fs.appendFile('deviceList.txt', ','+JSON.stringify(device), function (err) {
            if (err) return err.message;
            return {output:'Device' + device.name + ' Added Successfully'};
        });
    }else{
        for(let i=0;i<deviceList.length;i++){
            if(device.name === deviceList[i].name){
                return {output:'Device with name ' + device.name + ' already exists. Please chose another name.'};
            }else{
                fs.appendFile('deviceList.txt', ','+JSON.stringify(device), function (err) {
                    if (err) return err.message;
                    return {output:'Device' + device.name + ' Added Successfully'};
                });
            }
        }
    }
    
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