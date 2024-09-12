$(() => {

    window.onkeydown = (e) => {
        if (e.key == 'Enter') {
            if ($('input[class=input-search]').val() != '') {
                alert($('input[class=input-search]').val());
                $('input[class=input-search]').val('');
            }
        }
    }

    $('.btn-search').click(function () {
        if ($('input[class=input-search]').val() != '') {
            alert($('input[class=input-search]').val());
            $('input[class=input-search]').val('');
        } else {
            $('input[class=input-search]').val('');
        }
    })

    // Request TOP ANIME List
    let anime_url = "https://api.jikan.moe/v4/anime"
    let anime_top_url = "https://api.jikan.moe/v4/top/anime"
    let request1 = $.ajax({
        url: `${anime_top_url}?start_date=2024-09-08&limit=14&type=tv`,
        // url: `${anime_top_url}?start_date=2024-09-08&limit=7&rating=r`,
        method: "GET",
        dataType: "json"
    });
    let request2 = $.ajax({
        url: `${anime_top_url}?start_date=2024-09-08&limit=14&type=movie`,
        method: "GET",
        dataType: "json"
    });

    request1.done(function (req) {
        console.log(req)

        for (let i = 0; i < req.data.length; i++) {
            // $('.top_anime_list1').append(`<img src="${req.data[i].images.jpg.image_url}" alt="" onclick="chkMalId('${req.data[i].mal_id}')">`)
            $('.top_anime_list1').append(`<li><img src="${req.data[i].images.jpg.image_url}" alt="" onclick="chkMalId('${req.data[i].mal_id}')"></li>`)
        }
    });

    request1.fail(function (jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });

    request2.done(function (req) {
        console.log(req)

        for (let i = 0; i < req.data.length; i++) {
            // $('.top_anime_list2').append(`<img src="${req.data[i].images.jpg.image_url}" alt="" onclick="chkMalId('${req.data[i].mal_id}')">`)
            $('.top_anime_list2').append(`<li id="anime"><img src="${req.data[i].images.jpg.image_url}" alt="" onclick="chkMalId('${req.data[i].mal_id}')"></li>`)
            
        }
    });

    request2.fail(function (jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });


    setFlowBanner1();
    setFlowBanner2();
})

function setFlowBanner1() {
    const $wrap = $('.top_anime_banner1');
    const $list = $('.top_anime_list1');
    let wrapWidth = $wrap.width();
    let listWidth = $list.width();
    // const speed = 52; //1초에 몇픽셀 이동하는지 설정
    const speed = 40; //1초에 몇픽셀 이동하는지 설정

    //리스트 복제
    let $clone = $list.clone();
    $wrap.append($clone);
    flowBannerAct()

    //배너 실행 함수
    function flowBannerAct() {
        //무한 반복을 위해 리스트를 복제 후 배너에 추가
        // if (listWidth < wrapWidth) {
        //     const listCount = Math.ceil(wrapWidth * 2 / listWidth);
        //     for (let i = 2; i < listCount; i++) {
        //         // $clone = $clone.clone();
        //         // $wrap.append($clone);
        //     }
        // }
        // $wrap.find('.top_anime_list1').css({
        //     'animation': `${listWidth / speed}s linear infinite flowRolling`
        // });
        $('.top_anime_list1').css({
            // 'animation': `${listWidth / speed}s linear infinite flowRolling`
            'animation': `${speed}s linear infinite flowLeftRolling`
        });
    }

    // 마우스가 요소 위로 진입했을 때 일시정지
    // $wrap.on('mouseenter', function () {
    //     $wrap.find('.top_anime_list1').css('animation-play-state', 'paused');
    // });

    $('.top_anime_list1').on('mouseenter', function () {
        $wrap.find('.top_anime_list1').css('animation-play-state', 'paused');
    });
    
    // 마우스가 요소에서 빠져나갈 때 재생
    $('.top_anime_list1').on('mouseleave', function () {
        $wrap.find('.top_anime_list1').css('animation-play-state', 'running');
    });
}

function setFlowBanner2() {
    const $wrap = $('.top_anime_banner2');
    const $list = $('.top_anime_list2');
    let wrapWidth = $wrap.width();
    let listWidth = $list.width();
    // const speed = 52; //1초에 몇픽셀 이동하는지 설정
    const speed = 30; //1초에 몇픽셀 이동하는지 설정

    //리스트 복제
    let $clone = $list.clone();
    $wrap.append($clone);
    flowBannerAct()

    //배너 실행 함수
    function flowBannerAct() {
        $('.top_anime_list2').css({
            // 'animation': `${listWidth / speed}s linear infinite flowRolling`
            'animation': `${speed}s linear infinite flowRightRolling`
        });
    }

    // 마우스가 요소 위로 진입했을 때 일시정지
    $('.top_anime_list2').on('mouseenter', function () {
        $wrap.find('.top_anime_list2').css('animation-play-state', 'paused');
    });

    // 마우스가 요소에서 빠져나갈 때 재생
    $('.top_anime_list2').on('mouseleave', function () {
        $wrap.find('.top_anime_list2').css('animation-play-state', 'running');
    });


}