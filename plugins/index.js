// 组件
import ScrollToTop from './components/scroll-to-top/ScrollToTop'
import Editor from './components/editor/Editor'
import OverflowTip from './components/overflow-tip/OverflowTip'
import Select from './components/select/Select'
import Cascader from './components/cascader/Cascader'

// 组件列表
const components = [ScrollToTop, Editor, OverflowTip, Select, Cascader]

// 定义install方法，Vue作为参数
const install = Vue => {
  // 判断是否安装，安装过就不用继续执行
  if(install.installed) return
  install.installed = true
  // 遍历注册所有组件
  components.map(component => Vue.component(component.name, component))
}

// 检测到Vue再执行
if(typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  // 所有组件，必须具有install方法才能使用Vue.use()
  ...components
}