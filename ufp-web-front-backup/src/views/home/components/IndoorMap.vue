<template>
  <div id="indoormap">
    <baidu-map
      class="bm-view"
      :center="center"
      :zoom="zoom"
      :continuous-zoom="true"
      :scroll-wheel-zoom="true"
      :max-zoom="30"
      :min-zoom="3"
      @mousemove="mousemove"
    >

      <!--比例尺-->
      <bm-scale :show-zoom-info="true" anchor="BMAP_ANCHOR_BOTTOM_LEFT" />
      <!--显示鼠标位置的经纬度-->
      <bm-control anchor="BMAP_ANCHOR_BOTTOM_LEFT" :offset="{width:200,height:10}" class="mousegpsdiv">
        <div><span>维度:</span><span v-text="mouselat" />|经度:<span v-text="mouselng" /></div>
      </bm-control>
      <bm-marker
        v-for="(marker , maker_index) in markerPointlist"
        :key="maker_index"
        :icon="{url:'http://lixiaole.oss-cn-beijing.aliyuncs.com/xiaofang/images/unitpoiont.png', size: {width: 20, height: 20}}"
        :position="{ lng: marker.lng, lat: marker.lat }"
        @click="infoWindowOpen(maker_index)"
      >
        <bm-info-window :width="350" :height="140" :show="marker.showFlag" @close="infoWindowClose(maker_index)">
          <div class="bm-info-box">
            <div class="unitinfo">
              <div style="width: 70%;">
                <h3>研究院</h3>
                <p>15563831221</p>
                <p>山东省烟台市芝罘区港城西大街69号</p>
              </div>
              <div style="width: 29%;margin-top: 30px; text-align: right"><a @click="showindoormapdialog">详情</a></div>
            </div>
            <div class="unitdetail">
              <ul style="display: flex;">
                <li style="width: 24%; text-align: center;">
                  <div style="color: #e23737;font-size: 1.8em;">7</div>
                  <div style="font-size: 0.8em;">火警</div>
                </li>
                <li style="width: 1px;background-color: black;margin-top: 5px;height: 25px;" />
                <li style="width: 24%; text-align: center;">
                  <div style="color: #8e62dd;font-size: 1.8em;">14</div>
                  <div style="font-size: 0.8em;">电气火灾预警</div>
                </li>
                <li style="width: 1px;background-color: black;margin-top: 5px;height: 25px;" />
                <li style="width: 24%; text-align: center;">
                  <div style="color: #ff8f33;font-size: 1.8em;">7</div>
                  <div style="font-size: 0.8em;">消防设施故障</div>
                </li>
                <li style="width: 1px;background-color: black;margin-top: 5px;height: 25px;" />
                <li style="width: 24%; text-align: center;">
                  <div style="color: #a3b5cb;font-size: 1.8em;">98</div>
                  <div style="font-size: 0.8em;">监测设备异常</div>
                </li>
              </ul>
            </div>
          </div>
        </bm-info-window>
      </bm-marker>
      <bm-marker
        v-for="(marker , maker_index) in firecover_markerPointlist"
        :key="maker_index"
        :icon="{url:'http://lixiaole.oss-cn-beijing.aliyuncs.com/xiaofang/images/firecover/4.png', size: {width: 20, height: 20}}"
        :position="{ lng: marker.lng, lat: marker.lat }"
      />
      <!--      覆盖物-->
      <bm-ground
        :bounds="{ne: {lng: 121.360054, lat: 37.476472}, sw:{lng: 121.350054, lat: 37.468472}}"
        image-u-r-l="http://lixiaole.oss-cn-beijing.aliyuncs.com/xiaofang/images/indoor/1.png"
      />
      <!--自定义瓦片-->
      <bm-tile
        :is-transparent-png="true"
        tile-url-template="https://api.map.baidu.com/getscript?v=2.0&ak=c2xuHU1cqLLMcegUyPtNtEbGFpPsT3r6&services=&t=20201208133530"
      />
    </baidu-map>
  </div>
</template>

