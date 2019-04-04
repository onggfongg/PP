import React, { Component } from "react";
// import { ProductConsumer, ProductProvider } from "../context";
import { storeProducts } from "../data";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "../redux/cart_ducks";
import "./Details.css";
// import Dropdown from '../Dropdown/Dropdown';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class Details extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  state = {
    product: {}
  };
  componentWillMount() {
    const id = this.props.match.params.id;
    const product = storeProducts.find(product => {
      return product.id === parseInt(id);
    });
    this.setState({ product: product.detailProduct });
  }
  render() {
    const { product } = this.state;
    const { title, img, description, price, info, caution } = product;
    return (
      <div className="container py5">
        {/*title*/}
        <div className="row">
          <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
            <h1 className="text-title">{title}</h1>
          </div>
        </div>
        {/*end of title*/}
        {/*product info*/}
        <div className="col-10 mx-auto col-md-6 my-3">
          <img src={img} className="img-fluid" alt="product" />
        </div>
        {/* <Dropdown/> */}
        <p className="text-capitalize font-weight-bold mt-3 mb-0">
          Information about product :
        </p>
        <p className="text-muted lead">{info}</p>
        <p className="caution" >{caution}</p>
        <h4 className="text-blue">
          <strong>
            price : {price} <span>Bath/kg</span>
          </strong>
        </h4>
        {/* <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </Dropdown> */}
        ;{/*button*/}
        <div>
          <Link to="/productList">
            <a className="btn">Back to Product Lists</a>
          </Link>

          <button
            className="btn-addToCart"
            onClick={() => this.props.addToCart(this.state.product)}
          >
            {" "}
            Add to cart{" "}
          </button>
        </div>
        {/* <h1>{count}</h1>

        <h1>{total}</h1> */}
        {/* <button onClick={() => this.props.addToCart(this.state.product)}>
          {" "}
          Add{" "}
        </button> */}
      </div>
    );
  }
}

export default connect(
  null,
  { addToCart }
)(Details);
