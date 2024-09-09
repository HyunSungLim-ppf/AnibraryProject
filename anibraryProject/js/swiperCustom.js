/* 스와이퍼 생성 | swiper-container = 구조 Swiper 클래스 */
// var swiper = new Swiper('.swiper-container', {
var swiper1 = new Swiper('.swiper-container', {
    /* a. 슬라이드 보이는 갯수 */
    // slidesPerView: 1.52,
    slidesPerView: 1,
    /* b. 슬라이드 사이 간격 */
    spaceBetween: '10.333333%',
    /* c. 슬라이드 반복 여부 */
    loop: true,
    /* d. 그룹수 맞추기 => 안 맞을경우 빈칸으로 채우기 여부 */
    loopFillGroupWidthBlank: true,
    /* e. 활성 슬라이드 항상 가운데 배치하기 */
    centeredSlides: true,

    // 페이징, 넘버링
    pagination: {
        // 구조에 코딩된 클래스명
        el: '.swiper-pagination',
        type: 'bullets',
        // bullets 적용후, 점박이 클릭시 해당 슬라이드로 링크여부
        clickable: true,
        type: 'fraction',
    },
    // 네비게이션 좌우 화살표
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {  // 자동 슬라이드 설정 , 비 활성화 시 false
        // delay: 10000, // 시간 설정
        delay: 10000, // 시간 설정
        disableOnInteraction: false, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },
});
// $('.swiper-slide').hover(function () {
//     swiper.autoplay.stop();
// }, function () {
//     swiper.autoplay.start();
// });