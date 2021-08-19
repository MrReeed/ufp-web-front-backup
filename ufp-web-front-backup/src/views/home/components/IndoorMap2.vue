<template>
  <div id="indoormap">
    <div id="map" class="map"/>
    <div v-if="step === 1" class="control-box">
      <div class="search-box">
        <el-button type="danger" size="mini" @click="returnoutdoor">返回</el-button>
        <span>
        区域:
      </span>
        <el-select :popper-append-to-body="false" v-model="selectboxdata.area" size="mini" placeholder="请选择">
          <el-option
            label="一楼"
            value="1"
          />
          <el-option
            label="二楼"
            value="2"
          />
          <el-option
            label="三楼"
            value="3"
          />
        </el-select>
        <span>
        设施系统:
      </span>
        <el-select :popper-append-to-body="false" v-model="selectboxdata.infrastructure_system" size="mini" placeholder="请选择">
          <el-option
            label="消防供配电设施"
            value="1"
          />
          <el-option
            label="火灾自动报警系统"
            value="2"
          />
          <el-option
            label="电器火灾监控系统"
            value="3"
          />
        </el-select>
        <span>
        设施:
      </span>
        <el-select :popper-append-to-body="false" v-model="selectboxdata.infrastructure" size="mini" placeholder="请选择">
          <el-option
            label="配电箱"
            value="1"
          />
          <el-option
            label="消防设备供电末端电箱"
            value="2"
          />
          <el-option
            label="发电机"
            value="3"
          />
        </el-select>
        <span>
        设施状态:
      </span>
        <el-select :popper-append-to-body="false" v-model="selectboxdata.infrastructure_status" size="mini" placeholder="请选择">
          <el-option
            label="全部"
            value="正常"
          />
          <el-option
            label="报警"
            value="2"
          />
          <el-option
            label="故障"
            value="3"
          />
        </el-select>
        <el-button type="primary" size="mini" @click="infrastructureSelect">搜索</el-button>
      </div>
      <div class="build-alarm-info" style="display: block;" @click="clicktest">
        <div class="alarm-info-title"><span
          class="gg-company-warnTitle"
          title="指挥中心大楼（1号楼）"
        >{{ alarminfodata.area }}</span><span
          class="alarm-info-toggle ggicon-arrowBottom"
        /></div>
        <div class="alarm-info-body" style="display: block;">
          <div class="build-floor-alarm">
            <div id="alarmcount" class="floor-alarm-num floor-num-size">{{ alarminfodata.fire_alarm }}</div>
            <div class="floor-alarm-name">火警</div>
          </div>
          <div class="build-floor-warn">
            <div id="warn_number" class="floor-warn-num floor-num-size">{{ alarminfodata.electrical_fire_alarm }}</div>
            <div class="floor-warn-name">电气火灾预警</div>
          </div>
          <div class="build-floor-hidden">
            <div id="accicount" class="floor-hidden-num floor-num-size">{{ alarminfodata.fire_service_failure }}</div>
            <div class="floor-hidden-name">消防设施故障</div>
          </div>
          <div class="build-floor-abnormal">
            <div id="abnormal" class="floor-abnormal-num floor-num-size">
              {{ alarminfodata.abnormal_monitoring_equipment }}
            </div>
            <div class="floor-abnormal-name">监测设备异常</div>
          </div>
          <div class="build-warp-line"/>
          <div class="build-weft-line"/>
        </div>
      </div>
      <div class="monitor-coorate">
        <div class="coorate">经度:{{ mouse_GPS_position.lng }} | 纬度:{{ mouse_GPS_position.lat }}</div>
      </div>
    </div>

  </div>
</template>
<script>
import BMapGL from 'BMapGL'
import MapInfoWindow from '@/views/home/components/MapInfoWindow'

