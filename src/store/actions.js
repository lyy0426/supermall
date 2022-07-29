export default {
  addCart(context,payload) {
    let oldProduct = context.state.cartList.find(function (item) {
      return item.iid === payload.iid
    })
    if(oldProduct) {
      context.commit('addCounter',oldProduct)
    } else {
      payload.count = 1
      context.commit('addToCart',payload)
    }
  }
}