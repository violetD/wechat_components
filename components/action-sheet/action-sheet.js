Component({
  behaviors: [],
  properties: {
    buttons: {
      type: Array,
    }
  },

  // 私有数据，可用于模版渲染
  data: {
  },

  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached() { },
  moved() { },
  detached() { },

  methods: {
    tap (e) {
      this.triggerEvent('ontap', {
        ...e.detail,
        ...e.target
      })
    }
  }
})
