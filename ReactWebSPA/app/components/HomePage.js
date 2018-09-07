import React from 'React';
var CategoryMenu = require('CategoryMenu');
var ProductHomePage = require('ProductHomePage');
var ProductHomePageBig = require('ProductHomePageBig');
var SlideBanner = require('SlideBanner');

class HomePage extends React.Component{
  render(){
    return(
      <div>
            <span>Sliders</span>
            <SlideBanner />
            <CategoryMenu />
            <div className="featured-product-area-section featured-product-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12">
                            <div className="area-title">
                                <h3>Mũ bảo hộ lao động</h3>
                            </div>
                        </div>
                        <div className="featured-product">
                            <ProductHomePage category="1021" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="two-banner-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6">
                            <div className="banner-left">
                                <div className="banner-image">
                                    <a href="#">
                                        <img src="img/banner/cms16.png" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6">
                            <div className="banner-right">
                                <div className="banner-image">
                                    <a href="#">
                                        <img src="img/banner/cms17.png" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="best-sellar-area-section featured-product-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12">
                            <div className="area-title">
                                <h3>BESTSELLER</h3>
                            </div>
                        </div>
                        <div className="featured-product">
                            <ProductHomePage category="1024" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="camera-and-cosmatic-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6">
                            <div className="area-title">
                                <h3>Giày an toàn</h3>
                            </div>
                            <div className="camera-area">
                                <p className="extra-link">
                                    <a href="#"><i className="fa fa-bar-chart"></i>10 products here</a>
                                    <a href="#"><i className="fa fa-star-o"></i>View more in category</a>
                                </p>
                                <div className="row">
                                    <ProductHomePageBig category="1026" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6">
                            <div className="area-title">
                                <h3>Găng bảo hộ</h3>
                            </div>
                            <div className="cosmatic-area">
                                <p className="extra-link">
                                    <a href="#"><i className="fa fa-bar-chart"></i>10 products here</a>
                                    <a href="#"><i className="fa fa-star-o"></i>View more in category</a>
                                </p> 
                                <div className="row">
                                    <ProductHomePageBig category="2020" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
      </div>      
    )
  }
}
module.exports = HomePage;
