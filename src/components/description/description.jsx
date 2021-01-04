import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar,faCheckCircle , faFan, faToilet, faPersonBooth, faMusic,faHandHoldingWater,faMoneyBillWave,faBreadSlice,faWifi,faFire, faHotTub, faBed,faCheese, faRestroom,faParking, faThermometerEmpty, faChair, faTv, faSoap} from "@fortawesome/free-solid-svg-icons"
import {connect} from "react-redux"
import Footer from "../helperComponent/Footer";

 class Description extends Component {
  
  componentDidMount=()=>{
  }
  render() {
        const {review}  =this.props
        console.log(review)
        if(review){

    // const {avg_rating,no_of_ratings} = review
  }
    return (
        <div id="main">
        {/* header*/}
        <header className="main-header">
          {/* header-top*/}
          {/* header-top end*/}
          {/* header-inner*/}
          {/* header-inner end*/}
          {/* header-search */}
          <div className="header-search vis-head-search">
            <div className="container">
              <div className="row">
                {/* header-search-input-item */}
                <div className="col-sm-2">
                  <img src="../logo.jpg"  style={{    "height": "59px"}}/>     
                </div>
                {/* header-search-input-item end */}
                {/* header-search-input-item */}
                <div className="col-sm-4">
                  <div className="header-search-input-item fl-wrap date-parent">
                    <label>Date In-Out </label>
                    <span className="header-search-input-item-icon"><i className="fa fa-calendar-check" /></span>
                    <input type="text" placeholder="" name="header-search"  />
                  </div>
                </div>
                {/* header-search-input-item end */}                             
                {/* header-search-input-item */}
                <div className="col-sm-4">
                  <div className="header-search-input-item fl-wrap">
                    <div className="quantity-item">
                      <label>Rooms</label>
                      <div className="quantity">
                        <input type="number" min={1} max={3} step={1} defaultValue={1} />
                      </div>
                    </div>
                    <div className="quantity-item">
                      <label>Adults</label>
                      <div className="quantity">
                        <input type="number" min={1} max={3} step={1} defaultValue={1} />
                      </div>
                    </div>
                    <div className="quantity-item">
                      <label>Children</label>
                      <div className="quantity">
                        <input type="number" min={0} max={3} step={1} defaultValue={0} />
                      </div>
                    </div>
                  </div>
                </div>
                {/* header-search-input-item end */}                             
                {/* header-search-input-item */}
                <div className="col-sm-2">
                  <div className="header-search-input-item fl-wrap">
                    <button className="header-search-button" >Search </button>
                  </div>
                </div>
                {/* header-search-input-item end */}                                                          
              </div>
            </div>
          </div>
          {/* header-search  end */}
        </header>
        {/*  header end */}
        {/*  wrapper  */}
        <div id="wrapper">
          {/* content*/}
          <div className="content">
            {/*  section  */}
            <section className="list-single-hero" data-scrollax-parent="true" id="sec1">
              <div className="bg par-elem " style={{'backgroundImage': 'url(../../images/9.jpg)'}} data-bg="../../../images/9.jpg" data-scrollax="properties: { translateY: '30%' }" />
              <div className="list-single-hero-title fl-wrap">
                <div className="container">
                  <div className="row">
                    <div className="col-md-7">
                    </div>
                    <div className="col-md-5">
                      {/*  list-single-hero-details*/}
                      <div className="list-single-hero-details fl-wrap">
                        {/*  list-single-hero-rating*/}
                        <div className="list-single-hero-rating">
                          <div className="rate-class-name">
                            <div className="score"><strong>Very Good</strong>2 Reviews </div>
                            <span>4.5</span>                                             
                          </div>
                          {/* list-single-hero-rating-list*/}
                          <div className="list-single-hero-rating-list">
                            {/* rate item*/}
                            <div className="rate-item fl-wrap">
                              <div className="rate-item-title fl-wrap"><span>Cleanliness</span></div>
                              <div className="rate-item-bg" data-percent="100%">
                                <div className="rate-item-line color-bg" />
                              </div>
                              <div className="rate-item-percent">5.0</div>
                            </div>
                            {/* rate item end*/}
                            {/* rate item*/}
                            <div className="rate-item fl-wrap">
                              <div className="rate-item-title fl-wrap"><span>Comfort</span></div>
                              <div className="rate-item-bg" data-percent="90%">
                                <div className="rate-item-line color-bg" />
                              </div>
                              <div className="rate-item-percent">5.0</div>
                            </div>
                            {/* rate item end*/}                                                        
                            {/* rate item*/}
                            <div className="rate-item fl-wrap">
                              <div className="rate-item-title fl-wrap"><span>Staf</span></div>
                              <div className="rate-item-bg" data-percent="80%">
                                <div className="rate-item-line color-bg" />
                              </div>
                              <div className="rate-item-percent">4.0</div>
                            </div>
                            {/* rate item end*/}  
                            {/* rate item*/}
                            <div className="rate-item fl-wrap">
                              <div className="rate-item-title fl-wrap"><span>Facilities</span></div>
                              <div className="rate-item-bg" data-percent="90%">
                                <div className="rate-item-line color-bg" />
                              </div>
                              <div className="rate-item-percent">4.5</div>
                            </div>
                            {/* rate item end*/} 
                          </div>
                          {/* list-single-hero-rating-list end*/}
                        </div>
                        {/*  list-single-hero-rating  end*/}
                        <div className="clearfix" />
                        {/* list-single-hero-links*/}
                        {/*  list-single-hero-links end*/}                                            
                      </div>
                      {/*  list-single-hero-details  end*/}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*  section  end*/}
            {/*  section  */}
            <section className="grey-blue-bg small-padding scroll-nav-container" id="sec2">
              {/*  scroll-nav-wrapper  */}
              {/*  <div class="scroll-nav-wrapper fl-wrap">
                            <div class="hidden-map-container fl-wrap">
                                <input id="pac-input" class="controls fl-wrap controls-mapwn" type="text" placeholder="What Nearby ?   Bar , Gym , Restaurant ">
                                <div class="map-container">
                                    <div id="singleMap" data-latitude="40.7427837" data-longitude="-73.11445617675781"></div>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                            <div class="container">
                                <nav class="scroll-nav scroll-init">
                                    <ul>
                                        <li><a class="act-scrlink" href="#sec1">Top</a></li>
                                        <li><a href="#sec2">Details</a></li>
                                        <li><a href="#sec3">Amenities</a></li>
                                        <li><a href="#sec4">Rooms</a></li>
                                        <li><a href="#sec5">Reviews</a></li>
                                    </ul>
                                </nav>
                                <a href="#" class="show-hidden-map">  <span>On The Map</span> <i class="fal fa-map-marked-alt"></i></a>
                            </div>
                        </div>
                         scroll-nav-wrapper end  */}                    
              {/*   container  */}
              <div className="container">
                {/*   row  */}
                <div className="row">
                  {/*   datails */}
                  <div className="col-md-8">
                    <div className="list-single-main-container ">
                      {/* fixed-scroll-column  */}
                      {/* fixed-scroll-column end   */}
                      {/* list-single-header end */}
                      {/*   list-single-main-item */}
                      <div className="list-single-main-item fl-wrap">
                        <div className="list-single-main-item-title fl-wrap">
                          <h3>Abdul shaikh</h3>
                          <p>20 mints from Mira road station sharing riksha avalable 10rs </p>
                        </div>
                        <p>Primary facilities like personal bed, personal cupboard, fridge, wifi, gas stove with cylinder, water purifier, washing machine, geyser, ac etc available. </p>
                      </div>
                      {/*   list-single-main-item end */}
                      {/*   list-single-main-item */}
                      <div className="list-single-main-item fl-wrap" id="sec3">
                        <div className="list-single-main-item-title fl-wrap">
                          <h3>Amenities</h3>
                        </div>
                        <div className="listing-features fl-wrap">
                          <ul>
                            <li><i className="fa fa-rocket" /> Elevator in building</li>
                            <li><i className="fa fa-wifi" /> Free Wi Fi</li>
                            <li><i className="fa fa-parking" /> Free Parking</li>
                            <li><i className="fa fa-snowflake" /> Air Conditioned</li>
                            <li><i className="fa fa-plane" />Airport Shuttle</li>
                            <li><i className="fa fa-wheelchair" /> Wheelchair Friendly</li>
                          </ul>
                        </div>
                        <span className="fw-separator" />
                      </div>
                      {/*   list-single-main-item end */}     
                      {/* accordion*/}
                      {/* accordion end */}                                                     
                      {/*   list-single-main-item */}
                      <div className="list-single-main-item fl-wrap" id="sec5">
                        <div className="list-single-main-item-title fl-wrap">
                          <h3>Item Reviews -  <span> 2 </span></h3>
                        </div>
                        {/*reviews-score-wrap*/}   
                        <div className="reviews-score-wrap fl-wrap">
                          <div className="review-score-total">
                            <span>
                              4.5
                              <strong>Very Good</strong>
                            </span>
                            <a href="#" className="color2-bg">Add Review</a>
                          </div>
                          <div className="review-score-detail">
                            {/* review-score-detail-list*/}
                            <div className="review-score-detail-list">
                              {/* rate item*/}
                              <div className="rate-item fl-wrap">
                                <div className="rate-item-title fl-wrap"><span>Cleanliness</span></div>
                                <div className="rate-item-bg" data-percent="100%">
                                  <div className="rate-item-line color-bg" />
                                </div>
                                <div className="rate-item-percent">5.0</div>
                              </div>
                              {/* rate item end*/}
                              {/* rate item*/}
                              <div className="rate-item fl-wrap">
                                <div className="rate-item-title fl-wrap"><span>Comfort</span></div>
                                <div className="rate-item-bg" data-percent="90%">
                                  <div className="rate-item-line color-bg" />
                                </div>
                                <div className="rate-item-percent">5.0</div>
                              </div>
                              {/* rate item end*/}                                                        
                              {/* rate item*/}
                              <div className="rate-item fl-wrap">
                                <div className="rate-item-title fl-wrap"><span>Staf</span></div>
                                <div className="rate-item-bg" data-percent="80%">
                                  <div className="rate-item-line color-bg" />
                                </div>
                                <div className="rate-item-percent">4.0</div>
                              </div>
                              {/* rate item end*/}  
                              {/* rate item*/}
                              <div className="rate-item fl-wrap">
                                <div className="rate-item-title fl-wrap"><span>Facilities</span></div>
                                <div className="rate-item-bg" data-percent="90%">
                                  <div className="rate-item-line color-bg" />
                                </div>
                                <div className="rate-item-percent">4.5</div>
                              </div>
                              {/* rate item end*/} 
                            </div>
                            {/* review-score-detail-list end*/}
                          </div>
                        </div>
                        {/* reviews-score-wrap end */}   
                      </div>
                      <div className="list-single-main-item fl-wrap" id="sec4">
                        <div className="list-single-main-item-title fl-wrap">
                          <h3>Available Rooms</h3>
                        </div>
                        {/*   rooms-container */}
                        <div className="rooms-container fl-wrap">
                          {/*  rooms-item */}
                          <div className="rooms-item fl-wrap">
                            <div className="rooms-media">
                              <img src="../../../images/9.jpg" alt="" />
                              <div className="dynamic-gal more-photos-button" data-dynamicpath="[{'src': '../../../images/9.jpg'}, {'src': '../../../images/9.jpg'},{'src': '../../../images/9.jpg'}]">  View Gallery <span>3 photos</span> <i className="far fa-long-arrow-right" /></div>
                            </div>
                            <div className="rooms-details">
                              <div className="rooms-details-header fl-wrap">
                                <span className="rooms-price">$81 <strong> / person</strong></span>
                                <h3>Standard Family Room</h3>
                                <h5>Max Guests: <span>3 persons</span></h5>
                              </div>
                              <p>Morbi varius, nulla sit amet rutrum elementum, est elit finibus tellus, ut tristique elit risus at metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                              <div className="facilities-list fl-wrap">
                                <ul>
                                  <li><i className="fa fa-wifi" /><span>Free WiFi</span></li>
                                  <li><i className="fa fa-bath" /><span>1 Bathroom</span></li>
                                  <li><i className="fa fa-snowflake" /><span>Air conditioner</span></li>
                                  <li><i className="fa fa-tv" /><span> Tv Inside</span></li>
                                  <li><i className="fa fa-concierge-bell" /><span>Breakfast</span></li>
                                </ul>
                              
                              </div>
                            </div>
                          </div>
                          {/*  rooms-item end */}
                          {/*  rooms-item */}
                          {/*  rooms-item end */}   
                          {/*  rooms-item */}
                          {/*  rooms-item end */}                                                      
                        </div>
                        {/*   rooms-container end */}
                      </div>
                      {/* list-single-main-item end */}
                      {/* list-single-main-item */}   
                      {/* list-single-main-item end */}   
                      {/* list-single-main-item */}   
                      {/* list-single-main-item end */}                                    
                    </div>
                  </div>
                  {/*   datails end  */}
                  {/*   sidebar  */}
                  <div className="col-md-4">
                    {/*box-widget-wrap */}  
                    <div className="box-widget-wrap">
                      {/*box-widget-item */}
                      <div className="box-widget-item fl-wrap">
                        <div className="box-widget">
                          <div className="box-widget-content">
                            <div className="box-widget-item-header">
                              <h3> Book This Hostel</h3>
                            </div>
                            <form name="bookFormCalc" className="book-form custom-form">
                              <fieldset>
                                <div className="cal-item">
                                  <div className="listsearch-input-item">
                                    <label>Room Type</label>
                                    <select data-placeholder="Room Type" name="repopt" className="chosen-select no-search-select">
                                      <option value={0} defaultValue>Select Room</option>
                                      <option value={81}>Standard Family Room - 81$</option>
                                      <option value={122}>Superior Double Room - 122$</option>
                                      <option value={310}>Deluxe Single Room - 310$</option>
                                    </select>
                                    {/*data-formula */}
                                    <input type="text" name="item_total" className="hid-input" defaultValue data-form="{repopt}" />
                                  </div>
                                </div>
                                <div className="cal-item">
                                  <div className="bookdate-container  fl-wrap">
                                    <label> When </label>
                                    <input type="text" placeholder="Date In-Out" name="bookdates"  />
                                    <div className="bookdate-container-dayscounter"><i className="far fa-question-circle" /><span>Days : <strong>0</strong></span></div>
                                  </div>
                                </div>
                                <div className="cal-item">
                                  <div className="quantity-item fl-wrap">
                                    <label> Adults</label>
                                    <div className="quantity">
                                      <input type="number" name="qty3" min={0} max={3} step={1} defaultValue={0} />
                                      <input type="text" name="item_total" className="hid-input" defaultValue={0} data-form="{qty3} * {repopt} - {repopt}" />
                                    </div>
                                  </div>
                                  <div className="quantity-item fl-wrap fcit">
                                    <label> Children</label>
                                    <div className="quantity">
                                      <input type="number" name="qty2" min={0} max={3} step={1} defaultValue={0} />
                                      <select name="sale" className="hid-input">
                                        <option value=".7" defaultValue>sale</option>
                                      </select>
                                      <input type="text" name="item_total" className="hid-input" defaultValue={0} data-form="({repopt} * {sale})*{qty2}" />
                                    </div>
                                  </div>
                                </div>
                              </fieldset>
                              <input type="number" id="totaldays" name="qty5" className="hid-input" />
                              <div className="total-coast fl-wrap"><strong>Total Cost</strong> <span>₹ 8000</span></div>
                              <button className="btnaplly color2-bg book-btn">Book Now<i className="fa fa-paper-plane" /></button>
                            </form>
                          </div>
                        </div>
                      </div>
                      {/*box-widget-item end */}                                      
                      {/*box-widget-item */}
                      {/*box-widget-item end */}                                       
                      {/*box-widget-item */}
                      <div className="box-widget-item fl-wrap">
                        <div className="box-widget">
                          <div className="box-widget-content">
                            <div className="box-widget-item-header">
                              <h3> Contact Information</h3>
                            </div>
                            <div className="box-widget-list">
                              <ul>
                                <li><span><i className="fa fa-map-marker" /> Adress :</span> <a href="#">B.I.T. Block Madrasa I. R. Road, Bhendi Bazaar, Umerkhadi, Mumbai, Maharashtra 400003</a></li>
                                <li><span><i className="fa fa-phone" /> Phone :</span> <a href="#">+919757312624</a></li>
                                <li><span><i className="fa fa-envelope" /> Mail :</span> <a href="#">AlisaNoory@domain.com</a></li>
                              </ul>
                            </div>
                            <div className="list-widget-social">
                              <ul>
                                <li><a href="#" target="_blank"><i className="fab fa-facebook-f" /></a></li>
                                <li><a href="#" target="_blank"><i className="fab fa-twitter" /></a></li>
                                <li><a href="#" target="_blank"><i className="fab fa-vk" /></a></li>
                                <li><a href="#" target="_blank"><i className="fab fa-instagram" /></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*box-widget-item end */}                          
                      {/*box-widget-item */}
                      {/*box-widget-item end */}                             
                      {/*box-widget-item */}
                      <div className="box-widget-item fl-wrap">
                      </div>
                      {/*box-widget-item end */}    
                      {/*box-widget-item end */}   
                      {/*box-widget-item */}
                      {/*box-widget-item end */}                           
                      {/*box-widget-item */}
                      {/*box-widget-item end */}                              
                      {/*box-widget-item */}
                      {/*box-widget-item end */}                            
                    </div>
                    {/*box-widget-wrap end */}  
                  </div>
                  {/*   sidebar end  */}
                </div>
                {/*   row end  */}
              </div>
              {/*   container  end  */}
            </section>
            {/*  section  end*/}
          </div>
          {/* content end*/}
          <div className="limit-box fl-wrap" />
        </div>
        {/*wrapper end */}
        {/*footer */}
        {/*footer end */}
        {/*booking-modal-wrap */}   
        <div className="booking-modal-wrap">
          <div className="booking-modal-container">
            <div className="booking-modal-content fl-wrap">
              <div className="booking-modal-info">
                <div className="booking-modal-close color-bg"><i className="fa fa-times" aria-hidden="true" /></div>
                <div className="bg" data-bg="images/bg/24.jpg" />
                <div className="overlay" />
                <div className="booking-modal-info_content fl-wrap">
                  <h4>Luxury Hostel Spa</h4>
                  <ul>
                    <li>Date : <span>05.05.2020</span></li>
                    <li>Persons : <span>2</span></li>
                    <li>Price : <span>$120</span> </li>
                  </ul>
                </div>
              </div>
              <div className="bookiing-form-wrap">
                <ul id="progressbar">
                  <li className="active"><span>01.</span>Personal Info</li>
                  <li><span>02.</span>Billing Address</li>
                  <li><span>03.</span>Payment Method</li>
                  <li><span>04.</span>Confirm</li>
                </ul>
                {/*   list-single-main-item */}
                <div className="list-single-main-item fl-wrap hidden-section tr-sec">
                  <div className="profile-edit-container">
                    <div className="custom-form">
                      <form>
                        <fieldset className="fl-wrap book_mdf">
                          <div className="list-single-main-item-title fl-wrap">
                            <h3>Your personal Information</h3>
                          </div>
                          <div className="row">
                            <div className="col-sm-6">
                              <label>First Name <i className="far fa-user" /></label>
                              <input type="text" placeholder="Your Name" defaultValue />                                                  
                            </div>
                            <div className="col-sm-6">
                              <label>Last Name <i className="far fa-user" /></label>
                              <input type="text" placeholder="Your Last Name" defaultValue /> 
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-6">
                              <label>Email Address<i className="far fa-envelope" /></label>
                              <input type="text" placeholder="yourmail@domain.com" defaultValue />                                                  
                            </div>
                            <div className="col-sm-6">
                              <label>Phone<i className="far fa-phone" /></label>
                              <input type="text" placeholder={87945612233} defaultValue />
                            </div>
                          </div>
                          <div className="log-massage">Existing Customer? <a href="#" className="modal-open">Click here to login</a></div>
                          <div className="log-separator fl-wrap"><span>or</span></div>
                          <div className="soc-log fl-wrap">
                            <p>For faster login or register use your social account.</p>
                            <a href="#" className="facebook-log"><i className="fab fa-facebook-f" />Connect with Facebook</a>
                          </div>
                          <div className="filter-tags">
                            <input id="check-a" type="checkbox" name="check" />
                            <label htmlFor="check-a">By continuing, you agree to the<a href="#" target="_blank">Terms and Conditions</a>.</label>
                          </div>
                          <span className="fw-separator" />
                          <a href="#" className="next-form action-button btn no-shdow-btn color-bg">Billing Address <i className="fal fa-angle-right" /></a>
                        </fieldset>
                        <fieldset className="fl-wrap book_mdf">
                          <div className="list-single-main-item-title fl-wrap">
                            <h3>Billing Address</h3>
                          </div>
                          <div className="row">
                            <div className="col-sm-6">
                              <label>City <i className="fal fa-globe-asia" /></label>
                              <input type="text" placeholder="Your city" defaultValue />                                                  
                            </div>
                            <div className="col-sm-6">
                              <label>Country </label>
                              <div className="listsearch-input-item ">
                                <select data-placeholder="Your Country" className="chosen-select no-search-select">
                                  <option>United states</option>
                                  <option>Asia</option>
                                  <option>Australia</option>
                                  <option>Europe</option>
                                  <option>South America</option>
                                  <option>Africa</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-12">
                              <label>Street <i className="fal fa-road" /> </label>
                              <input type="text" placeholder="Your Street" defaultValue />                                                  
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-8">
                              <label>State<i className="fal fa-street-view" /></label>
                              <input type="text" placeholder="Your State" defaultValue />                                                  
                            </div>
                            <div className="col-sm-4">
                              <label>Postal code<i className="fal fa-barcode" /> </label>
                              <input type="text" placeholder={123456} defaultValue />
                            </div>
                          </div>
                          <div className="list-single-main-item-title fl-wrap">
                            <h3>Addtional Notes</h3>
                          </div>
                          <textarea cols={40} rows={3} placeholder="Notes" defaultValue={""} />
                          <span className="fw-separator" />
                          <a href="#" className="previous-form action-button back-form   color-bg"><i className="fal fa-angle-left" /> Back</a>
                          <a href="#" className="next-form back-form action-button btn no-shdow-btn color-bg">Payment Step <i className="fal fa-angle-right" /></a>
                        </fieldset>
                        <fieldset className="fl-wrap book_mdf">
                          <div className="list-single-main-item-title fl-wrap">
                            <h3>Payment method</h3>
                          </div>
                          <div className="row">
                            <div className="col-sm-6">
                              <label>Cardholder's Name<i className="far fa-user" /></label>
                              <input type="text" placeholder defaultValue="Adam Kowalsky" />                                                  
                            </div>
                            <div className="col-sm-6">
                              <label>Card Number <i className="fal fa-credit-card-front" /></label>
                              <input type="text" placeholder="xxxx-xxxx-xxxx-xxxx" defaultValue /> 
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-3">
                              <label>Expiry Month<i className="fal fa-calendar" /></label>
                              <input type="text" placeholder="MM" defaultValue />                                                  
                            </div>
                            <div className="col-sm-3">
                              <label>Expiry Year<i className="fal fa-calendar" /></label>
                              <input type="text" placeholder="YY" defaultValue />                                                  
                            </div>
                            <div className="col-sm-2">
                              <label>CVV / CVC *<i className="fal fa-credit-card" /></label>
                              <input type="password" placeholder="***" defaultValue /> 
                            </div>
                            <div className="col-sm-4">
                              <p style={{paddingTop: '20px'}}>*Three digits number on the back of your card</p>
                            </div>
                          </div>
                          <div className="log-separator fl-wrap"><span>or</span></div>
                          <div className="soc-log fl-wrap">
                            <p>Select Other Payment Method</p>
                            <a href="#" className="paypal-log"><i className="fab fa-paypal" />Pay With Paypal</a>
                          </div>
                          <span className="fw-separator" />
                          <a href="#" className="previous-form  back-form action-button    color-bg"><i className="fal fa-angle-left" /> Back</a>
                          <a href="#" className="next-form  action-button btn color2-bg no-shdow-btn">Confirm and Pay<i className="fal fa-angle-right" /></a>                                               
                        </fieldset>
                        <fieldset className="fl-wrap book_mdf">
                          <div className="list-single-main-item-title fl-wrap">
                            <h3>Confirmation</h3>
                          </div>
                          <div className="success-table-container">
                            <div className="success-table-header fl-wrap">
                              <i className="fal fa-check-circle decsth" />
                              <h4>Thank you. Your reservation has been received.</h4>
                              <div className="clearfix" />
                              <p>Your payment has been processed successfully.</p>
                              <br />
                              <a href="invoice.html" target="_blank" className="color-bg">View Invoice</a>
                            </div>
                          </div>
                          <span className="fw-separator" />
                          <a href="#" className="previous-form action-button  back-form   color-bg"><i className="fal fa-angle-left" /> Back</a>
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
                {/*   list-single-main-item end */}
              </div>
            </div>
          </div>
        </div>
        <div className="bmw-overlay" />
        {/*booking-modal-wrap end */}
        {/*register form */}
        <div className="main-register-wrap modal">
          <div className="reg-overlay" />
          <div className="main-register-holder">
            <div className="main-register fl-wrap">
              <div className="close-reg color-bg"><i className="fal fa-times" /></div>
              <ul className="tabs-menu">
                <li className="current"><a href="#tab-1"><i className="fal fa-sign-in-alt" /> Login</a></li>
                <li><a href="#tab-2"><i className="fal fa-user-plus" /> Register</a></li>
              </ul>
              {/*tabs */}                       
              <div id="tabs-container">
                <div className="tab">
                  {/*tab */}
                  <div id="tab-1" className="tab-content">
                    <h3>Sign In <span>Easy<strong>Book</strong></span></h3>
                    <div className="custom-form">
                      <form method="post" name="registerform">
                        <label>Username or Email Address <span>*</span> </label>
                        <input name="email" type="text"defaultValue />
                        <label>Password <span>*</span> </label>
                        <input name="password" type="password" defaultValue />
                        <button type="submit" className="log-submit-btn"><span>Log In</span></button>
                        <div className="clearfix" />
                        <div className="filter-tags">
                          <input id="check-a" type="checkbox" name="check" />
                          <label htmlFor="check-a">Remember me</label>
                        </div>
                      </form>
                      <div className="lost_password">
                        <a href="#">Lost Your Password?</a>
                      </div>
                    </div>
                  </div>
                  {/*tab end */}
                  {/*tab */}
                  <div className="tab">
                    <div id="tab-2" className="tab-content">
                      <h3>Sign Up <span>Easy<strong>Book</strong></span></h3>
                      <div className="custom-form">
                        <form method="post" name="registerform" className="main-register-form" id="main-register-form2">
                          <label>Full Name <span>*</span> </label>
                          <input name="name" type="text" defaultValue />
                          <label>Email Address <span>*</span></label>
                          <input name="email" type="text" defaultValue />
                          <label>Password <span>*</span></label>
                          <input name="password" type="password" defaultValue />
                          <button type="submit" className="log-submit-btn"><span>Register</span></button>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/*tab end */}
                </div>
                {/*tabs end */}
                <div className="log-separator fl-wrap"><span>or</span></div>
                <div className="soc-log fl-wrap">
                  <p>For faster login or register use your social account.</p>
                  <a href="#" className="facebook-log"><i className="fab fa-facebook-f" />Connect with Facebook</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*register form end */}
        {/*ajax-modal-container*/}
        <div className="ajax-modal-overlay" />
        <div className="ajax-modal-container">
          {/*ajax-modal */}
          <div className="ajax-loader">
            <div className="ajax-loader-cirle" />
          </div>
          <div id="ajax-modal" className="fl-wrap"> 
          </div>
          {/*ajax-modal-container end */}
        </div>
        {/*ajax-modal-container end */}
        <Footer />
      </div>
    );
  }
}





export default Description;