import React, { Component } from "react";
import "./Aboutus.css";

class Aboutus extends Component {
  render() {
    return (
      <div>
        <div id="showcase">
          <div className="container">
            <div className="showcase-content">
              <h1>
                <span className="text-primary1">About</span> our company
              </h1>

              <p className="lead">
                Our organization aims to manufacture quality plastic bags and
                provides our best services to all levels of customer. We intend
                to continuously improve and develop our production to meet
                international standard management and accreditation od ISO 9001
                : 2015, GMP and HACCP Food Safety with awareness on social and
                environmental responsibility.
              </p>
            </div>
          </div>
        </div>

        <div id="showcase2">
          <div className="container2">
            <div className="showcase-content2">
              <h1>
                <span className="text-primary2">Company</span> objective
              </h1>

              <p1 className="lead2">
                Progressive Organization with continuity Improvement on Quality
                and Safety Product with international standard management system
                and accreditation of ISO 9000 : 2015, GMP, HACCP" is the key
                policy of Prizeinterpack(1999) Co,.Ltd. The company gives an
                importance to internal audit for every production process and
                capability for trace-ability.
              </p1>
            </div>
          </div>
        </div>

        <div id="showcase3">
          <div className="container3">
            <div className="showcase-content3">
              <h1>
                <span className="text-primary3">Company</span> objective
              </h1>

              <p className="lead3">
                We provide consulting on all plastic packaging to meet with our
                customer requirements. Barcode system with ERP Software linked
                to all related departments like Sales, Purchase, Planning,
                Production, Warehouse and Logistics is applied to our inventory
                control in order to meet all our customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Aboutus;
