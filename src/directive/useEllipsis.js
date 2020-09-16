export default {
    install(Vue, options) {
        //自定义指令
        Vue.directive('ellips', {
            inserted(el, binding, vnode) {
                el.style.width = `${binding.value.length || 20}px`
                // el.style.display = '-webkit-box'
                el.style['-webkit-box-orient'] = "vertical"
                el.style['-webkit-line-clamp'] = binding.value.clamp || 1
                el.style.textOverflow = 'ellipsis'
                el.style.whiteSpace = 'nowrap'
                el.style.overflow = 'hidden'
            },
            update(el, binding, vnode) {

            },
            //指令卸载的时候去除window事件监听
            unbind(el, binding, vnode) {

            }
        });
    }
}