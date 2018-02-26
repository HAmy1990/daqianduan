
$(document).ready(function(e){
    $('.search-case').click(function(e){
        $('.site-search').toggleClass('search-show')
        $(this).toggleClass('icon-rearch').toggleClass('icon-close');
    });



    $(function() {
				$("#slider").easySlider( {
					slideSpeed: 500,
					autoSlide: true,
					paginationSpacing: "15px",
					paginationDiameter: "10px",
					paginationPositionFromBottom: "0px",
					slidesClass: ".slides",
					controlsClass: ".controls",
					paginationClass: ".pagination"					
				});
			});
});

