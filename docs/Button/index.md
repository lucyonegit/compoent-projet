## <BooleanBtn \/>
> 布尔值容器组件。可包裹modal等组件自动实现布尔值切换，无需在父组件维护状态

- **基本用法**

#### 在template中使用
```html
<BooleanBtn>
  <template slot="btnText">搜索</template>
  <template slot="default" slot-scope="slotProps">
    <el-dialog title="提示" :visible="slotProps.status" width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="slotProps.clickEvent">取 消</el-button>
        <el-button type="primary" @click=";">确 定</el-button>
      </span>
    </el-dialog>
  </template>
</BooleanBtn>
```
#### 在render函数中使用
```jsx
function(h) {
      return (
        <BooleanBtn
          type="primary"
          shape="circle"
          icon="ios-add"
          scopedSlots={{
            btnText: props => {
              return 'XXX';
            },
            default: props => {
              let bindData = { visible: props.status, click: props.clickEvent };
              return <xxx />;
            }
          }}
        />
      );
    }
```
- #### slots
Methods名称 | 说明
---|---
btnText | string
default | vue.element/jsx


**slotProps暴露出状态status与方法clickEvent用来改变status**