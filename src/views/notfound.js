export const notfound = () => {
  PC.pages.notfound = {}
  PC.pages.notfound.renderHtml = function() {
    return Promise.resolve(
      `<div>NOT FOUND</div>`
    )
  }
}