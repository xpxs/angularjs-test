<template>
      <div id="siteTop">
        <div class="wrap">
            <div class="left">
                <ul>
                    <i class="line"></i>
                    <li class="city">
                        <span class="text">长沙</span>&nbsp;<i class="t"></i>
                        <div class="dropDown">
                            <v-distpicker hide-area  @selected="onSelected" @click="post()"></v-distpicker>
                        </div>
                    </li>
                    <i class="line"></i>
                    <li><span><i class="wx"></i></span></li><i class="line"></i>
                    <li><span><i class="qq"></i></span></li><i class="line"></i>
                    <li><span><i class="wb"></i></span></li><i class="line"></i>
                    <li><span><i class="txwb"></i></span></li><i class="line"></i>
                </ul>
            </div>
            <div class="right">
                <ul>
                    <i class="line"></i>
                    <li><i class="c fl"></i><span class="fl">虚拟工厂?<a href="" class="sign">点击了解</a></span></li><i class="line"></i>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import VDistpicker from 'v-distpicker'

export default {
  components: { VDistpicker },
  methods: {
    onSelected(data) {
    	//得到省份和城市的id 名称
    	console.log("data1",data)
    	
    	this.$options.methods.post(data);//相互调用
    },
    post:function(data){
    	var cityName = data.city.value;
		$('#siteTop .text').text(cityName);
		$(".city").children(".dropDown").slideUp();
    }

  }
}
</script>