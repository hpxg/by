<template >

		

	<view :class="zgflas ? 'zhegai-box' : 'zhegai-box yin'">
		<view class="zhegai-X-box" @click="zgqh">
		 <image class="zhegai-X" src="https://img2.baidu.com/it/u=892256597,3936164119&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800" mode=""></image>	
		</view>
           
		<image class="zhegai" src="https://bfs.biyao.com/group1/M01/1F/64/rBACVGDMwPeAG9iZAAFVhYHwCqM689.png"></image>
	</view>
	<view class="box nav-box-f"  >
		
		<view class="shosuo" @click="sou">
			<image src="@/static/sousuo.png" class="sou-img"></image><span class="sou-sapn">请输入您想要的商品</span>
		</view>
		<view class="box-box-c">
			<swiper class="box-nav" :display-multiple-items="5"  :interval="3000" :duration="1000"  >
			     <swiper-item  class="nav-te-box" @click="navc(0)" >
			     <view :class="omen==0 ? 'nav-te zise' : 'nav-te'" >热门</view>
			      </swiper-item>
				<swiper-item class="nav-te-box" v-for="(item,index) in one" @click="navc(index+1)">
				  <view :class="omen==index+1 ? 'nav-te zise' : 'nav-te'" >{{item}}</view>
				</swiper-item>
			</swiper>
		</view>
        <view class="nav-b" >
        		<image @click="navqh" :class="!oflae?'none':''" class="nav-right"  src="@/static/nav.jpg" ></image>
				<image @click="navqh" :class="oflae?'none':''" class="nav-left" src="@/static/na.jpg"></image>
                <view class="nav-b-box" :class="oflae?'none':''">
                	<view :class="omen==0 ? 'nav-b-te fen' : 'nav-b-te'"   @click="navc(0)">热门</view>
					<view  :class="omen==index+1 ? 'nav-b-te fen' : 'nav-b-te'"   v-for="(item,index) in one" @click="navc(index+1)">{{item}}</view>
                </view>
        </view>    
	</view>
<scroll-view class="scroll-view "  v-on:scroll.passive="gundong">
	<view class="lun">
		<swiper class="lub-box"   :interval="3000" :autoplay="true" :indicator-dots="true" :duration="1000">
		     <swiper-item  class="limg-box" @click="lunbo" v-for="(item,index) in imglun" >
		       <image class="lun-img" :src="item" mode=""></image>
		      </swiper-item>
		</swiper>
	</view>
	<view class="">
		<image class="lbxia" src="@/static/01.jpg"></image>
		<view class="lbxiabn-box">
			<image class="lbxiabn" src="@/static/001.jpg"></image>
			<image class="lbxiabn" src="@/static/002.jpg"></image>
			<image class="lbxiabn" src="@/static/003.jpg"></image>
			<image class="lbxiabn" src="@/static/004.jpg"></image>
			<image class="lbxiabn" src="@/static/006.jpg"></image>
		</view>
	</view>
	<view class="neirong">
		 <view class="nei-box" v-for="(item,index) in sarr" :key="item.id">
		 	<image class="nei-img" :src="item.imageUrl" mode=""></image>
			<view class="te-nei">
				<p>￥{{item.priceStr}}</p>
				<span class="nei-left">爆品</span>
				<span class="nei-right">一起品</span>
				<view class="changjia"></view>
				<view class="miaoshu">{{item.title}}</view>
				<view class="haoping">{{item.evaluate}}条好评</view>
			</view>
		
		 </view>
	</view>
    <image @click="fhdb" class="dingnu" src="@/static/shangjiantou_huaban.png" mode=""></image>
		
</scroll-view>		

</template>

<script setup>
	   import {ref, onMounted } from 'vue'
	   import {onReachBottom} from "@dcloudio/uni-app"
	   import {shocj,shangpi} from '../apis/apis.js'
	   // impory {shangpi} from '@/api/axios.js'
	   
	   // 遮盖层
	   let zgflas=ref(true)   
	   let zgqh=()=>{
		  zgflas.value=false
	   }
	   //一级
	   let one =ref([])
	   let omen =ref(0)
	   let oflae=ref(true)
	 shocj().then(res=>{
		 let onec =res.data
		   one.value=onec
		   console.log(one.value);
	   })
	   let navc=(e)=>{
		   console.log(e);
		   let  men =e;
		   omen.value=e;
	   }
	   let navqh=()=>{
		   oflae.value=!oflae.value
	   }
	   //轮播
	 let  imglun=ref({
		 img1: "https://bfs.biyao.com/group2/M00/40/5C/CghiFmKRhKKAGAKEAAA6jxGeq3s882.jpg",
		 img2:"https://bfs.biyao.com/group2/M00/33/47/CghkFmJ7ZQmAUeQnAABMRi2JrF8772.jpg",
		 img3:"https://bfs.biyao.com/group2/M00/4A/7B/CghjFmKl0v2AYcBOAADXHRWNCy8884.jpg",
		 img4:"https://bfs.biyao.com/group2/M00/47/5E/CghkFmKf2t6AUMA5AAAu_gR4q5o450.jpg",
		 img5:"https://bfs.biyao.com/group2/M00/46/FE/CghkFmKfAvqAA13EAABCrIfY964321.jpg",
		 img6:"https://bfs.biyao.com/group2/M00/2F/72/CghiFmJ0mIuAFuukAABZhbb5iT0605.jpg",
		 img7:"https://bfs.biyao.com/group2/M00/40/5C/CghiFmKRhKKAGAKEAAA6jxGeq3s882.jpg",
		 })
		 let lunbo=()=>{
			 console.log("cc");
		 }
	     //商品
	     let sarr= ref()
	  	let smen= ref(1)
	  shangpi(smen.value).then(res=>{
		  let mm=res.data;
		  sarr.value=mm
	  })
	     // 加载数据
		 onReachBottom(()=>{
		 	let cc= smen.value+1
		 	smen.value=cc
		 	shangpi(smen.value).then(res=>{
		 			  let mm=res.data;
		 			sarr.value= sarr.value.concat(res.data);
		 
		 	})
		 })
		 
	//返回定部
    let fhdb=()=>{
		 uni.pageScrollTo({
		        scrollTop: 0,
		        duration: 300, // 滚动时间
		      });
	}
	//跳转
   let sou=()=>{
	    uni.navigateTo({
	    	url:'/pages/sosuo/sosuo'
	    })
   }
	   

</script>

<style>
	@import url("@/static/css/index.css");
</style>
