<template>
  <view>
    <!-- search bar -->
    <view class="search-bar">
		<image class="search-img" src="../../static/sousuo.png" ></image>
      <input v-model="keyword" type="text" placeholder="请输入搜索关键词" />
      <button @click="search">搜索</button>
    </view>

    <!-- search history -->
    <view class="search-history">
	<view v-if="history.length === 0"></view>
      <view  v-else class="title">
	  <view class="titlecc">
		  <span>历史记录</span>
	  	 <image @click="qk" class="tit-img" src="@/static/lajitong.png" alt=""></image> 
	  </view>
      <view class="tex-lis" >
        <view class="lis-ts" v-for="(item, index) in history" :key="index" @click="selectHistoryItem(item)">{{ item }}</view>
      </view>
	  </view>
    </view>

    <!-- search recommendations -->
    <view class="search-recommendations">
	<view v-if="recommendations.length === 0">暂无搜索推荐</view>
      <view  v-else class="titlecc">大家都在搜</view>
      <view class="tex-lis">
        <view class="lis-ts" v-for="(item, index) in recommendations" :key="index" @click="selectRecommendationItem(item)">
		<image :class="index>2?'none ic':' ic'" src="https://static.biyao.com/mnew/img/master/search/search_hot@2x_d1347a2.png"></image> 
		{{ item }}</view>
      </view>
    </view>

    <!-- search results -->
 
  </view>
</template>

<script setup>
  import { ref } from 'vue'
  // import { search } from '@/api/search.js'

      const keyword = ref('111')
      const results = ref([])
      const loading = ref(false)
     const history = ref(JSON.parse(localStorage.getItem('searchHistory')) || [])
	 const recommendations = ref(['疯狂上新', '防晒霜', '精华','粉底液'])
	 const search = async () => {
		 console.log("keyword");
	       if (keyword.value.trim() === '') {
	         return
	       }else{
			   uni.navigateTo({
			   			   url:'/pages/soxaing/soxaing?id='+keyword.value
			   })
		   }
	 
	       if (history.value.indexOf(keyword.value) === -1) {
	         history.value.unshift(keyword.value)
	         localStorage.setItem('searchHistory', JSON.stringify(history.value))
	       }
		         loading.value = true
		         loading.value = false
	      
		 }
		 let ccc=()=>{
			 uni.navigateTo({
			     url:'/pages/soxaing/soxaing?id='+keyword.value
			 })
		 }
	     const selectHistoryItem = (item) => {
		       keyword.value = item
		       search()
		     }
	    const selectRecommendationItem = (item) => {
			       keyword.value = item
			       search()
		    }
//
let qk=()=>{
	history.value=[]
}
</script>

<style scoped>
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
.title{
	 border-bottom: 20rpx solid silver;
}
.titlecc{
	margin-top: 20rpx;
	display: flex;
	justify-content: space-between;
	font-size: 40rpx;
    color: #333;
}
.tit-img{
	width: 40rpx;
	height: 40rpx;
}
.tex-lis{
	display: flex;
	/* justify-content: space-between; */
	flex-wrap: wrap;
	padding: 20rpx;
}
.lis-ts{
	/* width: 23%; */
	height: 50rpx;
	padding: 0 20rpx;
	line-height: 50rpx;
	text-align: center;
	margin-right: 10rpx;
	background: #F5F5F5;
	border-radius: .6rem;
	margin-bottom: 10rpx;
}
.ic{
	    display: inline-block;
	    width: 20rpx;
	    height: 20rpx;
	    margin-right: 2rpx;

	    /* -webkit-background-size: .18rem .24rem; */
	    /* background-size: .18rem .24rem; */
}
.none{
	display: none;
}
  
</style>
