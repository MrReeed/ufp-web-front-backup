<template>
  <div id="data-view">
    <baidu-map
      class="bm-view"
      :center="center"
      :zoom="zoom"
      :max-zoom="22"
      :min-zoom="3"
      :map-style="mapStyle"
      :continuous-zoom="true"
      ak="c2xuHU1cqLLMcegUyPtNtEbGFpPsT3r6"
      :scroll-wheel-zoom="true"
      @mousemove="mousemove"
    >
      <div class="leftdiv">
        <div class="baojing">
          <dv-border-box-2 :color="['rgb(96,160,232)', 'rgb(41,140,255)']" background-color="rgba(4, 46, 90, 0.7)">
            <BaoJing />
          </dv-border-box-2>
        </div>
        <div style="width: 100%;height: 32%;">
          <dv-border-box-2 :color="['rgb(96,160,232)', 'rgb(41,140,255)']" background-color="rgba(4, 46, 90, 0.7)">
            <XiaoFang />
          </dv-border-box-2>
        </div>
        <div style="width: 100%;height: 32%;">
          <dv-border-box-2 :color="['rgb(96,160,232)', 'rgb(41,140,255)']" background-color="rgba(4, 46, 90, 0.7)">
            <ZhiZaoShang />
          </dv-border-box-2>
        </div>
      </div>
      <div :class="bottomalarmdivshow ? 'bottomdiv2' : 'bottomdiv'" style="display: flex;">
        <el-button type="primary" @click="bottomalarmdivshow = !bottomalarmdivshow">
          警报
        </el-button>
        <MapBottomTools @onfirecoverchange="onfirecoverchange" />
      </div>
      <div v-if="bottomalarmdivshow" class="bottomalarmdiv">
        <dv-border-box-2 :color="['rgb(96,160,232)','rgb(41,140,255)']" background-color="rgba(4, 46, 90, 0.7)">
          <AlarmInfo />
        </dv-border-box-2>
      </div>
      <div class="rightdiv">
        <div class="OnlineInstitutionsbox">
          <dv-border-box-2 :color="['rgb(96,160,232)', 'rgb(41,140,255)']" background-color="rgba(4, 46, 90, 0.7)">
            <OnlineInstitutions />
          </dv-border-box-2>
        </div>
        <div class="rightbox" style="height:25%">
          <dv-border-box-2 :color="['rgb(96,160,232)', 'rgb(41,140,255)']" background-color="rgba(4, 46, 90, 0.7)">
            <WeiBao />
          </dv-border-box-2>
        </div>
        <div class="rightbox" style="height:37%">
          <dv-border-box-2 :color="['rgb(96,160,232)', 'rgb(41,140,255)']" background-color="rgba(4, 46, 90, 0.7)">
            <UnitClassification @onunitlevelchange="onunitlevelchange" />
          </dv-border-box-2>
        </div>
      </div>
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
        :icon="{url:marker.iconurl , size: {width: 32, height: 32}}"
        :position="{ lng: marker.lng, lat: marker.lat }"
      />
    </baidu-map>
    <el-dialog
      v-dialogDrag
      v-if="indoormapdialogvisible"
      :close-on-click-modal="false"
      center
      title="室内设施位置展示"
      :visible.sync="indoormapdialogvisible"
      width="70%"
      :modal="false"
      :destroy-on-close="true"
    >
      <div style="text-align: center;height: 700px;">
        <!--        <dv-border-box-8 />-->
        <IndoorMap2 />
      </div>
    </el-dialog>
  </div>
</template>

