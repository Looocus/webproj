# vuenews

## Project setup
```
Vue-cli3 大坑较多，谨慎入坑
npm install
npm run serve
```

### Compiles and minifies for production
```
将vue.config.js注释全部去掉
将src下的router.js中的mode='history'行进行注释
将src中views下Signup.vue中的this.$http.get('/static/userData.json')改为'./static/userData.json'这样的相对引用
npm run build
```
