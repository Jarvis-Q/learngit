var express = require('express');
var router = express.Router();

/* GET home page. */
router.get(/^\/$|\/index/, function(req, res) {
  res.render('index', {
    title: '冷蛋网 前端，安卓博客',
    meta: {
      name: 'description',
      content: '杭州广多科技有限公司 - 浙江地区智慧政务，智慧城市，智慧旅游提供商，电子招投标开发商，一流的开发团队，完善的解决方案，为地方政府建设电子政务提供可靠保障和系统'
    },
    routePage: 'index'
  });
});

module.exports = router;
