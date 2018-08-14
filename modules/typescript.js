
module.exports = function () {
  // Add .ts extension for store, middleware and more
  this.nuxt.options.extensions.push("ts")
  // Extend build
  this.extendBuild(config => {
    // Add TypeScript loader
    config.module.rules.push({
      loader: 'ts-loader',
      test: /(\.tsx?)$/,
      options: {
        appendTsSuffixTo: [/\.vue$/]
      }
    })

    // Add .ts extension in webpack resolve
    if (
      config.resolve.extensions.indexOf(".ts") ===
      -1
    ) {
      config.resolve.extensions.push(".ts")
    }
  })
}