export default {
  components: {
    MapInfoWindow
  },
  data() {
    return {
      outdoordata: {
        outdoor_image_url: 'http://lixiaole.oss-cn-beijing.aliyuncs.com/xiaofang/images/indoor/outdoormodel1.png',
        arealist: [{
          position: {
            lat: '-0.00004770097791782806',
            lng: '0.00006147778331387269'
          },
          name: '',
          device_number: ''
        }, {
          position: {
            lat: '0.000016395470622676715',
            lng: '-0.000011234600610091873'
          },
          name: '',
          device_number: ''
        }]

      },
      alarminfodata: {
        indoor_image_url: 'http://lixiaole.oss-cn-beijing.aliyuncs.com/xiaofang/images/indoor/1.png',
        area: '指挥中心大楼（1号楼）',
        fire_alarm: 0,
        electrical_fire_alarm: 1,
        fire_service_failure: 2,
        abnormal_monitoring_equipment: 3
      },
      selectboxdata: {
        area: '',
        infrastructure_system: '',
        infrastructure: '',
        infrastructure_status: ''
      },
      placename: '指挥中心大楼',
      map: '',
      mouse_GPS_position: {
        lat: '',
        lng: ''
      },
      step: 0
    }
  },
  mounted() {
    this.createOutdoorModel()
  },
  methods: {
    clicktest() {
    },
    infrastructureSelect() {
      // this.$message.error('该功能暂未开发！')
    },
    createIndoorMap() {
      var that = this
      that.map = new BMapGL.Map('map', {
        minZoom: 5,
        maxZoom: 25
      })
      that.map.centerAndZoom(new BMapGL.Point(121.355054, 37.474472), 21)
      that.map.enableScrollWheelZoom(true)
      // map.setMapType(BMAP_EARTH_MAP)
      that.map.addEventListener('click', function(e) {
        // console.log(e.point.lng + ',' + e.point.lat)
        // console.log(e)
        // alert(e.latlng.lng + ',' + e.latlng.lat)
        // console.log(e)
      })
      that.map.addEventListener('mousemove', function(e) {
        // console.log(e.latlng.lng + ',' + e.latlng.lat)
        that.mouse_GPS_position.lat = e.latlng.lat.toFixed(12)
        that.mouse_GPS_position.lng = e.latlng.lng.toFixed(12)
      })
      // map.enableTiltGestures()
      var navi3DCtrl = new BMapGL.NavigationControl3D()
      that.map.addControl(navi3DCtrl)
      var scaleCtrl = new BMapGL.ScaleControl()
      that.map.addControl(scaleCtrl)
      var zoomCtrl = new BMapGL.ZoomControl()
      that.map.addControl(zoomCtrl)
      that.map.setDisplayOptions({
        poiText: false, // 隐藏poi标注
        poiIcon: false, // 隐藏poi图标
        building: false // 隐藏楼块
      })
      var pStart = new BMapGL.Point(121.35445662683578, 37.47433416107018)
      var pEnd = new BMapGL.Point(121.35570303166112, 37.47452747503896)
      var bounds = new BMapGL.Bounds(new BMapGL.Point(pStart.lng, pEnd.lat), new BMapGL.Point(pEnd.lng, pStart.lat))
      var imgOverlay = new BMapGL.GroundOverlay(bounds, {
        type: 'image',
        url: that.alarminfodata.indoor_image_url,
        opacity: 1
      })
      that.map.addOverlay(imgOverlay)
      for (var i = 0; i < 20; i++) {
        var point = new BMapGL.Point(121.35505662683578 + ((Math.random() - 0.5) / 1000), 37.47443416107018 + ((Math.random() - 0.5) / 6000))
        var marker = new BMapGL.Marker(point)
        that.map.addOverlay(marker)
        var opts = {
          width: 350,
          height: 300,
          title: '点型感烟探测器'
        }
        // var infoWindow = new BMapGL.InfoWindow('地址：北京市东城区王府井大街88号乐天银泰百货八层', opts)
        // 点标记添加点击事件
        // marker.addEventListener('click', function() {
        //   that.map.openInfoWindow(infoWindow, point) // 开启信息窗口
        // })
        addInfoWindow(marker, '<div>暂无数据<MapInfoWindow /></div>', opts, point)
      }

      // 用外部函数的形式创建标记点的窗体，否则由于没有闭包，前面窗体的鼠标点击事件会被最后一个窗体覆盖
      function addInfoWindow(marker, text, option, point) {
        var infowindow = new BMapGL.InfoWindow(text, option)
        marker.addEventListener('click', function() {
          that.map.openInfoWindow(infowindow, point) // 开启信息窗口
        })
      }

      that.map.addEventListener('zoomend', function(e) {
        var ZoomNum = that.map.getZoom()
        if (ZoomNum >= 20) {
          that.map.setDisplayOptions({
            poiText: false, // 隐藏poi标注
            poiIcon: false, // 隐藏poi图标
            building: false // 隐藏楼块
          })
        } else {
          that.map.setDisplayOptions({
            poiText: true, // 显示poi标注
            poiIcon: true, // 显示poi图标
            building: true // 显示楼块
          })
        }
        // console.log(ZoomNum)
      })
    },
    createOutdoorModel() {
      // 直接使用百度地图来做一个楼宇俯瞰效果
      var that = this
      that.map = new BMapGL.Map('map', {
        minZoom: 5,
        maxZoom: 25
      })
      that.map.centerAndZoom(new BMapGL.Point(0, 0), 23)
      that.map.disableScrollWheelZoom()
      that.map.disableDoubleClickZoom()
      var pStart = new BMapGL.Point(-0.00018150497026909034, -0.00009678017075172957)
      var pEnd = new BMapGL.Point(0.00017753822003108694, 0.00009561549650175296)
      var bounds = new BMapGL.Bounds(new BMapGL.Point(pStart.lng, pEnd.lat), new BMapGL.Point(pEnd.lng, pStart.lat))
      var imgOverlay = new BMapGL.GroundOverlay(bounds, {
        type: 'image',
        url: that.outdoordata.outdoor_image_url,
        opacity: 1
      })
      that.map.addOverlay(imgOverlay)
      that.map.addEventListener('click', function(e) {
        console.log(e.latlng.lng + ',' + e.latlng.lat)
        // console.log(e)
        // alert(e.latlng.lng + ',' + e.latlng.lat)
        // console.log(e)
      })
      for (var i in this.outdoordata.arealist) {
        console.log(this.outdoordata.arealist[i])
        var point = new BMapGL.Point(this.outdoordata.arealist[i].position.lng, this.outdoordata.arealist[i].position.lat)
        var marker = new BMapGL.Marker(point)
        that.map.addOverlay(marker)
        var option = {
          width: 100,
          height: 100,
          title: '消防监控区域'
        }
        var text = '暂无数据'
        var infowindow = new BMapGL.InfoWindow(text, option)
        that.map.openInfoWindow(infowindow, point)
        addmarkerclickevent(marker)
      }

      function addmarkerclickevent(marker) {
        marker.addEventListener('click', function() {
          that.step = 1
          that.map = null
          that.createIndoorMap()
          // that.map.openInfoWindow(infowindow, point) // 开启信息窗口
        })
      }
    },
    returnoutdoor() {
      this.step = 0
      this.map = null
      this.createOutdoorModel()
    }
  }
}
</script>

