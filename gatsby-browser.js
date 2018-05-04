/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

exports.onRouteUpdate = () => {
  document.dispatchEvent(new CustomEvent('gatsby:route-update'))
}
