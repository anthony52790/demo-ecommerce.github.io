export const home = () => {
  PC.pages.home = {}
  PC.pages.home.renderHtml = function() {
    return Promise.resolve(
      `<div>HOME</div>`
    )
  }
}