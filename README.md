# Home Automation

Home Automation system to remotely control devices at home. We can add new devices, do tasks, remove devices, list devices.

## Information

The application is coded in Node and Express JS to expose the rest APIs. Follow the below steps to setup the application in your system.

## Installation

Use the package manager [Node.JS](https://nodejs.org/en/download/) to install latest version of NodeJS. It comes packed with npm to install internal libraries/modules used by node JS.

The code is available to download or pull from [here](https://github.com/CodesByShivam/HomeAutomation).

* Download the code from the above git Repo.
* From the root folder of the project run the below command in your OS command line tool:

```bash
npm install
```
* This command will install all the required modules in your system.
* Once the module installation is complete, run the below command to start the application server.
```bash
node index.js
```
* The logs should read "Server Started".
* Open web browser. Preferably Chrome.
* Enter the below address:
[http://localhost:3000/](http://localhost:3000/)
* The application should launch

## Usage
The application UI is very basic with no visual effects. After the server start its very easy to navigate through the app.
* The Home page of the application has 3 links:
  * List Devices - This will list all the registered devices in the system. We can perform device tasks from here.
  * Add Device - This will register new device to the system.
  * Remove Device - This will remove the device from the system

## APIs
* home page '/' - The home page of the application is exposed through a get API with the path '/' in the code. All the APIs are exposed from using the Express framework. This returns the static home page defined under the view/home.html
* /getDevices - This is a GET API. It is triggered by List Devices as well as Remove Device Links. Returns the list of Registered Devices from the Backend
* /listDevices - GET API. This API returns a static page where the list of registered Devices is displayed.
* /deleteDevice - This is a DELETE method API. The api body comtains the object of the Device that needs to be removed from the system. The backend code searched for the device based on the device name and deletes the device.
* /removeDevice - Get API to load the remove device HTML page which shows the list of Devices which can be removed.
* /addDevice - The /addDevice API accepts both get and POST calls. the get call loads the Form to register a new device and the POSt call is triggered to save the new device in the backend. The name is a mandatory field while registering a device.

## Business Logic

The business logic of the application is writte in the manageDevices.js file.
* The listDevices method reads the Data file "deviceList.txt" for all the registered devices and returns the data.
* the addDevice method add the new device data to the file "deviceList.txt".
* The removeDevice method removes the device with the given name from the list.


## Contributing
Pull requests are welcome. This is still undergoing development. Please create an issue for any problem.