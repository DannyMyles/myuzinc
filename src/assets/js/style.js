// side bar
jQuery(function ($) {

    $(".sidebar-dropdown > a").click(function() {
  $(".sidebar-submenu").slideUp(200);
  if (
    $(this)
      .parent()
      .hasClass("active")
  ) {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .parent()
      .removeClass("active");
  } else {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .next(".sidebar-submenu")
      .slideDown(200);
    $(this)
      .parent()
      .addClass("active");
  }
  });
  
  $("#close-sidebar").click(function() {
  $(".page-wrapper").removeClass("toggled");
  });
  $("#show-sidebar").click(function() {
  $(".page-wrapper").addClass("toggled");
  }); 
  });
// end sidebar

// impact story 
$('.team-slider').owlCarousel({
  loop: true,            
  nav: false,
  autoplay: true,
  autoplayTimeout: 5000,
  smartSpeed: 450,
  margin: 20,
  responsive: {
      0: {
          items: 1
      },
      768: {
          items: 2
      },
      991: {
          items: 3
      },
      1200: {
          items: 3
      },
      1920: {
          items: 3
      }
  }
});

// end impact story 

  function openNav() {
    document.getElementById("mySidenav").style.width = "70%";
    // document.getElementById("flipkart-navbar").style.width = "50%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "rgba(0,0,0,0)";
}


var btnDelete = document.getElementById('clear');
      var inputFocus = document.getElementById('inputFocus');
      //- btnDelete.on('click', function(e) {
      //-   e.preventDefault();
      //-   inputFocus.classList.add('isFocus')
      //- })
      //- inputFocus.addEventListener('click', function() {
      //-   this.classList.add('isFocus')
      //- })
      btnDelete.addEventListener('click', function(e)
      {
        e.preventDefault();
        inputFocus.value = ''
      })
      document.addEventListener('click', function(e)
      {
        if (document.getElementById('first').contains(e.target))
        {
          inputFocus.classList.add('isFocus')
        }
        else
        {
          // Clicked outside the box
          inputFocus.classList.remove('isFocus')
        }
      });


