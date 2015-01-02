var config = {
  debug: true,
  db: 'mongodb://127.0.0.1:27017/node_server_db',
  db_name: 'node_server_db',
  session_secret: 'guangduo_node_server',
  auth_cookie_name: 'guangduo_node_server',
  HOSTS: 'www.guangduo.com.cn',
  PORT: 3000, //process.env.PORT
};

module.exports = config;