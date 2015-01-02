var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');

// 路由模块
var routes = require('./config/routes');
// 配置
var config = require('./config/settings');

var app = express();

// 设置视图引擎的路径配置，node的全局变量__dirname，即取得执行的js所在的路径，另外__filename是目前执行的js文件名
app.set('view', path.join(__dirname, 'views'));
// 设置模板引擎为jade
app.set('view engine', jade);

// 设置网站图标
app.use(favicon(__dirname + '/public/images/favicon.ico'));
// 开发环境下打印log
app.use(logger('dev'));


/**
 * bodyParse是Connect内建的中间件，客户端post请求将放入到request.body中，会对请求进行解析
 * 支持json,application/x-www-form-urlencoded、multipart/form-data格式的数据解析
 * 即ajax和form发送请求时都经过它的处理，方便在request中获得相应的请求值
 * 在express上传中也会调用它，可以给出参数指明上传文件存放的路径，如：
 * app.use(express.bodyParser({uploadDir: './uploads'}))
 */
app.use(bodyParser.json());

/**
 * 如果要支持http的put.delete等方法，可以调用express.methodOverride();
 * 需要在客户端配置相应的值域，如:
 * <input type="hidden" name="_method" value="put"/>
 * 对应:
 * app.put('/users/:id', users.put);
 */
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * cookieParse是为了支持session, 这样的设置会把session加密保存在客户端的cookie中，不过重启后会失效
 * 不过express.session支持持久化保存，比如在mongoDB中的配置
 * package.json配置加上依赖项: "connect-mongo": "currentVersion"
 * 然后在config/express.coffee中引入connect-mongo，并修改express.session的设置
 * mongoStore = require('connect-mongo')(express)
 * app.use express.session
 *  secret: '123456789',
 *  store: new mongoStore,
 *  url: config.db,
 *  collection: 'sessions'
 */
app.use(cookieParser());
app.use(session({
    resave: false, // 如果没有变化不保存session
    saveUninitialized: false, // 在有需要数据保存前不会创建session
    secret: config.session_secret
}));


// 静态资源处理 css/js/img等
app.use(express.static(path.join(__dirname, 'public')))

// 启用路有个
routes(app);

// 处理404错误
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
})


// 开发环境将打印堆栈信息
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// 生成环境将不会把堆栈错误推送给用户
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
