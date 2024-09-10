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
        url: `${anime_top_url}?start_date=2024-09-08&limit=7&type=tv`,
        method: "GET",
        dataType: "json"
    });
    let request2 = $.ajax({
        url: `${anime_top_url}?start_date=2024-09-08&limit=7&type=movie`,
        method: "GET",
        dataType: "json"
    });

    request1.done(function (req) {
        console.log(req)

        for (let i = 0; i < req.data.length; i++) {
            $('.top_anime_list1').append(`<img src="${req.data[i].images.jpg.image_url}" alt="" onclick="chkMalId('${req.data[i].mal_id}')">`)
        }
    });

    request1.fail(function (jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });

    request2.done(function (req) {
        console.log(req)

        for (let i = 0; i < req.data.length; i++) {
            $('.top_anime_list2').append(`<img src="${req.data[i].images.jpg.image_url}" alt="" onclick="chkMalId('${req.data[i].mal_id}')">`)
            // $('.top_anime_list1').append(`<h2>${req.data[i].mal_id}</h2><br>`)
        }
    });

    request2.fail(function (jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });
})
