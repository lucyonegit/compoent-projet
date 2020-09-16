### 在vue项目中使用指令方式使用echart

- 项目背景

最近的项目中有些数据可视化的页面，当然使用大神级的图表库echarts啦，问题就来了! echart提供了一个init方法，需要传入一个dom容器去绘制，而且我们在页面中需要引入echart的各种api，这样一来就会导致页面有非常多与业务无关的冗余代码，我们需要的仅仅是一个图表，只需要关注数据驱动即可。因此便想出使用自定义指令的方式来为页面元素添加图表

- 组件思路

我们期望的组件是长这样子的,arg参数中可以传递绑定各种事件，option是当前图表实例的选项对象

```html
<template>
    <div v-echart:[{eventBus,...otherArgs}]= "options" ></div>
</template>
```
```javascript
data(){
    return {
        otherArgs:{},
        eventBus: [
        {
          type: 'click',
          callback: s => {
            console.log('图表被点击啦',s);
          }
        },
        {
          type: 'hover',
          callback: s => {
            ...
          }
        }
      ]
    }
}
```

- 话不多说，直接上代码，vue自定义指令应该很简单啦，无非就是下生命周期，数据参数等等，此次的echart指令用很简短的一段代码就可以搞定啦

```javascript
import Echarts from 'echarts'
import { debounce } from './utils'
import theme from '../config/chart-theme'
export default {
    install(Vue, options) {
        //自定义指令
        Vue.directive('echart', {
            inserted(el, binding, vnode) {
                //ehart图表不能装载在一个非空容器中，因此需要做此判断
                if (el.nodeName === 'DIV' && el.innerText === "" && el.innerHTML === "") {
                    //注册主题
                    Echarts.registerTheme('customed', theme)
                     //初始化echart，并且绑定到当前dom对象上
                    let Chart = Echarts.init(el, 'customed')
                    if (binding.arg && binding.arg.eventBus) {
                    //循环绑定监听事件
                        binding.arg.eventBus.forEach(v => {
                            Chart.on(v.type, debounce(v.callback));
                        })
                    }
                    //将部分方法暴露到el实例上，也可按照echart的文档自定义暴露别的api
                    el.Chart = Chart;
                    el.showLoading = Chart.showLoading;
                    el.hideLoading = Chart.hideLoading;
                    //记录当前元素重置图表的方法，tip：为了在指令卸载的时候移除监听
                    el.debounceResize = debounce(() => {
                        Chart.resize()
                    })
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
```

- 到此为止，一个echart自定义指令就搞定啦，是不是很方便，妈妈再也不怕产品经理变需求啦！