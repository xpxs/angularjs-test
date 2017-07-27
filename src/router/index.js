import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/page/home/Index'
import Reg from '@/page/reg/Reg'
import FactoryApply from '@/page/reg/FactoryApply'
import FactoryList from '@/page/factory-list/FactoryList' //工厂列表
import FactoryOrder from '@/page/factory-order/FactoryOrder' //工厂订单列表
import FactoryOrderDetail from '@/page/factory-order/children/FactoryOrderDetail' //工厂订单详情


Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path: '/reg',
      name: 'Reg',
      component:Reg
    },{
    	path: '/apply',
      	name: 'FactoryApply',
      	component:FactoryApply
    },{
    	path: '/factorylist',
      	name: 'FactoryList',
      	component:FactoryList
    },{
    	path: '/factoryorder',
      	name: 'FactoryOrder',
      	component:FactoryOrder,
    },{
    	path: '/factoryorder/factoryorderdetail',
  		name: 'FactoryOrderDetail',
  		component:FactoryOrderDetail
    }
  ]
})
