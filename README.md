 > Developer preview.

Data Drive Management System
=================
DDMS is a simple express app.It provides an easy way to create complex forms,
so you can do logical in your web pages.


### Install dependencies
Make sure you have [mongodb](https://www.mongodb.org/),and with `Node.js` installed, run these commands in the root of the project.
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
Go to `http://localhost:3003` and login with `name : admin@admin.com` `password : adminadmin`;Access APIs with `http://localhost:3004`

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

![1](https://github.com/unbug/ddms/blob/master/public/images/logs.png)
![2](https://github.com/unbug/ddms/blob/master/public/images/forms.png)
![3](https://github.com/unbug/ddms/blob/master/public/images/images.png)
![4](https://github.com/unbug/ddms/blob/master/public/images/docs.png)

