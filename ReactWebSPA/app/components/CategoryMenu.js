var ProductInCategory = require('ProductInCategory');

import React from 'React';

class CategoryMenu extends React.Component{
    constructor(){
        super();
        this.state = {
            categories:[],
        };
    }

    componentDidMount() {
        fetch('http://localhost:5000/api/v1/Category/Categories')
            .then(results => {
                return results.json();
            }).then(data => {
                console.log(data);
                let category =  data.map((cat) => {
                    return ( 
                        <li key={cat.id}><a href={"#/category/" + cat.id} className="single-menu" categoryname={cat.name}>{cat.name}</a></li>
                )
            })
            this.setState({categories: category});
    })
}
  render() {
    // const listCategoryLI = categories.map((cat) => <li><a href="#" className="single-menu">{cat} 123</a></li>);
    return(
      <div>
          <div className="categori-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-4 col-md-3">
                            <div className="categori-menu">
                                <div className="sidebar-menu-title">
                                    <h2><i className="fa fa-th-list"></i>Danh mục sản phẩm</h2>
                                </div>
                                <div className="sidebar-menu">
                                    <ul>
                                        {this.state.categories}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-8 col-md-6">
                            <div className="categori-banner">
                                <div className="banner-left">
                                    <div className="banner-image">
                                        <a href="#" style={{background:'#BBD615'}}>
                                            <img src="img/banner/cms11.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="banner-image">
                                        <a href="#" style={{background:'#4FB2F5'}}>
                                            <img src="img/banner/cms12.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="banner-right">
                                    <div className="banner-image">
                                        <a href="#" style={{background:'#2E42BB'}}>
                                            <img src="img/banner/cms13.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-3">
                            <div className="categori-slide-product">
                                <div className="slide-product-title">
                                    <h3>sale off</h3>
                                </div>
                                <div className="slide-product">
                                    <div className="slide-product-item">
                                        <div className="item3">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="img/product-mini/printed-summer-dress1.jpg" alt="" />
                                                </a>
                                                <span className="price-percent-reduction">-5%</span>
                                            </div>
                                            <div className="product-info">
                                                <a href="single-product.html">Printed Summer Dress</a>
                                            </div>
                                        </div>
                                        <div className="item3">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="img/product-mini/printed-chiffon-dress3.jpg" alt="" />
                                                </a>
                                                <span className="price-percent-reduction">-20%</span>
                                            </div>
                                            <div className="product-info">
                                                <a href="single-product.html">printed chiffon dress</a>
                                            </div>
                                        </div>
                                        <div className="item3">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="img/product-mini/printed-chiffon-dress5.jpg" alt="" />
                                                </a>
                                                <span className="price-percent-reduction">-20%</span>
                                            </div>
                                            <div className="product-info">
                                                <a href="single-product.html">Printed Summer Dress</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide-product-item">
                                        <div className="item3">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="img/product-mini/printed-chiffon-dress2.jpg" alt="" />
                                                </a>
                                                <span className="price-percent-reduction">-20%</span>
                                            </div>
                                            <div className="product-info">
                                                <a href="single-product.html">Printed Summer Dress</a>
                                            </div>
                                        </div>
                                        <div className="item3">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="img/product-mini/printed-chiffon-dress4.jpg" alt="" />
                                                </a>
                                                <span className="price-percent-reduction">-20%</span>
                                            </div>
                                            <div className="product-info">
                                                <a href="single-product.html">Printed Summer Dress</a>
                                            </div>
                                        </div>
                                        <div className="item3">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="img/product-mini/printed-chiffon-dress6.jpg" alt="" />
                                                </a>
                                                <span className="price-percent-reduction">-20%</span>
                                            </div>
                                            <div className="product-info">
                                                <a href="single-product.html">Printed Summer Dress</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide-product-item">
                                        <div className="item3">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="img/product-mini/printed-chiffon-dress7.jpg" alt="" />
                                                </a>
                                                <span className="price-percent-reduction">-20%</span>
                                            </div>
                                            <div className="product-info">
                                                <a href="single-product.html">Printed Summer Dress</a>
                                            </div>
                                        </div>
                                        <div className="item3">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="img/product-mini/printed-chiffon-dress11.jpg" alt="" />
                                                </a>
                                                <span className="price-percent-reduction">-20%</span>
                                            </div>
                                            <div className="product-info">
                                                <a href="single-product.html">Printed Summer Dress</a>
                                            </div>
                                        </div>
                                        <div className="item3">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="img/product-mini/printed-chiffon-dress10.jpg" alt="" />
                                                </a>
                                                <span className="price-percent-reduction">-20%</span>
                                            </div>
                                            <div className="product-info">
                                                <a href="single-product.html">Printed Summer Dress</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide-product-item">
                                        <div className="item3">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="img/product-mini/printed-chiffon-dress8.jpg" alt="" />
                                                </a>
                                                <span className="price-percent-reduction">-20%</span>
                                            </div>
                                            <div className="product-info">
                                                <a href="single-product.html">Printed Summer Dress</a>
                                            </div>
                                        </div>
                                        <div className="item3">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="img/product-mini/printed-chiffon-dress4.jpg" alt="" />
                                                </a>
                                                <span className="price-percent-reduction">-20%</span>
                                            </div>
                                            <div className="product-info">
                                                <a href="single-product.html">Printed Summer Dress</a>
                                            </div>
                                        </div>
                                        <div className="item3">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="img/product-mini/printed-chiffon-dress12.jpg" alt="" />
                                                </a>
                                                <span className="price-percent-reduction">-20%</span>
                                            </div>
                                            <div className="product-info">
                                                <a href="single-product.html">Printed Summer Dress</a>
                                            </div>
                                        </div>
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

module.exports = CategoryMenu;
