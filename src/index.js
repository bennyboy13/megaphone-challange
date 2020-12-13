import _ from 'lodash';
import 'bootstrap';
import './style.scss';
import $ from 'jquery';
import 'slick-carousel';

$(window).on("load", function () {
    $('.carousel').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        speed: 500,
    });

    $("#one-btn").trigger("focus");

    $(".btn-selection").on("click", function () {
        $(".btn-selection").removeClass("btn-blue");
    })

    $("#one-btn").on("click", function () {
        $("#one-btn").addClass("btn-blue");
        $(".original-price").css("text-decoration", "none");
        $(".discounted-price").html(" ");
    });

    $("#two-btn").on("click", function () {
        $("#two-btn").addClass("btn-blue");
        $(".original-price").css("text-decoration", "line-through");
        $(".discounted-price").html("$76.50");
    });

    $("#four-btn").on("click", function () {
        $("#four-btn").addClass("btn-blue");
        $(".original-price").css("text-decoration", "line-through");
        $(".discounted-price").html("$144.00");
    });

})
// function component() {
//     const element = document.createElement('div');

//     // Lodash, now imported by this script
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     element.classList.add('hello');

//     return element;
//   }

//   document.body.appendChild(component());