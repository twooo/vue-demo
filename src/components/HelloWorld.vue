<template>
  <div>
    <Carousel></Carousel>
    <div class="container">
      <div class="row">
          <div class="col-md-6 leftContent">
            <h1>{{ariticle.name}}</h1>
            <p><a href="#">{{ariticle.content}}</a></p>
          </div>
          <div class="col-md-6 rightContent">
            <h1>相关新闻</h1>
            <div>
               <ul style="margin-top:0!important">
                <li v-for="item in ariticles">
                   <a href="#" ><p>{{item.createTime.substr(0, 10)}} <span v-text="item.content">{{item.content}}</span></p></a>
                </li>
            </ul>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from './Carousel.vue'


export default {
  name: 'HelloWorld',
  components:{Carousel},
  data(){
    return{
      id:"dc5dc237f6e14fdea3b2c043cf85c42c",
      ariticles: [],
      ariticle:{}
    }
  },
  // beforeRouteEnter(to, from, next) {
  //     wId = to.params.id;
  //     next();
  // },
  methods:{
    change(){
       $(".rightContent").find('ul').animate({
         marginTop: '-22px'
      },1000,function(){
         $(this).css({marginTop : "0px"});
         var li  =$(".rightContent ul").children().first().clone()
         $(".rightContent ul li:last").after(li);
         $(".rightContent ul li:first").remove();
      })
    },
    getEventData(typeId) {
          var that = this
         
          $.ajax({
            url: "http://localhost/api/findAll?date = " + new Date().getTime(),
            type: "post",
            data: {
              typeId: typeId
            },
            success: function(data) {
              console.log(data)
              that.ariticles = data.data;
              that.ariticle = data.data[0];
            },
            error: function (data) {
              console.log("失败");
            }
          });
         
        }
  },
  mounted(){
    this.getEventData(this.id);
    setInterval(this.change,1000);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
/* li {
  display: inline-block;
  margin: 0 10px;
} */
/* a {
  color: #42b983;
} */
.leftContent h1{
  height: 43px;
  color: #505960;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 0px;
  line-height: 22px;
}
.rightContent h1{
  color: #747474;
  font-size: 13px;
  font-weight: bold;
  line-height: 22px;
  padding-bottom: 15px;
  border-bottom: 2px solid #dedfe2;
  margin-bottom: 0px;
}
.rightContent div{
  height: 66px;
  overflow: hidden;
}
.rightContent ul li{
  line-height: 22px;
  height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; 
}
.leftContent p{
  height: 66px;
  color: #858585;
  font-size: 13px;
  line-height: 22px;
  margin: 0px;
  overflow: hidden;
  display: -webkit-box; 
  text-overflow: ellipsis; 
  overflow : hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.leftContent  a{
  text-decoration: none;
}
</style>
