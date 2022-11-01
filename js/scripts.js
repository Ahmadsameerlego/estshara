



$(document).ready(function(){
    
    
    $(window).on('resize' ,function(){
        console.log(window.innerWidth);
    });
    
    var isMobile = false, navButtonsOppend = false, searchBoxOppend = false;
    let navButtonsToggler = document.getElementById('nav-buttons-toggler');
    let navButtons = document.getElementById('navButtons');
    let searchBox = document.getElementById('searchBox');
    let searchForm = document.getElementById('searchForm');
    
    
    
    function checkMobile(){
        if(window.innerWidth <= 768){
            isMobile = true;
            navButtonsOppend = true;
        }else{
            isMobile = false;
            navButtonsOppend = false;
        }
        $(navButtonsToggler).removeClass('toggler-clicked');
        $(navButtons).removeClass('show-nav-buttons');


        // side bar
        if(window.innerWidth > 768){
            $('.side-bar').fadeIn();
            $('.dashboard-cont').removeClass('side-hidden');
            $('#closeSideBar').fadeOut();
        }else{
            $('.side-bar').fadeOut();
            $('.dashboard-cont').addClass('side-hidden');
            $('#closeSideBar').fadeOut();
        }
    }
    checkMobile();
    window.onresize = checkMobile;
    
    if(navButtonsToggler){
        navButtonsToggler.onclick = () => {
            if (!navButtonsOppend){
                $(navButtonsToggler).removeClass('toggler-clicked');
                $(navButtons).removeClass('show-nav-buttons');
            }else{
                $(navButtonsToggler).addClass('toggler-clicked');
                $(navButtons).addClass('show-nav-buttons');
            }
            navButtonsOppend = !navButtonsOppend;
        }
    }
    
    
    // search box
    
    if(document.querySelector('.search-icon')){
        document.querySelector('.search-icon').onclick = function(){
            $(searchBox).slideDown(300);
        }
    }
    
    let sideBar;
    const closeSideBar = document.getElementById('closeSideBar');
    const SideToggler = document.getElementById('sideToggler');
    if(document.querySelector('.side-bar')){
        sideBar = document.querySelector('.side-bar'); 
    }


        // side bar
        
    document.addEventListener('click' ,function(event){
        if(searchForm){
            var isClickInsideElement = searchForm.contains(event.target);
            var isClickInsideElement2 = searchBox.contains(event.target);
            if(!isClickInsideElement && isClickInsideElement2){
                $(searchBox).fadeOut();
            }
        }



        // side bar
        if(sideBar && isMobile){
            const sideContainClick = sideBar.contains(event.target);
            const closeContainClick = closeSideBar.contains(event.target);
            const togglerContainClick = SideToggler.contains(event.target);
            if(!sideContainClick && !closeContainClick && !togglerContainClick){
                if(sideBarOppened){
                    $(sideBar).fadeOut();
                    $(closeSideBar).fadeOut();
                }
            }
        }


    });
    

    // img zoom
    $('#img_zoom i').on('click',function (){
        $(this).parent().fadeOut();
     });
 
     $('.img-zoom').on('click' ,function (){
         $('#img_zoom').fadeIn();
         $('#img_zoom img').attr('src' ,$('#imgToView').attr('src'));
     });

    
    
    // header
    $('.owl-carousel-header').owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        center : true,
        autoWidth:true,
        autoplay:true,
        navSpeed:500,
        smartSpeed:1000,
        dragEndSpeed:500,
        autoplaySpeed:500,
        autoplayTimeout:5000,
    });

    var owl1 = $('.owl-carousel-header');
    owl1.owlCarousel();
    // Go to the next item
    $('#cur1Next').click(function() {
        owl1.trigger('next.owl.carousel');
    });
    // Go to the previous item
    $('#cur1Prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl1.trigger('prev.owl.carousel');
    });



    class SwiperSlider{
        constructor(parent ,next ,prev){
            this.parent = parent;
            this.next = next;
            this.prev = prev;
            this.owl = null;
        }

        createSlider = () =>{
            $(this.parent).owlCarousel({
                center : false,
                navSpeed:500,
                smartSpeed:1000,
                dragEndSpeed:500,
                autoplaySpeed:500,
                autoplayTimeout:5000,
                margin:5,
                loop:true,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1,
                        nav:true
                    },
                    600:{
                        items:3,
                        nav:false
                    },
                    1000:{
                        items:4,
                        nav:true,
                    }
                }
            });

            const owl = $(this.parent);
            owl.owlCarousel();
            // Go to the next item
            $(this.next).click(function() {
               owl.trigger('next.owl.carousel');
            });
            // Go to the previous item
            $(this.prev).click(function() {
                owl.trigger('prev.owl.carousel');
            });
        }
    }


    // show password
    class ShowPassword{
        constructor(buttonSelector ,inputSelector){
            this.showPass = false;
            this.button = buttonSelector;
            this.input = inputSelector;
        }

        init = () => {
            this.showPass = false;
            $(this.button).on('click' ,()=>{
                $(this.button).toggleClass('fa-eye-slash');
                if(!this.showPass){
                    $(this.input).attr('type' ,'text');
                }else{
                    $(this.input).attr('type' ,'password');
                }
                this.showPass = !this.showPass;
            });
        }
    }



    // last news
    new SwiperSlider('.owl-carousel-last-news' ,'#cur1NextLastNews' ,'#cur1PrevLastNews').createSlider();

    // our services
    new SwiperSlider('.owl-carousel-our-services' ,'#cur1NextOurServices' ,'#cur1PrevOurServices').createSlider();


    // team work
    new SwiperSlider('.owl-carousel-team-work' ,'#cur1NextTeamWork' ,'#cur1PrevTeamWork').createSlider();


    // our partners
    new SwiperSlider('.owl-carousel-our-partners' ,'#cur1NextOurPartners' ,'#cur1PrevOurPartners').createSlider();



    
    // sign in page
    new ShowPassword('#signInShowPassword1' ,'#Password1').init();
    
    // sign up page
    new ShowPassword('#signInShowPassword2' ,'#Password2').init();

    new ShowPassword('#signInShowPassword3' ,'#Password3').init();


    // rate us
    let rate = 0 ,selectedRate = 0;
    
    let rateStars = document.getElementsByClassName('rate-star');
    $('.rate-star').on('mouseenter' ,function(){
        // $(this).attr('src' ,'imgs/assets/star_gold.png');
        rate = parseInt($(this).attr('data-rate'));
        for(let i = rateStars.length ;i > rateStars.length - rate ;i--){
            $(rateStars[i - 1]).attr('src' ,'imgs/assets/star_gold.png');
        }
    });


    function disSelectStars(){
        for(let i = 0 ;i < rateStars.length  ;i++){
            if(parseInt($(rateStars[i]).attr('data-rate')) > selectedRate){
                $(rateStars[i]).attr('src' ,'imgs/assets/star_grey.png');
            }
        }
    }

    console.log(rateStars.length -1 );
    $('.rate-star').on('mouseout' ,function(){
        disSelectStars();
    });


    $('.rate-star').on('click' ,function(){
        selectedRate = parseInt($(this).attr('data-rate'));
        disSelectStars();
        $('#rateValue').attr('value', selectedRate);
    });



    //set input file set the img name

    function setFileValue(theInput ,output){
        const theInput2 = theInput;
        const output2 = document.getElementById(output);
        if(output2 && theInput2){
            output2.innerHTML = theInput2.value.split('\\')[2];
        }
    }

    if(document.getElementById('file-upload1')){
        document.getElementById('file-upload1').onchange = (event) => {
            setFileValue(event.target ,'file-upload-value1')
        };
    }

    if(document.getElementById('file-upload2')){
        document.getElementById('file-upload2').onchange = (event) => {
            setFileValue(event.target ,'file-upload-value2')
        };
    }

    if(document.getElementById('file-upload3')){
        document.getElementById('file-upload3').onchange = (event) => {
            setFileValue(event.target ,'file-upload-value3')
        };
    }

    if(document.getElementById('file-upload4')){
        document.getElementById('file-upload4').onchange = (event) => {
            setFileValue(event.target ,'file-upload-value4')
        };
    }
    



    // orders page
    const subPages = document.getElementsByClassName('sub-page');
    function toggleSubPages(pageId){
        for(let i = 0 ;i < subPages.length ;i++){
            $(subPages[i]).slideUp();
        }
        $(pageId).slideDown();
    }


    let activeButton = 1;


    function toggleButtonsClasses(ele){
        if(ele.attr('data-active') != activeButton){
            activeButton =ele.attr('data-active');
            $('#subToggler1').removeClass('f-button-active');
            $('#subToggler2').removeClass('f-button-active');
            $('#subToggler3').removeClass('f-button-active');
            ele.addClass('f-button-active');
            return true;
        }else{
            return false;
        }
    }

    $('#subToggler1').on('click' ,function(){
        if(toggleButtonsClasses($(this))){
            toggleSubPages('#subPage1');
        }
    });

    $('#subToggler2').on('click' ,function(){
        if(toggleButtonsClasses($(this))){
            toggleSubPages('#subPage2');
        }
    });

    $('#subToggler3').on('click' ,function(){
        if(toggleButtonsClasses($(this))){
            toggleSubPages('#subPage3');
        }
    });



    // side bar
    let sideBarOppened = true;
    if(document.getElementById('sideToggler')){
        $('#sideToggler').on('click' ,function(){
            $('.side-bar').fadeToggle();
            $('.dashboard-cont').toggleClass('side-hidden');
            if(window.innerWidth <= 768){
                $('#closeSideBar').fadeIn();
            }
        });


        $('#closeSideBar').on('click' ,function(){
            $('.side-bar').fadeOut();
            $(this).fadeOut();
        });
    }


  



    // video button toggler
    $('.video-toggler').on('click' ,function(){
        $('.video-toggler i').toggleClass(['fa-video-slash' ,'video-on']);
    });


    // preview img

    const imgTitle = $('#file-upload-value1').html();
    if($('#file-upload1')){
        $('#file-upload1').on('change' ,function(event){
            if(event.target.files && event.target.files[0]){
                let reader = new FileReader();
                reader.onload = function(e){
                    $('#imgPreviewer').attr('src' ,e.target.result);
                    if( $('#removeImg')){
                        $('#removeImg').parent().addClass('file-input-lg-filled');
                    }
                }
                reader.readAsDataURL(event.target.files[0]);
            }else{
                document.getElementById('file-upload1').value = null;
                $('#imgPreviewer').attr('src' ,'imgs/assets/camera_two.png');
                $('#removeImg').parent().removeClass('file-input-lg-filled');
                $('#file-upload-value1').html(imgTitle);
            }
        });
    }

    if($('#removeImg')){
        $('#removeImg').on('click' ,function(){
            document.getElementById('file-upload1').value = null;
            $('#imgPreviewer').attr('src' ,'imgs/assets/camera_two.png');
            $('#removeImg').parent().removeClass('file-input-lg-filled');
            $('#file-upload-value1').html(imgTitle);
        });
    }

});



  