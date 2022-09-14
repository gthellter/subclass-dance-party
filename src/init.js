$(document).ready(function() {
  window.dancers = [];


  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position


    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);

  });

  $('.lineupButton').on('click', function(event) {
    var numberOfDancers = window.dancers.length;
    var screenHeight = $("body").height();
    var screenWidth = $("body").width() - 360;
    var increment = screenWidth/(numberOfDancers + 1);
    window.dancers.forEach(function(dancer, index) {
      dancer.setPosition(screenHeight/2, increment*(index+1));
    });
  });

  // $(document).on('click', '.people', function (event) {
  //   var currentTop = this.offsetTop;
  //   var currentLeft = this.offsetLeft;
  //   event.setPosition(currentTop - 50, currentLeft);
  // });
});