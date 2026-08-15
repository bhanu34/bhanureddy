const React = require('react')
const { ThemeProvider } = require('./src/context/ThemeContext')

// 1. Wrap entire app with ThemeContext (Global State & Color Controls)
exports.wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>
}

// 2. Wrap individual pages with their designated Layout
exports.wrapPageElement = ({ element, props }) => {
  const Layout = element.type.Layout ?? React.Fragment

  return <Layout {...props}>{element}</Layout>
}
