<template>
	<view class="search-bar">
		<image class="search-img" src="../../static/sousuo.png" ></image>
	  <input v-model="keyword" type="text" placeholder="请输入搜索关键词" />
	  <button @click="search">搜索</button>
	</view>
	<!-- <h1 v-for="(item,index) in ccm">{{item}}</h1> -->
	<view v-if="ccm.length" class="box" v-for="(item,index) in ccm" :key="index" @click="xiang(item.id)" >
		 <view class="xiao-box">
			 <view class="left">
			 	<image class="left-img" :src="item.imageUrl" mode=""></image>
			 </view>
		 	<view class="right">
		 		<view class="nei-te">{{item.title}}</view>
		 		<p class="nei-p">{{item.salePoint}}</p>
				<span class="nri-spanc">爆品</span>
		 		<span class="nri-span">一起拼</span>
		 		<view class="zhidaoshang">{{item.supplier}}</view>
		 		<view class="jiage">￥{{item.priceStr}}</view>
		 		<view class="haoping">{{item.evaluate}}条好评</view>
		 	</view>
		 </view>
	</view>
	<view class="wu" v-if="!ccm.length">
		  <p class="p-sss">没有找到<span class="miue">"{{keyword}}"</span>相关的商品</p>
	</view>
</template>

<script setup>
	import {ref} from 'vue'
	import {onReachBottom,onLoad} from "@dcloudio/uni-app"
	import{sojg} from '../apis/apis.js'
	let arr =ref('')
    let ccm =ref([])   
	let men =ref(1)	
	let fale =ref(true)
  onLoad((option)=>{
	console.log(option.id,arr.value);
	arr.value=option.id
	console.log(arr);
	diao(option.id)
	})

		
	let diao =(c)=>{
		keyword.value=c
		sojg(c,men.value).then(res=>{
			console.log(res);
			let cc=res.data
		
			ccm.value=cc
		},()=>{
		// mex(ccm.value)
		})
		
			
	}
	let mex =(c)=>{
		console.log(c);
		if(c){	
			fale.value=false
		}
	}
	//2
	 const keyword = ref('')
	  const search =  () => {
		 sojg(keyword.value,men.value).then(res=>{
		 	console.log(res);
		 	let cc=res.data
		 	ccm.value=cc
		 }) 
		  
	  }
</script>

<style>
	.search-bar {
	    display: flex;
		width: 70%;
	    align-items: center;
	    padding: 20rpx;
	    background-color: #f5f5f5;
		border-radius: 30rpx;
		margin-top: 10rpx;
		margin-left: 10rpx;
		padding: 0 20rpx;
	  }
	.search-img{
		width: 40rpx;
		height: 40rpx;
	}
	  .search-bar input {
	    flex: 1;
	    height: 60rpx;
	   border-radius: 30rpx;
	    border: none;
	    background-color:  #f5f5f5;
	    font-size: 28rpx;
	  }
	
	  .search-bar button {
		  position: absolute;
		  top: 0rpx;
		  right: 20rpx;
	     width: 160rpx;
	     height: 60rpx;
	     margin-left: 20rpx;
		 border: none;
	      color: #7F4395;
	      background: #fff;
		  line-height: 60rpx;
	    font-size: 28rpx;
	  }


	/* / */
	.box{
		padding: 20rpx 0 20rpx 20rpx;
		
	}
	.xiao-box{
		width: 100%;
		height: 340rpx;
		display: flex;
	}
	.left-img{
		width: 300rpx;
		height: 90%;
		margin-right: 20rpx;
	}
		
	.right{
		padding-left: 10rpx;
	}
	.nri-spanc{
		font-size: 5rpx;
		background: rgb(171, 127, 209);
		    color: rgb(255, 255, 255);
		    border: 0.015rem solid rgb(171, 127, 209);
		    border-radius: 4rpx;
			margin-right: 2px;
	}
	.nri-span{
		font-size: 5rpx;
		 background: rgb(255, 255, 255);
		color: rgb(251, 76, 129);
		     border: 0.015rem solid rgb(251, 76, 129);
		     border-radius: 4rpx;
			     margin-right: 5rpx;
			     margin-top: 2rpx;
	}
	.zhidaoshang{
		font-size: 10rpx;
		color: #BF9E6B;
		margin-top: 10rpx;

	}
	
	.jiage{
		margin-top: 10rpx;
		color: #bf9e6b;
		    margin-bottom: 0.08rem;
		    font-size: 1rem
	}
	.nei-p{
	    color: #bbbbbb;
	    font-size: 0.2rem;
	    padding-top: 0.06rem;
		margin-top: 5rpx;
			margin-bottom: 10rpx;
		}
		
.haoping{
    color: #bbbbbb;
    font-size: 0.2rem;
    padding-top: 0.06rem;
	}
	.p-sss{
		padding: 20rpx 10rpx;
		text-align: center;
		font-size: 40rpx;
	}
	.miue{
		color: #7F4395;
	}
	
</style>