<template>
  <div>
	<site-top></site-top>
	<div class="xngc subtitle"></div>
	<br>
	<div class="wrap" style="width: 1000px;"><h1>传沃虚拟工厂申请:</h1><span class="fr" style="margin-top:-30px; margin-right: 200px;">档案编号:102548</span></div>
	<br>
	<br>
	<form name='FactoryList' class="wrap">
		<div class="form-group">
			<label for="facName">公司名称:</label>
			<input type="" name="facName" class="form-control" placeholder="请填写公司名称" v-model="FactoryList.facName">
		</div>
		<div class="form-group">
			<label for="facAddress">公司地址:</label>
			<v-distpicker hide-area  @selected="onSelected"></v-distpicker>
			<input type="" name="facAddress" class="form-control" style="margin-left: 220px; margin-top: 20px;" placeholder="请填写详细地址" v-model="FactoryList.facAddress">
		</div>
		<div class="form-group">
			<label for="facIndustry">所属行业:</label>
			<select v-model="FactoryList.facIndustry" class="form-control">
				<option v-for="option in options" v-bind:value="option.value">
				{{option.text}}
				</option>
			</select>
		</div>
		<div class="form-group">
			<label for="facContacts">联系人:</label>
			<input type="" name="facContacts" class="form-control" placeholder="请填写联系人" v-model="FactoryList.facContacts">
		</div>
		<div class="form-group">
			<label for="facContactsWay">联系方式:</label>
			<input type="" name="facContactsWay" class="form-control" placeholder="请填写手机号码" v-model="FactoryList.facContactsWay">
			<!-- <span class="validateBtn">验证</span> -->
		</div>
		<!-- <div class="form-group">
			<label for="identifyCode">短信验证码:</label>
			<input type="" name="identifyCode" class="form-control" placeholder="短信验证码">
		</div> -->
		<div class="form-group">
			<span class="submit-btn" @click="onClick">提 交</span>
		</div>
	</form>
	<foot></foot>
  </div>
</template>
<script>
	import SiteTop from '../../components/common/SiteTop.vue'
	import Foot from '../../components/common/Footer.vue'
	import VDistpicker from 'v-distpicker'
	export default {
		name: 'app',
		data () {
		   return {
				options: [
					{ text: '注塑', value: '1' },
					{ text: '模具', value: '2' }
				],
			   	FactoryList:{
			   		facIndustry:"1",
				   	facName:"",       //工厂名称
				   	facAddress:"",    //工厂地址
				   	facContacts:"",   //联系人
				   	facContactsWay:"",//联系方式
				   	// identifyCode:"",  //短信验证码
				   	facProvince:"",
				   	facProvinceId:"",
				   	facCity:"",
				   	facCityId:"",
				}
			}
		},
		components: {
		    SiteTop,
		    Foot,
		    VDistpicker
		}, 
		methods: {
		    onSelected(data) {
		    	this.FactoryList.facProvince = data.province.value;
		    	this.FactoryList.facProvinceId = data.province.code;
		    	this.FactoryList.facCity = data.city.value;
		    	this.FactoryList.facCityId = data.city.code;
		    },
		    onClick(){
		    	console.log(this.FactoryList);
		    	var formData = JSON.stringify(this.FactoryList);  //创建formData对象
		    	// console.log(formData);
				var url = '/factory/ApplayFactory';  //url地址
				this.$options.methods.postRequest(url, formData)
				.then((message) => {
				  //这里处理成功回调
				})
				.catch((message) => {
				  //这里处理失败回调
				});
		    },
		    postRequest(url, params){
			  return new Promise((resolve, reject) => {
			    Vue.http.post(
			      url,
			      {
			        params
			      },
			      {emulateJSON: true}
			    )
			    .then((res) => {
			      resolve(res.body);
			    })
			    .catch((res) => {
			      reject(res.body);
			    });
			  });
			}
		}
	}
</script>
<style>
	.xngc{
		background: url(../../../static/img/xngc.jpg) no-repeat center; 
	}
</style>