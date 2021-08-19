import request from '@/utils/request'

export function gethuozaizidongbaojing(query) {
  return request({
    url: '/yunxingjiance/huozaizidongbaojing/',
    method: 'get',
    params: query
  })
}

export default {
  gethuozaizidongbaojing
}
