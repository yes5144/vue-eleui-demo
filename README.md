# vue-eleui-demo

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## docker 
### docker build 
```
yarn   build  
docker build -t harbor.yes5144.com/vue-eleui-demo/vue:v0.0.1 .
```
### test image
```
docker run -d --name vueApp  -p 3000:80  harbor.yes5144.com/vue-eleui-demo/vue:v0.0.1
```

### docker push 
```
docker push harbor.yes5144.com/vue-eleui-demo/vue:v0.0.1
```
