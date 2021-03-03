import Product from '../models/Product';

export default {
  render(product: Product) {
    return {
      id: product.id,
      name: product.name,
      quantity: product.quantity,
      price: product.price,
    };
  },

  renderMany(products: Product[]) {
    return products.map(product => this.render(product))
  }
}