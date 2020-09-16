import Echarts from 'echarts'
export default {
    install(Vue, options) {
        //自定义指令
        Vue.directive('echart', {
            inserted(el, binding, vnode) {
                if (el.nodeName === 'DIV' && el.innerText === "" && el.innerHTML === "") {
                    //初始化echart，并且绑定到当前dom对象上
                    let Chart = Echarts.init(el, 'customed')
                    if (binding.arg && binding.arg.eventBus) {
                        binding.arg.eventBus.forEach(v => {
                            Chart.on(v.type, v.callback);
                        })
                    }
                    //将部分方法暴露到el实例上
                    el.Chart = Chart;
                    el.showLoading = Chart.showLoading;
                    el.hideLoading = Chart.hideLoading;
                    el.debounceResize = () => {
                        Chart.resize()
                    }
                }
                else {
                    console.error("echart directive must be put in a empty div")
                }
            },
            update(el, binding, vnode) {
                //更新时动态更新数据
                let Chart = el.Chart
                let DebounceEvent = el.debounceResize
                Chart.setOption(binding.value)
                if (binding.value.length !== 0) {
                    Chart.setOption(binding.value)
                    Chart.resize()
                    window.addEventListener("resize", DebounceEvent)
                }
            },
            //指令卸载的时候去除window事件监听
            unbind(el, binding, vnode) {
                window.removeEventListener("resize", el.debounceResize)
            }
        });
        //暴露全局方法
        Vue.prototype.echarts = Echarts
    }
}