<template>
  <div class="shishijiance">
    <div class="systemBar">
      <el-select v-model="value" placeholder="请选择区域">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <div class="iotnamebox firstiotnamebox" :class="{addIOTnameboxCSS:changeIOTnameboxIndex === 0}"
           @click="changeIOTnamebox(0)">
        <div class="no">
          <div class="no-hd">
            <h1>水系统</h1>
          </div>
        </div>
      </div>
      <div class="iotnamebox" :class="{addIOTnameboxCSS:changeIOTnameboxIndex === 1}" @click="changeIOTnamebox(1)">
        <div class="no">
          <div class="no-hd">
            <h1>电气火灾</h1>
          </div>
        </div>
      </div>
      <div class="iotnamebox" :class="{addIOTnameboxCSS:changeIOTnameboxIndex === 2}" @click="changeIOTnamebox(2)">
        <div class="no">
          <div class="no-hd">
            <h1>报警系统</h1>
          </div>
        </div>
      </div>
      <div class="iotnamebox" :class="{addIOTnameboxCSS:changeIOTnameboxIndex === 3}" @click="changeIOTnamebox(3)">
        <div class="no">
          <div class="no-hd">
            <h1>可燃气体探测系统</h1>
          </div>
        </div>
      </div>
      <div class="iotnamebox" :class="{addIOTnameboxCSS:changeIOTnameboxIndex === 4}" @click="changeIOTnamebox(4)">
        <div class="no">
          <div class="no-hd">
            <h1>消防栓灭火系统</h1>
          </div>
        </div>
      </div>
      <dv-decoration-10 style="width:90%;height:5px;"/>

      <!-- 水系统 -->
      <div class="shuixitong" v-if="changeIOTnameboxIndex === 0">
        <!-- 水箱1 -->
        <div class="item">
          <div class="item_topbox">
            <div class="item_topbox_imgbox">
              <svg t="1617154223767" class="icon" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg" p-id="1575" width="100" height="100">
                <path
                  d="M0 0m81.92 0l860.16 0q81.92 0 81.92 81.92l0 860.16q0 81.92-81.92 81.92l-860.16 0q-81.92 0-81.92-81.92l0-860.16q0-81.92 81.92-81.92Z"
                  fill="#FF4F5B" p-id="1576"></path>
                <path
                  d="M457.60512 317.60384a24.576 24.576 0 0 0 24.576-24.576c0-17.94048-22.81472-33.46432-23.79776-34.16064l-0.98304-0.65536-0.94208 0.65536c-0.98304 0.69632-23.7568 16.9984-23.7568 34.11968a24.576 24.576 0 0 0 24.90368 24.61696zM386.74432 317.60384a24.576 24.576 0 0 0 24.576-24.576c0-17.94048-22.81472-33.46432-23.79776-34.16064l-0.8192-0.8192-0.94208 0.65536c-0.98304 0.69632-23.7568 16.9984-23.7568 34.11968a24.576 24.576 0 0 0 24.73984 24.7808zM315.84256 317.60384a24.576 24.576 0 0 0 24.576-24.576c0-17.94048-22.81472-33.46432-23.79776-34.16064l-0.77824-0.8192-0.94208 0.65536c-0.98304 0.69632-23.7568 16.9984-23.7568 34.11968a24.576 24.576 0 0 0 24.69888 24.7808z"
                  fill="#FFFFFF" p-id="1577"></path>
                <path
                  d="M799.62112 449.24928v-172.032a20.48 20.48 0 0 0-20.48-20.48H526.99136a20.48 20.48 0 1 0 0 40.96h231.46496V458.752h-4.096c-40.18176 0-40.18176-32.1536-80.36352-32.1536s-40.18176 32.1536-80.32256 32.1536-40.18176-32.1536-80.32256-32.1536-40.18176 32.1536-80.32256 32.1536-40.18176-32.1536-80.32256-32.1536S312.5248 458.752 272.384 458.752a66.80576 66.80576 0 0 1-6.92224-0.36864V276.97152a20.48 20.48 0 0 0-40.96 0v192.83968a20.48 20.48 0 0 0 0 2.33472v263.3728a32.23552 32.23552 0 0 0 32.1536 32.1536H767.5904a32.23552 32.23552 0 0 0 32.1536-32.1536v-283.40224c0-0.98304-0.04096-1.92512-0.12288-2.8672z"
                  fill="#FFFFFF" p-id="1578"></path>
              </svg>
              <!--<svg t="1617154605015" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2205" width="100" height="100"><path d="M0 0m81.92 0l860.16 0q81.92 0 81.92 81.92l0 860.16q0 81.92-81.92 81.92l-860.16 0q-81.92 0-81.92-81.92l0-860.16q0-81.92 81.92-81.92Z" fill="#2eb82e" p-id="2206" data-spm-anchor-id="a313x.7781069.0.i11" class="selected"></path><path d="M457.60512 317.60384a24.576 24.576 0 0 0 24.576-24.576c0-17.94048-22.81472-33.46432-23.79776-34.16064l-0.98304-0.65536-0.94208 0.65536c-0.98304 0.69632-23.7568 16.9984-23.7568 34.11968a24.576 24.576 0 0 0 24.90368 24.61696zM386.74432 317.60384a24.576 24.576 0 0 0 24.576-24.576c0-17.94048-22.81472-33.46432-23.79776-34.16064l-0.8192-0.8192-0.94208 0.65536c-0.98304 0.69632-23.7568 16.9984-23.7568 34.11968a24.576 24.576 0 0 0 24.73984 24.7808zM315.84256 317.60384a24.576 24.576 0 0 0 24.576-24.576c0-17.94048-22.81472-33.46432-23.79776-34.16064l-0.77824-0.8192-0.94208 0.65536c-0.98304 0.69632-23.7568 16.9984-23.7568 34.11968a24.576 24.576 0 0 0 24.69888 24.7808z" fill="#FFFFFF" p-id="2207"></path><path d="M799.62112 449.24928v-172.032a20.48 20.48 0 0 0-20.48-20.48H526.99136a20.48 20.48 0 1 0 0 40.96h231.46496V458.752h-4.096c-40.18176 0-40.18176-32.1536-80.36352-32.1536s-40.18176 32.1536-80.32256 32.1536-40.18176-32.1536-80.32256-32.1536-40.18176 32.1536-80.32256 32.1536-40.18176-32.1536-80.32256-32.1536S312.5248 458.752 272.384 458.752a66.80576 66.80576 0 0 1-6.92224-0.36864V276.97152a20.48 20.48 0 0 0-40.96 0v192.83968a20.48 20.48 0 0 0 0 2.33472v263.3728a32.23552 32.23552 0 0 0 32.1536 32.1536H767.5904a32.23552 32.23552 0 0 0 32.1536-32.1536v-283.40224c0-0.98304-0.04096-1.92512-0.12288-2.8672z" fill="#FFFFFF" p-id="2208"></path></svg>-->
              <span>离线</span>
            </div>
            <div class="item_topbox_textbox">
              <span>设备名称：</span><br>
              <span>****</span><br>
              <span>设备编号：</span><br>
              <span>****</span><br>
              <span>设备类型：消防水池</span><br>
              <span>位&emsp;&emsp;置：水箱</span>
            </div>
            <div class="rightbottom_button"><span>详情</span></div>
          </div>
          <div class="line"></div>
          <div class="item_bottombox">
            <div class="item_bottombox_chartbox">
              <echarts_xiaofangshuichi></echarts_xiaofangshuichi>
            </div>
            <div class="item_bottombox_textbox">
              <span>33.1%</span><br>
              <span>参考值：0.0 - 50.0%</span>
            </div>
          </div>
        </div>

        <!-- 水箱2 -->
        <div class="item">
          <div class="item_topbox">
            <div class="item_topbox_imgbox">
              <svg t="1617154223767" class="icon" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg" p-id="1575" width="100" height="100">
                <path
                  d="M0 0m81.92 0l860.16 0q81.92 0 81.92 81.92l0 860.16q0 81.92-81.92 81.92l-860.16 0q-81.92 0-81.92-81.92l0-860.16q0-81.92 81.92-81.92Z"
                  fill="#FF4F5B" p-id="1576"></path>
                <path
                  d="M457.60512 317.60384a24.576 24.576 0 0 0 24.576-24.576c0-17.94048-22.81472-33.46432-23.79776-34.16064l-0.98304-0.65536-0.94208 0.65536c-0.98304 0.69632-23.7568 16.9984-23.7568 34.11968a24.576 24.576 0 0 0 24.90368 24.61696zM386.74432 317.60384a24.576 24.576 0 0 0 24.576-24.576c0-17.94048-22.81472-33.46432-23.79776-34.16064l-0.8192-0.8192-0.94208 0.65536c-0.98304 0.69632-23.7568 16.9984-23.7568 34.11968a24.576 24.576 0 0 0 24.73984 24.7808zM315.84256 317.60384a24.576 24.576 0 0 0 24.576-24.576c0-17.94048-22.81472-33.46432-23.79776-34.16064l-0.77824-0.8192-0.94208 0.65536c-0.98304 0.69632-23.7568 16.9984-23.7568 34.11968a24.576 24.576 0 0 0 24.69888 24.7808z"
                  fill="#FFFFFF" p-id="1577"></path>
                <path
                  d="M799.62112 449.24928v-172.032a20.48 20.48 0 0 0-20.48-20.48H526.99136a20.48 20.48 0 1 0 0 40.96h231.46496V458.752h-4.096c-40.18176 0-40.18176-32.1536-80.36352-32.1536s-40.18176 32.1536-80.32256 32.1536-40.18176-32.1536-80.32256-32.1536-40.18176 32.1536-80.32256 32.1536-40.18176-32.1536-80.32256-32.1536S312.5248 458.752 272.384 458.752a66.80576 66.80576 0 0 1-6.92224-0.36864V276.97152a20.48 20.48 0 0 0-40.96 0v192.83968a20.48 20.48 0 0 0 0 2.33472v263.3728a32.23552 32.23552 0 0 0 32.1536 32.1536H767.5904a32.23552 32.23552 0 0 0 32.1536-32.1536v-283.40224c0-0.98304-0.04096-1.92512-0.12288-2.8672z"
                  fill="#FFFFFF" p-id="1578"></path>
              </svg>
              <!--<svg t="1617154605015" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2205" width="100" height="100"><path d="M0 0m81.92 0l860.16 0q81.92 0 81.92 81.92l0 860.16q0 81.92-81.92 81.92l-860.16 0q-81.92 0-81.92-81.92l0-860.16q0-81.92 81.92-81.92Z" fill="#2eb82e" p-id="2206" data-spm-anchor-id="a313x.7781069.0.i11" class="selected"></path><path d="M457.60512 317.60384a24.576 24.576 0 0 0 24.576-24.576c0-17.94048-22.81472-33.46432-23.79776-34.16064l-0.98304-0.65536-0.94208 0.65536c-0.98304 0.69632-23.7568 16.9984-23.7568 34.11968a24.576 24.576 0 0 0 24.90368 24.61696zM386.74432 317.60384a24.576 24.576 0 0 0 24.576-24.576c0-17.94048-22.81472-33.46432-23.79776-34.16064l-0.8192-0.8192-0.94208 0.65536c-0.98304 0.69632-23.7568 16.9984-23.7568 34.11968a24.576 24.576 0 0 0 24.73984 24.7808zM315.84256 317.60384a24.576 24.576 0 0 0 24.576-24.576c0-17.94048-22.81472-33.46432-23.79776-34.16064l-0.77824-0.8192-0.94208 0.65536c-0.98304 0.69632-23.7568 16.9984-23.7568 34.11968a24.576 24.576 0 0 0 24.69888 24.7808z" fill="#FFFFFF" p-id="2207"></path><path d="M799.62112 449.24928v-172.032a20.48 20.48 0 0 0-20.48-20.48H526.99136a20.48 20.48 0 1 0 0 40.96h231.46496V458.752h-4.096c-40.18176 0-40.18176-32.1536-80.36352-32.1536s-40.18176 32.1536-80.32256 32.1536-40.18176-32.1536-80.32256-32.1536-40.18176 32.1536-80.32256 32.1536-40.18176-32.1536-80.32256-32.1536S312.5248 458.752 272.384 458.752a66.80576 66.80576 0 0 1-6.92224-0.36864V276.97152a20.48 20.48 0 0 0-40.96 0v192.83968a20.48 20.48 0 0 0 0 2.33472v263.3728a32.23552 32.23552 0 0 0 32.1536 32.1536H767.5904a32.23552 32.23552 0 0 0 32.1536-32.1536v-283.40224c0-0.98304-0.04096-1.92512-0.12288-2.8672z" fill="#FFFFFF" p-id="2208"></path></svg>-->
              <span>离线</span>
            </div>
            <div class="item_topbox_textbox">
              <span>设备名称：</span><br>
              <span>****</span><br>
              <span>设备编号：</span><br>
              <span>****</span><br>
              <span>设备类型：消防水池</span><br>
              <span>位&emsp;&emsp;置：水箱</span>
            </div>
            <div class="rightbottom_button"><span>详情</span></div>
          </div>
          <div class="line"></div>
          <div class="item_bottombox">
            <div class="item_bottombox_chartbox">
              <echarts_xiaofangshuichi></echarts_xiaofangshuichi>
            </div>
            <div class="item_bottombox_textbox">
              <span>33.1%</span><br>
              <span>参考值：0.0 - 50.0%</span>
            </div>
          </div>
        </div>

        <!-- 温度计 -->
        <div class="item">
          <div class="item_topbox">
            <div class="item_topbox_imgbox">
              <!--<svg t="1617154223767" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1575" width="100" height="100"><path d="M0 0m81.92 0l860.16 0q81.92 0 81.92 81.92l0 860.16q0 81.92-81.92 81.92l-860.16 0q-81.92 0-81.92-81.92l0-860.16q0-81.92 81.92-81.92Z" fill="#FF4F5B" p-id="1576"></path><path d="M457.60512 317.60384a24.576 24.576 0 0 0 24.576-24.576c0-17.94048-22.81472-33.46432-23.79776-34.16064l-0.98304-0.65536-0.94208 0.65536c-0.98304 0.69632-23.7568 16.9984-23.7568 34.11968a24.576 24.576 0 0 0 24.90368 24.61696zM386.74432 317.60384a24.576 24.576 0 0 0 24.576-24.576c0-17.94048-22.81472-33.46432-23.79776-34.16064l-0.8192-0.8192-0.94208 0.65536c-0.98304 0.69632-23.7568 16.9984-23.7568 34.11968a24.576 24.576 0 0 0 24.73984 24.7808zM315.84256 317.60384a24.576 24.576 0 0 0 24.576-24.576c0-17.94048-22.81472-33.46432-23.79776-34.16064l-0.77824-0.8192-0.94208 0.65536c-0.98304 0.69632-23.7568 16.9984-23.7568 34.11968a24.576 24.576 0 0 0 24.69888 24.7808z" fill="#FFFFFF" p-id="1577"></path><path d="M799.62112 449.24928v-172.032a20.48 20.48 0 0 0-20.48-20.48H526.99136a20.48 20.48 0 1 0 0 40.96h231.46496V458.752h-4.096c-40.18176 0-40.18176-32.1536-80.36352-32.1536s-40.18176 32.1536-80.32256 32.1536-40.18176-32.1536-80.32256-32.1536-40.18176 32.1536-80.32256 32.1536-40.18176-32.1536-80.32256-32.1536S312.5248 458.752 272.384 458.752a66.80576 66.80576 0 0 1-6.92224-0.36864V276.97152a20.48 20.48 0 0 0-40.96 0v192.83968a20.48 20.48 0 0 0 0 2.33472v263.3728a32.23552 32.23552 0 0 0 32.1536 32.1536H767.5904a32.23552 32.23552 0 0 0 32.1536-32.1536v-283.40224c0-0.98304-0.04096-1.92512-0.12288-2.8672z" fill="#FFFFFF" p-id="1578"></path></svg>-->
              <svg t="1617154605015" class="icon" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg" p-id="2205" width="100" height="100">
                <path
                  d="M0 0m81.92 0l860.16 0q81.92 0 81.92 81.92l0 860.16q0 81.92-81.92 81.92l-860.16 0q-81.92 0-81.92-81.92l0-860.16q0-81.92 81.92-81.92Z"
                  fill="#2eb82e" p-id="2206" data-spm-anchor-id="a313x.7781069.0.i11" class="selected"></path>
                <path
                  d="M457.60512 317.60384a24.576 24.576 0 0 0 24.576-24.576c0-17.94048-22.81472-33.46432-23.79776-34.16064l-0.98304-0.65536-0.94208 0.65536c-0.98304 0.69632-23.7568 16.9984-23.7568 34.11968a24.576 24.576 0 0 0 24.90368 24.61696zM386.74432 317.60384a24.576 24.576 0 0 0 24.576-24.576c0-17.94048-22.81472-33.46432-23.79776-34.16064l-0.8192-0.8192-0.94208 0.65536c-0.98304 0.69632-23.7568 16.9984-23.7568 34.11968a24.576 24.576 0 0 0 24.73984 24.7808zM315.84256 317.60384a24.576 24.576 0 0 0 24.576-24.576c0-17.94048-22.81472-33.46432-23.79776-34.16064l-0.77824-0.8192-0.94208 0.65536c-0.98304 0.69632-23.7568 16.9984-23.7568 34.11968a24.576 24.576 0 0 0 24.69888 24.7808z"
                  fill="#FFFFFF" p-id="2207"></path>
                <path
                  d="M799.62112 449.24928v-172.032a20.48 20.48 0 0 0-20.48-20.48H526.99136a20.48 20.48 0 1 0 0 40.96h231.46496V458.752h-4.096c-40.18176 0-40.18176-32.1536-80.36352-32.1536s-40.18176 32.1536-80.32256 32.1536-40.18176-32.1536-80.32256-32.1536-40.18176 32.1536-80.32256 32.1536-40.18176-32.1536-80.32256-32.1536S312.5248 458.752 272.384 458.752a66.80576 66.80576 0 0 1-6.92224-0.36864V276.97152a20.48 20.48 0 0 0-40.96 0v192.83968a20.48 20.48 0 0 0 0 2.33472v263.3728a32.23552 32.23552 0 0 0 32.1536 32.1536H767.5904a32.23552 32.23552 0 0 0 32.1536-32.1536v-283.40224c0-0.98304-0.04096-1.92512-0.12288-2.8672z"
                  fill="#FFFFFF" p-id="2208"></path>
              </svg>
              <span>在线</span>
            </div>
            <div class="item_topbox_textbox">
              <span>设备名称：</span><br>
              <span>****</span><br>
              <span>设备编号：</span><br>
              <span>****</span><br>
              <span>设备类型：消防水池</span><br>
              <span>位&emsp;&emsp;置：水箱</span>
            </div>
            <div class="rightbottom_button"><span>详情</span></div>
          </div>
          <div class="line"></div>
          <div class="item_bottombox">
            <div class="item_bottombox_chartbox">
              <!--<echarts_xiaofangshuichi></echarts_xiaofangshuichi>-->
              <!--<echarts_wenduji></echarts_wenduji>-->
              <img style="display: block;width: 190px;margin: 0 auto" src="./img/温度计.png" alt="温度计">
            </div>
            <div class="item_bottombox_textbox">
              <span>33.1%</span><br>
              <span>参考值：0.0 - 50.0%</span>
            </div>
          </div>
        </div>
      </div>


      <!-- 电气火灾 -->
      <div class="dianqihuozai" v-if="changeIOTnameboxIndex === 1">
        <!-- 设备1 -->
        <div class="item">
          <div class="item_topbox">
            <div class="item_topbox_imgbox">
              <!--<svg t="1617154223767" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1575" width="100" height="100"><path d="M0 0m81.92 0l860.16 0q81.92 0 81.92 81.92l0 860.16q0 81.92-81.92 81.92l-860.16 0q-81.92 0-81.92-81.92l0-860.16q0-81.92 81.92-81.92Z" fill="#FF4F5B" p-id="1576"></path><path d="M457.60512 317.60384a24.576 24.576 0 0 0 24.576-24.576c0-17.94048-22.81472-33.46432-23.79776-34.16064l-0.98304-0.65536-0.94208 0.65536c-0.98304 0.69632-23.7568 16.9984-23.7568 34.11968a24.576 24.576 0 0 0 24.90368 24.61696zM386.74432 317.60384a24.576 24.576 0 0 0 24.576-24.576c0-17.94048-22.81472-33.46432-23.79776-34.16064l-0.8192-0.8192-0.94208 0.65536c-0.98304 0.69632-23.7568 16.9984-23.7568 34.11968a24.576 24.576 0 0 0 24.73984 24.7808zM315.84256 317.60384a24.576 24.576 0 0 0 24.576-24.576c0-17.94048-22.81472-33.46432-23.79776-34.16064l-0.77824-0.8192-0.94208 0.65536c-0.98304 0.69632-23.7568 16.9984-23.7568 34.11968a24.576 24.576 0 0 0 24.69888 24.7808z" fill="#FFFFFF" p-id="1577"></path><path d="M799.62112 449.24928v-172.032a20.48 20.48 0 0 0-20.48-20.48H526.99136a20.48 20.48 0 1 0 0 40.96h231.46496V458.752h-4.096c-40.18176 0-40.18176-32.1536-80.36352-32.1536s-40.18176 32.1536-80.32256 32.1536-40.18176-32.1536-80.32256-32.1536-40.18176 32.1536-80.32256 32.1536-40.18176-32.1536-80.32256-32.1536S312.5248 458.752 272.384 458.752a66.80576 66.80576 0 0 1-6.92224-0.36864V276.97152a20.48 20.48 0 0 0-40.96 0v192.83968a20.48 20.48 0 0 0 0 2.33472v263.3728a32.23552 32.23552 0 0 0 32.1536 32.1536H767.5904a32.23552 32.23552 0 0 0 32.1536-32.1536v-283.40224c0-0.98304-0.04096-1.92512-0.12288-2.8672z" fill="#FFFFFF" p-id="1578"></path></svg>-->
              <svg t="1617154605015" class="icon" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg" p-id="2205" width="100" height="100">
                <path
                  d="M0 0m81.92 0l860.16 0q81.92 0 81.92 81.92l0 860.16q0 81.92-81.92 81.92l-860.16 0q-81.92 0-81.92-81.92l0-860.16q0-81.92 81.92-81.92Z"
                  fill="#2eb82e" p-id="2206" data-spm-anchor-id="a313x.7781069.0.i11" class="selected"></path>
                <path
                  d="M457.60512 317.60384a24.576 24.576 0 0 0 24.576-24.576c0-17.94048-22.81472-33.46432-23.79776-34.16064l-0.98304-0.65536-0.94208 0.65536c-0.98304 0.69632-23.7568 16.9984-23.7568 34.11968a24.576 24.576 0 0 0 24.90368 24.61696zM386.74432 317.60384a24.576 24.576 0 0 0 24.576-24.576c0-17.94048-22.81472-33.46432-23.79776-34.16064l-0.8192-0.8192-0.94208 0.65536c-0.98304 0.69632-23.7568 16.9984-23.7568 34.11968a24.576 24.576 0 0 0 24.73984 24.7808zM315.84256 317.60384a24.576 24.576 0 0 0 24.576-24.576c0-17.94048-22.81472-33.46432-23.79776-34.16064l-0.77824-0.8192-0.94208 0.65536c-0.98304 0.69632-23.7568 16.9984-23.7568 34.11968a24.576 24.576 0 0 0 24.69888 24.7808z"
                  fill="#FFFFFF" p-id="2207"></path>
                <path
                  d="M799.62112 449.24928v-172.032a20.48 20.48 0 0 0-20.48-20.48H526.99136a20.48 20.48 0 1 0 0 40.96h231.46496V458.752h-4.096c-40.18176 0-40.18176-32.1536-80.36352-32.1536s-40.18176 32.1536-80.32256 32.1536-40.18176-32.1536-80.32256-32.1536-40.18176 32.1536-80.32256 32.1536-40.18176-32.1536-80.32256-32.1536S312.5248 458.752 272.384 458.752a66.80576 66.80576 0 0 1-6.92224-0.36864V276.97152a20.48 20.48 0 0 0-40.96 0v192.83968a20.48 20.48 0 0 0 0 2.33472v263.3728a32.23552 32.23552 0 0 0 32.1536 32.1536H767.5904a32.23552 32.23552 0 0 0 32.1536-32.1536v-283.40224c0-0.98304-0.04096-1.92512-0.12288-2.8672z"
                  fill="#FFFFFF" p-id="2208"></path>
              </svg>
              <span>在线</span>
            </div>
            <div class="item_topbox_textbox">
              <span>设备名称：</span><br>
              <span>****</span><br>
              <span>设备编号：</span><br>
              <span>****</span><br>
              <span>设备类型：</span><br>
              <span>电气火灾监控探测器</span><br>
              <span>位&emsp;&emsp;置：B楼总闸</span>
            </div>
          </div>
          <div class="line"></div>
          <div class="item_bottombox">
            <div class="item_bottombox_chartbox" style="position: relative">
              <img style="position:absolute;top: 20px;left: 25px;display: block;width: 280px;" src="./img/image_971.png"
                   alt="暂无数据">
            </div>
            <div class="item_bottombox_textbox">
              <div class="bottom_button_left" @click="TanChuXiangQingBox()"><span>详情</span></div>
              <div class="bottom_button_right" @click="TanChuYuanChengKongZhiBox()"><span>远程控制</span></div>
              <!--<span>33.1%</span><br>-->
              <!--<span>参考值：0.0 - 50.0%</span>-->
            </div>
          </div>

          <!-- 电气火灾 设备1 详情 -->
          <div class="shebeixiangqing" v-if="xiangqingBox">
            <div class="xiangqing_box">
              <div class="xiangqing_navbar">
                <span>设备详情</span>
                <div class="close_shebeixiangqing" @click="TanChuXiangQingBox()">
                  <svg t="1617938533065" class="icon" viewBox="0 0 1024 1024" version="1.1"
                       xmlns="http://www.w3.org/2000/svg" p-id="2030" width="32" height="32">
                    <path
                      d="M670.4 308.352 512 466.752l-158.4-158.4c-12.512-12.512-32.768-12.512-45.248 0s-12.512 32.768 0 45.248l158.4 158.4-158.4 158.4c-12.512 12.512-12.512 32.768 0 45.248 12.48 12.48 32.768 12.512 45.248 0l158.4-158.4 158.4 158.4c12.48 12.48 32.768 12.512 45.248 0 12.512-12.512 12.48-32.768 0-45.248L557.248 512l158.4-158.4c12.512-12.512 12.48-32.768 0-45.248C703.136 295.84 682.88 295.84 670.4 308.352z"
                      p-id="2031" fill="#dbdbdb"></path>
                  </svg>
                </div>
              </div>
              <div class="xiangqing_content">
                <div class="xiangqing_content_left">
                  <span>设备名称：****</span><br>
                  <span>设备编号：****</span><br>
                  <span>设备类型：电气火灾监控探测器</span><br>
                  <span>设备位置：B楼总闸</span>
                </div>
                <div class="xiangqing_content_right">
                  <span>生产厂家：****</span><br>
                  <span>安装时间：****</span><br>
                  <span>通讯卡号：****</span><br>
                  <span>维护周期：****</span>
                </div>
              </div>
              <div class="xiangqing_chart">
                <img style="display: block;width: 500px;" src="./img/image_972.png" alt="暂无数据">
              </div>
            </div>
          </div>

          <!-- 电气火灾 设备1 远程控制 -->
          <div class="yuanchengkongzhi" v-if="yuanchengkongzhiBox">
            <div class="yuanchengkongzhi_box">
              <div class="yuanchengkongzhi_navbar">
                <span>远程控制</span>
                <div class="close_shebeixiangqing" @click="TanChuYuanChengKongZhiBox()">
                  <svg t="1617938533065" class="icon" viewBox="0 0 1024 1024" version="1.1"
                       xmlns="http://www.w3.org/2000/svg" p-id="2030" width="32" height="32">
                    <path
                      d="M670.4 308.352 512 466.752l-158.4-158.4c-12.512-12.512-32.768-12.512-45.248 0s-12.512 32.768 0 45.248l158.4 158.4-158.4 158.4c-12.512 12.512-12.512 32.768 0 45.248 12.48 12.48 32.768 12.512 45.248 0l158.4-158.4 158.4 158.4c12.48 12.48 32.768 12.512 45.248 0 12.512-12.512 12.48-32.768 0-45.248L557.248 512l158.4-158.4c12.512-12.512 12.48-32.768 0-45.248C703.136 295.84 682.88 295.84 670.4 308.352z"
                      p-id="2031" fill="#dbdbdb"></path>
                  </svg>
                </div>
              </div>
              <div class="yuanchengkongzhi_content"></div>
            </div>
          </div>
        </div>


      </div>

    </div>
  </div>
