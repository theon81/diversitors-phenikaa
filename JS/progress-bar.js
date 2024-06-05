const filled = document.querySelector('.progress_bar_fill');

function update() {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;

    const homeHeight = document.getElementById('text-container').offsetHeight;
    const artworkHeight = document.getElementById('lament_container').offsetHeight;
    const sloganHeight = document.getElementById('slogan').offsetHeight;
    const showcaseHeight = document.getElementById('showcase').offsetHeight;
    const sliderHeight = document.getElementById('slider_container').offsetHeight;
    const teamsHeight = document.getElementById('teams').offsetHeight;
    const footerHeight = document.getElementById('footer').offsetHeight;

    const scrolled = (scrollTop / docHeight) * 100;
    let progess;
    if(scrollTop <= homeHeight){
        progess = (scrollTop / homeHeight) * 30;
    } else if(scrollTop > homeHeight && scrollTop <= artworkHeight ){
        progess = 30 + ((scrollTop-homeHeight) / artworkHeight) * 10;
    } else if(scrollTop > artworkHeight && scrollTop <= sloganHeight){
        progess = 40 + ((scrollTop-homeHeight-artworkHeight)/sloganHeight) * 10;
    } else if(scrollTop > sloganHeight && scrollTop <= showcaseHeight){
        progess = 50 + ((scrollTop-homeHeight-artworkHeight-sloganHeight)/showcaseHeight) *10;
    } else if(scrollTop > showcaseHeight && scrollTop <= sliderHeight){
        progess = 60 + ((scrollTop-homeHeight-artworkHeight-sloganHeight-showcaseHeight)/sliderHeight) * 10;
    } else if(scrollTop > sliderHeight && scrollTop <= teamsHeight){
        progess = 70 + ((scrollTop-homeHeight-artworkHeight-sloganHeight-showcaseHeight-sliderHeight)/teamsHeight) * 20;
    } else {
        progess = 90 + ((scrollTop-homeHeight-artworkHeight-sloganHeight-showcaseHeight-sliderHeight-teamsHeight)/footerHeight) * 10;
    }

    filled.style.width = `${scrolled}%`;

    requestAnimationFrame(update);
}

update();