var express = require('express');
var router = express.Router();

/**
 * Merge: 提供对象合并方法
 * @param {object} def 被覆盖对象
 * @param {object} option 属性来源对象
 * @param {boolean} override 是否深度覆盖
 */
function Merge(def, option, override) {
  for (var prop in option) {
    if (option.hasOwnProperty(prop) && (!def.hasOwnProperty(prop) || override)) {
      def[prop] = option[prop]
    }
  }
  return def;
}
var jadeVar = {
  title: '广多欢迎你的加入',
  meta: {
    name: 'description',
    content: '杭州广多科技有限公司 - 浙江地区智慧政务，智慧城市，智慧旅游提供商，电子招投标开发商，一流的开发团队，完善的解决方案，为地方政府建设电子政务提供可靠保障和稳定的系统'
  },
  miniLogo: true,
  routePage: 'join'
}
router.get('/join', function(req, res) {
  res.render('join/team', jadeVar);
});

router.get('/join/:name', function(req, res) {
  res.render('join/' + req.params.name, jadeVar);
});

module.exports = router;