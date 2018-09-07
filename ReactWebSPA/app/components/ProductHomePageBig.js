import React from 'React';

class ProductHomePage extends React.Component{
    constructor(){
        super();
        this.state = {
            MuBaoHoLaoDong:[],
        };
    }

    componentDidMount() {
        fetch('http://localhost:5000/api/v1/Product/api/products/category/' + this.props.category)
            .then(results => {
                return results.json();
            }).then(data => {
                let muBHLD =  data.map((cat) => {                    
                    var image = cat.imageUrl === null ? 'img/sorry-image-not-available.png' : cat.imageUrl;
                    return (
                        <div className="featured-inner" key={cat.id}>
                            <div className="featured-image">
                                <a href="single-product.html">
                                    <img src={image} alt="" />
                                </a>
                                <span className="price-percent-reduction">-20%</span>
                            </div>
                            <div className="featured-info">
                                <a href="single-product.html">{cat.name}</a>
                                <p className="reating">
                                    <span className="rate">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </span>
                                </p>
                                <span className="price">{cat.Price}</span>
                                <div className="featured-button">
                                    <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                    <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                    <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                </div>
                            </div>
                        </div>
                )
            })
            this.setState({MuBaoHoLaoDong: muBHLD});
    })
}
componentDidUpdate() {
    if (this.props.category === "1026"){
        $(".camera-area .camera-slide").owlCarousel({
            navigation : true,
            pagination : false,
            slideSpeed : 600,
            paginationSpeed : 400,
            items : 2,
            itemsDesktop : [1199,2],
            itemsDesktopSmall : [979,1], 
            itemsTablet: [767,1], 
            itemsMobile : [480,1],
            navigationText : ['<i class="icon-left-open"><i class="fa fa-angle-left"></i></i>','<i class="icon-right-open"><i class="fa fa-angle-right"></i></i>'] 
        }); 
    }
    if (this.props.category === "2020"){
        $(".cosmatic-area .camera-slide").owlCarousel({
            navigation : true,
            pagination : false,
            slideSpeed : 600,
            paginationSpeed : 400,
            items : 2,
            itemsDesktop : [1199,2],
            itemsDesktopSmall : [979,1], 
            itemsTablet: [767,1], 
            itemsMobile : [480,1],
            navigationText : ['<i class="icon-left-open"><i class="fa fa-angle-left"></i></i>','<i class="icon-right-open"><i class="fa fa-angle-right"></i></i>'] 
        }); 
    }
}
  render(){
    return(
        <div className="camera-slide featured-product-area">
            {this.state.MuBaoHoLaoDong}
        </div>
    )
  }
}

module.exports = ProductHomePage;
