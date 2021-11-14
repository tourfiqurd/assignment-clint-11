import React from 'react';

const Carosel = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active ">
                        <img src="http://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2018/09/bgn-home-slider-01.jpg" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-flex justify-content-center align-items-center p-5">
                            <div className="m-lg-5">
                                <h5>France</h5>
                                <h1 className="fw-bold">Magnificent Paris</h1>
                                <p>Recognizable,lovely,passionate and forever yours</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="http://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2018/09/bgn-home-slider-02.jpg" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-flex justify-content-center align-items-center p-5">
                            <div className="m-lg-5">
                                <h5>France</h5>
                                <h1 className="fw-bold">Magnificent Paris</h1>
                                <p>Recognizable,lovely,passionate and forever yours</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="http://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2018/09/bgn-home-slider-03.jpg" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-flex justify-content-center align-items-center p-5">
                            <div className="m-lg-5 m-sm-1">
                                <h5>France</h5>
                                <h1 className="fw-bold">Magnificent Paris</h1>
                                <p>Recognizable,lovely,passionate and forever yours</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    );
};

export default Carosel;