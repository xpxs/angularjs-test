<template>
  <div>
	<site-top></site-top>
	<div class="xngclist"></div>
	<div class="wrap"><h1>传沃工厂</h1><span class="fr" style="margin-top:-30px;">排序：<select v-model="selected" style="padding: 5px; border-radius: 2px;">
				<option v-for="option in options" v-bind:value="option.value">
				{{option.text}}
				</option>
			</select></span></div>
	<div class="wrap" style="overflow: hidden;">
            <div class="list-3">
                <ul>
                    <li>
                        <p><span class="c-name">比亚迪股份有限公司比亚迪股份有限公司比亚迪股份有限公司比亚迪股份有限公司</span><i class="crown"></i></p>
                        <p class="c-city default-color">广东 · 深圳</p>
                        <p class="c-address default-color">深圳市坪山区比亚迪路3009号</p>
                        <br>
                        <p><a href="" class="default-btn btn detail">查看详情</a><span class="new">NEW!</span></p>
                        <img src="../../images/c-byd.jpg" alt="比亚迪" />
                    </li>
                    <li>
                        <p><span class="c-name">比亚迪股份有限公司比亚迪股份有限公司比亚迪股份有限公司比亚迪股份有限公司</span><i class="crown"></i></p>
                        <p class="c-city default-color">广东 · 深圳</p>
                        <p class="c-address default-color">深圳市坪山区比亚迪路3009号</p>
                        <br>
                        <p><a href="" class="default-btn btn detail">查看详情</a><span class="new">NEW!</span></p>
                        <img src="../../images/c-byd.jpg" alt="比亚迪" />
                    </li>
                    <li>
                        <p><span class="c-name">比亚迪股份有限公司比亚迪股份有限公司比亚迪股份有限公司比亚迪股份有限公司</span><i class="crown"></i></p>
                        <p class="c-city default-color">广东 · 深圳</p>
                        <p class="c-address default-color">深圳市坪山区比亚迪路3009号</p>
                        <br>
                        <p><a href="" class="default-btn btn detail">查看详情</a><span class="new">NEW!</span></p>
                        <img src="../../images/c-byd.jpg" alt="比亚迪" />
                    </li>
                    <li>
                        <p><span class="c-name">比亚迪股份有限公司比亚迪股份有限公司比亚迪股份有限公司比亚迪股份有限公司</span><i class="crown"></i></p>
                        <p class="c-city default-color">广东 · 深圳</p>
                        <p class="c-address default-color">深圳市坪山区比亚迪路3009号</p>
                        <br>
                        <p><a href="" class="default-btn btn detail">查看详情</a><span class="new">NEW!</span></p>
                        <img src="../../images/c-byd.jpg" alt="比亚迪" />
                    </li>
                    <li>
                        <p><span class="c-name">比亚迪股份有限公司比亚迪股份有限公司比亚迪股份有限公司比亚迪股份有限公司</span><i class="crown"></i></p>
                        <p class="c-city default-color">广东 · 深圳</p>
                        <p class="c-address default-color">深圳市坪山区比亚迪路3009号</p>
                        <br>
                        <p><a href="" class="default-btn btn detail">查看详情</a><span class="new">NEW!</span></p>
                        <img src="../../images/c-byd.jpg" alt="比亚迪" />
                    </li>
                    <li>
                        <p><span class="c-name">比亚迪股份有限公司比亚迪股份有限公司比亚迪股份有限公司比亚迪股份有限公司</span><i class="crown"></i></p>
                        <p class="c-city default-color">广东 · 深圳</p>
                        <p class="c-address default-color">深圳市坪山区比亚迪路3009号</p>
                        <br>
                        <p><a href="" class="default-btn btn detail">查看详情</a><span class="new">NEW!</span></p>
                        <img src="../../images/c-byd.jpg" alt="比亚迪" />
                    </li>
                    <li>
                        <p><span class="c-name">比亚迪股份有限公司比亚迪股份有限公司比亚迪股份有限公司比亚迪股份有限公司</span><i class="crown"></i></p>
                        <p class="c-city default-color">广东 · 深圳</p>
                        <p class="c-address default-color">深圳市坪山区比亚迪路3009号</p>
                        <br>
                        <p><a href="" class="default-btn btn detail">查看详情</a><span class="new">NEW!</span></p>
                        <img src="../../images/c-byd.jpg" alt="比亚迪" />
                    </li>
                    <li>
                        <p><span class="c-name">比亚迪股份有限公司比亚迪股份有限公司比亚迪股份有限公司比亚迪股份有限公司</span><i class="crown"></i></p>
                        <p class="c-city default-color">广东 · 深圳</p>
                        <p class="c-address default-color">深圳市坪山区比亚迪路3009号</p>
                        <br>
                        <p><a href="" class="default-btn btn detail">查看详情</a><span class="new">NEW!</span></p>
                        <img src="../../images/c-byd.jpg" alt="比亚迪" />
                    </li>
                    <li>
                        <p><span class="c-name">比亚迪股份有限公司比亚迪股份有限公司比亚迪股份有限公司比亚迪股份有限公司</span><i class="crown"></i></p>
                        <p class="c-city default-color">广东 · 深圳</p>
                        <p class="c-address default-color">深圳市坪山区比亚迪路3009号</p>
                        <br>
                        <p><a href="" class="default-btn btn detail">查看详情</a><span class="new">NEW!</span></p>
                        <img src="../../images/c-byd.jpg" alt="比亚迪" />
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
	.xngclist{
		background: url(../../images/xngc2.jpg) no-repeat center; 
		height: 220px; 
		border-bottom: 2px solid #ccc;
	}
</style>