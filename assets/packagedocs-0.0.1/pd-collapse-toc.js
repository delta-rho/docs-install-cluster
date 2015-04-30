
$(document).ready(function() {
  var firstLevelTOC = $("#sidebar>li");
  firstLevelTOC.each(function() {
    var id = $(this).find(">a").attr("href").replace("#", "");
    id = id + "-toc-collapse";
    $(this).find(">ul").attr("id", id);
  });

  $("#sidebar>li>ul").addClass("collapse");
  $("#sidebar>li>ul").removeClass("in");
  $("#sidebar>li>ul").attr("aria-expanded", "false");
  $("#sidebar>li>ul").css("height", "0px");
  $("#sidebar>li>ul").attr('data-toggle', '');

  $('body').scrollspy('refresh');
});

$(function () {
  var active = true;

  $('#sidebar').on('show.bs.collapse', function () {
    if (active) $('#sidebar .in').collapse('hide');
  });
});

// $(function() {
//   $('body').on('activate.bs.scrollspy', function() {
//     if($(document).data("scroll") != 1) {
//       var id = $("#sidebar>li.active>ul").attr("id");
//       id = "#" + id;
//       $(id).collapse("show");
//     }
//   });
// });

$(window).scroll(function() {
   if(this.scrollTO) clearTimeout(this.scrollTO);
   this.scrollTO = setTimeout(function() {
      $(this).trigger('scrollEnd');
   }, 100);
});

$(window).bind('scrollEnd', function() {
  if($(document).data("scroll") != 1) {
    var id = $("#sidebar>li.active>ul").attr("id");
    id = "#" + id;
    $(id).collapse("show");
  }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('#sidebar li a, .page-scroll').bind('click', function(event) {
    $(document).data("scroll", 1);
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 80
    }, 300, 'easeInOutExpo', function() {
      // window.location.hash = $anchor.attr('href');
      $(document).data("scroll", 0);
      var id = $anchor.attr('href');
      id = id + "-toc-collapse";
      console.log("click: " + id);
      $(id).collapse("show");
    });
    event.preventDefault();
  });
});

