import request from '@/router/axios';


export const heads = (deviceid) => {
    return request({
      url: '/api/blade-common/device/equipdetail',
      method: 'get',
      params: {
          deviceid
      }
    })
   
  }
export const footers = (deviceid) => {
    return request({
      url: '/api/blade-common/device/equipLastDetail',
      method: 'get',
      params: {
          deviceid
      }
    })
   
  }