<script>
import BasicInformation from '@/views/home/components/BasicInformation'
import OnlineInstitutions from '@/views/home/components/OnlineInstitutions'
import UnitClassification from '@/views/home/components/UnitClassification'
import WeiBao from '@/views/home/components/WeiBao'
import BaoJing from '@/views/home/components/BaoJing'
import XiaoFang from '@/views/home/components/XiaoFang'
import ZhiZaoShang from '@/views/home/components/ZhiZaoShang'
import MapBottomTools from '@/views/home/components/MapBottomTools'
export default {
  name: 'Center',
  components: {
    WeiBao,
    ZhiZaoShang,
    BasicInformation,
    OnlineInstitutions,
    UnitClassification,
    BaoJing,
    XiaoFang,
    MapBottomTools
  },
  data() {
    return {
      indoormapdialogvisible: false,
      bottomalarmdivshow: false,
      mouselat: 0,
      mouselng: 0,
      show: false,
      cf: {
        data: [66]
      },
      center: { lng: 121.355054, lat: 37.474472 },
      zoom: 23,
      markerPointlist: [],
      unitlevel: '',
      firecover_markerPointlist: []
    }
  },
  created() {
    this.markerPointlist = this.createnewmarkerpointlist(100)
  },
  methods: {
    handler({ BMap, map }) {
      console.log(BMap, map)
      window.BMAP_NORMAL_MAP.m.mc = 20
    },
    mousemove(e) {
      // console.log(e)
      this.mouselat = e.point.lat
      this.mouselng = e.point.lng
    },
    infoWindowClose(maker_index) {
      this.markerPointlist[maker_index].showFlag = false
    },
    infoWindowOpen(maker_index) {
      this.markerPointlist[maker_index].showFlag = true
    },
    onunitlevelchange(unitlevel) {
      if (unitlevel === this.unitlevel) {
        console.log(unitlevel)
        this.markerPointlist = this.createnewmarkerpointlist(100)
        this.unitlevel = 0
        return
      }
      this.markerPointlist = this.createnewmarkerpointlist(unitlevel * 10)
      this.firecover_markerPointlist = null
      this.unitlevel = unitlevel
    },
    onfirecoverchange(firecover) {
      console.log('111')
      this.firecover_markerPointlist = this.createnewmarkerpointlist((10 - firecover) * 10)
      this.markerPointlist = null
      // this.unitlevel = unitlevel
    },
    createnewmarkerpointlist(num) {
      var newmarkerpoints = new Array(num)
      for (var i = 0; i < num; i++) {
        // newmarkerpoints[i] = '{lng: ' + (121.389445 + ((Math.random() - 0.5) / 100)).toFixed(6) + ', lat: ' + (37.6374 + ((Math.random() - 0.5) / 100)).toFixed(6) + ', showFlag: false, message: \'1\'}'
        newmarkerpoints[i] = {
          lng: 121.355054 + ((Math.random() - 0.5) / 200),
          lat: 37.474472 + ((Math.random() - 0.5) / 200),
          showFlag: false,
          message: '1',
          zIndex: 9
        }
      }
      return newmarkerpoints
    },
    showindoormapdialog() {
      this.indoormapdialogvisible = true
    }
  }
}
</script>

<style lang="scss">

#indoormap {
  width: 100%;
  height: 100%;
  background-color: #030409;
  color: #fff;

  .bm-view {
    width: 100%;
    height: 100%;
  }

  /*去掉百度地图的logo*/
  .BMap_cpyCtrl {
    display: none;
  }

  .anchorBL {
    a {
      display: none;
    }

    /*display: none;*/
  }

  #dv-full-screen-container {
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;
  }

  .mousegpsdiv {
    background: white;
    padding: 3px;
  }

  .leftdiv {
    width: 23%;
    height: 92%;
    position: absolute;
    top: 9%;
    left: 20px;
    color: white;
    background-color: rgba(4, 46, 90, 0.7);
    //padding-top: 5%;
    z-index: 1;
  }

  .rightdiv {
    width: 22%;
    height: 92%;
    position: absolute;
    top:9.2%;
    //padding-top: 5.2%;
    z-index: 1;
    right: 20px;
    color: white;
    background-color: rgba(4, 46, 90, 0.7);
  }

  .bottomdiv {
    width: 50%;
    height: 40px;
    position: absolute;
    bottom: 20px;
    left: 25%;
    color: white;
    text-align: center;
    //background-color: rgba(4, 46, 90, 0);
  }
  .bottomdiv2 {
    width: 50%;
    height: 40px;
    position: absolute;
    bottom: 310px;
    left: 25%;
    color: white;
    text-align: center;
    //background-color: rgba(4, 46, 90, 0);
  }
  .bottomalarmdiv {
    width: 50%;
    height: 280px;
    position: absolute;
    bottom: 20px;
    left: 25%;
    color: white;
    text-align: center;
    background-color: rgba(4, 46, 90, 0.9);
  }

  .rightbox {
    width: 100%;
  }

  .leftbox {
    width: 100%;
    height: 30%;

    h4 {
      text-align: center;
      margin: 0px;
    }
  }

  .baojing {
    width: 100%;
    height: 33%;
  }

  .OnlineInstitutionsbox {
    width: 100%;
    height: 35%;
  }

  .bm-info-box {
    .unitinfo {
      display: flex;
      border-bottom: black 1px solid;
      padding-bottom: 10px;
    }

    .unitdetail {
      margin-top: 10px;
    }
  }
  .el-dialog {
    background-color: rgba(18, 56, 97, 0.8);
  }
  .el-dialog__title {
    color: aliceblue;
  }
}

</style>
