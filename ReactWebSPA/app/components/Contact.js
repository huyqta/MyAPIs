import React from 'React';

class Contact extends React.Component{
  render(){
    return(
      <div className="page-content contact">
                <div className="breadcume-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="breadcrumb">
                                    <a title="Return to Home" href="javascript:if(confirm('http://devitems.com/tf/dilima-preview/dilima/index.html  \n\nThis file was not retrieved by BackStreet browser, because it is addressed on a domain or path outside the boundaries set for its Project.  \n\nDo you want to open it from the server?'))window.location='http://devitems.com/tf/dilima-preview/dilima/index.html'" className="home"><i className="fa fa-home"></i></a>
                                    <span className="navigation-pipe">&gt;</span>
                                    Liên hệ
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <h4 className="cart-title">Liên hệ</h4>
                            <div className="contact-map">
                                <div id="googleMap"></div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-from-atea">
                        <div className="form-and-info">
                            <div className="row">
                                <div className="col-xs-12 col-sm-4 col-md-4">
                                    <div className="contactDetails contactHead">
                                        <h3>Thông tin liên hệ</h3>
                                        <p>
                                            <span className="iconContact"><i className="fa fa-map-marker"></i></span>
                                            146 Triệu Nữ Vương, Phường Hải Châu 2, <br /> Quận Hải Châu, TP Đà Nẵng.
                                        </p>
                                        <p>
                                            <span className="iconContact"><i className="fa fa-phone"></i></span>
                                            <strong>Điện thoại:</strong> (0236) 3839 939 / 0935 445 545 <br /> <strong>Fax:</strong> (0236) 3839 939
                                        </p>
                                        <p>
                                            <span className="iconContact"><i className="fa fa-envelope-o"></i></span>
                                            <strong>Email:</strong> kimhuyhoang.dng@gmail.com <br /> <strong>Website:</strong> www.kimhuyhoang.net
                                        </p>
                                    </div>
                                    <div className="social-area contactHead">
                                        <h3>Mạng xã hội</h3>
                                        <ul className="socila-icon">
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-rss"></i></a></li>
                                            <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-8 col-md-8">
                                    <div className="contactfrom">
                                        <h3>Gủi tin</h3>
                                        <form className="">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <input type="text" placeholder="Full name" id="InputName" className="form-control" />
                                                </div>
                                                <div className="col-md-6 contactemail">
                                                    <input type="email" placeholder="Email" id="InputEmail" className="form-control" />
                                                </div>
                                                <div className="col-md-12">
                                                    <textarea placeholder="Massage" rows="13" className="form-control"></textarea>
                                                </div>
                                            </div>
                                            <button className="btn btnContact" type="submit">Gửi tin</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
  }
  componentDidUpdate(){
        function initialize() {
          var mapOptions = {
            zoom: 15,
            scrollwheel: false,
            center: new google.maps.LatLng(16.065441, 108.216497)
          };
          var map = new google.maps.Map(document.getElementById('googleMap'),
              mapOptions);
          var marker = new google.maps.Marker({
            position: map.getCenter(),
            animation:google.maps.Animation.BOUNCE,
            icon: 'img/map-marker.png',
            map: map
          });
        }
        google.maps.event.addDomListener(window, 'load', initialize);
  }
}

module.exports = Contact;
