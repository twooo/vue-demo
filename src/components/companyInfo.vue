<template>
    <div>
        <backgroundImage></backgroundImage>
        <BreadCrumb></BreadCrumb>
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-9 arict">
                    <h1>新军盛大混凝土有限公司</h1>
                    <h2>CHINA XINJUNSHENDA</h2>
                    <!-- <p>
                            万科企业股份有限公司成立于1984年，经过三十余年的发展，已成为国内领先的城乡建设与生活服务商，公司业务聚焦全国经济最具活力的三大经济圈及中西部重点城市。2016年公司首次跻身《财富》“世界500强”，位列榜单第356位，2017年、2018年接连上榜，分别位列榜单第307位、第332位。
                        万科企业股份有限公司成立于1984年，经过三十余
                    </p>
                    <p>
                        万科企业股份有限公司成立于1984年，经过三十余年的发展，已成为国内领先的城乡建设与生活服务商，公司业务聚焦全国经济最具活力的三大经济圈及中西部重点城市。2016年公司首次跻身《财富》“世界500强”，位列榜单第356位，2017年、2018年接连上榜，分别位列榜单第307位、第332位。
                    </p>
                    <p>
                        万科企业股份有限公司成立于1984年，经过三十余年的发展，已成为国内领先的城乡建设与生活服务商，公司业务聚焦全国经济最具活力的三大经济圈及中西部重点城市。2016年公司首次跻身《财富》“世界500强”，位列榜单第356位，2017年、2018年接连上榜，分别位列榜单第307位、第332位。
                    </p>
                    <p>
                        万科企业股份有限公司成立于1984年，经过三十余年的发展，已成为国内领先的城乡建设与生活服务商，公司业务聚焦全国经济最具活力的三大经济圈及中西部重点城市。2016年公司首次跻身《财富》“世界500强”，位列榜单第356位，2017年、2018年接连上榜，分别位列榜单第307位、第332位。
                        万科企业股份有限公司成立于1984年，经过三十余年的发展，已成为国内领先的城乡建设与生活服务商，公司业务聚焦全国经济最具活力的三大经济圈及中西部重点城市。2016年公司首次跻身《财富》“世界500强”，位列榜单第356位，2017年、2018年接连上榜，分别位列榜单第307位、第332位
                    </p> -->
                    <p v-html="ariticles.content">{{ariticles.content}}</p>
                </div>
                <div class="col-sm-12 col-md-3 ">

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BreadCrumb from "./BreadCrumb.vue"
import backgroundImage from "./backgroundImage.vue"
var wId = "";
export default {
    name: 'companyInfo',
    components: {BreadCrumb,backgroundImage},
    data(){
        return{
            ariticles: {}
        }
    },
    beforeRouteEnter(to, from, next) {
      wId = to.params.id;
      next();
    },
    methods: {
        getEventData(typeId) {
          var that = this
         
          $.ajax({
            url: "http://localhost/api/findAll",
            type: "post",
            data: {
              typeId: typeId
            },
            success: function(data) {
              console.log(data)
              that.ariticles = data.data[0];
            },
            error: function (data) {
              console.log("失败");
            }
          });
         
        }
    },
    mounted() {
      this.getEventData(wId);
    },
}
</script>
<style scoped>
    .arict{
        padding: 20px;
        /* height: 1000px; */
        border-right: 1px solid #cccccc;
    }
    .arict h1,h2{
        margin: 0px;
        padding: 0px;
        color: #333333;
    }
    .arict h1{
        font-size: 24px;
    }
    .arict h2{
         font-size: 16px;
    }
    .arict p{
        text-indent: 24px;
        font-size: 12px;
        line-height: 30px;
        color: #666666;
        margin-top: 15px;
    }
</style>


