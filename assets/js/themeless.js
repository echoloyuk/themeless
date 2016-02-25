;(function (window, $){
    $(function (){
        $('#openMenuBtn').off('click').on('click', function (){
            var $panel = $('#menuPanel');
            if ($panel.hasClass('open')){
                $panel.removeClass('open');
                $(this).removeClass('open').html('Menu');
            } else {
                $panel.addClass('open');
                $(this).addClass('open').html('Close');
            }
            
        });
    });
})(window, $);