import React, { Component } from "react";
import "./Contactus.css";
import { Form, Icon, Button, Row, Col } from "antd";
import TextField from "../components/TextField";
import TextArea from "../components/TextArea";

class Contactus extends Component {
  render() {
    return (
      <div>
        <section id="contact-form" className="py-3">
          <div className="container">
            <h1 className="l-heading">
              <span class="text-primary">Contact</span> Us
            </h1>
            <p>Please fill out the form below to contact us</p>
            <form action="process.php">
              <div className="form-group">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>

              <div className="form-group">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" />
              </div>

              <div className="form-group">
                <label for="message">Message</label>
                <textarea name="message" id="message" />
              </div>
              <button type="submit" className="btn">
                Submit
              </button>
            </form>
          </div>
        </section>

        <section id="contact-info" className="bg-dark">
          <div className="info-content1">
            <div className="info-content2">
              <h2>
                <span className="text-primary2">Location</span> Of Head Office
              </h2>
              <p>
                39/19 Moo 5 T.Khokkrabue A.Mueng Samutsakorn 74000 Thailand Tel
                : +6634-442-245-8 Mobile : +6661-168-9989 Fax : +6634-442-249
              </p>

              <h3>
                <span className="text-primary3">Location</span> Bangbon Office
              </h3>
              <p>
                236 Soi Prayamonthat Yak 35-9 Bangbon, Bangbon, Bangkok 10150
                Thailand Tel : +662-417-7224-5 Fax : +662-417-7226
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contactus;