</template>

<script>
  import echarts_xiaofangshuichi from './ShiShiJianCe/echarts_xiaofangshuichi'
  import echarts_wenduji from './ShiShiJianCe/echarts_wenduji'

  export default {
    name: 'ShiShiJianCe',
    components: {
      echarts_xiaofangshuichi: echarts_xiaofangshuichi,
      echarts_wenduji: echarts_wenduji
    },
    data() {
      return {
        options: [{
          value: '选项1',
          label: '区域1'
        }, {
          value: '选项2',
          label: '区域2'
        }],
        value: '',
        changeIOTnameboxIndex: 0,
        xiangqingBox: false,
        yuanchengkongzhiBox:false,
      }
    },
    methods: {
      changeIOTnamebox(index) {
        this.changeIOTnameboxIndex = index
      },
      TanChuXiangQingBox() {
        this.xiangqingBox = !this.xiangqingBox
      },
      TanChuYuanChengKongZhiBox() {
        this.yuanchengkongzhiBox = !this.yuanchengkongzhiBox
      }
    }
  }
</script>

<style lang="scss" scoped>
  .shishijiance {
    .systemBar {
      width: 100%;
      height: 60px;
      .addIOTnameboxCSS {
        .no {
          background-color: #ECC46D !important;
          h1 {
            color: white;
          }
        }
      }
      .el-select {
        float: left;
        margin: 15px 0 10px 25px;
      }
      .iotnamebox {
        float: left;
        margin: 15px 0 15px 30px;
        height: 40px;
        width: 160px;
        cursor: pointer;
        h1 {
          color: #A3D8FA;
          line-height: 40px;
          text-align: center;
          font-size: 18px;
        }
      }
      .iotnamebox:hover {
        .no {
          background-color: #ECC46D !important;
          h1 {
            color: white;
          }
        }
      }
      .no {
        background-color: #03517d;
      }
      .no .no-hd {
        position: relative;
      }
      .no .no-hd::before {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        width: 70px;
        height: 20px;
        border-top: 2px solid #03d0e3;
        border-left: 2px solid #03d0e3;
      }
      .no .no-hd::after {
        position: absolute;
        bottom: 0;
        right: 0;
        content: "";
        width: 158px;
        height: 20px;
        border-right: 2px solid #03d0e3;
        border-bottom: 2px solid #03d0e3;
      }

      .dv-decoration-10 {
        margin-left: 25px;
      }

      /* 水系统 */
      .shuixitong {
        padding: 15px 25px;
        width: 100%;
        height: 100%;
        .item {
          float: left;
          box-sizing: border-box;
          margin-right: 25px;
          width: 350px;
          height: 450px;
          border-radius: 30px;
          background: rgba(13, 74, 128, .7);
          box-shadow: 10px 10px 10px -3px rgba(0, 0, 0, .4);
          padding: 10px;
          position: relative;
          .item_topbox {
            width: 100%;
            height: 190px;
            position: relative;
            /*overflow: hidden;*/
            .item_topbox_imgbox {
              width: 100px;
              height: 100%;
              float: left;
              padding-top: 30px;
              margin-left: 25px;
              text-align: center;
              color: #fff;
              font-size: 16px;
            }
            .item_topbox_textbox {
              width: 200px;
              height: 100%;
              float: left;
              font-size: 16px;
              color: #fff;
              padding-left: 20px;
              padding-top: 10px;
              /*background-color: red;*/
            }
            .rightbottom_button {
              position: absolute;
              right: 10px;
              bottom: 5px;
              width: 60px;
              height: 30px;
              border-radius: 15px;
              text-align: center;
              line-height: 30px;
              color: #ffffff;
              cursor: pointer;
              background-color: #42b9fb;
            }
            .rightbottom_button:hover {
              background-color: #ecc46d;
            }
          }
          .line {
            position: absolute;
            width: 300px;
            height: 1px;
            top: 210px;
            left: 25px;
            background-color: #fff;
          }
          .item_bottombox {
            width: 100%;
            height: 240px;
            .item_bottombox_chartbox {
              height: 190px;
              width: 100%;
              /*background-color: yellow;*/
            }
            .item_bottombox_textbox {
              height: 50px;
              width: 100%;
              /*background-color: orange;*/
              color: #ffffff;
              font-size: 16px;
              text-align: center;
            }
          }
        }
        .item:hover {
          background-color: rgb(21, 107, 183);
        }
      }

      /* 电气火灾 */
      .dianqihuozai {
        padding: 15px 25px;
        width: 100%;
        height: 100%;
        .item {
          float: left;
          box-sizing: border-box;
          margin-right: 25px;
          width: 350px;
          height: 450px;
          border-radius: 30px;
          background: rgba(13, 74, 128, .7);
          box-shadow: 10px 10px 10px -3px rgba(0, 0, 0, .4);
          padding: 10px;
          position: relative;
          .item_topbox {
            width: 100%;
            height: 190px;
            position: relative;
            /*overflow: hidden;*/
            .item_topbox_imgbox {
              width: 100px;
              height: 100%;
              float: left;
              padding-top: 30px;
              margin-left: 25px;
              text-align: center;
              color: #fff;
              font-size: 16px;
            }
            .item_topbox_textbox {
              width: 200px;
              height: 100%;
              float: left;
              font-size: 16px;
              color: #fff;
              padding-left: 20px;
              padding-top: 10px;
            }
          }
          .line {
            position: absolute;
            width: 300px;
            height: 1px;
            top: 210px;
            left: 25px;
            background-color: #fff;
          }
          .item_bottombox {
            width: 100%;
            height: 240px;
            .item_bottombox_chartbox {
              height: 190px;
              width: 100%;
              /*background-color: yellow;*/
            }
            .item_bottombox_textbox {
              position: relative;
              height: 50px;
              width: 100%;
              /*background-color: orange;*/
              color: #ffffff;
              font-size: 16px;
              text-align: center;
              .bottom_button_left {
                position: absolute;
                right: 200px;
                bottom: 5px;
                width: 60px;
                height: 30px;
                border-radius: 15px;
                text-align: center;
                line-height: 30px;
                color: #ffffff;
                cursor: pointer;
                background-color: #42b9fb;
              }
              .bottom_button_right {
                position: absolute;
                right: 60px;
                bottom: 5px;
                width: 90px;
                height: 30px;
                border-radius: 15px;
                text-align: center;
                line-height: 30px;
                color: #ffffff;
                cursor: pointer;
                background-color: #42b9fb;
              }
              .bottom_button_left:hover {
                background-color: #ecc46d;
              }
              .bottom_button_right:hover {
                background-color: #ecc46d;
              }
            }
          }

          /* 电气火灾 设备详情 */
          .shebeixiangqing {
            position: fixed;
            left: 0px;
            top: 0px;
            height: 1080px;
            width: 1920px;
            z-index: 100;
            background: rgba(255, 255, 255, 0.25);
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
            backdrop-filter: blur(7.0px);
            -webkit-backdrop-filter: blur(7.0px);
            .xiangqing_box {
              overflow: hidden;
              border-radius: 10px;
              width: 500px;
              height: 400px;
              position: absolute;
              z-index: 101;
              top: 50%;
              left: 50%;
              /* transform: translateX(-50%);  */
              /* transform: translateY(-50%);  */
              margin-left: -250px;
              margin-top: -250px;
              background-color: rgb(21, 107, 183);
              .xiangqing_navbar {
                width: 100%;
                height: 32px;
                line-height: 32px;
                background-color: #59a5f2;
                span {
                  float: left;
                  margin-left: 10px;
                  font-size: 18px;
                  color: #ffffff;
                }
                .close_shebeixiangqing {
                  float: right;
                  margin-right: 5px;
                  cursor: pointer;
                  width: 32px;
                  height: 32px;
                }
              }
              .xiangqing_content {
                padding: 20px;
                width: 100%;
                height: 120px;
                /*background-color: pink;*/
                .xiangqing_content_left,.xiangqing_content_right {
                  color: #eee;
                  float: left;
                  width: 230px;
                }
              }
              .xiangqing_chart {
                width: 100%;
                height: 200px;
                background-color: blue;
              }
            }
          }

          /* 电气火灾 远程控制 */
          .yuanchengkongzhi {
            position: fixed;
            left: 0px;
            top: 0px;
            height: 1080px;
            width: 1920px;
            z-index: 100;
            background: rgba(255, 255, 255, 0.25);
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
            backdrop-filter: blur(7.0px);
            -webkit-backdrop-filter: blur(7.0px);
            .yuanchengkongzhi_box {
              overflow: hidden;
              border-radius: 10px;
              width: 500px;
              height: 200px;
              position: absolute;
              z-index: 101;
              top: 50%;
              left: 50%;
              /* transform: translateX(-50%);  */
              /* transform: translateY(-50%);  */
              margin-left: -250px;
              margin-top: -150px;
              background-color: rgb(21, 107, 183);
              .yuanchengkongzhi_navbar {
                width: 100%;
                height: 32px;
                line-height: 32px;
                background-color: #59a5f2;
                span {
                  float: left;
                  margin-left: 10px;
                  font-size: 18px;
                  color: #ffffff;
                }
                .close_shebeixiangqing {
                  float: right;
                  margin-right: 5px;
                  cursor: pointer;
                  width: 32px;
                  height: 32px;
                }
              }
              .yuanchengkongzhi_content {

              }
            }
          }
        }
        .item:hover {
          background-color: rgb(21, 107, 183);
        }
      }

    }
  }
</style>
