# Personal Website
## 前端项目内修改
1\. `router.js`内修改  
```
mode: 'history',
base: '/blog/',
```  
2\. `vue.config.js`内修改  
```
module.exports = {
  publicPath: './',
};
```
## centos nginx部署
1\. 在centos上安装nginx  
2\. 修改nginx配置文件  
使用`nginx -t`查看配置文件的位置  
一般在`/etc/nginx/nginx.conf`  
3\. 修改如下
```
user root
server {
  root /usr/projects/;
  index index.html
  location /blog {
    try_files $uri $uri/ /index.html
  }
}
```
4\. 重启nginx  
`systemctl restart nginx.service`  
5\. 将build后的文件夹放至`/usr/projects/`  
6\. 访问IP/blog