$(document).ready(function() {
    $('#carouselImages').slick({
        autoplay:true,
    });
    
    $('.hamburguermenu').click(function(){
        $(`nav`).slideToggle();
    })
    
    $('#telephone').mask('(00) 00000-0000', {
        placeholder: '(41) 00000-4932'
    })

    $('form').validate({
        rules: {
            name:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            telephone:{
                required: true
            }
        },
        submitHandler: function(form) {
            console.log (form)
        },
        invalidHandler: function(event, validate) {
            let incorrectFields = validate.numberOfInvalids();
            if (incorrectFields){
                alert (`You need to complete ${incorrectFields} form fields.`)
            }
        }
    })
    $('.carsList button').click(function(){
        const destination = $('#contact');

        const nameCar = ($(this).parent().find('h3').text())

        $('#car').val(nameCar);

        $('html').animate({
            scrollTop: destination.offset().top
        }, 1000)
    })
})