var posts=["2019/08/10/Essix-Retainer从入门到放弃/","2024/11/21/hello-world/","2024/11/21/幻兽帕鲁Linux下服务器部署/","2024/11/21/无版权图库/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };