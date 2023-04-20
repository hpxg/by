export const shocj=()=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:"/api/getTypeOne",
			 success: res => resolve(res),
		})
	})
}

  // hotList?page=1
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