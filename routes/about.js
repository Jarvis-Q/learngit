var express = require('express');
var router = express.Router();

var jadeVar = {
  title: '杭州广多-智慧城市方案解决商',
  meta: {
    name: 'description',
    content: '杭州广多科技有限公司 - 浙江地区智慧政务，智慧城市，智慧旅游提供商，电子招投标开发商，一流的开发团队，完善的解决方案，为地方政府建设电子政务提供可靠保障和稳定的系统'
  },
  miniLogo: true,
  routePage: 'about'
};
router.get('/about', function(req, res) {
  res.render('about/introduction', jadeVar);
});

router.get('/about/:name', function(req, res) {
  res.render('about/' + req.params.name, jadeVar);
});

module.exports = router;