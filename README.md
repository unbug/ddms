[![NPM](https://nodei.co/npm/ddms.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/ddms/)

Data Drive Management System
=================
DDMS is a simple express app. It provides an easy way to create complex forms, so you can do logical in your web pages.


### Install dependencies
Make sure you have [mongodb](https://www.mongodb.org/),and with `Node.js` installed, run these commands from the root of the project.
```shell
npm install -g bower
npm install
cd public
bower install
```

### Start the app
```shell
npm start
```
Go to `http://localhost:3003` and login with `name : admin@admin.com` and `password : adminadmin`;Access APIs with `http://localhost:3004`

### Stop the app
```shell
sudo lsof -P | grep ':3003' | awk '{print $2}' | xargs kill -9
sudo lsof -P | grep ':3004' | awk '{print $2}' | xargs kill -9
```

### Environment variables
For upload images,DDMS only save image's link,it does not provide upload image to it's own server,use other server to upload images.
```js
//upload: the server api to upload image
process.env.DDMS_IMAGE_UPLOAD
//server: the server api to access image
process.env.DDMS_IMAGE_SERVER
```

### Screenshots

![logs](https://cloud.githubusercontent.com/assets/799578/8326259/77246a98-1a92-11e5-8a48-314700269dfa.png)
![forms](https://cloud.githubusercontent.com/assets/799578/8326260/77255052-1a92-11e5-8c7a-3564a5a6fe5c.png)
![formdatas](https://cloud.githubusercontent.com/assets/799578/8326240/53d081a8-1a92-11e5-8618-9a7b942a890a.png)
![images](https://cloud.githubusercontent.com/assets/799578/8326258/7722163a-1a92-11e5-957a-40ba167d3167.png)
![docs](https://cloud.githubusercontent.com/assets/799578/8326257/772075a0-1a92-11e5-9525-f062cfdff8e0.png)
