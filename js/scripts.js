$(document).ready(function(){
    $('#mycarousel').carousel({interval: 1000});
    $('#carouselButton').click(function() {
        if($('#carouselButton').children('span').hasClass('fa-pause')){
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else if($('#carouselButton').children('span').hasClass('fa-play')){
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
    $('#loginButton').on('click',function(){
        $('#loginModal').modal('show');
    });
    $('#crossLogin').on('click',function(){
        $('#loginModal').modal('hide');
    });
    $('#cancelLogin').on('click',function(){
        $('#loginModal').modal('hide');
    });
    $('#reserveButton').click(function(){
        $('#ReserveModal').modal('show');
    });
    $('#crossReserve').on('click',function(){
        $('#ReserveModal').modal('hide');
    });
    $('#cancelReserve').on('click',function(){
        $('#ReserveModal').modal('hide');
    });
});