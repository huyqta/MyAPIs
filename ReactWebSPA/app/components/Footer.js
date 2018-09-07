import React from 'React';

class Footer extends React.Component{
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
                let category = data.map((cat) => {
                    return (
                        <li key={cat.id}><a href="#"><i className="fa fa-star"></i> {cat.name}</a></li>
                )
            })
            this.setState({categories: category});
    })
}
  render(){
    return(
            <footer>
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-3">
                                <div className="footer-top-box">
                                    <i className="fa fa-phone-square"></i>
                                    <p>+ 84(236) 3 839 939</p>
                                    <p>+ 84(935) 44 55 45</p>                                    
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-3">
                                <div className="footer-top-box">
                                    <i className="fa fa-clock-o"></i>
                                    {/* <span>Giờ mở cửa</span> */}
                                    <p>Thứ 2 - Thứ 7: 7.30 - 18.00</p>
                                    <p>Chủ Nhật: 7.30 - 12.00</p>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-3">
                                <div className="footer-top-box">
                                    <i className="fa fa-paper-plane"></i>
                                    <span>Giao hàng miễn phí</span>
                                    <p>Cho đơn hàng trên 500.000 VND</p>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-3">
                                <div className="footer-top-box last">
                                    <i className="fa fa-history"></i>
                                    <span>Hoàn tiền 100%</span>
                                    <p>Trong vòng 30 ngày sau khi giao hàng</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-medil">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6">
                                <div className="footer-categori">
                                    <h4>Danh mục sản phẩm</h4>
                                    <ul>
                                        {this.state.categories}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6">
                                <div className="info-box">
                                    <h4>THÔNG TIN CỬA HÀNG</h4>
                                    <ul>
                                        <li>Công ty TNHH TM & DV Kim Huy Hoàng</li>
                                        <li>Đà Nẵng - Việt Nam</li>
                                        <li>0935 44 55 45</li>
                                        <li><a href="mailto:kimhuyhoang.dng@gmail.com">mailto:kimhuyhoang.dng@gmail.com</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6">
                                <div className="copyright-text">
                                    <p>Copyright &copy; 2015 <a href="http://bootexperts.com">BootExperts</a>. All rights reserved.</p>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6">
                                <div className="footer-card pull-right">
                                    <img src="img/payment.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
    )
  }
}

module.exports = Footer;
