$(function() {

  //浮き出るようにする
    gsap.utils.toArray(".works-box,h1").forEach(item => {

        item.addEventListener("mouseenter", () => {
        gsap.to(item,{
            scale:1.03,
            y:-2,
            boxShadow:"0 4px 10px rgba(0,0,0,0.15)",
            duration:0.25
        });
        });

        item.addEventListener("mouseleave", () => {
        gsap.to(item,{
            scale:1,
            y:0,
            boxShadow:"0 0 0 rgba(0,0,0,0)",
            duration:0.25
        });
        });


    // スクロールで浮き出るように
    let winH = $(window).height();
    let objTop = $('.about').offset().top;
    $(window).on('scroll', function(){
        let scroll = $(window).scrollTop();

        if(scroll >= objTop - winH + 250){
        $('.about-text').fadeIn(1500);
        } else {
        $('.about-text').fadeOut(500);
        }
    });

    // 写真スライド
    for(i=0;i<4;i++)
    {
        $('.box').eq(i).css({left:260*i});
    }
    setInterval(function(){
        for(i=0;i<4;i++)
        {
            var position = $('.box').eq(i).position();
            var left = position.left - 1;
            $('.box').eq(i).css({left:left});
            if(left <= -250)
            {
                $('.box').eq(i).css({left:800});
            }
        }
    },30);
    });
});