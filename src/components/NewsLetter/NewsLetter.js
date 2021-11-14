import React from 'react';
import "./NewsLetter.css"

const NewsLetter = () => {
    return (
        <div>
            <div class="newsletter-subscribe mt-5 container">
                <div class="container">
                    <div class="intro">
                        <h2 class="text-center newsletter">Subscribe to our Newsletter</h2>
                        <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                    <form class="form-inline" method="post">
                        <div class="form-group"><input class="form-control" type="email" name="email" placeholder="Your Email" /></div>
                        <div class="form-group"><button class="btn btn-primary" type="button">Subscribe </button></div>
                    </form>
                </div>
            </div>


        </div>
    );
};

export default NewsLetter;