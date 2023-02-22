import React, { useState, useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";

function Main() {

    const [idx, setIdx] = useState(0);

    const SlideText = [
        { p: '다양한 스타일의 편안한 객실', strong: '리조트 객실', span: '예약하기' },
        { p: '최대 규모의 쾌적하고 품격있는 리조트', strong: '리조트 스키', span: '예약하기' },
        { p: '다양하고 차별화된 시설 & 프로그램', strong: '리조트 시설', span: '예약하기' },
    ];

    const Q_Text = [
        '객실예약', '객실패키지', '다이닝', '행사', '운영시간', '고객문의', '임직원인증', '회원모집', '스키예약', '스키강습예약'
    ];

    const Story = [
        {
            span: '과거와 현재가 공존하는',
            p01: '다른 스키 리조트와 차별화된 자연과의 아름다운 절경',
            p02: '최첨단 예술 현장, 환상적인 쇼핑 및 식사, 호화로운 스파 및 숙박 시설이 있습니다.',
            p03: '이 모든 것이 공들여 보존된 역사적인 건물과 자연이 만들어낸 아름다운 전망으로 시작되는 활기찬 강변 휴양 도로를 마주하고 있습니다.',
            img: '/img/main_sec03_01_img.jpg'
        },
        {
            span: '가족과 함께하세요',
            p01: '리조트에는 전용 강습 구역과 인터랙티브 트레일, 숲속을 따라 펼쳐진',
            p02: '구불구불한 보물찾기 코스, 어린이용 경기장 및 아주 작은 꼬마 스키어와 스노보더 또한',
            p03: '이용할 수 있는 터레인 파크가 완비되어 있어 아이들에게 필요한 모든 것이 갖춰져 있습니다.',
            img: '/img/main_sec03_02_img.jpeg'
        }
    ];

    const Slope = [
        { strong: 'Green Circle', span: '초급자 코스' },
        { strong: 'Blue Square', span: '중급 - 상급 코스' },
        { strong: 'Black Diamond', span: '상급 - 최상급 코스' },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <BsArrowRightShort />,
        prevArrow: <BsArrowLeftShort />
    };

    return (
        <>
            <section className="mainSection01">
                <div className="mainslide">
                    <Slider {...settings}>
                        {[0, 1, 2].map((idx) => (
                            <figure className={`itm0${idx + 1}`} key={idx}>
                                <div className="inner">
                                    <div className="slide_text">

                                        <strong>{SlideText[idx].strong}</strong>
                                        <p>{SlideText[idx].p}</p>
                                        <a href="javascript:void(0)">
                                            <span>{SlideText[idx].span}</span>
                                        </a>
                                    </div>
                                </div>
                            </figure>
                        ))}
                    </Slider>

                </div>
            </section>
            <section className="mainSection02">
                <div className="main_qick_menu">
                    <div className="inner">
                        <div className="qick_tit">
                            <strong>Quick Menu</strong>
                        </div>
                        <ul className="q_menu_wrap">
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((idx) => (

                                <li className={`q_list0${idx + 1}`} key={idx}><a href="">{Q_Text[idx]}</a></li>

                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            <section className="mainSection03 sec">
                <div className="inner">
                    <div className="m_cont_tit">
                        <h2>자연과 함께하는 리조트</h2>
                    </div>
                    <div className="main_story_wrap">
                        <div className="top">
                            <figure>
                                <img src={Story[0].img} alt="" />
                            </figure>
                            <div className="main_story_desc">
                                <span>{Story[0].span}</span>
                                <p>{Story[0].p01}</p>
                                <p>{Story[0].p02}</p>
                                <p>{Story[0].p03}</p>

                            </div>
                        </div>
                        <div className="bottom">
                            <div className="main_story_desc">
                                <span>{Story[1].span}</span>
                                <p>{Story[1].p01}</p>
                                <p>{Story[1].p02}</p>
                                <p>{Story[1].p03}</p>
                            </div>
                            <figure>
                                <img src={Story[1].img} alt="" />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mainSection05 sec">
                <div className="inner">
                    <span>세계적인 ooo리조트 스키장으로 오세요</span>
                </div>
            </section>
            <section className="mainSection04 sec">
                <div className="inner">
                    <div className="m_cont_tit">
                        <h2>다양한 스키 슬로프</h2>
                        <p>실력에 맞게 다양한 슬로프 코스가 준비되어있습니다.</p>
                    </div>
                    <div className="main_slope">
                        {Slope.map((Slope, idx) => (
                            <li key={idx} className={`slope_list0${idx + 1}`}>
                                <div className="slope_desc">
                                    <strong>{Slope.strong}</strong>
                                    <span>{Slope.span}</span>
                                    <a href="javascript:void(1)">자세히 보기</a>
                                </div>
                            </li>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mainSection06 sec">
                <div className="inner">
                    <div className="m_cont_tit">
                        <h2>서비스 및 편의시설</h2>
                        <p>고객에게 편안함은 물론 걱정없는 경험을 제공해드립니다.</p>
                    </div>
                    <div class="main_room">

                    </div>
                </div>
            </section>
        </>
    );
}

export default Main;
