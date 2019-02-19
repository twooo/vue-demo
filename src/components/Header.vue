<template>
<nav class="navbar navbar-default" id="navbar-header">
  <div class="container">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand glyphicon glyphicon-th-list" href="#" id="font-list"></a>
    </div>  

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active nav-li active" @mouseenter="change($event)" @mouseleave="move($event)">
          <a  class="nav-a"  href="/">首页<span class="sr-only">(current)</span></a>
          <div class="model"></div>
        </li>
        <li class="dropdown nav-li" @mouseenter="change($event)" @mouseleave="move($event)">
          <a href="#" class="dropdown-toggle nav-a" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">关于我们<span class="caret"></span></a>
          <div class="model"></div>
          <ul class="dropdown-menu">
            <li><a href="#" @click="getSon($event)" value="498571d435184931b5a0a11756fb3336" >企业文化</a></li>
            <li><a href="/info" @click="getSon($event)" value="49e2a9c1073b493aa8a40daeabeca8eb">公司简介</a></li>
            <li><a href="#" @click="getSon($event)" value="b13b5b5685ca4f7cbf71fc61fd3cc258">领导致辞</a></li>
          </ul>
        </li>
        <li class="dropdown nav-li" @mouseenter="change($event)" @mouseleave="move($event)">
          <a href="#" class="dropdown-toggle nav-a" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">站容站貌<span class="caret"></span></a>
          <div class="model"></div>
          <ul class="dropdown-menu">
            <li><router-link  to="/env" @click="getSon($event)" value="3c7cc6ca0b9840c6918e7f3d36d0d117">公司环境</router-link ></li>
            <li><a href="#" @click="getSon($event)" value="4263de44ba3741c6a7f14efe2f2d4d17">设备展示</a></li>
          </ul>
        </li>
        <li class="dropdown nav-li" @mouseenter="change($event)" @mouseleave="move($event)">
          <a href="#" class="dropdown-toggle nav-a" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">新闻中心<span class="caret"></span></a>
          <div class="model"></div>
          <ul class="dropdown-menu">
            <li><router-link  to="/news/ab8427f04c344df9acfb03834efd2aee" @click="getSon($event)" value="ab8427f04c344df9acfb03834efd2aee">新闻来源</router-link ></li>
            <li><a href="#" @click="getSon($event)" value="dc5dc237f6e14fdea3b2c043cf85c42c">新闻内容</a></li>
          </ul>
        </li>
        <li class="dropdown nav-li" @mouseenter="change($event)" @mouseleave="move($event)">
          <a href="#" class="dropdown-toggle nav-a" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">工程展示<span class="caret"></span></a>
          <div class="model"></div>
          <ul class="dropdown-menu">
            <li><a href="#" @click="getSon($event)" value="107c9d8330ca46c5a617cc30e12ed0a0">工程标准</a></li>
            <li><a href="#"  @click="getSon($event)" value="9a1a8762cb9c403a8c1e17fc4ea09b8e">优秀工程</a></li>
          </ul>
        </li>
        <li class="dropdown nav-li" @mouseenter="change($event)" @mouseleave="move($event)">
          <a href="#" class="dropdown-toggle nav-a" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">人力资源<span class="caret"></span></a>
          <div class="model"></div>
          <ul class="dropdown-menu">
            <li><a href="#" @click="getSon($event)" value="1a706094bcff4b5f860aa00c6c69679c">人才策略</a></li>
            <li><a href="#"  @click="getSon($event)" value="c3d28ddd8f204028a5f32fc412c29f9b">职位招聘</a></li>
          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      ariticles: []
    }
  },
  methods:{
      change:function ($event){
        var that = $($event.target);
        // console.log(that);
        that.find(".dropdown-menu[data-v-61dd7a3d]").css({
          "position":"absolute",
          "width":(window.outerWidth - that.offset().left)+"px"
          });

        that.find(".model").css({
          "height":"100%",
          "-webkit-transition": "all .3s ease-in-out",
          "transition": "all .3s ease-in-out"
        })
        that.addClass("open");
      },
      move:function($event){
        var that = $($event.target);
        that.removeClass("open");

         that.find(".model").css({
          "height":"0%",
          "-webkit-transition": "all .3s ease-in-out",
          "transition": "all .3s ease-in-out"
        })
      },
      getAjax:function(){
        $.ajax({
          url:"http://localhost/api/admin/type/findSon",
          type:"post",
          data:{
            "parentId":"32a25f7f02664bacad850783c217c2fc"
          },
          success:function(data){
            alert(data.data);
          }
        });
      },
        getSon: function($event) {
      var that = $($event.target);
      var typeId = that.attr("value");
      var wSon = null;
      $.ajax({
        url: "http://localhost/api/findAll",
        type: "post",
        data: {
          typeId: typeId
        },
        success: function(data) {
          wSon = data.data;
        },
        error: function (data) {
          console.log("失败");
        }
      });
      this.son = wSon;
      eventBus.$emit('header', wSon);
    }
  }
} 
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (min-width: 500px){
  #navbar-header{
      border-radius: 0%;
      padding-left: 5%; 
      height:100px;
      background-color:#fff;
      margin-bottom: 0px;
  }
  #navbar-header ul li{
    position: relative;
  }
  #navbar-header ul li .dropdown-menu{
    background: #333;
    opacity: .4;
    line-height: 60px;
    z-index: 999;
  }
  #navbar-header ul li .dropdown-menu li{
    -webkit-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
    float: left;
  }
  #navbar-header ul li .dropdown-menu li a{
    height:60px;
    line-height: 60px;
    color: #fff;
    font-weight: bold;
  }
  #navbar-header ul li .dropdown-menu li a:hover{
    background: #333;
    opacity: .4;
    color: #7dbd35
  }
  #navbar-header ul li .nav-a{
      cursor: pointer;
      padding:15px 0px;
      font-size:14px;
      color:#596066;
      font-weight:bold;
      text-align:center;
      width:85px;
      height:100px;
      line-height:70px;
      background: rgba(0, 0, 0, 0);
      z-index:2;
  }
  #navbar-header ul {
        position: relative; 
  }
  #navbar-header ul li .nav-a:hover{
    color: #fff; 
    /* background-color: #82e70f;
    height: 100%; */
    transition: .2s;
    -webkit-transition: .2s;
  }
  #font-list{
      font-size:24px;
      line-height:70px;
      color: #000;
  }
  .model{
    z-index: 1;
    position:absolute;
    bottom: 0px;
    width:100%;
    height: 0%;
    z-index: 1;
    background: #82e70f;
    /* opacity: .6; */
  }
  .active{
    background: #82e70f;
    color: #fff; 
  }
}
</style>