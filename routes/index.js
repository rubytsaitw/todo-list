// 引用 Express 與 Express router
const express = require('express')
const router = express.Router()

// 引入路由模組
const home = require('./modules/home')
router.use('/', home)

const todos = require('./modules/todos')
router.use('/todos', todos)

const users = require('./modules/users')
router.use('/users', users)

// 匯出路由器
module.exports = router