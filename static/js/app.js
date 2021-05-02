window.
onload
  = function () {
    var myCollapse = document.getElementById('portfolioProjects')
    
    $(".collapse-other").click(function () {
      var bsCollapse = new bootstrap.Collapse(myCollapse, {
        toggle: false
      })
      bsCollapse.hide()
    });
    
    var firstTabEl = document.querySelector('#portfolio-li span')
    var firstTab = new bootstrap.Tab(firstTabEl)
    
    $("#portfolioButton").click(function () {
      firstTab.show()
    })

    Particles.
    init
      ({

        // normal options
        selector: '.background',
        maxParticles: 120,
        connectParticles: true,
        color: '#FDFFFC',
        speed: 1.25,
        sizeVariations: 4.5,

        // options for breakpoints
        responsive: [{
          breakpoint: 768,
          options: {
            maxParticles: 90,
          }
        }, {
          breakpoint: 425,
          options: {
            maxParticles: 60,
          }
        }, {
          breakpoint: 320,
          options: {
            maxParticles: 30,

            // disables particles.js
          }
        }]
      });
  };