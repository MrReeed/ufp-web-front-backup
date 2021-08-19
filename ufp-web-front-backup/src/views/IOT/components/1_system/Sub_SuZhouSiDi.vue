<template>
  <!--------------------------------------------------本页script部分存疑----------------------------------------->
  <el-container>
    <div class="innerbox" >
      <el-header class="el-header-subsuzhousidi" >
        <div class="headernamebox firstheadernamebox" :class="{addButtonCss:changeSystemIndex === 0}" @click="changeSystem(0)"><span class="headername"><h1>水系统</h1></span></div>
        <div class="headernamebox" :class="{addButtonCss:changeSystemIndex === 1}" @click="changeSystem(1)"><span class="headername"><h1>报警系统</h1></span></div>
        <div class="headernamebox" :class="{addButtonCss:changeSystemIndex === 2}" @click="changeSystem(2)"><span class="headername"><h1>防火分隔</h1></span></div>
        <div class="headernamebox" :class="{addButtonCss:changeSystemIndex === 3}" @click="changeSystem(3)"><span class="headername"><h1>防排烟系统</h1></span></div>
        <div class="headernamebox" :class="{addButtonCss:changeSystemIndex === 4}" @click="changeSystem(4)"><span class="headername"><h1>远程控制</h1></span></div>
        <dv-decoration-10 style="width:98%;height:5px;" />
        <!--<at-tabs class="attabs"  >-->
        <!--&lt;!&ndash;-->
        <!--水系统-->
        <!--&ndash;&gt;-->
        <!--<at-tab-pane label="水系统" name="name1" icon="icon-droplet" style="width: 100%">-->
      </el-header>



      <!--
          *********************************************  水系统板块  *******************************************
      -->
      <!--<div class="show" v-if="changeSystemIndexArr[0]">-->
      <div class="show" v-if="changeSystemIndex === 0">
        <el-main class="system-el-main">
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="minbox grid-content bg-purple" :class="{addBorder:index === 0}" @click='addBorderFn(0),changeChart(0)'>
                <div id="xinshuichi"><p>新水池</p></div>
                <echarts_shuiqiutu style="width: 200px;height: 150px;margin: 0 auto"></echarts_shuiqiutu>
                <div id="shuichishendu"><p>14.583cm</p></div>
                <div id="cankaozhi"><p>参考值: 20.0 - 300.0cm</p></div>
              </div>
            </el-col>

            <el-col :span="6">
              <div class="minbox grid-content bg-purple" :class="{addBorder:index === 1}" @click='addBorderFn(1),changeChart(1)'>
                <div id="xinshuichi"><p>湿式报警阀下腔压力</p></div>
                <echarts_yibiaopan style="width: 200px;height: 150px;margin: 0 auto"></echarts_yibiaopan>
                <div id="shuichishendu"><p>0.364Mp</p></div>
                <div id="cankaozhi"><p>参考值：0.2-0.8Mp</p></div>
              </div>
            </el-col>

            <el-col :span="6">
              <div class="minbox grid-content bg-purple" :class="{addBorder:index === 2}" @click='addBorderFn(2),changeChart(2)'>
                <div id="xinshuichi"><p>喷淋管网压力</p></div>
                <echarts_yibiaopan_blue style="width: 200px;height: 150px;margin: 0 auto"></echarts_yibiaopan_blue>
                <div id="shuichishendu"><p>0.332Mp</p></div>
                <div id="cankaozhi"><p>参考值：0.3-0.8Mp</p></div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="minbox grid-content bg-purple" :class="{addBorder:index === 3}" @click='addBorderFn(3),changeChart(3)'>
                <div id="xinshuichi"><p>泵房温度</p></div>
                <div style="width: 150px;height: 150px;margin: 0 auto;padding: 0 auto"><img src="../img/温度计.png" alt="温度计"></div>
                <div id="shuichishendu"><p>0.364Mp</p></div>
                <div id="cankaozhi"><p>参考值：0.2-0.8Mp</p></div>
              </div>
            </el-col>

          </el-row>
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="minbox grid-content bg-purple" :class="{addBorder:index === 4}" @click='addBorderFn(4),changeChart(4)'>
                <div id="xinshuichi"><p>空压机管道压力</p></div>
                <div style="width:100%;height:150px">
                  <i-circle style="margin-left: 117px;padding-top: 15px;" stroke-color="#2db7f5" :percent="80" dashboard>
                    <span class="demo-circle-inner" style="display:inline-block;font-size:18px;color: white;margin-top: 35px">80%</span>
                  </i-circle>
                </div>
                <div id="shuichishendu"><p>0.364Mp</p></div>
                <div id="cankaozhi"><p>参考值：0.2-0.8Mp</p></div>
              </div>
            </el-col>

            <el-col :span="6">
              <div class="minbox grid-content bg-purple" :class="{addBorder:index === 5}" @click='addBorderFn(5),changeChart(5)'>
                <div id="xinshuichi"><p>水池水位</p></div>
                <echarts_shuiqiutu style="width: 200px;height: 150px;margin: 0 auto"></echarts_shuiqiutu>
                <div id="shuichishendu"><p>0.364Mp</p></div>
                <div id="cankaozhi"><p>参考值：0.2-0.8Mp</p></div>
              </div>
            </el-col>

            <el-col :span="6">
              <div class="minbox grid-content bg-purple" :class="{addBorder:index === 6}" @click='addBorderFn(6),changeChart(6)'>
                <div id="xinshuichi"><p>泵房湿度</p></div>
                <echarts_yibiaopan style="width: 200px;height: 150px;margin: 0 auto"></echarts_yibiaopan>
                <div id="shuichishendu"><p>0.364Mp</p></div>
                <div id="cankaozhi"><p>参考值：0.2-0.8Mp</p></div>
              </div>
            </el-col>

            <el-col :span="6">
              <div class="minbox grid-content bg-purple" :class="{addBorder:index === 7}" @click='addBorderFn(7),changeChart(7)'>
                <div id="xinshuichi"><p>水箱水位</p></div>
                <echarts_shuiqiutu style="width: 200px;height: 150px;margin: 0 auto"></echarts_shuiqiutu>
                <div id="shuichishendu"><p>0.364Mp</p></div>
                <div id="cankaozhi"><p>参考值：0.2-0.8Mp</p></div>
              </div>
            </el-col>
          </el-row>
        </el-main>


        <!--底部图表区域-->
        <div class="footerbox">
          <div style="height: 300px;background-color:rgba(38, 38, 38,.4);border: 1px solid rgba(158, 158, 158,.7)">
            <!--新水池图表-->
            <div class="outerechartsbox_1" v-if="indexArr[0]">
              <div class="echartsboxheader">
                <dataRange class="datarangestyle"></dataRange>
                <el-button size="mini" class="dataquerybuttom" type="primary" plain>查询</el-button>
              </div>
              <div class="innerechartsbox">
                <charts_xinshuichi  ></charts_xinshuichi>
              </div>
            </div>
            <!--湿式报警阀下腔压力-->
            <div class="outerechartsbox_1" v-if="indexArr[1]">
              <div class="echartsboxheader">
                <dataRange class="datarangestyle"></dataRange>
                <el-button size="mini" class="dataquerybuttom" type="primary" plain>查询</el-button>
              </div>
              <div class="innerechartsbox">
                <charts_shishibaojingfa></charts_shishibaojingfa>
              </div>
            </div>
            <!--喷淋官网压力-->
            <div class="outerechartsbox_1" v-if="indexArr[2]">
              <div class="echartsboxheader">
                <dataRange class="datarangestyle"></dataRange>
                <el-button size="mini" class="dataquerybuttom" type="primary" plain>查询</el-button>
              </div>
              <div class="innerechartsbox">
                <charts_penlinguanwang></charts_penlinguanwang>
              </div>
            </div>
            <!--泵房温度-->
            <div class="outerechartsbox_1" v-if="indexArr[3]">
              <div class="echartsboxheader">
                <dataRange class="datarangestyle"></dataRange>
                <el-button size="mini" class="dataquerybuttom" type="primary" plain>查询</el-button>
              </div>
              <div class="innerechartsbox">
                <charts_bengfangwendu></charts_bengfangwendu>
              </div>
            </div>
            <!--空压机管道压力-->
            <div class="outerechartsbox_1" v-if="indexArr[4]">
              <div class="echartsboxheader">
                <dataRange class="datarangestyle"></dataRange>
                <el-button size="mini" class="dataquerybuttom" type="primary" plain>查询</el-button>
              </div>
              <div class="innerechartsbox">
                <charts_kongyajiguandao></charts_kongyajiguandao>
              </div>
            </div>
            <!--水池水位-->
            <div class="outerechartsbox_1" v-if="indexArr[5]">
              <div class="echartsboxheader">
                <dataRange class="datarangestyle"></dataRange>
                <el-button size="mini" class="dataquerybuttom" type="primary" plain>查询</el-button>
              </div>
              <div class="innerechartsbox">
                <charts_xinshuichi  ></charts_xinshuichi>
              </div>
            </div>
            <!--泵房湿度-->
            <div class="outerechartsbox_1" v-if="indexArr[6]">
              <div class="echartsboxheader">
                <dataRange class="datarangestyle"></dataRange>
                <el-button size="mini" class="dataquerybuttom" type="primary" plain>查询</el-button>
              </div>
              <div class="innerechartsbox">
                <charts_bengfangshidu></charts_bengfangshidu>
              </div>
            </div>
            <!--水箱水位-->
            <div class="outerechartsbox_1" v-if="indexArr[7]">
              <div class="echartsboxheader">
                <dataRange class="datarangestyle"></dataRange>
                <el-button size="mini" class="dataquerybuttom" type="primary" plain>查询</el-button>
              </div>
              <div class="innerechartsbox">
                <charts_xinshuichi  ></charts_xinshuichi>
              </div>
            </div>

          </div>
        </div>
      </div>


      <!--
          *********************************************  报警系统板块  *******************************************
      -->
      <!--<div class="show" v-if="changeSystemIndexArr[1]">-->
      <div class="show" v-if="changeSystemIndex === 1">
        <el-main id="baojingxitong-el-main">
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="minbox grid-content bg-purple" :class="{addBorder:index === 0}" @click='addBorderFn(0),changeChart(0)'>
                <div id="xinshuichi"><p>应急疏散</p></div>
                <div style="width: 150px;height: 150px;margin: 20px auto auto"><svg t="1608815809329" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9267" width="150" height="150"><path d="M291.472906 704.705208a370.572075 370.572075 0 0 1-165.888-309.132076V370.958491A370.958491 370.958491 0 0 1 496.543396 0h30.913208A370.958491 370.958491 0 0 1 898.415094 370.958491v24.576a370.533434 370.533434 0 0 1-162.06249 306.581735L512 927.396226z" fill="#D08101" p-id="9268"></path><path d="M222.188679 927.396226a289.811321 96.603774 0 1 0 579.622642 0 289.811321 96.603774 0 1 0-579.622642 0Z" fill="#D1D1D1" p-id="9269"></path><path d="M376.754717 927.396226a135.245283 38.641509 0 1 0 270.490566 0 135.245283 38.641509 0 1 0-270.490566 0Z" fill="#999999" p-id="9270"></path><path d="M511.768151 927.396226l76.973887-77.283018H435.257962z" fill="#E34D21" p-id="9271"></path><path d="M435.026113 850.113208h153.484076l76.973886-77.283019H358.515925z" fill="#E55425" p-id="9272"></path><path d="M291.356981 704.705208L358.825057 772.830189h307.006792l70.288906-70.713963c3.014038-2.048 5.603019-4.443774 8.501132-6.569056H279.262189c4.134642 2.975396 7.844226 6.337208 12.094792 9.158038z" fill="#E75D29" p-id="9273"></path><path d="M279.30083 695.54717h465.475623a370.147019 370.147019 0 0 0 77.978566-77.283019H201.244981a371.46083 371.46083 0 0 0 78.055849 77.283019z" fill="#E9662E" p-id="9274"></path><path d="M125.584906 395.573132A362.611925 362.611925 0 0 0 132.308528 463.698113h759.382944A363.230189 363.230189 0 0 0 898.415094 395.534491V386.415094H125.584906z" fill="#EE7F3C" p-id="9275"></path><path d="M527.456604 0h-30.913208a366.321509 366.321509 0 0 0-224.854943 77.283019h480.623094A366.321509 366.321509 0 0 0 527.456604 0z" fill="#F7A852" p-id="9276"></path><path d="M752.311547 77.283019H271.688453a373.779321 373.779321 0 0 0-75.50551 77.283019h631.634114a373.779321 373.779321 0 0 0-75.50551-77.283019z" fill="#F5A04E" p-id="9277"></path><path d="M196.182943 154.566038A371.847245 371.847245 0 0 0 153.368151 231.849057h717.263698a371.847245 371.847245 0 0 0-42.814792-77.283019z" fill="#F39849" p-id="9278"></path><path d="M153.368151 231.849057a368.524075 368.524075 0 0 0-22.218868 77.283018h761.701434a368.524075 368.524075 0 0 0-22.218868-77.283018z" fill="#F29045" p-id="9279"></path><path d="M131.149283 309.132075A370.456151 370.456151 0 0 0 125.584906 370.958491v15.456603h772.830188v-15.456603a370.456151 370.456151 0 0 0-5.564377-61.826416z" fill="#F08840" p-id="9280"></path><path d="M155.957132 540.981132h712.124377a365.664604 365.664604 0 0 0 23.609963-77.283019H132.308528a367.326189 367.326189 0 0 0 23.648604 77.283019z" fill="#EC7737" p-id="9281"></path><path d="M201.244981 618.264151h621.548679a376.484226 376.484226 0 0 0 45.287849-77.283019H155.918491a375.634113 375.634113 0 0 0 45.32649 77.283019z" fill="#EA6E33" p-id="9282"></path><path d="M471.426415 693.074113a57.228075 57.228075 0 0 1 40.45766-97.685736 54.098113 54.098113 0 0 1 57.189434 57.228076 57.150792 57.150792 0 0 1-97.647094 40.45766z m-2.202566-183.585811L440.513208 200.433509a52.243321 52.243321 0 0 1 19.088905-43.626264 82.074566 82.074566 0 0 1 52.47517-19.320754 65.690566 65.690566 0 0 1 71.409509 57.228075l-28.556075 314.773736a42.119245 42.119245 0 0 1-42.853434 28.633358 42.119245 42.119245 0 0 1-42.853434-28.633358z" fill="#FFFFFF" p-id="9283"></path></svg></div>
              </div>
            </el-col>

          </el-row>
        </el-main>

        <!--底部图表区域-->
        <div id="baojingxitong-footerbox">
          <div style="height: 100%;background-color:rgba(38, 38, 38,.4);border: 1px solid rgba(158, 158, 158,.7)">
            <div style="background-color: #011f60" v-if="changeSystemIndex ===1">
              <div id="baojingxitong-echartsboxheader">
                <dataRange class="datarangestyle"></dataRange>
                <el-button size="mini" class="dataquerybuttom" type="primary" plain>查询</el-button>
              </div>
              <div id="baojingxitong-innerechartsbox">
                <table_yingjishusan></table_yingjishusan>
              </div>
            </div>


          </div>
        </div>
      </div>


      <!--
          *********************************************  防火分隔板块  *******************************************
      -->
      <!--<div class="show" v-if="changeSystemIndexArr[2]">-->
      <div class="show" v-if="changeSystemIndex === 2">
        <el-main class="system-el-main">
          <el-row :gutter="20">

            <el-col :span="6">
              <div class="minbox grid-content bg-purple" :class="{addBorder:index === 0}" @click='addBorderFn(0),changeChart(0)'>
                <div id="xinshuichi"><p>2号仓库区域</p></div>
                <div id="xinshuichi"><p>卷帘门监测器</p></div>
                <!--<div style="width: 64px;height: 64px;margin:auto auto"><svg t="1608860739691" class="icon" viewBox="0 0 1920 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5841" width="64" height="64"><path d="M126.122667 128H1761.706667v853.333333H126.122667z" fill="#FFFFFF" p-id="5842"></path><path d="M126.122667 298.666667H1761.706667v42.666666H126.122667zM126.122667 384H1761.706667v42.666667H126.122667zM126.122667 469.333333H1761.706667v42.666667H126.122667zM126.122667 554.666667H1761.706667v42.666666H126.122667zM133.248 640h1635.541333v42.666667H133.248zM133.248 725.333333h1635.541333v42.666667H133.248zM133.248 810.666667h1635.541333v42.666666H133.248zM133.248 896h1635.541333v42.666667H133.248z" fill="#E6E6E6" p-id="5843"></path></svg></div>-->
                <div style="height: 100%;background-color: pink">
                  <div id="fanghuofenge-juanlianmen-leftbox">
                    <div id="svg-juanlianmen-container" style="height: 128px;width: 128px;margin: 10px auto auto">
                      <svg t="1608862159016" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6389" data-spm-anchor-id="a313x.7781069.0.i23" width="128" height="128"><path d="M0 81.92h972.8v117.76H0z" fill="#1296db" p-id="6390" data-spm-anchor-id="a313x.7781069.0.i24" class="selected"></path><path d="M51.2 138.24h972.8v107.52H51.2z" fill="#F9EEB8" p-id="6391" data-spm-anchor-id="a313x.7781069.0.i22" class=""></path><path d="M133.12 245.76h808.96v696.32H133.12z" fill="#F9EEB8" p-id="6392" data-spm-anchor-id="a313x.7781069.0.i21" class=""></path><path d="M81.92 266.24h808.96v20.48H81.92zM81.92 358.4h808.96v20.48H81.92zM81.92 445.44h808.96v20.48H81.92zM81.92 532.48h808.96v20.48H81.92zM81.92 619.52h808.96v20.48H81.92zM81.92 706.56h808.96v20.48H81.92zM81.92 793.6h808.96v20.48H81.92z" fill="#1296db" p-id="6393" data-spm-anchor-id="a313x.7781069.0.i27" class=""></path><path d="M901.12 906.24H71.68v-716.8h829.44v716.8z m-808.96-20.48h788.48V209.92H92.16v675.84z" fill="#1296db" p-id="6394" data-spm-anchor-id="a313x.7781069.0.i28" class=""></path><path d="M972.8 209.92H0V81.92h972.8v128zM20.48 189.44h936.96V102.4H20.48v87.04z" fill="#1296db" p-id="6395" data-spm-anchor-id="a313x.7781069.0.i26" class=""></path></svg>
                    </div>
                  </div>
                  <div id="fanghuofenge-juanlianmen-rightbox">
                    <el-switch
                      style="display: block;margin: 20px auto"
                      v-model="elswitchvalue1"
                      :disabled="true"
                      active-text="正常"
                      inactive-text="异常">
                      <!-----------------------------------------------------------------------------
                           element的开关组件中，禁用开关时参数true是动态获取的绑定值，因此属性名disabled要加冒号:
                           要写成   :disabled="true"  ，官网没有阐述这里，所以要记住这个思维
                      ------------------------------------------------------------------------------->
                    </el-switch>
                    <el-switch
                      style="display: block;margin: 20px auto"
                      v-model="elswitchvalue2"
                      active-color="#13ce66"
                      inactive-color="#ff4949"
                      active-text="电源开"
                      inactive-text="电源关">
                    </el-switch>
                    <el-switch
                      style="display: block;margin: 20px auto"
                      v-model="elswitchvalue3"
                      active-color="#13ce66"
                      active-text="全降"
                      inactive-text="半降">
                    </el-switch>

                    <!--弹出窗口-->
                    <!--电源开/关-->
                    <div class="tanchuchuangkou-beijingfugai-SuZhouSiDi" v-if="elswitchvalue2">
                      <div class="tanchuchuangkou">
                        <div style="height: 50px;padding: auto"><h1 style="text-align: center;line-height:50px;color: white">验  证</h1></div>
                        <div id="tanchuchuangkou-fengexian"></div>
                        <div id="tanchuchuangkou-mimakuang" style="height: 40px;width: 370px;margin: 50px auto auto;">
                          <el-input placeholder="请输入密码" v-model="moduanfangshuifainput" show-password size="medium"></el-input>
                        </div>
                        <div id="tanchuchuangkou-anniu" style="height: 40px;width: 370px;margin: 50px auto auto;">
                          <el-button type="primary" style="float: left;margin-left: 75px" @click="open">确定</el-button>
                          <el-button type="primary" style="float: left;margin-left: 70px" @click="elswitchvalue2 = !elswitchvalue2">取消</el-button>
                        </div>
                      </div>
                    </div>
                    <!--半降/全降-->
                    <!--<div class="tanchuchuangkou-beijingfugai-SuZhouSiDi" v-if="elswitchvalue3">-->
                      <!--<div class="tanchuchuangkou">-->
                        <!--<div style="height: 50px;padding: auto"><h1 style="text-align: center;line-height:50px;color: white">验  证</h1></div>-->
                        <!--<div id="tanchuchuangkou-fengexian"></div>-->
                        <!--<div id="tanchuchuangkou-mimakuang" style="height: 40px;width: 370px;margin: 50px auto auto;">-->
                          <!--<el-input placeholder="请输入密码" v-model="moduanfangshuifainput" show-password size="medium"></el-input>-->
                        <!--</div>-->
                        <!--<div id="tanchuchuangkou-anniu" style="height: 40px;width: 370px;margin: 50px auto auto;">-->
                          <!--<el-button type="primary" style="float: left;margin-left: 75px" @click="open">确定</el-button>-->
                          <!--<el-button type="primary" style="float: left;margin-left: 70px" @click="elswitchvalue3 = !elswitchvalue3">取消</el-button>-->
                        <!--</div>-->
                      <!--</div>-->
                    <!--</div>-->
                  </div>
                </div>
              </div>
            </el-col>

            <el-col :span="6">
              <div class="minbox grid-content bg-purple" :class="{addBorder:index === 1}" @click='addBorderFn(1),changeChart(1)'>
                <div id="xinshuichi"><p>办公楼区域</p></div>
                <div id="xinshuichi"><p>防火门监测器</p></div>
                <div style="width: 128px;height: 128px;margin:auto auto"><svg t="1608863544216" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1851" width="128" height="128"><path d="M136.192 51.2a30.72 30.72 0 0 0-30.72 30.72v860.16a30.72 30.72 0 0 0 30.72 30.72h757.76a30.72 30.72 0 0 0 30.72-30.72V81.92a30.72 30.72 0 0 0-30.72-30.72z m760.32 847.36a30.72 30.72 0 0 1-30.72 30.72H164.352a30.72 30.72 0 0 1-30.72-30.72V123.392a30.72 30.72 0 0 1 30.72-30.72h24.576a108.032 108.032 0 0 0 30.72 0v-9.216s7.168-4.608 15.872-4.608 15.872 0 15.872 4.608-4.608 4.608-10.24 4.608h-10.24a108.032 108.032 0 0 0 30.72 0h499.712a108.032 108.032 0 0 0 30.72 0h-10.24c-5.632 0-10.24 0-10.24-4.608s7.168-4.608 15.872-4.608 15.872 0 15.872 4.608v6.656a108.032 108.032 0 0 0 30.72 0h30.72a30.72 30.72 0 0 1 30.72 30.72z" fill="#1296db" p-id="1852"></path><path d="M231.424 115.712v3.584h38.4v12.288h-38.4v13.824h-12.288v-13.824h-38.4v-12.8h38.4v-3.072H156.16v104.96h8.704v77.824h-8.704V460.8h8.704v77.824h-8.704v163.328h8.704v77.824h-8.704v126.464h353.28V115.712zM353.28 463.36h82.432v23.552H353.28z m112.128 141.824H406.528V498.176h39.936v-46.08h-39.936v-32.768h58.368z" fill="#f9eeb8" p-id="1853" data-spm-anchor-id="a313x.7781069.0.i0" class="selected"></path><path d="M865.28 298.496V220.672h8.704V115.712h-69.632v3.584h38.4v12.288h-38.4v13.824h-11.776v-13.824h-38.4v-12.8h38.4v-3.072h-271.872V906.24h353.28v-125.44h-8.704v-77.824h8.704v-163.328h-8.704V460.8h8.704V298.496z m-242.176 307.2H563.2V419.328h58.368v32.768h-39.936v46.08h39.936z m51.2-118.272H593.92v-24.064h82.944z" fill="#f9eeb8" p-id="1854" data-spm-anchor-id="a313x.7781069.0.i1" class="selected"></path></svg></div>
                <div id="shuichishendu" style="padding: auto auto">
                  <el-switch
                    style="display: block;margin: 10px auto auto 115px "
                    v-model="elswitchvalue4"
                    :disabled="true"
                    active-text="正常"
                    inactive-text="异常">
                  </el-switch>
                </div>
              </div>
            </el-col>

          </el-row>
        </el-main>


        <!--底部图表区域-->
        <div class="baojingxitong-footerbox">
          <div style="height: 100%;background-color:rgba(38, 38, 38,.4);border: 1px solid rgba(158, 158, 158,.7)">
            <div  style="background-color: #011f60" v-if="indexArr[0] && changeSystemIndex === 2">
              <div id="fanghuofenge-echartsboxheader">
                <dataRange class="datarangestyle"></dataRange>
                <el-button size="mini" class="dataquerybuttom" type="primary" plain>查询</el-button>
              </div>
              <div id="baojingxitong-innerechartsbox">
                <table_yingjishusan></table_yingjishusan>
              </div>
            </div>

            <div  style="background-color: #011f60" v-if="indexArr[1]">
              <div id="fanghuofenge-echartsboxheader">
                <dataRange class="datarangestyle"></dataRange>
                <el-button size="mini" class="dataquerybuttom" type="primary" plain>查询</el-button>
              </div>
              <div id="baojingxitong-innerechartsbox">
                <table_yingjishusan></table_yingjishusan>
              </div>
            </div>


          </div>
        </div>
      </div>


      <!--
                *********************************************  防排烟板块  *******************************************
            -->
      <!--<div class="show" v-if="changeSystemIndexArr[3]">-->
      <div class="show" v-if="changeSystemIndex === 3">
        <el-main class="system-el-main">
          <el-row :gutter="20">

            <el-col :span="6">
              <div class="minbox grid-content bg-purple" :class="{addBorder:index === 0}" @click='addBorderFn(0),changeChart(0)'>
                <div id="xinshuichi"><p>大厦区域</p></div>
                <div id="xinshuichi"><p>防排烟监测器</p></div>
                <!--<div style="width: 64px;height: 64px;margin:auto auto"><svg t="1608860739691" class="icon" viewBox="0 0 1920 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5841" width="64" height="64"><path d="M126.122667 128H1761.706667v853.333333H126.122667z" fill="#FFFFFF" p-id="5842"></path><path d="M126.122667 298.666667H1761.706667v42.666666H126.122667zM126.122667 384H1761.706667v42.666667H126.122667zM126.122667 469.333333H1761.706667v42.666667H126.122667zM126.122667 554.666667H1761.706667v42.666666H126.122667zM133.248 640h1635.541333v42.666667H133.248zM133.248 725.333333h1635.541333v42.666667H133.248zM133.248 810.666667h1635.541333v42.666666H133.248zM133.248 896h1635.541333v42.666667H133.248z" fill="#E6E6E6" p-id="5843"></path></svg></div>-->
                <div style="height: 100%;background-color: pink">
                  <div id="fanghuofenge-juanlianmen-leftbox">
                    <div id="svg-juanlianmen-container" style="height: 128px;width: 128px;margin: 10px auto auto">
                      <svg t="1608865605055" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17795" width="128" height="128"><path d="M511.501 62.946c-247.127 0-447.457 201.242-447.457 449.5 0 33.496 3.759 66.088 10.677 97.497C119.069 811.301 297.719 961.95 511.505 961.95c213.779 0 392.428-150.646 436.776-352.007 6.909-31.409 10.677-63.997 10.677-97.497-0.004-248.258-200.334-449.5-447.457-449.5z" fill="#ffffff" p-id="17796" data-spm-anchor-id="a313x.7781069.0.i54" class="selected"></path><path d="M796.683 690.43c0 24.854-20.147 45.005-45.009 45.005H260.47c-24.854 0-45.005-20.151-45.005-45.005V315.847c0-24.858 20.151-45.009 45.005-45.009h491.204c24.858 0 45.009 20.151 45.009 45.009V690.43z" fill="#5C6C7F" p-id="17797"></path><path d="M796.683 368.275V315.843c0-24.858-20.151-45.005-45.013-45.005h-491.196c-24.858 0-45.005 20.147-45.005 45.005v52.432h581.214z" fill="#E7E0D6" p-id="17798"></path><path d="M256.87 297.221m-18.75 0a18.75 18.75 0 1 0 37.5 0 18.75 18.75 0 1 0-37.5 0Z" fill="#FFFF91" p-id="17799"></path><path d="M282.939 297.221m-18.75 0a18.75 18.75 0 1 0 37.5 0 18.75 18.75 0 1 0-37.5 0Z" fill="#1377BA" p-id="17800"></path><path d="M308.346 297.221m-18.75 0a18.75 18.75 0 1 0 37.5 0 18.75 18.75 0 1 0-37.5 0Z" fill="#D07D12" p-id="17801"></path><path d="M666.017 342.429c0 6.017-4.878 10.888-10.888 10.888h-403.217c-6.013 0-10.888-4.874-10.888-10.888V340.45c0-6.013 4.878-10.888 10.888-10.888h403.217c6.013 0 10.888 4.878 10.888 10.888v1.979zM783.481 342.433c0 6.013-4.874 10.884-10.888 10.884h-58.067c-6.017 0-10.888-4.874-10.888-10.884v-0.008c0-7.109 5.758-12.867 12.867-12.867h56.088c6.017 0 10.888 4.874 10.888 10.884v1.991z" fill="#D1D1D1" p-id="17802"></path><path d="M439.298 611.798c2.005-2.116 3.403-4.131 5.845-5.865 2.825-2.006 5.578-4.194 8.571-5.948 3.565-2.088 7.247-4.173 11.03-6.016L392.405 462.13c-35.568 16.354-68.458 41.906-95.464 77.107l128.017 91.783c3.816-7.495 8.691-13.877 14.323-19.204l0.017-0.018z" fill="#39B54A" p-id="17803"></path><path d="M496.5 583.583c0.189-0.001 0.373-0.018 0.561-0.024a70.713 70.713 0 0 1 5.202-0.599c2.903-0.539 5.757-1.278 8.789-1.584 1.84-0.186 3.668-0.403 5.495-0.607l-8.978-145.747c-38.228-0.693-77.921 7.806-116.434 27.245l73.367 131.821c3.073-1.508 6.213-2.862 9.42-3.909 3.634-1.186 7.514-2.644 11.431-3.755a68.18 68.18 0 0 1 9-2.387c0.611-0.285 1.326-0.451 2.147-0.454z" fill="#8CC63F" p-id="17804"></path><path d="M625.826 448.132L569.474 588.129c8.597 3.153 16.855 6.672 24.062 11.725 7.655 4.976 14.493 11.549 20.045 19.84l116.198-106.351c-30.999-31.741-66.694-53.202-103.953-65.211z" fill="#FCEE21" p-id="17805"></path><path d="M527.158 580.053c11.361 0.074 22.902 1.271 33.679 5.017a520.274 520.274 0 0 1 8.887 3.151l57.379-140.105c-40.551-14.723-80.973-18.442-118.848-13.21l8.416 145.849c3.48-0.388 6.953-0.725 10.487-0.702z" fill="#D9E021" p-id="17806"></path><path d="M500.584 697.407a5.298 5.298 0 0 1-4.226-7.264l98.329-240.038s-77.864 249.377-76.86 249.501c0.654 0.087-9.895-1.263-17.243-2.199z" fill="#303440" p-id="17807"></path><path d="M501.683 698.813a5.29 5.29 0 0 1-4.269-2.166 5.29 5.29 0 0 1-0.777-4.723L574.39 445.366S517.733 698.813 518.744 698.813H501.683z" fill="#303440" p-id="17808"></path></svg>
                    </div>
                  </div>
                  <div id="fanghuofenge-juanlianmen-rightbox">
                    <el-switch
                      style="display: block;margin: 20px auto"
                      v-model="elswitchvalue5"
                      active-text="自动"
                      inactive-text="手动">
                    </el-switch>
                    <el-switch
                      style="display: block;margin: 20px auto"
                      v-model="elswitchvalue6"
                      active-color="#13ce66"
                      inactive-color="#ff4949"
                      active-text="启动"
                      inactive-text="停止">
                    </el-switch>
                    <el-switch
                      style="display: block;margin: 20px auto"
                      v-model="elswitchvalue7"
                      active-color="#13ce66"
                      inactive-color="#ff4949"
                      active-text="电源开"
                      inactive-text="电源关">
                    </el-switch>
                  </div>
                </div>
              </div>
            </el-col>

          </el-row>
        </el-main>

        <!--底部图表区域-->
        <div class="footerbox">
          <div style="height: 300px;background-color:rgba(38, 38, 38,.4);border: 1px solid rgba(158, 158, 158,.7)">

            <div class="outerechartsbox_1" style="background-color: #011f60" v-if="changeSystemIndex === 3 ">
              <div id="fanghuofenge-echartsboxheader">
                <dataRange class="datarangestyle"></dataRange>
                <el-button size="mini" class="dataquerybuttom" type="primary" plain>查询</el-button>
              </div>
              <div id="baojingxitong-innerechartsbox">
                <table_yingjishusan></table_yingjishusan>
              </div>
            </div>

          </div>
        </div>
      </div>



      <!--
                *********************************************  远程控制板块  *******************************************
            -->
      <!--<div class="show" v-if="changeSystemIndexArr[4]">-->
      <div class="show" v-if="changeSystemIndex === 4">
        <el-main class="system-el-main">
          <el-row :gutter="20">

            <el-col :span="6">
              <div class="minbox grid-content bg-purple" :class="{addBorder:index === 0}" @click='addBorderFn(0),changeChart(0)'>
                <div id="xinshuichi"><p>末端放水阀</p></div>
                <echarts_shuiqiutu style="width: 200px;height: 150px;margin: 0 auto"></echarts_shuiqiutu>
                <div id="shuichishendu">
                  <el-switch
                    style="display: block;margin: auto auto 5px 95px "
                    v-model="elswitchvalue8"
                    :disabled="true"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                    active-text="状态正常"
                    inactive-text="状态异常">
                  </el-switch>
                  <el-switch
                    style="display: block;margin: auto auto 5px 123px "
                    v-model="elswitchvalue9"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                    active-text="开启"
                    inactive-text="关闭">
                  </el-switch>
                </div>

                <!--弹出窗口-->
                <div class="tanchuchuangkou-beijingfugai-SuZhouSiDi" v-if="elswitchvalue9">
                  <div class="tanchuchuangkou">
                    <div style="height: 50px;padding: auto"><h1 style="text-align: center;line-height:50px;color: white">验  证</h1></div>
                    <div id="tanchuchuangkou-fengexian"></div>
                    <div id="tanchuchuangkou-mimakuang" style="height: 40px;width: 370px;margin: 50px auto auto;">
                      <el-input placeholder="请输入密码" v-model="moduanfangshuifainput" show-password size="medium"></el-input>
                    </div>
                    <div id="tanchuchuangkou-anniu" style="height: 40px;width: 370px;margin: 50px auto auto;">
                      <el-button type="primary" style="float: left;margin-left: 75px" @click="open">确定</el-button>
                      <el-button type="primary" style="float: left;margin-left: 70px" @click="elswitchvalue9 = !elswitchvalue9">取消</el-button>
                    </div>
                  </div>
                </div>
              </div>
            </el-col>


            <el-col :span="6">
              <div class="minbox grid-content bg-purple" :class="{addBorder:index === 1}" @click='addBorderFn(1),changeChart(1)'>
                <div id="xinshuichi"><p>声光警报装置</p></div>
                <div style="width: 100px;height: 100px;margin: 25px auto">
                  <svg t="1608893132038" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6935" width="100" height="100"><path d="M672.914286 1024h-321.828572c-193.097143 0-351.085714-157.988571-351.085714-351.085714v-321.828572c0-193.097143 157.988571-351.085714 351.085714-351.085714h321.828572c194.56 0 351.085714 157.988571 351.085714 351.085714v321.828572c0 193.097143-157.988571 351.085714-351.085714 351.085714z" fill="#FFE8EA" p-id="6936"></path><path d="M731.428571 746.057143c0-24.868571-19.017143-43.885714-40.96-43.885714h-356.937142c-21.942857 0-40.96 19.017143-40.96 43.885714h438.857142z" fill="#FF808C" p-id="6937"></path><path d="M804.571429 848.457143v-14.628572c0-48.274286-26.331429-87.771429-67.291429-87.771428h-438.857143c-42.422857 0-78.994286 39.497143-78.994286 87.771428v14.628572h585.142858z" fill="#FF5A5A" p-id="6938"></path><path d="M349.622857 702.171429h326.217143c4.388571 0 8.777143 0 13.165714 1.462857v-212.114286c0-92.16-67.291429-168.228571-150.674285-168.228571h-49.737143c-83.382857 0-150.674286 76.068571-150.674286 168.228571v212.114286c2.925714-1.462857 7.314286-1.462857 11.702857-1.462857z" fill="#FFB0B0" p-id="6939"></path><path d="M381.805714 488.594286c-8.777143 0-14.628571-5.851429-14.628571-14.628572v-1.462857c0-4.388571 1.462857-8.777143 2.925714-13.165714 1.462857-7.314286 8.777143-13.165714 17.554286-11.702857 7.314286 1.462857 13.165714 8.777143 11.702857 17.554285-1.462857 4.388571-1.462857 7.314286-1.462857 11.702858-2.925714 5.851429-8.777143 11.702857-16.091429 11.702857zM396.434286 438.857143c-2.925714 0-4.388571 0-7.314286-1.462857-7.314286-4.388571-10.24-13.165714-5.851429-20.48 1.462857-4.388571 4.388571-7.314286 5.851429-10.24 19.017143-30.72 45.348571-49.737143 74.605714-54.125715 7.314286-1.462857 16.091429 4.388571 17.554286 11.702858s-4.388571 16.091429-11.702857 17.554285c-26.331429 4.388571-45.348571 24.868571-55.588572 40.96-1.462857 2.925714-4.388571 5.851429-5.851428 8.777143-1.462857 4.388571-5.851429 7.314286-11.702857 7.314286z" fill="#FFFFFF" p-id="6940"></path><path d="M471.04 702.171429h81.92c1.462857 0 1.462857 0 2.925714 1.462857v-117.028572c0-43.885714-7.314286-87.771429-38.034285-89.234285h-13.165715c-29.257143 1.462857-38.034286 45.348571-38.034285 89.234285v117.028572c2.925714-1.462857 2.925714-1.462857 4.388571-1.462857z" fill="#FE6968" p-id="6941"></path><path d="M514.925714 292.571429c-11.702857 0-21.942857-10.24-21.942857-21.942858v-73.142857c0-11.702857 10.24-21.942857 21.942857-21.942857s21.942857 10.24 21.942857 21.942857v73.142857c0 11.702857-8.777143 21.942857-21.942857 21.942858zM642.194286 323.291429c-8.777143-8.777143-8.777143-21.942857 0-30.72l51.2-51.2c8.777143-8.777143 21.942857-8.777143 30.72 0 8.777143 8.777143 8.777143 21.942857 0 30.72l-51.2 51.2c-8.777143 8.777143-21.942857 8.777143-30.72 0zM389.12 323.291429c-8.777143 8.777143-21.942857 8.777143-30.72 0l-51.2-51.2c-8.777143-8.777143-8.777143-21.942857 0-30.72 8.777143-8.777143 21.942857-8.777143 30.72 0l51.2 51.2c7.314286 8.777143 7.314286 21.942857 0 30.72z" fill="#FF9F9F" p-id="6942"></path></svg>
                </div>
                <div id="shuichishendu">
                  <el-switch
                    style="display: block;margin: auto auto 5px 95px "
                    v-model="elswitchvalue10"
                    :disabled="true"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                    active-text="状态正常"
                    inactive-text="状态异常">
                  </el-switch>
                  <el-switch
                    style="display: block;margin: auto auto 5px 123px "
                    v-model="elswitchvalue11"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                    active-text="开启"
                    inactive-text="关闭">
                  </el-switch>

                  <!--弹出窗口-->
                  <div class="tanchuchuangkou-beijingfugai-SuZhouSiDi" v-if="elswitchvalue11">
                    <div class="tanchuchuangkou">
                      <div style="height: 50px;padding: auto"><h1 style="text-align: center;line-height:50px;color: white">验  证</h1></div>
                      <div id="tanchuchuangkou-fengexian"></div>
                      <div id="tanchuchuangkou-mimakuang" style="height: 40px;width: 370px;margin: 50px auto auto;">
                        <el-input placeholder="请输入密码" v-model="shengguangbaojingzhuangzhiinput" show-password size="medium"></el-input>
                      </div>
                      <div id="tanchuchuangkou-anniu" style="height: 40px;width: 370px;margin: 50px auto auto;">
                        <el-button type="primary" style="float: left;margin-left: 75px" @click="open">确定</el-button>
                        <el-button type="primary" style="float: left;margin-left: 70px" @click="elswitchvalue11 = !elswitchvalue11">取消</el-button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </el-col>

          </el-row>
        </el-main>
      </div>

    </div>
  </el-container>
