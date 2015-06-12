 > Developer preview.

Data Drive Management System
=================
DDMS is a simple express app.It provides a easy way to create complex forms,
so you can do logical in your web pages.


### Install dependencies
```shell
npm install
cd public
bower install
```

### Start the app
```shell
npm start
```
Go to `http://localhost:3003` and login with `name : admin@admin.com` `password : adminadmin`

### Environment variables
For upload image,DDMS only save image link,it does not provide upload image to it's own server,use other server to upload images.
```js
//upload: the server api to upload image
process.env.DDMS_IMAGE_UPLOAD
//server: the server api to access image
process.env.DDMS_IMAGE_SERVER
```

### Screenshots

![1](https://github.com/unbug/ddms/blob/master/public/images/logs.png)
![2](https://github.com/unbug/ddms/blob/master/public/images/forms.png)
![3](https://github.com/unbug/ddms/blob/master/public/images/docs.png)

