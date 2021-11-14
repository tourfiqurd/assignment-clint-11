import React from 'react';
import { Link } from 'react-router-dom';
import "./Pricing.css"

const Pricing = () => {
    return (
        <div>


            <div id="generic_price_table">
                <section>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">

                                <div class="price-heading clearfix">
                                    <h1>Our Pricing Table</h1>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="container">


                        <div class="row">
                            <div class="col-md-4">


                                <div class="generic_content clearfix">


                                    <div class="generic_head_price clearfix">


                                        <div class="generic_head_content clearfix">


                                            <div class="head_bg"></div>
                                            <div class="head">
                                                <span>Basic</span>
                                            </div>


                                        </div>



                                        <div class="generic_price_tag clearfix">
                                            <span class="price">
                                                <span class="sign">$</span>
                                                <span class="currency">99</span>
                                                <span class="cent">.99</span>
                                                <span class="month">/MON</span>
                                            </span>
                                        </div>


                                    </div>



                                    <div class="generic_feature_list">
                                        <ul>
                                            <li><span>NORMAL</span> HOUSE</li>
                                            <li><span>NORMAL</span> RESORT</li>
                                            <li><span>NORMAL</span> CAR</li>
                                            <li><span>NORMAL</span>PLANE</li>
                                            <li><span>24/7</span> SUPPORT</li>
                                        </ul>
                                    </div>



                                    <div class="generic_price_btn clearfix">
                                        <Link to="/login" class="" href="">Login</Link>
                                    </div>


                                </div>


                            </div>

                            <div class="col-md-4">


                                <div class="generic_content active clearfix">


                                    <div class="generic_head_price clearfix">


                                        <div class="generic_head_content clearfix">


                                            <div class="head_bg"></div>
                                            <div class="head">
                                                <span>Standard</span>
                                            </div>


                                        </div>


                                        <div class="generic_price_tag clearfix">
                                            <span class="price">
                                                <span class="sign">$</span>
                                                <span class="currency">199</span>
                                                <span class="cent">.99</span>
                                                <span class="month">/MON</span>
                                            </span>
                                        </div>


                                    </div>



                                    <div class="generic_feature_list">
                                        <ul>

                                            <li><span>MEDIUM</span> HOUSE</li>
                                            <li><span>MEDIUM</span> RESORT</li>
                                            <li><span>MEDIUM</span> CAR</li>
                                            <li><span>MEDIUM</span>PLANE</li>
                                            <li><span>24/12</span> SUPPORT</li>
                                        </ul>
                                    </div>



                                    <div class="generic_price_btn clearfix">
                                        <Link to="/login" class="" href="">Login</Link>
                                    </div>


                                </div>


                            </div>
                            <div class="col-md-4">


                                <div class="generic_content clearfix">


                                    <div class="generic_head_price clearfix">


                                        <div class="generic_head_content clearfix">


                                            <div class="head_bg"></div>
                                            <div class="head">
                                                <span>Unlimited</span>
                                            </div>


                                        </div>



                                        <div class="generic_price_tag clearfix">
                                            <span class="price">
                                                <span class="sign">$</span>
                                                <span class="currency">299</span>
                                                <span class="cent">.99</span>
                                                <span class="month">/MON</span>
                                            </span>
                                        </div>


                                    </div>



                                    <div class="generic_feature_list">
                                        <ul>
                                            <li><span>HIFI</span> HOUSE</li>
                                            <li><span>HIFI</span> RESORT</li>
                                            <li><span>HIFI</span> CAR</li>
                                            <li><span>HIFI</span>PLANE</li>
                                            <li><span>24/24</span> SUPPORT</li>
                                        </ul>
                                    </div>



                                    <div class="generic_price_btn clearfix">
                                        <Link to="/login" class="" href="">Login</Link>
                                    </div>


                                </div>


                            </div>
                        </div>


                    </div>
                </section>

            </div>

        </div>
    );
};

export default Pricing;