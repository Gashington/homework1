$(document).ready(function () {
    slider = {

        init: function () {
            this.startAnimation();
            this.setListeners()
        },
        setListeners: function () {
            this.slides.on('mouseover', $.proxy(this.stopAnimation, this));
            this.slides.on('mouseout', $.proxy(this.startAnimation, this));
        },
        startAnimation: function () {
            this.timer = setInterval($.proxy(this.animation, this), (this.delay * 1000 + this.animationSpeed * 2 + this.textAnimationSpeed));
        },
        stopAnimation: function () {
            this.timer = clearInterval(this.timer)
        },
        checkLoop: function () {
            this.curSlide++;
            this.nextSlide++;
            this.loopCounter++;
            if (this.loopCounter === this.maxLoop) this.loopCounter = 0;
            if (this.nextSlide === this.maxSlides) this.nextSlide = 0;
            if (this.curSlide === this.maxSlides) this.curSlide = 0;
        },
        animation: function () {
            this.tm.fromTo(this.slides.eq(this.curSlide), this.animationSpeed, this.slidesTweens[this.curSlide][0], this.slidesTweens[this.curSlide][1])
                .fromTo(this.slides.eq(this.nextSlide), this.animationSpeed, this.slidesTweens[this.curSlide][2], this.slidesTweens[this.curSlide][3], '-=1')
                .fromTo(this.slidesText.eq(this.nextSlide), this.textAnimationSpeed, this.slideTextTweens[this.curSlide][0], this.slideTextTweens[this.curSlide][1],'-=0.5')
                .call($.proxy(this.checkLoop, this))
        },
        tm: new TimelineMax,
        slides: $('#bvs-slider li'),
        slidesText: $('.txt', $('#bvs-slider li')),
        maxSlides: $('#bvs-slider li').length,
        timer: 0,
        animationSpeed: 1,
        textAnimationSpeed: 0.5,
        delay: 5,
        maxLoop: 4,  // количество переходов анимации
        curSlide: 0, // текущий слайд
        nextSlide: 1, // следующий слайд
        loopCounter: 0,  // счетчик цикла
        slidesTweens: [
            [
                // Первый переход слайдов
                {css: {left: '0px', top: "0px"}}, // начальное положение текущего слайда
                {css: {left: '0px', top: "-400"},ease:Sine.easeInOut}, // конечное положение текущего слайда
                {css: {left: "0px", top: "400px"}}, // начальное положение следующего слайда
                {css: {left: "0px", "top": "0px"},ease:Sine.easeInOut} // конечное положение следующего слайда
            ],
            [
                {css: {left: '0px', top: "0px"}},
                {css: {left: '-640px', top: "0"},ease:Sine.easeInOut},
                {css: {left: "640px", top: "0"}},
                {css: {left: "0px", "top": "0px"},ease:Sine.easeInOut}
            ],

            [
                {css: {left: '0px', top: "0px"}},
                {css: {left: '0px', top: "400"},ease:Sine.easeInOut},
                {css: {left: "0px", top: "-400px"}},
                {css: {left: "0px", "top": "0px"},ease:Sine.easeInOut}
            ],
            [
                {css: {left: '0px', top: "0px"}},
                {css: {left: '640px', top: "0px"},ease:Sine.easeInOut},
                {css: {left: "-640px", top: "0px"}},
                {css: {left: "0px", "top": "0px"},ease:Sine.easeInOut}
            ]
        ],
        slideTextTweens: [
            [
                // Первый переход текста на слайдере
                {css: {left: "480px", top: "0px", width: "160px", height: "100%"}},// начальное положение
                {css: {left: "0px", top: "0px", width: "100%", height: "100px"},ease:Quint.easeIn} // конечное положение
            ],
            [
                {css: {left: "0px", top: "0px", width: "100%", height: "100px"}},
                {css: {left: "0px", top: "0px", width: "160px", height: "100%"},ease:Quint.easeIn}
            ],
            [
                {css: {left: "0px", top: "0px", width: "160px", height: "100%"}},
                {css: {left: "0px", top: "300px", width: "100%", height: "100px"},ease:Quint.easeIn}
            ],
            [
                {css: {left: "0px", top: "300px", width: "100%", height: "100px"}},
                {css: {left: "480px", top: "0px", width: "160px", height: "100%"},ease:Quint.easeIn}
            ]
        ]
    }
    slider.init();
})

