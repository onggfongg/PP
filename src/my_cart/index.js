import React from "react";
import { connect } from "react-redux";
import "./index.css";

class MyCart extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       qty: 0
  //     };
  //     this.add = this.add.bind(this);
  //     this.subtract = this.subtract.bind(this);
  //     this.showInfo = this.showInfo.bind(this);
  //   }

  //   add() {
  //     this.setState({
  //       qty: this.state.qty + 1
  //     });
  //     this.props.handleTotal(this.props.price);
  //   }

  //   subtract() {
  //     this.setState({
  //       qty: this.state.qty - 1
  //     });
  //     this.props.handleTotal(-this.props.price);
  //   }

  //   showInfo() {
  //     this.props.handleShow(this.props.info);
  //   }

  render() {
    const { cart } = this.props;
    return (
      <div>
        {cart.map(product => (
          <h1>{product.title}</h1>
        ))}
      </div>
    );
  }
}
//   <div className="row form-group">
//     <div className="col-sm-10">
//       <h4>
//         {product.title}: {product.price} Bath
//       </h4>
//     </div>
//     <div className="col-sm-2 text-right">qty: {this.state.qty}</div>
//   </div>
// ),
// (
//   <div className="row btn-toolbar">
//     <div className="col-6">
//       <button
//         className="btn btn-outline-primary"
//         onClick={this.showInfo}
//       >
//         show info
//       </button>
//     </div>
//     <div className="col-6 text-right">
//       <button
//         className="btn btn-outline-primary"
//         onClick={this.add}
//       >
//         +1
//       </button>
//       <button
//         className="btn btn-outline-primary"
//         onClick={this.subtract}
//         disabled={this.state.qty < 1}
//       >
//         -1
//       </button>
//     </div>
//   </div>
//   </div>

// /* ProductList */
// class ProductList extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       total: 0,
//       productList: ""
//     };

//     this.createProduct = this.createProduct.bind(this);
//     this.calculateTotal = this.calculateTotal.bind(this);
//     this.showProduct = this.showProduct.bind(this);
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ productList: productList });
//     }, 1000);
//   }

//   createProduct(product) {
//     this.setState({
//       products: this.state.productList.push(product)
//     });
//   }

//   calculateTotal(price) {
//     this.setState({
//       total: this.state.total + price
//     });
//     console.log(this.state.total);
//   }

//   showProduct(info) {
//     console.log(info);
//     alert(info);
//   }

//   render() {
//     if (!this.state.productList) return <p>loading...!!!!</p>;

//     var component = this;
//     var products = this.state.productList.map(function(product) {
//       return (
//         <Product
//           name={product.name}
//           price={product.price}
//           info={product.info}
//           handleShow={component.showProduct}
//           handleTotal={component.calculateTotal}
//         />
//       );
//     });

//     return (
//       <div>
//         <ProductForm handleProduct={this.createProduct} />
//         {products}
//         <Total total={this.state.total} />
//       </div>
//     );
//   }
// }

//               //   <p> {product.title}</p>

//         )}
//       </div>
//     );
//   }
// }

// /* Total */
// class Total extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     let total = this.props.total.toFixed(2);
//     let tax = (this.props.total * 0.15).toFixed(2);
//     let totalIncTax = (+total + +tax).toFixed(2);
//     let mystyle = {
//       borderTop: "1px solid #ddd",
//       marginTop: "10px"
//     };
//     return (
//       <div
//         style={{
//           marginTop: "30px",
//           backgroundColor: "#F6F6F6",
//           padding: "10px"
//         }}
//       >
//         <h3 className="row" style={{ fontWeight: 400 }}>
//           <span className="col-6">total price:</span>
//           <span className="col-6 text-right">${total}</span>
//         </h3>
//         <h3 className="row" style={{ fontWeight: 400 }}>
//           <span className="col-6">tax (15%):</span>
//           <span className="col-6 text-right">${tax}</span>
//         </h3>
//         <h3 className="row" style={mystyle}>
//           <span className="col-6">tota inc tax:</span>
//           <span className="col-6 text-right">${totalIncTax}</span>
//         </h3>
//       </div>
//     );
//   }
// }

const mapStateToProps = state => {
  return {
    cart: state.cart.cart
  };
};

export default connect(mapStateToProps)(MyCart);
