var posts=["posts/9b8313e8.html","posts/4a17b156.html","posts/2e5b4759.html","posts/74db913a.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };