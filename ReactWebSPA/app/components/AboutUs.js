import React from 'React';

class AboutUs extends React.Component{
  render(){
    return(
      <div>
          <div className="page-content">
                <div className="breadcume-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="breadcrumb">
                                    <a title="Return to Home" href="#/" className="home"><i className="fa fa-home"></i></a>
                                    <span className="navigation-pipe">&gt;</span>
                                    Giới thiệu
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-us-content">
                    <div className="container">
                        <div className="row">
                            {/* <div className="col-xs-12 col-sm-12 col-md-12">
                                <h4 className="cart-title">About Us</h4>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6">
                                <div className="about-us-slide">
                                    <div className="item"><img src="img/about/about-us.jpg" alt="about us baner" /></div>
                                    <div className="item"><img src="img/about/about-su2.jpg" alt="about us baner" /></div>
                                    <div className="item"><img src="img/about/startup-photos.jpg" alt="about us baner" /></div>
                                </div>
                            </div> */}
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <div className="who-we-are-title">
                                    <h3><span>Công ty TNHH TM & DV Kim Huy Hoàng</span></h3>
                                </div>
                                <div className="who-we-are-text">
                                    <p><strong>Công ty TNHH TM & DV Kim Huy Hoàng thành lập năm 2015.</strong></p>
                                    <p>Chuyên nhập khẩu, phân phối, cung ứng các sản phẩm bảo hộ lao động, thiết bị an toàn. Đồ bảo hộ lao động dành cho ngành xây dựng, Thiết bị an toàn dành cho hầm lò, nhà xưởng, Trang thiết bị pccc, May đo trang phục cho công nhân, kỹ sư, đồng phục bệnh viện, đồng phục cho ngành khai thác. Dầu khí, xăng dầu...</p>
                                    <strong>Một số sản phẩm thế mạnh của bảo hộ lao động Kim Huy Hoàng như:</strong>
                                    <ul className="list-unstyle">
                                        <li>- Sản xuất lưới an toàn, lưới bao che công trình xây dựng </li>
                                        <li>- Sản xuất thẻ treo giàn giáo</li>
                                        <li>- Nhập khẩu, phân phối giày bảo hộ lao động</li>
                                        <li>- Sản xuất, may quần áo bảo hộ lao động</li>
                                        <li>- Dây thừng dây dù</li>
                                        <li>- Sản xuất dây đai an toàn, dây tăng đơ, dây cẩu hàng</li>
                                    </ul>
                                    <br />
                                    <p><strong>VĂN PHÒNG:</strong></p>
                                    <address>
                                        Địa chỉ: 146 Triệu Nữ Vương, Phường Hải Châu 2, Quận Hải Châu, TP Đà Nẵng<br />
                                        Điện thoại: (0236) 3839 939 / 0935 445 545<br />
                                        Fax: (0236) 3839 939 <br />
                                        Email: <a href="mailto:kimhuyhoang.dng@gmail.com">kimhuyhoang.dng@gmail.com</a>.<br />
                                    </address>
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

module.exports = AboutUs;
