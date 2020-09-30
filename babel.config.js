module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  "plugins": [
    // [
    //   "import",
    //   {
    //     libraryName: "vue-sun-ui",
    //     style: (name) => {
    //       console.log('style-->>', name)
    //       // vue-sun-ui/lib/switch/index.js
    //       // 注意这里的name为组件所在的路径，按需加载样式配置提取对应组件名称的css即可
    //       return `vue-sun-ui/dist/style/${name.split('/')[2]}.css`
    //     },
    //     customName: (name) => {
    //       console.log('customName-->>', name) //switch
    //       return `vue-sun-ui/dist/${name}/index.js`
    //     }
    //   }
    // ]
  ]
}
