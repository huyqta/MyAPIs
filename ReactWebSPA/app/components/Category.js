var ProductInCategory = require('ProductInCategory');
import React from 'React';

class Category extends React.Component{
  render(){
    return(
        <div className="page-content">
            <div className="breadcume-area">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="breadcrumb">
                                <a title="Return to Home" href="#/" className="home"><i className="fa fa-home"></i></a>
                                <span className="navigation-pipe">&gt;</span>
                                <span className="cat-name">Electronics</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shop-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <div id="content-shop" className="categori-content">
                                <div className="categori-baner">
                                    <img src="img/shop/sports-outdoors.jpg" alt="" />
                                </div>
                                <h1 className="page-heading product-listing"><span className="cat-name">Electronics</span><span className="heading-counter">There are 17 products.</span>
                                </h1>
                                
                                <div className="catagori-short">
                                    <ul id="gridlist" className="nav nav-tabs" data-tabs="tabs">
                                        <li className="active"><a href="#grid" data-toggle="tab"><i className="fa fa-th-large"></i></a></li>
                                        <li><a href="#list" data-toggle="tab"><i className="fa fa-th-list"></i></a></li>
                                    </ul>
                                    <div className="chose-box">
                                        <p className="selector1 hidden-xs">
                                            <label>Sort by</label>
                                            <select className="selectProductSort form-control" id="selectProductSort1">
                                                <option defaultValue="selected" value="position:asc">--</option>
                                                <option value="price:asc">Price: Lowest first</option>
                                                <option value="price:desc">Price: Highest first</option>
                                                <option value="name:asc">Product Name: A to Z</option>
                                                <option value="name:desc">Product Name: Z to A</option>
                                                <option value="quantity:desc">In stock</option>
                                                <option value="reference:asc">Reference: Lowest first</option>
                                                <option value="reference:desc">Reference: Highest first</option>
                                            </select>
                                        </p>
                                        <p className="selector1 selector2">
                                            <label>Show</label>
                                            <select className="selectProductSort form-control" id="selectProductSort2">
                                                <option defaultValue="selected" value="position:asc">12</option>
                                                <option value="price:asc">24</option>
                                            </select>
                                        </p>
                                    </div>
                                </div>
                                
                                <div id="my-tab-content" className="tab-content">
                                    <div id="grid" className="tab-pane active categoti-grid-view row">
                                        <ProductInCategory category={this.props.match.params.uid} type='grid' />
                                    </div>
                                    <div id="list" className="tab-pane categori-list-view row">
                                        <ProductInCategory category={this.props.match.params.uid} type='list' />
                                    </div>
                                </div>
                                <div className="categori-show-item">
                                    <div className="cat-show-item">
                                        <p>Showing 1 - 8 of 8 items</p>
                                    </div>
                                    <div className="cat-show-button">
                                        <a className="cat-button" href="#"><span>Compare(0)<i className="fa fa-angle-right"></i></span></a>
                                    </div>
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

module.exports = Category;
