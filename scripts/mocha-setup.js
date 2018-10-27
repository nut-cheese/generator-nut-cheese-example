import hook from 'css-modules-require-hook'
import sass from 'node-sass'

hook({
  extensions: [ '.scss' ],
  generateScopedName: '[name]-[local]-[hash:base64:5]',
  preprocessCss: data => sass.renderSync({ data }).css
})
