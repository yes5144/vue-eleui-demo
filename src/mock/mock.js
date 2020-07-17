import Mock from 'mockjs'

Mock.mock('http://localhost:8080/user', {
    'name': '@name',
    'email': '@email',
    'age|1-20': 5
});

Mock.mock('http://localhost:8080/menu', {
    'id': '@increment',
    'name': 'menu',
    'order|20-30': 12
})

// https://www.cnblogs.com/xifengxiaoma/p/9534826.html