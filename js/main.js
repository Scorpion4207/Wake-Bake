
(() => {
    // ==================================Бургер============================
    document.addEventListener('click', burgerInit)
    function burgerInit(e) {
        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')
        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return
        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }
    }

    // ==================================Модалка=============================
    document.addEventListener('click', modalInit)
    function modalInit(e) {
        const modalOpen = e.target.closest('.about__img-button')
        const modalClose = e.target.closest('.modal__cancel')
        const modal = e.target.classList.contains('modal')
        const buttonClose = e.target.closest('.form__button')
        if (!modalClose && !modalOpen && !modal && !buttonClose) return
        if (!document.body.classList.contains('body--modal-opened') && e.target.closest('.about__img-button')) {
            document.body.classList.add('body--modal-opened')
        } else if (e.target && e.target.closest('.modal__cancel') || e.target.closest('.form__button') || e.target.classList.contains('modal') && document.body.classList.contains('body--modal-opened')) {
            document.body.classList.remove('body--modal-opened')
        }
    }
    document.addEventListener('keydown', modalClose)
    function modalClose(e) {
        if (e.code === 'Escape' && document.body.classList.contains('body--modal-opened')) {
            document.body.classList.remove('body--modal-opened')
        }
    }

    // =============================Табы =======================================
    const tabControls = document.querySelector('.tab-controls')

    tabControls.addEventListener('click', tabSwith)
    function tabSwith(e) {

        const tabControl = e.target.closest('.tab-controls__link')
        if (!tabControl) return
        e.preventDefault();
        if (tabControl.classList.contains('tab-controls__link--active')) return

        const tabConentID = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabConentID)
        const activeControl = document.querySelector('.tab-controls__link--active')
        const activeContent = document.querySelector('.tab-content--show')

        if (activeControl) {
            activeControl.classList.remove('tab-controls__link--active')
        }
        if (activeContent) {
            activeContent.classList.remove('tab-content--show')
        }

        tabControl.classList.add('tab-controls__link--active')
        tabContent.classList.add('tab-content--show')
    }

    //========================== Аккордтон==================================

    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(el => {

        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

            const accordionControl = e.target.closest('.accordion-list__control')
            if (!accordionControl) return
            e.preventDefault();
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null
            }
            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null
            }
        });
    });

    // ========================Слайдеры-Галерея===============================

    new Swiper('.gallery__swiper', {
        slidesPerView: 1.5,
        spaceBetween: 15,


        pagination: {
            el: '.gallery__pagination',
            type: 'fraction',
        },

        navigation: {
            nextEl: '.gallery__next',
            prevEl: '.gallery__prev',
        },
        breakpoints: {
            601: {
                slidesPerView: 3,
            },
            801: {
                spaceBetween: 32
            },
            1101: {
                slidesPerView: 4
            }
        }
    });
    // =========================Слайдеры-Отзыв==================================

    new Swiper('.testimonials__swiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,

        scrollbar: {
            el: '.testimonials__scrollbar',
            draggable: true,
        },

        navigation: {
            nextEl: '.testimonials__next',
            prevEl: '.testimonials__prev',
        },
        breakpoints: {
            901: {
                slidesPerView: 1.5
            },
            1201: {
                slidesPerView: 2.1
            }
        }
    });

    // =========================Маска для телефона==================================
    
    const telInpust = document.querySelectorAll('input[type="tel"]');
    let im = new Inputmask('+ 7 (999) 999 99 99');
    im.mask(telInpust)

})()



