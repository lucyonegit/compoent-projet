import Button from './components/Button'
import ScrollView from './components/ScrollView'
import Image from './components/Images'

const arg_components = {
    ScrollView,
    Image,
    Button
}
const install = Vue => {
    //循环注册组件
    Object.keys(arg_components).forEach(key => {
        Vue.component(key, arg_components[key]);
    });
}
/**
 * 默认导出注册方法与组件
 */
export default {
    install,
    ...arg_components
}
