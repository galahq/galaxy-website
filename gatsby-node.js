/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.modifyWebpackConfig = ({ config, stage }) => {
  config.merge({
    node: { fs: 'empty', child_process: 'empty' },
  })

  return config
}

exports.createPages = ({ boundActionCreators }) => {
  const { createRedirect } = boundActionCreators

  createRedirect({
    fromPath: `/premiere`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/screening`,
  })
  createRedirect({
    fromPath: `/premiere/`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/screening/`,
  })
}
