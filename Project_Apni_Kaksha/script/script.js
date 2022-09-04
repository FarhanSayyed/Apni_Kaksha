$(".allmyvideos").on("click", function() {

    // All but not this one - pause
    $(".allmyvideos").not( this ).each(function() {
         this.pause();
    });

    // Play this one
    this.play();

    // Or rather toggle play / pause
    // this[this.paused ? "play" : "pause"]();

});