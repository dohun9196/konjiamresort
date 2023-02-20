
const Header = () => {
    return (
        <>
            <header class="header">

                <h1>
                    <a href="/">
                        <img src="h_logo.jpg" alt="" />
                    </a>
                </h1>
                <div class="inner">
                    <nav class="gnb">
                        <ul>
                            <li><a href="">리조트안내</a>
                                <ul class="drop_menu">
                                    <li><a href="">리조트 소개</a></li>
                                    <li><a href="">리조트 앨범</a></li>
                                    <li><a href="">생태하천</a></li>
                                    <li><a href="">오시는 길</a></li>
                                </ul>
                            </li>
                            <li><a href="">콘도</a>
                                <ul class="drop_menu">
                                    <li><a href="">이용요금</a></li>
                                    <li><a href="">편의시설</a></li>
                                    <li><a href="">객실 우대 혜택</a></li>
                                </ul>
                            </li>
                            <li><a href="">스키</a>
                                <ul class="drop_menu">
                                    <li><a href="">스키장안내</a></li>
                                    <li><a href="">이용요금</a></li>
                                </ul>
                            </li>
                            <li><a href="">단체행사</a>
                                <ul class="drop_menu">
                                    <li><a href="">행사문의</a></li>
                                    <li><a href="">견적요청</a></li>
                                    <li><a href="">컨벤션</a></li>
                                    <li><a href="">연회</a></li>
                                </ul>
                            </li>
                            <li><a href="">고객센터</a>
                                <ul class="drop_menu">
                                    <li><a href="">자주하는 질문</a></li>
                                    <li><a href="">1:1상담</a></li>
                                    <li><a href="">고객문의</a></li>
                                </ul>
                            </li>
                            <li><a href="">예약</a>
                                <ul class="drop_menu">
                                    <li><a href="">객실예약</a></li>
                                    <li><a href="">스키예약</a></li>
                                    <li><a href="">조회/변경</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="h_service">
                    <a href=""><i class="xi-bars"></i></a>
                </div>
            </header>
        </>
    )
}
export default Header; 