<script>
import AlarmInfo from '@/views/home/components/AlarmInfo'
import BasicInformation from '@/views/home/components/BasicInformation'
import OnlineInstitutions from '@/views/home/components/OnlineInstitutions'
import UnitClassification from '@/views/home/components/UnitClassification'
import WeiBao from '@/views/home/components/WeiBao'
import BaoJing from '@/views/home/components/BaoJing'
import XiaoFang from '@/views/home/components/XiaoFang'
import ZhiZaoShang from '@/views/home/components/ZhiZaoShang'
import MapBottomTools from '@/views/home/components/MapBottomTools'
import IndoorMap2 from '@/views/home/components/IndoorMap2'
import fireforceApi from '@/api/fireforce'
export default {
  name: 'HomeMap',
  components: {
    AlarmInfo,
    IndoorMap2,
    WeiBao,
    ZhiZaoShang,
    BasicInformation,
    OnlineInstitutions,
    UnitClassification,
    BaoJing,
    XiaoFang,
    MapBottomTools
  },
  props: {
    center: {
      type: [Object, String]
    },
    zoom: {
      type: Number
    }
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
      markerPointlist: [],
      firecoverselected: 0,
      mapStyle: {
        styleJson: [
          {
            'featureType': 'water',
            'elementType': 'all',
            'stylers': {
              'color': '#021019'
            }
          },
          {
            'featureType': 'highway',
            'elementType': 'geometry.fill',
            'stylers': {
              'color': '#000000'
            }
          },
          {
            'featureType': 'highway',
            'elementType': 'geometry.stroke',
            'stylers': {
              'color': '#147a92'
            }
          },
          {
            'featureType': 'arterial',
            'elementType': 'geometry.fill',
            'stylers': {
              'color': '#000000'
            }
          },
          {
            'featureType': 'arterial',
            'elementType': 'geometry.stroke',
            'stylers': {
              'color': '#0b3d51'
            }
          },
          {
            'featureType': 'local',
            'elementType': 'geometry',
            'stylers': {
              'color': '#000000'
            }
          },
          {
            'featureType': 'land',
            'elementType': 'all',
            'stylers': {
              'color': '#08304b'
            }
          },
          {
            'featureType': 'railway',
            'elementType': 'geometry.fill',
            'stylers': {
              'color': '#000000'
            }
          },
          {
            'featureType': 'railway',
            'elementType': 'geometry.stroke',
            'stylers': {
              'color': '#08304b'
            }
          },
          {
            'featureType': 'subway',
            'elementType': 'geometry',
            'stylers': {
              'lightness': -70
            }
          },
          {
            'featureType': 'building',
            'elementType': 'geometry.fill',
            'stylers': {
              'color': '#000000'
            }
          },
          {
            'featureType': 'all',
            'elementType': 'labels.text.fill',
            'stylers': {
              'color': '#857f7f'
            }
          },
          {
            'featureType': 'all',
            'elementType': 'labels.text.stroke',
            'stylers': {
              'color': '#000000'
            }
          },
          {
            'featureType': 'building',
            'elementType': 'geometry',
            'stylers': {
              'color': '#022338'
            }
          },
          {
            'featureType': 'green',
            'elementType': 'geometry',
            'stylers': {
              'color': '#062032'
            }
          },
          {
            'featureType': 'boundary',
            'elementType': 'all',
            'stylers': {
              'color': '#1e1c1c'
            }
          },
          {
            'featureType': 'manmade',
            'elementType': 'geometry',
            'stylers': {
              'color': '#022338'
            }
          },
          {
            'featureType': 'land',
            'elementType': 'labels',
            'stylers': {
              'visibility': 'off'
            }
          },
          {
            'featureType': 'all',
            'elementType': 'labels.icon',
            'stylers': {
              'visibility': 'off'
            }
          },
          {
            'featureType': 'all',
            'elementType': 'labels.text.fill',
            'stylers': {
              'color': '#2da0c6',
              'visibility': 'on'
            }
          }
        ]
      },
      unitlevel: '',
      firecover_markerPointlist: []
    }
  },
  created() {
    this.markerPointlist = this.createnewmarkerpointlist(100)
  },
  methods: {
    mousemove(e) {
      this.mouselat = e.point.lat
      this.mouselng = e.point.lng
    },
    infoWindowClose(maker_index) {
      this.markerPointlist[maker_index].showFlag = false
    },
    infoWindowOpen(maker_index) {
      this.markerPointlist[maker_index].showFlag = true
    },
    onunitlevelchange(unitlevel, unitname) {
      if (unitlevel === this.unitlevel) {
        this.$message('所有单位')
        this.markerPointlist = this.createnewmarkerpointlist(100)
        this.unitlevel = 0
        return
      }
      this.$message(unitname)
      this.markerPointlist = this.createnewmarkerpointlist(unitlevel * 10)
      this.firecover_markerPointlist = null
      this.unitlevel = unitlevel
    },
    onfirecoverchange(firecover) {
      console.log(firecover)
      if (this.firecoverselected === firecover) {
        this.firecover_markerPointlist = null
        this.onunitlevelchange(10, '所有单位')
        this.firecoverselected = 0
        return
      }
      this.firecoverselected = firecover
      this.changefireforceinfo()
      // this.unitlevel = unitlevel
    },
    async changefireforceinfo() {
      const data = await fireforceApi.getfireforceinfo({ fireforcetype: this.firecoverselected })
      if (data.code !== 20000) {
        return this.$message.error('获取消防力量数据失败！')
      }
      this.firecover_markerPointlist = data.fireforcelist
      this.markerPointlist = null
    },
    createnewmarkerpointlist(num) {
      var newmarkerpoints = new Array(num)
      for (var i = 0; i < num; i++) {
        // newmarkerpoints[i] = '{lng: ' + (121.389445 + ((Math.random() - 0.5) / 100)).toFixed(6) + ', lat: ' + (37.6374 + ((Math.random() - 0.5) / 100)).toFixed(6) + ', showFlag: false, message: \'1\'}'
        newmarkerpoints[i] = {
          lng: 121.337445 + ((Math.random() - 0.5) / 5),
          lat: 37.4874 + ((Math.random() - 0.5) / 5),
          showFlag: false,
          message: '1'
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

#data-view {
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
    //background-color: rgba(4, 46, 90, 0.7);
    //padding-top: 5%;
    z-index: 1;
  }

  .rightdiv {
    width: 22%;
    height: 92%;
    position: absolute;
    top: 9.2%;
    //padding-top: 5.2%;
    z-index: 1;
    right: 20px;
    color: white;
    //background-color: rgba(4, 46, 90, 0.7);
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
