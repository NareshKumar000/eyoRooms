import React, { Component } from "react";
import styles from "./HomeContent.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import style from "../../detailView/deatilViewRecomandation/DetailViewRecomandation.module.css";
import { Redirect } from "react-router-dom";

export default class HomeContent extends Component {

  state = { redirect: null };

  descriptionPage(){
    this.setState({redirect:"description"})
  }

  render() {

   if (this.state.redirect) {
    return <Redirect to={this.state.redirect} />
  }
    return (
      <div className="container my-5">
        <div className="row">
          <img src="images/open.webp" class="card-img-top" alt="" />
        </div>
        <div className="row mt-5">
          {[
            { heading: "Abdul shaikh", subHeading: "15 boys Abdul shaikh B.I.T. Block Madrasa I. R. Road, Bhendi Bazaar, Umerkhadi, Mumbai, Maharashtra 400003", rating: "4", icon: faStar, review: "134", val: "Very Good", price: "8000", off: "46%" },
            { heading: "Anchal mistry", subHeading: "301, C wing, Indian Ocean, Sagar City, Near Fidai Baug, Andheri west, Mumbai 58", rating: "4", icon: faStar, review: "134", val: "Very Good", price: "7500", off: "46%" },

            { heading: "Aviraaj ", subHeading: "301, C wing, Indian Ocean, Sagar C", rating: "4", icon: faStar, review: "134", val: "Very Good", price: "5000", off: "46%" },
          ].map((elem) => {
            return (
              <div className="col-sm-4 p-1 " style={{ paddingLeft: "10px",cursor: "pointer" }} onClick={(e)=>this.descriptionPage()}>
                <div className="card w-100">
                  <img className="card-img-top" src="/images/bed.webp" />
                  <div className="card-body">
                    <h2 className="text-truncate" id={style.heading}>
                      {elem.heading}
                    </h2>
                    <p className="card-text text-truncate" id={style.subHeading}>
                      {elem.subHeading}
                    </p>
                    <div>
                      <span id={style.icon}>
                        {elem.rating}
                        <span>
                          <FontAwesomeIcon icon={elem.icon} color="#fff" size="sm" />
                        </span>
                      </span>
                      <span id={style.review}>({elem.review} • reviews) Very Good</span>
                    </div>
                    <div>
                      <span id={style.price}>₹ {elem.price}</span>
                      <span id={style.slashed}>₹ {elem.price}</span>
                      <span id={style.off}>{elem.off} off</span>
                    </div>
                   { /*<div id={style.perNight}>
                                         <span>per room per night</span>{" "}
                                       </div>*/}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