<style lang="scss">
#indoormap {
  height: 100%;
  width: 100%;

  .map {
    width: 100%;
    height: 100%;
  }

  .control-box {
    height: 100%;
    width: 100%;

    .search-box {
      top: 60px;
      left: 0px;
      position: absolute;
      z-index: 99;
      width: 100%;
      height: 40px;
      background-color: white;
      text-align: left;
      padding: 0 20px;
      line-height: 40px;

      span {
        margin-left: 5px;
      }
    }

    .build-alarm-info {
      width: 234px;
      top: 130px;
      left: 40px;
      position: absolute;
      border-radius: 5px;
      box-shadow: 0px 0px 10px 2px rgba(37, 40, 41, .2);
      z-index: 98;
    }

    .alarm-info-title {
      font-size: 18px;
      color: #fff;
      padding: 5px 0 5px 10px;
      background: #4777e7;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }

    .gg-company-warnTitle {
      display: inline-block;
      width: calc(100% - 26px);
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .alarm-info-title .ggicon-arrowBottom {
      position: absolute;
      right: 6px;
      top: 8px;
      cursor: pointer;
    }

    .build-alarm-info .alarm-info-body {
      padding: 0 10px;
      background: #fff;
      height: 110px;
      border-radius: 5px;
    }

    .alarm-info-title .ggicon-arrowBottom {
      position: absolute;
      right: 6px;
      top: 8px;
      cursor: pointer;
    }

    .build-floor-alarm, .build-floor-hidden, .build-floor-warn, .build-floor-abnormal {
      width: 105px;
      display: inline-block;
      text-align: center;
      font-size: 12px;
      margin-bottom: 2px;
    }

    .floor-alarm-name {
      margin: 0;
      padding: 0;
    }

    .build-alarm-info .floor-num-size {
      font-size: 26px;
      line-height: 32px;
    }

    .build-alarm-info .floor-alarm-num {
      color: #f03718;
    }

    .build-alarm-info .floor-warn-num {
      color: #5c52cc;
    }

    .build-alarm-info .floor-hidden-num {
      color: #ff7800;
    }

    .build-alarm-info .floor-abnormal-num {
      color: #a1a8b2;
    }

    .build-alarm-info .build-warp-line {
      width: 1px;
      height: 90px;
      background: #a1a8b2;
      position: absolute;
      top: 50px;
      left: 117px;
    }

    .build-alarm-info .build-weft-line {
      width: 210px;
      height: 1px;
      background: #a1a8b2;
      position: absolute;
      top: 94px;
      left: 12px;
    }

    .monitor-coorate {
      position: absolute;
      z-index: 99;
      bottom: 48px;
      width: 100%;
      line-height: 12px;
      font-size: 12px;
      color: #505050;
      //background-color: red;
      .coorate {
        float: left;
        display: inline;
        padding: 0px 0px 0px 130px;
        margin-left: 29px;
        margin-top: 51px;
        line-height: 12px;
        background: rgba(250, 250, 250, 0);
      }
    }
  }

}

</style>
