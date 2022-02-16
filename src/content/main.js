import { createApp } from 'vue'
import app from './components/app.vue'

const joinContent = (element) => {
  // 给原页面元素添加遮罩层.
  const page = document.querySelector('.page-container')
  page.style.background = '#000'
  page.style.opacity = '0.7'

  // 创建新的插件效果元素.
  const div = document.createElement('div')
  div.id = 'pluginContainer'

  document.body.appendChild(div)
  createApp(element).mount('#pluginContainer')
}

joinContent(app)
