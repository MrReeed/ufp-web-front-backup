import defaultSettings from '@/settings'

const title = defaultSettings.title || '城市消防远程监控系统'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
