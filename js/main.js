$(window).on('scroll',function(){
    let offset = $(window).scrollTop();
    offset = offset * .2;
    offset__img = offset * .3;
    $('.technologypage .banner__img img').css(
        {
            'transform':'translateYY(' + offset + 'px)',
            '-webkit-transform':'translateY(' + offset + 'px)',
            '-ms-transform':'translateY(' + offset + 'px)',
            '-o-transform':'translateY(' + offset + 'px)'
        }
    )
    $('.technologypage .sec1 .img-using img').css(
        {
            'transform':'translateX(' + -offset__img + 'px)',
            '-webkit-transform':'translateX(' + -offset__img + 'px)',
            '-ms-transform':'translateX(' + -offset__img + 'px)',
            '-o-transform':'translateX(' +  -offset__img + 'px)'
        }
    )
})
$(document).ready(function(){
     /// form of pape Sign Up ///
     let formSignUp = ()=>{
        let btn__signUp = $('.regispage .wrapper .btn-signUp');
        let btn__close = $('.form__modal .btn__close');
       
        
        btn__signUp.on('click',function(e){
            e.preventDefault();
            function isEmail(email) {
                var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                return regex.test(email);
              }
            var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
            var getData = [];

            /// variables for check ///
            let name = $('.regispage .signIn .signIn__form-detail #name');
            let email = $('.regispage .signIn .signIn__form-detail #email');
            let phone = $('.regispage .signIn .signIn__form-detail #phone');
            let address = $('.regispage .signIn .signIn__form-detail #address');
            let nameRegis = $('.regispage .signIn .signIn__form-detail #nameRegis');
            let numberBike = $('.regispage .signIn .signIn__form-detail #numberCar'); 
    
            /// get value input to check ///
            let check__name = $.trim($('.regispage .signIn .signIn__form-detail #name').val());
            let check__email = $.trim($('.regispage .signIn .signIn__form-detail #email').val());
            let check__phone = $.trim($('.regispage .signIn .signIn__form-detail #phone').val());
            let check__address = $.trim($('.regispage .signIn .signIn__form-detail #address').val());
            let check__regis = $.trim($('.regispage .signIn .signIn__form-detail #nameRegis').val());
            let check__numberBike = $.trim($('.regispage .signIn .signIn__form-detail #numberCar').val());
            let using__bike = $('.regispage .signIn .list__bike .li__current #using-bike').text();

            /// set flag to show total ///
            let name__flag = true;
            let email__flag = true;
            let phone__flag = true;
            let address__flag = true;
            let regis__flag = true;
            let numbike__flag = true;

            /// check name ///
            if (check__name == ''){
                name__flag = false;
                name.next().html('Trường này không được bỏ trống.');
            }
            else{
                name.next().html('');
                name__flag = true;
            }

            /// check email ///
            if (check__email == ''){
                email__flag = false;
                email.next().html('Trường này không được bỏ trống.');
            }
            else if(!isEmail(check__email)){
                email.next().html('Trường này điền không đúng quy định.');
            }
            else{
                email.next().html('');
                email__flag = true;
            }

            /// check address ///
            if (check__address == ''){
                address__flag = false;
                address.next().html('Trường này không được bỏ trống.');
            }
            else{
                address.next().html('');
                address__flag = true;
            }

            /// check phone ///
            if (check__phone == ''){
                phone__flag = false;
                phone.next().html('Trường này không được bỏ trống.');
            }
            else if((vnf_regex.test(check__phone) == false)){
                phone.next().html('Trường này điền không đúng quy định.');
            }
            else{
                phone.next().html('');
                phone__flag = true;
            }

            /// check number Bike ///
            if (check__numberBike == ''){
                numbike__flag = false;
                numberBike.next().html('Trường này không được bỏ trống.');
            }
            else{
                numberBike.next().html('');
                numbike__flag = true;
            }
            
             /// check Register ///
             if (check__regis == ''){
                regis__flag = false;
                nameRegis.next().html('Trường này không được bỏ trống.');
            }
            else{
                nameRegis.next().html('');
                regis__flag = true;
            }

            
            let form__signUp = $('.form-signUp');
            
            if(name__flag == true && email__flag == true && address__flag == true &&
                numbike__flag == true && regis__flag == true && phone__flag == true){
                    form__signUp.
                        children().find('.body').find('p').html("Bạn đã gửi thông tin đăng kí thành công");
                    form__signUp.
                        addClass('form__active');
                    getData.push(check__name,check__email,check__address,check__phone,check__numberBike,using__bike,check__regis)
            }
            else if(name__flag != true || email__flag != true || address__flag != true ||
                numbike__flag != true || regis__flag != true || phone__flag != true){
                    form__signUp.
                        children().find('.body').find('p').html("Thông tin của bạn chưa đúng hoặc bỏ trống");
                    form__signUp.
                        addClass('form__active');
            }
        })
        btn__close.on('click',()=>{
            $('.form-signUp').toggleClass('form__active');
        })

       

        
       
    }
    formSignUp();

    /// scrollTrigger Gsap Homepage ///
    let scrollAnimations = () =>{
        gsap.registerPlugin(ScrollTrigger);
        gsap.timeline();

        /////// Homepage Animaition ///////
        let sec1__Text__h2 = '.homepage .wrapper .sec-1 .sec1__caption-des h2';
        let sec1__Text__p = '.homepage .wrapper .sec-1 .sec1__caption-des p';
        let sec1__Arrow = '.homepage .wrapper .sec-1 .btnSlide';
        let sec1__img = '.homepage .wrapper .sec-1 .sec1-img';

        let sec2__item = '.product-hot .productHot__list-item';
        let sec2__caption = '.product-hot .productHot__caption';

        let sec4__caption = '.homepage .sec-4 .news__caption-des';
        let sec4__card = '.homepage .sec-4 .news .card__item';

        /// animation Home sec-1 ///
        gsap.to(sec1__Text__h2,{
            scrollTrigger:{
                trigger:'.homepage .wrapper .sec-1',
                toggleActions:"restart pause reverse pause"
            },
            x:0,
            duration:.7,
            opacity:1
        })
        gsap.from(sec1__Text__h2,{
            scrollTrigger:{
                trigger:'.homepage .wrapper .sec-1',
                toggleActions:"restart pause pause pause"
            },
            x:-100,
            duration:.7,
            opacity:0
        })
        gsap.to(sec1__Text__p,{
            scrollTrigger:{
                trigger:'.homepage .wrapper .sec-1',
                toggleActions:"restart pause reverse pause"
            },
            x:0,
            duration:.8,
            opacity:1
        })
        gsap.from(sec1__Text__p,{
            scrollTrigger:{
                trigger:'.homepage .wrapper .sec-1',
                toggleActions:"restart pause pause pause"
            },
            x:-120,
            duration:.8,
            opacity:0
        })
        gsap.to(sec1__Arrow,{
            scrollTrigger:{
                trigger:'.homepage .wrapper .sec-1',
                toggleActions:"restart pause reverse pause"
            },
            x:0,
            duration:.8,
            opacity:1
        })
        gsap.from(sec1__Arrow,{
            scrollTrigger:{
                trigger:'.homepage .wrapper .sec-1',
                toggleActions:"restart pause pause pause"
            },
            x:-140,
            duration:.8,
            opacity:0
        })
        gsap.to(sec1__img,{
            scrollTrigger:{
                trigger:'.homepage .wrapper .sec-1',
                toggleActions:"restart pause reverse pause"
            },
            y:0,
            duration:1.4,
            opacity:1
        })
        gsap.from(sec1__img,{
            scrollTrigger:{
                trigger:'.homepage .wrapper .sec-1',
                toggleActions:"restart pause pause pause"
            },
            y:40,
            duration:1.4,
            delay:.8,
            opacity:0
        })
        
        /// animation Home sec-2 ///
        gsap.to(sec2__item,{
            scrollTrigger:{
                trigger:'.homepage .wrapper .sec-2',
                toggleActions:'restart pause reserve pause'
            },
            y:0,
            duration:1.8,
            opacity:1
        })
        gsap.from(sec2__item,{
            scrollTrigger:{
                trigger:'.homepage .wrapper .sec-2',
                toggleActions:'restart pause pause pause'
            },
            y:40,
            duration:1.4,
            opacity:0
        })
        gsap.to(sec2__caption,{
            scrollTrigger:{
                trigger:'.homepage .wrapper .sec-2',
                toggleActions:'restart pause reserve pause'
            },
            y:0,
            duration:.7,
            opacity:1
        })
        gsap.from(sec2__caption,{
            scrollTrigger:{
                trigger:'.homepage .wrapper .sec-2',
                toggleActions:'restart pause pause pause'
            },
            y:-40,
            duration:.7,
            opacity:0
        })

        /// animation Home sec-4 ///
        gsap.to(sec4__card,{
            scrollTrigger:{
                trigger:'.homepage .wrapper .sec-4',
                toggleActions:'restart pause reserve pause'
            },
            y:0,
            duration:1.8,
            opacity:1
        })
        gsap.from(sec4__card,{
            scrollTrigger:{
                trigger:'.homepage .wrapper .sec-4',
                toggleActions:'restart pause pause pause'
            },
            y:40,
            duration:1.4,
            opacity:0
        })
        gsap.to(sec4__caption,{
            scrollTrigger:{
                trigger:'.homepage .wrapper .sec-4',
                toggleActions:'restart pause reserve pause'
            },
            y:0,
            duration:.7,
            opacity:1
        })
        gsap.from(sec4__caption,{
            scrollTrigger:{
                trigger:'.homepage .wrapper .sec-4',
                toggleActions:'restart pause pause pause'
            },
            y:-40,
            duration:.7,
            opacity:0
        })  


        /////// Products Animation ///////
        let product1__img = '.productpage .product1__content-img';
        let product1__detail = '.productpage .product1__content-box';
        let product2__detail =   '.productpage .product2__content';
        let product2__img =   '.productpage .product2__img';
        let product3__img = '.productpage .product3__img';
        let product3__detail = '.productpage .product3__content';     

        /// animation product2 ///
        gsap.to(product1__img,{
            scrollTrigger:{
                trigger:'productpage .product1 .product1__content',
                toggleActions:'restart pause reserve pause'
            },
            x:0,
            duration:.9,
            opacity:1
        })
        gsap.from(product1__img,{
            scrollTrigger:{
                trigger:'.productpage .product1 .product1__content',
                toggleActions:'restart pause pause pause'
            },
            x:-70,
            duration:.7,
            opacity:0
        })  
        gsap.to(product1__detail,{
            scrollTrigger:{
                trigger:'productpage .product1 .product1__content',
                toggleActions:'restart pause reserve pause'
            },
            x:0,
            duration:1,
            opacity:1
        })
        gsap.from(product1__detail,{
            scrollTrigger:{
                trigger:'.productpage .product1 .product1__content',
                toggleActions:'restart pause pause pause'
            },
            x:70,
            duration:.7,
            opacity:0
        })  

        /// animation product2 ///
        gsap.to(product2__img,{
            scrollTrigger:{
                trigger:'productpage .product2',
                toggleActions:'restart pause reserve pause'
            },
            y:0,
            duration:.9,
            opacity:1
        })
        gsap.from(product2__img,{
            scrollTrigger:{
                trigger:'.productpage .product2',
                toggleActions:'restart pause pause pause'
            },
            y:-70,
            duration:.7,
            opacity:0
        })  
        gsap.to(product2__detail,{
            scrollTrigger:{
                trigger:'productpage .product2',
                toggleActions:'restart pause reserve pause'
            },
            y:0,
            duration:1,
            opacity:1
        })
        gsap.from(product2__detail,{
            scrollTrigger:{
                trigger:'.productpage .product2',
                toggleActions:'restart pause pause pause'
            },
            y:70,
            duration:.7,
            opacity:0
        }) 
        
        /// animation product3 ///
        gsap.to(product3__img,{
            scrollTrigger:{
                trigger:'productpage .product3',
                toggleActions:'restart pause reserve pause'
            },
            x:0,
            duration:.9,
            opacity:1
        })
        gsap.from(product3__img,{
            scrollTrigger:{
                trigger:'.productpage .product3',
                toggleActions:'restart pause pause pause'
            },
            x:-70,
            duration:.7,
            opacity:0
        })  
        gsap.to(product3__detail,{
            scrollTrigger:{
                trigger:'productpage .product3',
                toggleActions:'restart pause reserve pause'
            },
            x:0,
            duration:1,
            opacity:1
        })
        gsap.from(product3__detail,{
            scrollTrigger:{
                trigger:'.productpage .product3',
                toggleActions:'restart pause pause pause'
            },
            x:70,
            duration:.7,
            opacity:0
        })  


        /////// Technology Animations ///////
        let bannerDes = '.technologypage .banner__Description';
        let sec1Tech__h2 = '.technologypage .sec1 .sec1__caption-des h2';
        let sec1Tech__p = '.technologypage .sec1 .sec1__caption-des p';
        let sec2__listLi = '.technologypage .sec2__caption-ul li';
        let sec3Tech__h2 = '.technologypage .sec3__caption h2';
        let sec3Tech__h3 = '.technologypage .sec3__caption h3';
        let sec3Tech__p = '.technologypage .sec3__caption p';
        let sec4__h2 = '.technologypage .sec4 .sec4__caption-des h2';
        let sec4__app = '.technologypage .sec4 .btn-contact';

        /// animation sec2 ///
        gsap.to(bannerDes,{
            scrollTrigger:{
                trigger:'.technologypage .banner__Description',
                scurb:true,
                makers:true,
                toggleActions:'restart pause reserve pause'
            },
            y:0,
            duration:1,
            opacity:1
        })
        gsap.from(bannerDes,{
            scrollTrigger:{
                trigger:'.technologypage .banner__Description',
                scurb:true,
                makers:true,
                toggleActions:'restart pause pause pause'
            },
            y:70,
            duration:1,
            opacity:0
        })

        /// animation sec2 ///
        setTimeout(()=>{
            gsap.to(sec1Tech__h2,{
                scrollTrigger:{
                    trigger:'technologypage .sec1',
                    scurb:true,
                    makers:true,
                    toggleActions:'restart pause reserve pause'
                },
                y:0,
                duration:.6,
                delay:1,
                opacity:1
            })
            gsap.from(sec1Tech__h2,{
                scrollTrigger:{
                    trigger:'technologypage .sec1',
                    scurb:true,
                    makers:true,
                    toggleActions:'restart pause reserve pause'
                },
                y:70,
                duration:.6,
                delay:1,
                opacity:0
            })
            gsap.to(sec1Tech__p,{
                scrollTrigger:{
                    trigger:'technologypage .sec1',
                    scurb:true,
                    makers:true,
                    toggleActions:'restart pause reserve pause'
                },
                y:0,
                duration:1,
                delay:1,
                opacity:1
            })
            gsap.from(sec1Tech__p,{
                scrollTrigger:{
                    trigger:'technologypage .sec1',
                    scurb:true,
                    makers:true,
                    toggleActions:'restart pause pause pause'
                },
                y:70,
                duration:1,
                delay:1,
                opacity:0
            })
        },500);
        setTimeout(()=>{
            gsap.to(sec2__listLi,{
                scrollTrigger:{
                    trigger:'.technologypage .sec2__caption-ul',
                    scurb:true,
                    makers:true,
                    toggleActions:'restart pause reserve pause'
                },
                x:0,
                duration:.9,
                delay:1,
                opacity:1
            })
            gsap.from(sec2__listLi,{
                scrollTrigger:{
                    trigger:'.technologypage .sec2__caption-ul',
                    scurb:true,
                    makers:true,
                    toggleActions:'restart pause reserve pause'
                },
                stagger:.1 , 
                ease:"back" ,
                x:-70,
                duration:.9,
                delay:2,
                opacity:0
            })
        },500);
        
        ///  animation sec3 ///
        gsap.to(sec3Tech__h2,{
            scrollTrigger:{
                trigger:'.technologypage .sec3__caption',
                scurb:true,
                makers:true,
                toggleActions:'restart pause reserve pause'
            },
            y:0,
            duration:.6,
            opacity:1
        })
        gsap.from(sec3Tech__h2,{
            scrollTrigger:{
                trigger:'.technologypage .sec3__caption',
                scurb:true,
                makers:true,
                toggleActions:'restart pause reserve pause'
            },
            y:40,
            duration:.6,
            opacity:0
        })
        gsap.to(sec3Tech__h3,{
            scrollTrigger:{
                trigger:'.technologypage .sec3__caption',
                scurb:true,
                makers:true,
                toggleActions:'restart pause reserve pause'
            },
            y:0,
            duration:.8,
            opacity:1
        })
        gsap.from(sec3Tech__h3,{
            scrollTrigger:{
                trigger:'.technologypage .sec3__caption',
                scurb:true,
                makers:true,
                toggleActions:'restart pause pause pause'
            },
            y:60,
            duration:.8,
            opacity:0
        })
        gsap.to(sec3Tech__p,{
            scrollTrigger:{
                trigger:'.technologypage .sec3__caption',
                scurb:true,
                makers:true,
                toggleActions:'restart pause reserve pause'
            },
            y:0,
            duration:1,
            opacity:1
        })
        gsap.from(sec3Tech__p,{
            scrollTrigger:{
                trigger:'.technologypage .sec3__caption',
                scurb:true,
                makers:true,
                toggleActions:'restart pause pause pause'
            },
            y:80,
            duration:1,
            opacity:0
        })

        /// animation sec4 ///
        gsap.to(sec4__h2,{
            scrollTrigger:{
                trigger:'.technologypage .sec4',
                scurb:true,
                makers:true,
                toggleActions:'restart pause reserve pause'
            },
            y:0,
            duration:.6,
            opacity:1
        })
        gsap.from(sec4__h2,{
            scrollTrigger:{
                trigger:'.technologypage .sec4',
                scurb:true,
                makers:true,
                toggleActions:'restart pause pause pause'
            },
            y:40,
            duration:.6,
            opacity:0
        })
        gsap.to(sec4__app,{
            scrollTrigger:{
                trigger:'.technologypage .sec4',
                scurb:true,
                makers:true,
                toggleActions:'restart pause reserve pause'
            },
            y:0,
            duration:.8,
            opacity:1
        })
        gsap.from(sec4__app,{
            scrollTrigger:{
                trigger:'.technologypage .sec4',
                scurb:true,
                makers:true,
                toggleActions:'restart pause pause pause'
            },
            y:40,
            duration:.8,
            opacity:0
        })

        /////// Service Animations ///////
        let tab__box = '.servicepage .service .faq__title';
        let tab__des = '.servicepage .service .faq__content';
        gsap.to(tab__box,{
            scrollTrigger:{
                trigger:'.servicepage .service .faq__title',
                scurb:true,
                makers:true,
                toggleActions:'restart pause reserve pause'
            },
            x:0,
            duration:.6,
            opacity:1
        })
        gsap.from(tab__box,{
            scrollTrigger:{
                trigger:'.servicepage .service .faq__title',
                scurb:true,
                makers:true,
                toggleActions:'restart pause pause pause'
            },
            x:-100,
            duration:.6,
            opacity:0
        })
        gsap.to(tab__des,{
            scrollTrigger:{
                trigger:'.servicepage .service .faq__title',
                scurb:true,
                makers:true,
                toggleActions:'restart pause reserve pause'
            },
            x:0,
            duration:.6,
            opacity:1
        })
        gsap.from(tab__des,{
            scrollTrigger:{
                trigger:'.servicepage .service .faq__title',
                scurb:true,
                makers:true,
                toggleActions:'restart pause pause pause'
            },
            x:100,
            duration:.6,
            opacity:0
        })


        /////// News Animations ////////
        let news__items = '.newspage .news .news-item';
        setTimeout(()=>{
            gsap.to(news__items,{
                scrollTrigger:{
                    trigger:'.newspage .news .news-item',
                    scurb:true,
                    makers:true,
                    toggleActions:'restart pause reserve pause'
                },
                y:0,
                duration:1.1,
                delay:2,
                opacity:1
            })
            gsap.from(news__items,{
                scrollTrigger:{
                    trigger:'.newspage .news .news-item',
                    scurb:true,
                    makers:true,
                    toggleActions:'restart pause reserve pause'
                },
                stagger:.1 , 
                ease:"back" ,
                y:70,
                duration:1.1,
                delay:2,
                opacity:0
            })
        },500);

        /////// Contacts Animations ///////
        let text__intro = '.contactpage .location .intro';
        let text__title = '.contactpage .location .title';
        let line__black = '.contactpage .location .second';
        let text__h6 = '.contactpage .location h6';
        let img__ques = '.contactpage .location .img-loca';
        let img__form = '.contactpage .question .img-form img';
        let title__form = '.contactpage .question .question__form-title';
        let form = '.contactpage .question .question__form-detail';


        gsap.to(text__intro,{
            scrollTrigger:{
                trigger:'.contactpage .location .container',
                scurb:true,
                makers:true,
                toggleActions:'restart pause reserve pause'
            },
            x:0,
            duration:.6,
            opacity:1
        })
        gsap.from(text__intro,{
            scrollTrigger:{
                trigger:'.contactpage .location .container',
                scurb:true,
                makers:true,
                toggleActions:'restart pause pause pause'
            },
            x:-100,
            duration:.6,
            opacity:0
        })

        gsap.to(text__title,{
            scrollTrigger:{
                trigger:'.contactpage .location .container',
                scurb:true,
                makers:true,
                toggleActions:'restart pause reserve pause'
            },
            x:0,
            duration:.8,
            opacity:1
        })
        gsap.from(text__title,{
            scrollTrigger:{
                trigger:'.contactpage .location .container',
                scurb:true,
                makers:true,
                toggleActions:'restart pause pause pause'
            },
            x:-110,
            duration:.8,
            opacity:0
        })
        gsap.to(line__black,{
            scrollTrigger:{
                trigger:'.contactpage .location .container',
                scurb:true,
                makers:true,
                toggleActions:'restart pause reserve pause'
            },
            x:0,
            duration:1,
            opacity:1
        })
        gsap.from(line__black,{
            scrollTrigger:{
                trigger:'.contactpage .location .container',
                scurb:true,
                makers:true,
                toggleActions:'restart pause pause pause'
            },
            x:-120,
            duration:1,
            opacity:0
        })
        gsap.to(text__h6,{
            scrollTrigger:{
                trigger:'.contactpage .location .container',
                scurb:true,
                makers:true,
                toggleActions:'restart pause reserve pause'
            },
            y:0,
            duration:1.2,
            opacity:1
        })
        gsap.from(text__h6,{
            scrollTrigger:{
                trigger:'.contactpage .location .container',
                scurb:true,
                makers:true,
                toggleActions:'restart pause pause pause'
            },
            y:70,
            duration:1.2,
            opacity:0
        })
        gsap.to(img__ques,{
            scrollTrigger:{
                trigger:'.contactpage .location .container',
                scurb:true,
                makers:true,
                toggleActions:'restart pause reserve pause'
            },
            x:0,
            duration:1.2,
            opacity:1
        })
        gsap.from(img__ques,{
            scrollTrigger:{
                trigger:'.contactpage .location .container',
                scurb:true,
                makers:true,
                toggleActions:'restart pause pause pause'
            },
            x:100,
            duration:1.2,
            opacity:0
        })
        gsap.to(img__form,{
            scrollTrigger:{
                trigger:'.contactpage .question',
                scurb:true,
                makers:true,
                toggleActions:'restart pause reserve pause'
            },
            x:0,
            duration:.8,
            opacity:1
        })
        gsap.from(img__form,{
            scrollTrigger:{
                trigger:'.contactpage .question',
                scurb:true,
                makers:true,
                toggleActions:'restart pause pause pause'
            },
            x:-100,
            duration:.8,
            opacity:0
        })
        gsap.to(title__form,{
            scrollTrigger:{
                trigger:'.contactpage .question',
                scurb:true,
                makers:true,
                toggleActions:'restart pause reserve pause'
            },
            x:0,
            duration:.8,
            opacity:1
        })
        gsap.from(title__form,{
            scrollTrigger:{
                trigger:'.contactpage .question',
                scurb:true,
                makers:true,
                toggleActions:'restart pause pause pause'
            },
            x:100,
            duration:.8,
            opacity:0
        })
        gsap.to(form,{
            scrollTrigger:{
                trigger:'.contactpage .question',
                scurb:true,
                makers:true,
                toggleActions:'restart pause reserve pause'
            },
            x:0,
            duration:1.2,
            opacity:1
        })
        gsap.from(form,{
            scrollTrigger:{
                trigger:'.contactpage .question',
                scurb:true,
                makers:true,
                toggleActions:'restart pause pause pause'
            },
            x:110,
            duration:1.2,
            opacity:0
        })

        /////// Abouts Animations ///////
        let tabContentH2 = '.aboutpage .wrapper .tab__content-caption h2';
        let tabContentP = '.aboutpage .wrapper .tab__content-caption P';
        let tabContentSlide = '.aboutpage .wrapper .tab__content-slide .list__slide .list__slide-item';
        let tabLogoH3 = '.aboutpage .wrapper .tab__content-logo .caption h3';
        let tabLogoP = '.aboutpage .wrapper .tab__content-logo P';
        let tabLogoItem = '.aboutpage .wrapper .tab__content-logo .logo-item';

        gsap.to(tabContentH2,{
            scrollTrigger:{
                trigger:'.aboutpage .wrapper .tab__content-caption',
                scurb:true,
                makers:true,
                toggleActions:'restart pause reserve pause'
            },
            y:0,
            duration:.6,
            opacity:1
        })
        gsap.from(tabContentH2,{
            scrollTrigger:{
                trigger:'.aboutpage .wrapper .tab__content-caption',
                scurb:true,
                makers:true,
                toggleActions:'restart pause pause pause'
            },
            y:40,
            duration:.6,
            opacity:0
        })
        gsap.to(tabContentP,{
            scrollTrigger:{
                trigger:'.aboutpage .wrapper .tab__content-caption',
                scurb:true,
                makers:true,
                toggleActions:'restart pause reserve pause'
            },
            y:0,
            duration:.8,
            opacity:1
        })
        gsap.from(tabContentP,{
            scrollTrigger:{
                trigger:'.aboutpage .wrapper .tab__content-caption',
                scurb:true,
                makers:true,
                toggleActions:'restart pause pause pause'
            },
            y:40,
            duration:.8,
            opacity:0
        })
        gsap.to(tabContentSlide,{
            scrollTrigger:{
                trigger:'.aboutpage .wrapper .tab__content-slide .list__slide',
                scurb:true,
                makers:true,
                toggleActions:'restart pause reserve pause'
            },
            duration:.8,
            opacity:1
        })
        gsap.from(tabContentSlide,{
            scrollTrigger:{
                trigger:'.aboutpage .wrapper .tab__content-slide .list__slide',
                scurb:true,
                makers:true,
                toggleActions:'restart pause pause pause'
            },
            duration:.8,
            opacity:0
        })
        gsap.to(tabLogoH3,{
            scrollTrigger:{
                trigger:'.aboutpage .wrapper .tab__content-logo .caption',
                scurb:true,
                makers:true,
                toggleActions:'restart pause reserve pause'
            },
            y:0,
            duration:.6,
            opacity:1
        })
        gsap.from(tabLogoH3,{
            scrollTrigger:{
                trigger:'.aboutpage .wrapper .tab__content-logo .caption',
                scurb:true,
                makers:true,
                toggleActions:'restart pause pause pause'
            },
            y:40,
            duration:.6,
            opacity:0
        })
        gsap.to(tabLogoP,{
            scrollTrigger:{
                trigger:'.aboutpage .wrapper .tab__content-logo .caption',
                scurb:true,
                makers:true,
                toggleActions:'restart pause reserve pause'
            },
            y:0,
            duration:.8,
            opacity:1
        })
        gsap.from(tabLogoP,{
            scrollTrigger:{
                trigger:'.aboutpage .wrapper .tab__content-logo .caption',
                scurb:true,
                makers:true,
                toggleActions:'restart pause pause pause'
            },
            y:40,
            duration:.8,
            opacity:0
        })
        setTimeout(()=>{
            gsap.to(tabLogoItem,{
                scrollTrigger:{
                    trigger:'.aboutpage .wrapper .tab__content-logo .logo-item',
                    scurb:true,
                    makers:true,
                    toggleActions:'restart pause reserve pause'
                },
                y:0,
                duration:1,
                delay:2,
                opacity:1
            })
            gsap.from(tabLogoItem,{
                scrollTrigger:{
                    trigger:'.aboutpage .wrapper .tab__content-logo .logo-item',
                    scurb:true,
                    makers:true,
                    toggleActions:'restart pause reserve pause'
                },
                stagger:.1 , 
                ease:"back" ,
                y:70,
                duration:1,
                delay:2,
                opacity:0
            })
        },500);

        /////// Recuit Animations ///////
        let h2boxOne = '.recuitpage .boxOne .box-right h2';
        let pboxOne = '.recuitpage .boxOne .box-right p';
        let h2boxTwo = '.recuitpage .boxTwo .caption h2';
        let h4boxTwo = '.recuitpage .boxTwo .caption h4';
        let pboxTwo = '.recuitpage .boxTwo .caption p';
        let boxThreeSlide = '.recuitpage .boxThree .slide .slide__list-item';
        //let h2boxOne = '.recuitpage .boxOne .box-right h2';
        //let pboxOne = '.recuitpage .boxOne .box-right p';
        
        gsap.to(h2boxOne,{
            scrollTrigger:{
                trigger:'.recuitpage .boxOne .box-right',
                scurb:true,
                makers:true,
                toggleActions:'restart pause reserve pause'
            },
            y:0,
            duration:.8,
            opacity:1
        })
        gsap.from(h2boxOne,{
            scrollTrigger:{
                trigger:'.recuitpage .boxOne .box-right',
                scurb:true,
                makers:true,
                toggleActions:'restart pause pause pause'
            },
            y:40,
            duration:.8,
            opacity:0
        })
        gsap.to(pboxOne,{
            scrollTrigger:{
                trigger:'.recuitpage .boxOne .box-right',
                scurb:true,
                makers:true,
                toggleActions:'restart pause reserve pause'
            },
            y:0,
            duration:1,
            opacity:1
        })
        gsap.from(pboxOne,{
            scrollTrigger:{
                trigger:'.recuitpage .boxOne .box-right',
                scurb:true,
                makers:true,
                toggleActions:'restart pause pause pause'
            },
            y:60,
            duration:1,
            opacity:0
        })

        gsap.to(h2boxTwo,{
            scrollTrigger:{
                trigger:'.recuitpage .boxTwo',
                scurb:true,
                makers:true,
                toggleActions:'restart pause reserve pause'
            },
            y:0,
            duration:.8,
            opacity:1
        })
        gsap.from(h2boxTwo,{
            scrollTrigger:{
                trigger:'.recuitpage .boxTwo',
                scurb:true,
                makers:true,
                toggleActions:'restart pause pause pause'
            },
            y:40,
            duration:.8,
            opacity:0
        })
        gsap.to(h4boxTwo,{
            scrollTrigger:{
                trigger:'.recuitpage .boxTwo',
                scurb:true,
                makers:true,
                toggleActions:'restart pause reserve pause'
            },
            y:0,
            duration:1,
            opacity:1
        })
        gsap.from(h4boxTwo,{
            scrollTrigger:{
                trigger:'.recuitpage .boxTwo',
                scurb:true,
                makers:true,
                toggleActions:'restart pause pause pause'
            },
            y:40,
            stagger:.3 , 
            ease:"back" ,
            duration:1,
            opacity:0
        })
        gsap.to(pboxTwo,{
            scrollTrigger:{
                trigger:'.recuitpage .boxTwo',
                scurb:true,
                makers:true,
                toggleActions:'restart pause reserve pause'
            },
            y:0,
            duration:1.2,
            opacity:1
        })
        gsap.from(pboxTwo,{
            scrollTrigger:{
                trigger:'.recuitpage .boxTwo',
                scurb:true,
                makers:true,
                toggleActions:'restart pause pause pause'
            },
            y:40,
            duration:1.2,
            opacity:0
        })

        setTimeout(()=>{
            gsap.to(boxThreeSlide,{
                scrollTrigger:{
                    trigger:'.recuitpage .boxThree .slide',
                    scurb:true,
                    makers:true,
                    toggleActions:'restart pause reserve pause'
                },
                y:0,
                duration:1,
                delay:2,
                opacity:1
            })
            gsap.from(boxThreeSlide,{
                scrollTrigger:{
                    trigger:'.recuitpage .boxThree .slide',
                    scurb:true,
                    makers:true,
                    toggleActions:'restart pause reserve pause'
                },
                stagger:.1 , 
                ease:"back" ,
                y:70,
                duration:1,
                delay:2,
                opacity:0
            })
        },500);

    }
    scrollAnimations();

    /// Map networks ///
    let networkMap = ()=>{
        let locationBtn = $('.networkpage .wrapper .maplocation a');
        locationBtn.hover(function(e){
            e.preventDefault();
            $(this).find('img').toggleClass('img__active');
            $(this).next().toggleClass('location__active');
            $(this).parent().siblings().toggleClass('maploca__hide');
        })
    }
    networkMap();
   

    /// show input ///
    let showInput = ()=>{
        let btnSearch = $('.header .header__more .img-search');
        btnSearch.on('click',()=>{
            btnSearch.prev().toggleClass('input-active');
        })
    }
    showInput();

    /// show menu Mobile ////
    let showMenuMobile = () =>{
        let btnMenuMobile = $('.menuMobile .btnClose');
        btnMenuMobile.on('click',()=>{
            $('.menuMobile .menuMobile__main').toggleClass('menuMobile_active');
            btnMenuMobile.toggleClass('X_active');
        })


        /// toggle li ////
        let toggle = $('.menuMobile .toggle');
        toggle.on('click',()=>{
            toggle.next().stop().slideToggle();
            toggle.find('img').toggleClass('img_rotate');
        })
    }
    showMenuMobile();

    /// tab service ////
    let tabService = ()=>{
        let li_tab = $('.servicepage .faq .faq__title-box li');
        li_tab.on('click',function(e){
            //// active line white ele li ////
            e.preventDefault();
            li_tab.removeClass('active');
            $(this).addClass('active');


            /// get location li to show tab content of location this when click ////
            let current_li = $(this).attr('data-list');
            if(current_li >=2 && current_li <= 5){
                $('.servicepage .faq__content')
                    .append('<div class="faq__content-item + content-' 
                    + current_li +'"><h6>Hiện tại mục này chưa update.</h6></div>');
            }

            /// show tab__content corresponding this click ///
            $('.servicepage .faq__content-item').removeClass('content__active');
            $('.servicepage .faq__content .content-' + current_li).addClass('content__active');
        })
    }   
    tabService();

    /// select bike using ///
    let selectBike = ()=>{
        let selectBike = $('.regispage .signIn .ul__list p');
        selectBike.on('click',function(e){
            $('.regispage .signIn .list__bike .li__current p').html($(this).html());
           
        })
    }
    selectBike();

    /// let tab Technolocgy ///
    let tabTechnology = ()=>{
        let liDes = $('.technologypage .sec2 .sec2__caption-ul li');
        liDes.on('click',function(e){
            e.preventDefault();
            $(this).stop().next().slideToggle();
            $(this).find('a').toggleClass('a__active');
            $(this).next().toggleClass('text__active');
        })
    }
    tabTechnology();


    /// select nơi bảo hành ///
    let SelectAgency = ()=>{
        let li_city = $('.agencypage .box__map .city');
        let list_city = $('.agencypage .box__map .list__city li');

        let li_district = $('.agencypage .box__map .district');
        let list_district = $('.agencypage .box__map .list__district');

        li_city.on('click',function(){
            $('.agencypage .box__map .list__city').toggleClass('active');
            $(this).find('img').toggleClass('img__active');
        })
        li_district.on('click',function(){
            $('.agencypage .box__map .list__district').toggleClass('active');
            $(this).find('img').toggleClass('img__active');
        })


        let DataDistrict = ['Tân Phú','Tân Bình','Quận 1','Quận 2','Quận 10','Long Biên','Hoàn Kiếm','Cầu Giấy','Thới Bình','Cái Nước']
        
        list_city.each(function(){ /// list li when click
            $(this).on('click',function(e){
                e.preventDefault();
                if($(this).text() == 'TP HCM'){ /// find city
                    DataDistrict.map(function(e,i){ /// set district for list
                        if(i >= 0 && i <= 4){
                            list_district.append('<li><a href="#">' + e + '</a></li>');
                        }
                    })
                }               
                else if($(this).text() == 'Hà Nội'){
                    DataDistrict.map(function(e,i){
                        if(i >= 5 && i <= 7){
                            list_district.append('<li><a href="#">' + e + '</a></li>')
                        }
                    })
                }     
                else if($(this).text() == 'Cà Mau'){
                    DataDistrict.map(function(e,i){
                        if(i >= 8 && i <= 9){
                            list_district.append('<li><a href="#">' + e + '</a></li>')
                        }
                    })
                }
               
            })
        })

        
    }
    SelectAgency();

    /// create slide for fullpage ///
    let slider = ()=>{

        /// slide Home ///
        let slideHome = new Splide( '.splide', {
            type   : 'loop',
            autoplay:true,
            arrows: false,
            //speed:.7,
            pagination:false
        } ).mount();

        slideHome.on('moved',(e,i)=>{
            let count = $('.homepage .banner .count__active');
            let h1 = $('.homepage .banner  .caption__main .title h1');
            let h3 = $('.homepage .banner  .caption__main .title h3');
            let img_bike = $('.homepage .banner .img_moto img');
            let img_moutain = $('.homepage .banner .img_moutain img');

            if(i == 0){
                count.html('0' + (e+1));
                gsap.to(h1,{
                    x: 0,
                    opacity: .3,
                    duration: 0.6,
                    delay: .8
                })
                gsap.to(h3,{
                    y: 0,
                    x:0,
                    opacity: 1,
                    duration: 0.6,
                    delay: .8
                })
                gsap.to(img_bike,{
                    x:0,
                    opacity: 1,
                    duration: 0.4,
                    delay: .6
                })
                gsap.to(img_moutain,{
                    y:0,
                    opacity: 1,
                    duration: 0.4,
                    delay: .4
                })
             
            }else{
                gsap.from(img_bike,{
                    x:100,
                    opacity:0,
                })
                gsap.from(h1,{
                    x: -100,
                    opacity: 0
                })
                gsap.from(h3,{
                    x: -70,
                    y:70,
                    opacity: 0
                })
                gsap.to(img_moutain,{
                    y:50,
                    opacity: 0
                    
                })
            }

            if(i == 1){
                count.html('0' + (e+1));
                gsap.to(h1,{
                    x: 0,
                    opacity: .3,
                    duration: 0.6,
                    delay: .8
                })
                gsap.to(h3,{
                    y: 0,
                    x:0,
                    opacity: 1,
                    duration: 0.6,
                    delay: .8
                })
                gsap.to(img_bike,{
                    x:0,
                    opacity: 1,
                    duration: 0.4,
                    delay: .6
                })
                gsap.to(img_moutain,{
                    y:0,
                    opacity: 1,
                    duration: 0.4,
                    delay: .4
                })
            }else{
                
                gsap.from(img_bike,{
                    x:100,
                    opacity:0
                    
                })
                gsap.from(h1,{
                    x: -100,
                    opacity: 0
                })
                gsap.from(h3,{
                    y: 70,
                    x:-70,
                    opacity: 0
                })
                gsap.to(img_moutain,{
                    y:50,
                    opacity: 0
                })
            }

            if(i == 2){
                count.html('0' + (e+1));                
                gsap.to(h1,{
                    x: 0,
                    opacity: .3,
                    duration: 0.6,
                    delay: .8
                })
                gsap.to(h3,{
                    y: 0,
                    x:0,
                    opacity: 1,
                    duration: 0.6,
                    delay: .8
                })
                gsap.to(img_bike,{
                    x:0,
                    opacity: 1,
                    duration: 0.4,
                    delay: .6
                })
                gsap.to(img_moutain,{
                    y:0,
                    opacity: 1,
                    duration: 0.4,
                    delay: .4
                })               
            }else{
                gsap.from(img_bike,{
                    x:100,
                    opacity: 0
                })
                gsap.from(h1,{
                    x: -100,
                    opacity: 0
                })
                gsap.from(h3,{
                    y: 70,
                    x:-70,
                    opacity: 0
                })
                gsap.from(img_moutain,{
                    y:50,
                    opacity: 0
                })
            }
        })

        

        /// slide Products ///
        
        let slideProducts = new Splide( '.slideProduct', {
            type   : 'loop',
            autoplay:true,
            arrows: false,
            //speed:.7,
            perPage: 3,
            next:'slideProduct__arrow-next',
            perMove: 1,
            pagination:false
        } ).mount();
       
    }
    slider();
    
    
  
    

})



$(window).on('load',function(){
    setTimeout(()=>{
        $('.loadPage').fadeOut(500);//addClass('hide');
    },2200)
    //setTimeout(function(){
    //    $('.loadPage').fadeIn(1000).fadeOut(1000);
    //    $('.loadPage').delay(2000).fadeIn(1500).fadeOut(1500);
    //    //$('.loader-page').fadeIn(2000).fadeOut(2000);
    //});
}) 
