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

// https://www.cnblogs.com/xifengxiaoma/p/9535399.html
// function fnCreate (mod, isOpen = true) {
//   if (isOpen) {
//     for (var key in mod) {
//       ((res) => {
//         if (res.isOpen !== false) {
//           Mock.mock(new RegExp(res.url), res.type, (opts) => {
//             opts['data'] = opts.body ? JSON.parse(opts.body) : null
//             delete opts.body
//             console.log('\n')
//             console.log('%cmock拦截, 请求: ', 'color:blue', opts)
//             console.log('%cmock拦截, 响应: ', 'color:blue', res.data)
//             return res.data
//           })
//         }
//       })(mod[key]() || {})
//     }
//   }
// }

// api.js --> /api/auth/login
Mock.mock('http://localhost:8080/api/auth/login', 'post', {
    'code': 200,
    'data': { 'token': 'menu1313123' },
    'msg': 'your token'
})

// api.js --> /api/account/save
Mock.mock('http://localhost:8080/api/account/save', 'post', {
    'code': 200,
    'data': {},
    'msg': 'account save succ'
})

// api.js --> /api/account/del
Mock.mock('http://localhost:8080/api/account/del', 'post', {
    'code': 200,
    'data': {},
    'msg': 'account del succ'
})

// api.js --> /api/account/findpage
Mock.mock('http://localhost:8080/api/account/findpage', 'post', {
    'code': 200,
    'data': { 'page': '123123' },
    'msg': 'findpage succ'
})
