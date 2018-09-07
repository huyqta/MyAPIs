import React from 'React';

class SlideBanner extends React.Component{
    componentDidMount(){

    }
    render(){
        return(
            <div className="slider-area">
                <div id="slider" className="nivoSlider">
                    <img style={{display:'none'}} src="img/slider/banner-11.jpg"  data-thumb="img/slider/banner-11.jpg"  alt="" title="#htmlcaption1"/>      
                    <img style={{display:'none'}} src="img/slider/banner-12.jpg"  data-thumb="img/slider/banner-12.jpg"  alt="" title="#htmlcaption2"/>
                    <img style={{display:'none'}} src="img/slider/banner-13.jpg"  data-thumb="img/slider/banner-13.jpg"  alt="" title="#htmlcaption3"/>      
                    <img style={{display:'none'}} src="img/slider/banner-14.jpg"  data-thumb="img/slider/banner-14.jpg"  alt="" title="#htmlcaption4"/>
                </div>
                <div id="htmlcaption1" className="pos-slideshow-caption nivo-html-caption nivo-caption">
                    <div className="timing-bar"></div>
                    <div className="pos-slideshow-info pos-slideshow-info1">
                        <div className="container">
                            <div className="pos_description hidden-xs hidden-sm">
                                <div className="title1"><span className="txt">Bảo hộ lao động</span></div>
                                <div className="title2"><span className="txt">An toàn - trách nhiệm</span></div>
                                <div className="pos-slideshow-readmore">
                                    <a href="http://bootexperts.com/" title="Shop now">Quan tâm</a>   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="htmlcaption2" className="pos-slideshow-caption nivo-html-caption nivo-caption">
                    <div className="timing-bar"></div>
                    <div className="pos-slideshow-info pos-slideshow-info2">
                        <div className="container">
                            <div className="pos_description hidden-xs hidden-sm">
                                <div className="title1"><span className="txt">Hỗ trợ công trình</span></div>
                                <div className="title2"><span className="txt">An toàn sản xuất</span></div>
                                <div className="pos-slideshow-readmore">
                                    <a href="#" title="Shop now">Tìm hiểu</a>   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidUpdate(){
        $('#slider').nivoSlider({
            effect: 'random',
            slices: 15,
            boxCols: 8,
            boxRows: 4,
            animSpeed: '600',
            pauseTime: '6000000',
            startSlide: 0,
            directionNav: 1,
            controlNav: 1,
            controlNavThumbs: false,
            pauseOnHover: false,
            manualAdvance: false,
            prevText: '<i class="fa fa-angle-left nivo-prev-icon"></i>',
            nextText: '<i class="fa fa-angle-right nivo-next-icon"></i>'
        });
    }
}

module.exports = SlideBanner;