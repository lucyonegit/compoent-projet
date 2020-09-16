## <Images \/>
#### 图片容器组件，优雅的加载项目中的图片。

- **基本用法**
```html
 <Images
    :src="http:www.aliyun.com/images/245.jpg"
    :errorSrc="~assets/images/err.png"
    :size="[32,32]"
  />
```

- ##### Attributes
prop名称 | 类型 | 默认
---|--- | ---
src | string 当前图片的链接 | /
errorSrc | String 加载失败之后显示的占位图 | /
alt | string 图片的alt属性，同原生 | /
title | string 图片的title，同原生 | /
size | Array<number\> 错误占位图片的尺寸  | 22px * 22px
sizeType | 尺寸类型（px /rem ） | px
radius | number 图片圆角尺寸 | 0