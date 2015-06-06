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

### REST APIs
Get a form
```
/apis/v1/form?id=formid&callback=jsonp_callback
```
Get a form's data
```
/apis/v1/formdata?formid=formid&page=0&callback=jsonp_callback
```