</template>

<script>
  import 'echarts-liquidfill/src/liquidFill.js'
  import dataRange from './components/dataRange'
  import echarts_shuiqiutu from './components/echarts_shuiqiutu'
  import echarts_thermometer from './components/echarts_thermometer'
  import echarts_yibiaopan from './components/echarts_yibiaopan'
  import echarts_yibiaopan_blue from './components/echarts_yibiaopan_blue'
  import yibiaopan_circle from './components/yibiaopan_circle'

  export default {
    name: 'Sub_SuZhouSiDi',
    components:{
      dataRange:dataRange,
      echarts_shuiqiutu:echarts_shuiqiutu,
      echarts_thermometer:echarts_thermometer,
      echarts_yibiaopan:echarts_yibiaopan,
      echarts_yibiaopan_blue:echarts_yibiaopan_blue,
      yibiaopan_circle:yibiaopan_circle,
      //水系统中各传感器的图表
      charts_xinshuichi:resolve =>{require(["./components/charts_xinshuichi"],resolve)},
      charts_shishibaojingfa:resolve =>{require(["./components/charts_shishibaojingfa"],resolve)},
      charts_penlinguanwang:resolve =>{require(["./components/charts_penlinguanwang"],resolve)},
      charts_bengfangwendu:resolve =>{require(["./components/charts_bengfangwendu"],resolve)},
      charts_kongyajiguandao:resolve =>{require(["./components/charts_kongyajiguandao"],resolve)},
      charts_bengfangshidu:resolve => {require(['./components/charts_bengfangshidu'],resolve)},
      //报警系统中的表格
      table_yingjishusan:resolve => {require(['./components/table_yingjishusan'],resolve)},
    },
    data(){
      return {
        index:0,
        indexArr:[true,false,false,false,false,false,false,false],
        changeChartIndex:0,
        changeSystemIndexArr:[true,false,false,false,false],
        changeSystemIndex:0,
        //防火分隔显示切换index:
        fanghuofengeIndex:0,

        //卷帘门开关状态：
        elswitchvalue1:true,
        elswitchvalue2:false,
        juanlianmenjianceqidianyuancanshu:false,
        elswitchvalue3:false,
        //防火门监测器
        elswitchvalue4:true,
        //防排烟监测器
        elswitchvalue5:true,
        elswitchvalue6:true,
        elswitchvalue7:true,
        //末端放水阀
        elswitchvalue8:true,
        elswitchvalue9:false,
        moduanfangshuifainput:'',
        //声光警报装置
        elswitchvalue10:true,
        elswitchvalue11:false,
        shengguangbaojingzhuangzhiinput:'',


      }
    },
    watch:{
      elswitchvalue2(Val,oldVal){  //watch中监视变量的值  ，变量名称 在这里当成 函数名称看待，   参数有两个：一个是变化后的值Val，一个是变化前的值oldVal
        if (Val !== oldVal){
          this.juanlianmenjianceqidianyuancanshu = !this.juanlianmenjianceqidianyuancanshu
        }
      },
    },
    methods: {
      addBorderFn(index){
        this.index = index
      },
      changeChart(index){
        for(var i=0;i < this.indexArr.length;i++){
          this.indexArr[i] = false
        }
        this.indexArr[index] = true;
        // this.changeChartIndex = index
      },

      //                                            存疑问题
      //**********************************************************************************************
      // changeSystem(index){
      //   for(var j=0;j < this.changeSystemIndexArr.length;j++){
      //     this.changeSystemIndexArr[j] = false
      //   }
      //   this.changeSystemIndexArr[index] = true;
      // },
      //***********************************************************************************************

      changeSystem(index){
        this.changeSystemIndex = index
      },

      //取消窗口的函数：
      cancelWindow(){
        this.juanlianmenjianceqidianyuancanshu = !this.juanlianmenjianceqidianyuancanshu
        this.elswitchvalue2 = this.juanlianmenjianceqidianyuancanshu
      },
      //远程控制模块 的弹出窗口 中点击‘确定’时的函数：
      open() {
        this.$alert('该功能暂未开放，敬请期待', '温馨提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }
    }
  }
</script>

<style lang="scss">
  .innerbox{
    background-color: rgba(158, 158, 158,.1);
    border: 1px solid rgba(158, 158, 158,.4);
    box-shadow: 10px 10px 10px -3px rgba(0, 0, 0,.4);
    padding: 5px 10px;
    /*padding-top: 3px;*/
    /*padding-left: 5px;*/
    /*height: 620px;*/
    /*width: 1200px;*/
    height: 850px;
    width: 100%;
    position: relative;
  }
  .ivu-tabs-tab{
    background-color: red;
  }
  .at-tabs-nav__item{
    color: #a3d8fa;
  }


  .el-header-subsuzhousidi{  //各系统名称的navbar
    height: 60px;
    width: 100%;
    /*background-color: pink;*/
    .headernamebox{   //div
      float: left;
      height: 40px;
      width: 160px;
      margin: 5px 20px 10px;
      border-radius: 20px;
      /*background-color: #42b9fb;*/
      background-color: #42b9fb;
      border: 1px solid transparent;
      /*background-color: yellow;*/
      .headername>h1{   //span
        line-height: 40px;
        text-align: center;
        color: 	rgb(248, 248, 248);
      }
    }
  }
  .headernamebox.firstheadernamebox{
    margin-left: 260px;
  }
  .headernamebox:hover{
    cursor: pointer;
    border-radius: 10px;
    border: 1px solid transparent;
    background-color: #ECC46D;
  }
  .addButtonCss{
    border-radius: 10px;
    border: 1px solid transparent;
    background-color: #ECC46D!important;
  }

  .show{
    width: 100%;
    height: 790px;
    /*background-color: yellow;*/
  }
  .system-el-main{
    overflow: auto;
    /*background-color: gray;*/
    height: 460px;
  }
  #baojingxitong-el-main{
    overflow: auto;
    height: 270px;
  }

  .minbox.grid-content.bg-purple{
    /*position: absolute;*/
    box-shadow: 10px 10px 10px -3px rgba(0, 0, 0,.4);
  }

  .addBorder{
    border: 1px solid #ECC46D;
    box-shadow: 10px 10px 10px -3px rgba(255, 255, 255,.2);
  }

  /* 水球图的属性 */
  #xinshuichi>p{
    height: 30px;
    margin: auto auto;
    text-align: center;
    line-height: 30px;
    color: #fff;
    font-size: 16px;
  }
  /*#shuiweitu{*/
    /*display: block;*/
    /*width:75px;*/
    /*height:100px;*/
    /*margin: auto auto;*/
    /*padding: auto auto;*/
  /*}*/
  #shuichishendu>p{
    height: 25px;
    line-height: 25px;
    margin: auto auto;
    font-size: 16px;
    text-align: center;
    color: #fff;
  }
  #cankaozhi>p{
    height: 25px;
    line-height: 25px;
    margin: auto auto;
    font-size: 16px;
    text-align: center;
    color: #fff;
  }

  //下方图表板块
  .footerbox{
    /*position: relative;*/
    box-shadow: 0px 0px 10px 6px rgba(0, 0, 0,.4) inset;
    height: 300px;
    width: 100%;
    background-color: transparent;
    margin-top: 10px;
  }
  #baojingxitong-footerbox{
    /*position: relative;*/
    box-shadow: 0px 0px 10px 6px rgba(0, 0, 0,.4) inset;
    height: 500px;
    width: 100%;
    background-color: transparent;
  }


  //下方图表板块内部
  .outerechartsbox_1{
    height: 100%;
  }
  .datarangestyle{
    float: left;
    margin-left: 1010px;
    margin-top: 10px
  }
  .dataquerybuttom{
    float: right;
    margin-right: 32px;
    margin-top: 10px;
  }



  .echartsboxheader{
    height: 50px;
    background-color: #333;
  }
  //报警系统板块
  #baojingxitong-echartsboxheader{
    height: 50px;
    background-color: transparent;
  }
  #fanghuofenge-echartsboxheader{
    height: 50px;
    background-color: transparent;
  }


  #baojingxitong-innerechartsbox{
    /*height: 303px;*/
    /*height: 248px;*/
    /*background-color: transparent;*/
    height: 100%;
  }

  //防火分隔板块
  #fanghuofenge-juanlianmen-leftbox{
    float: left;
    height: 170px;
    width: 170px;
    padding: auto;
    /*background-color: red;*/
  }
  #fanghuofenge-juanlianmen-rightbox{
    float: left;
    height: 170px;
    padding: 10px auto auto;
  }
  .el-switch__label{
    color: #fff;
  }


  .innerechartsbox{
    /*margin-left: 60px;*/
    height: 248px;
    background-color: transparent;
  }


  //弹出窗口
  .tanchuchuangkou-beijingfugai-SuZhouSiDi{
    position: fixed;
    left: 0px;
    top: 0px;
    height: 1080px;
    width: 1920px;
    z-index: 100;
    /*background-color: rgba(35,35,35,.5);*/
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 7.0px );
    -webkit-backdrop-filter: blur( 7.0px );
    /*border-radius: 10px;*/
  }
  .tanchuchuangkou{
    position: fixed;
    left: 50%;
    top: 50%;
    height: 279px;
    width: 576px;
    margin-left: -288px;
    margin-top: -162px;
    border-radius: 20px;
    background-color: #39b4f9;
    z-index: 101;
  }
  #tanchuchuangkou-fengexian{
    background: #ddd;
    margin: 0px 38px auto 38px ;
    /*display: inline-block;*/
    width: 500px;
    height: 1px;
    overflow: hidden;
    /*vertical-align: middle;*/
  }
  .el-button--primary{
    border: 1px solid #ddd;
  }
  .el-button--primary:focus, .el-button--primary:hover{
    border: 1px solid #ddd;
  }


  .el-date-editor .el-range-separator{
    line-height: 20px;
  }
  .el-date-editor .el-range__icon{
    line-height: 20px;
  }
  .el-date-editor .el-range__close-icon{
    line-height: 20px;
  }
  .el-input__inner{
    height: 28px;
    line-height: 28px;
  }




  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 8px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: rgba(13, 74, 128, .7);
    /*background-color: rgba(14, 81, 139,.9);*/
  }
  .bg-purple:hover{
    background-color: rgb(21, 107, 183);
  }
  .bg-purple-light {
    background: #e5e9f2;


  }
  .grid-content {
    border-radius: 20px;
    min-height: 230px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
