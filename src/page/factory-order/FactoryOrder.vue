<template>
  <div>
	<site-top></site-top>
	<div class="xngc subtitle"></div>
	<div class="wrap"><h1>订单一览</h1><span class="fr" style="margin-top:-30px;">排序：<select v-model="selected" style="padding: 5px; border-radius: 2px;">
				<option v-for="option in options" v-bind:value="option.value">
				{{option.text}}
				</option>
			</select></span>
    </div>
    <div class="wrap" style="overflow: hidden;">
        <div class="list-3">
            <ul>
                <li class="order">
                    <p>机械轴承生产</p>
                    <p>进度状态: 签订协议中</p>
                    <p>需求方: 三一重工</p>
                    <img src="../../../static/img/chilun.png" class="set-p" />
                    <i class="r-b"></i>
                </li>
                <li class="order">
                    <p>机械轴承生产</p>
                    <p>进度状态: 签订协议中</p>
                    <p>需求方: 三一重工</p>
                    <img src="../../../static/img/diaoxiang.png" class="set-p" />
                    <i class="r-b"></i>
                </li>
                <li class="order">
                    <p>机械轴承生产</p>
                    <p>进度状态: 签订协议中</p>
                    <p>需求方: 三一重工</p>
                    <img src="../../../static/img/zhuashou.png" class="set-p" />
                    <i class="r-b"></i>
                </li>
                <li class="order">
                    <p>机械轴承生产</p>
                    <p>进度状态: 签订协议中</p>
                    <p>需求方: 三一重工</p>
                    <img src="../../../static/img/zhuashou.png" class="set-p" />
                    <i class="r-b"></i>
                </li>
                <li class="order">
                    <p>机械轴承生产</p>
                    <p>进度状态: 签订协议中</p>
                    <p>需求方: 三一重工</p>
                    <img src="../../../static/img/chilun.png" class="set-p" />
                    <i class="r-b"></i>
                </li>
                <li class="order">
                    <p>机械轴承生产</p>
                    <p>进度状态: 签订协议中</p>
                    <p>需求方: 三一重工</p>
                    <img src="../../../static/img/chilun.png" class="set-p" />
                    <i class="r-b"></i>
                </li>
                <li class="order">
                    <p>机械轴承生产</p>
                    <p>进度状态: 签订协议中</p>
                    <p>需求方: 三一重工</p>
                    <img src="../../../static/img/zhuashou.png" class="set-p" />
                    <i class="r-b"></i>
                </li>
                <li class="order">
                    <p>机械轴承生产</p>
                    <p>进度状态: 签订协议中</p>
                    <p>需求方: 三一重工</p>
                    <img src="../../../static/img/chilun.png" class="set-p" />
                    <i class="r-b"></i>
                </li>
                <li class="order">
                    <p>机械轴承生产</p>
                    <p>进度状态: 签订协议中</p>
                    <p>需求方: 三一重工</p>
                    <img src="../../../static/img/chilun.png" class="set-p" />
                    <i class="r-b"></i>
                </li>
            </ul>
        </div>
    </div>
	<foot></foot>
  </div>
</template>
<script>
	import SiteTop from '../../components/common/SiteTop.vue'
	import Foot from '../../components/common/Footer.vue'
	export default {
		name: 'app',
		data () {
		   return {
		   		selected:0,
				options: [
					{ text: '默认', value: '0' },
					{ text: '加盟工厂', value: '1' },
					{ text: '智能工厂', value: '2' }
				]
			}
		},
		components: {
		    SiteTop,
		    Foot
		}, 
		methods: {
		}
	}
</script>
<style>
	.xngc{
		background: url(../../../static/img/xngc.jpg) no-repeat center; 
	}
</style>