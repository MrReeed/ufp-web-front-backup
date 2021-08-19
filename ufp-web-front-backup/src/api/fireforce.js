import request from '@/utils/request'

export function getfireforceinfo(query) {
  return request({
    url: '/fireforce/fireforceinfo/',
    method: 'get',
    params: query
  })
}

export default {
  getfireforceinfo
}
