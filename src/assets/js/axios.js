
import axios from 'axios'
import qs from 'qs'
let localhosts = 'http://lt_test.cckdtj.com:8080/platform-admin-1.0.0';//'https://cnodejs.org/api/v1'
//vue 实例
let vue = null
//是否允许显示toast
let showToast = true
console.log('axiosStart')
//请求开始时，开启加载中动画，出错了提示并关闭动画
axios.interceptors.request.use(config => {
 // this.vux.Loading.show({})
 console.log('加载开始')
/*  if (store.state.token) {
  config.headers.Authorization = `Bearer ${store.state.token}`
} */
return config
  return config
}, error => {
  if (vue && showToast) {
    vue.toast('请求超时!')
  }
  //this.vux.Loading.hide()
  console.log('加载结束1')
  return Promise.reject(error)
})

//请求完成时，关闭加载中动画，返回数据或错误信息
axios.interceptors.response.use(response => {
 // this.vux.Loading.hide()
 console.log('加载结束2')
  //一切正常，返回数据或空对象
  if (response.data.code === 0) {
    return response.data.data || {}
  } else {
    //没有数据，只有提示信息，则弹出提示信息，
    if (response.data.text != null && response.data.text.length > 0) {
      if (vue && showToast) {
        vue.toast(response.data.text)
      }
    }
  }
}, error => {
 // this.vux.Loading.hide()
 console.log('加载结束3')
  if (error.response) {
    if (error.response.data.code === 10 || error.response.data.code === 6) {
      //未登录
      if (vue) {
        vue.$router.replace('/login')
      }
    } 
    // 请求已发出，但服务器响应的状态码不在 2xx 范围内，有错误信息则弹出错误信息
    console.log('response-error-data', error.response.data)
    if (error.response.data.text != null && error.response.data.text.length > 0) {
      if (vue && showToast) {
        vue.toast(error.response.data.text)
      }
    }
  } else {
    //什么数据都没有，直接出错了
    console.log('Error', error.message)
    if (vue && showToast) {
      vue.toast('网络出错了，未请求到数据')
    }
  }
}) 
function checkStatus(response) {
  // loading
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  // 异常状态下，把错误信息返回去
  return {
    status: 404,
    msg: '网络异常'
  }
}

function checkCode(res) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (res.status === 404) {
    // alert(res.msg)
  }
  if (res.data && (!res.data.success)) {
    // alert(res.data.error_msg)
  }
  return res
}
export default {
  post (url, data) {
    return axios({
      method: 'post',
      baseURL: localhosts,
      // https://cnodejs.org/api/v1
      url,
     // changeOrigin:true,//允许跨域
      data: qs.stringify(data),
      timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  },
    get (url, params) {
      console.log(params)
    return axios({
      method: 'post',
      baseURL: localhosts,
      url,
      //changeOrigin:true,//允许跨域
      params, // get 请求时带的参数
      timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  }
}


/* export default class api {

  static get = (url, vueContext, isShow) => {
    console.log('1')
   
    if (vueContext != null) {
      vue = vueContext
    }

    if (isShow === false) {
      showToast = isShow
    }

    return axios({
      method: 'get',
      url: `http://lt_test.cckdtj.com:8080/platform-admin-1.0.0/api/auth/login?mobile=15122667367&password=111111`,
      withCredentials: true,//表示跨域请求时是否需要使用凭证
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
      },
    })
  }

  static post = (url, params, vueContext, isShow) => {
    showToast = true
    if (vueContext != null) {
      vue = vueContext
    }

    if (isShow === false) {
      showToast = isShow
    }

    return axios({
      method: 'post',
      url: `http://lt_test.cckdtj.com:8080/platform-admin-1.0.0/api/auth/login?mobile=15122667367&password=111111`,
      data: params,
      withCredentials: true,//表示跨域请求时是否需要使用凭证
      // 发送请求前处理request的数据
      transformRequest: [
        function (data) {
          let ret = ''
          for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret
        }],
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
  } 
}; */