import request from '@/utils/request'

export function getonlinecompanylist(query) {
  return request({
    url: 'company/onlinecompany/',
    method: 'get',
    params: query
  })
}

export default {
  getonlinecompanylist
}
