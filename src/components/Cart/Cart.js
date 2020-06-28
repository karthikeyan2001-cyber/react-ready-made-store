import React, { Component } from "react";
import Title from "../Title";
import Cartcolumns from "./Cartcolumns";
import Emptycart from "./Emptycart";
import { ProductConsumer } from "../../Context";
import Cartlist from "./Cartlist";
import Carttotals from "./Carttotals";

class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="your" title="cart" />
                  <Cartcolumns />
                  <Cartlist value={value} />
                  <Carttotals value={value} history={this.props.history} />
                </React.Fragment>
              );
            } else {
              return <Emptycart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}

export default Cart;
