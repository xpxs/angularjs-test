<template>
<div id="footor">
        <ul class="wrap">
            <li>
                <h6>新的消息</h6>
                <p><a href="">集团签订比亚迪合同</a></p>
                <p><a href="">集团签订比亚迪合同</a></p>
                <p><a href="">集团签订比亚迪合同</a></p>
            </li><i class="line"></i>
            <li>
                <h6>最新成交</h6>
                <p>
                    <img src="../../../static/img/c-byd.jpg" alt="" class="deal-logo">
                    <span class="deal-info">
						<a href="">东莞注塑厂商</a><br>
						<b class="sign">2017年6月23日</b>
					</span>
                </p>
                <br>
                <p>
                    <img src="../../../static/img/c-byd.jpg" alt="" class="deal-logo">
                    <span class="deal-info">
						<a href="">东莞注塑厂商东莞注塑厂商东莞注塑厂商东莞注塑厂商</a><br>
						<b class="sign">2017年6月23日</b>
					</span>
                </p>
            </li><i class="line"></i>
            <li>
                <h6>品牌服务</h6>
                <p>
                    <a href="" class="brand">智能制造</a>
                    <a href="" class="brand">云服务</a>
                    <a href="" class="brand">安全交易吗</a>
                    <a href="" class="brand">车间管理系统</a>
                    <a href="" class="brand">什么是传沃工厂</a>
                    <a href="" class="brand">合作商家</a>
                    <a href="" class="brand">APP</a>
                    <a href="" class="brand">品牌</a>
                    <a href="" class="brand">服务</a>
                    <a href="" class="brand">物联网</a>
                </p>
            </li><i class="line"></i>
            <li>
                <h6>公司信息</h6>
                <p>公司地址: 湖南省长沙高新开发区尖山路39号长沙中电软件园总部大楼1405-1406</p>
                <p><a href="http://cwyf.tranwon.com/" title="传沃云服" target="_blank" style="color: #f58521;">传沃云服</a>&nbsp;&nbsp;&nbsp;<a href="http://www.tranwon.com/default.aspx" title="传沃国际" target="_blank" style="color: #f58521;">传沃国际</a></p>
                <p class="gam"> <a href=""><i class="wx"></i></a>
                    <a href=""><i class="qq"></i></a>
                    <a href=""><i class="wb"></i></a>
                </p>
            </li>
            <img src="../../../static/img/qr.png" alt="" class="qr">
            <div id="scrollTop" @click="scrollTop">
                <img src="../../../static/img/top23.png" alt="回到顶部">
            </div>
        </ul>
        <div class="copyright">
            <p>湖南传沃智能科技有限公司版权所有 Copyright © 2015-2016 HuNan Tranwon Technology Co., Ltd. All rights reserved</p>
        </div>
    </div>
</template>
<script>
export default {
	methods: {
		scrollTop(){
		    $('html,body').animate({
		        scrollTop: '0px'
		    }, 800);
		}
	}
}
</script>