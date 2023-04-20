export const typeone=()=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:"/api/detail?goodId=1",
			 success: res => resolve(res),
		})
	})
}
export const shocj=()=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:"/api/getTypeOne",
			 success: res => resolve(res),
		})
	})
}
  //商品
  export const shangpi=(c)=>{
  	return new Promise((resolve,reject)=>{
  		uni.request({
  			url:"/api/hotList",
			data:{
				page:c
			},
  			 success: res => resolve(res),
  		})
  	})
  }
  // search?word=男装
  export const sojg=(c,a)=>{
  	return new Promise((resolve,reject)=>{
  		uni.request({
  			url:"/api/search",
  			data:{
  				word:c,
					page:a
  			},
  			 success: res => resolve(res),
  		})
  	})
  }