var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  this.$node = $('<span class="dancer blinky"></span>');
  if (this.$node.height() + this.top > window.height) {
    this.top -= this.$node.height();
  }
  if (360 + this.top > $("body").height()) {
    this.top -= 360;
  }
  if (360 + this.left > $("body").width()) {
    this.left -= 360;
  }
  this.setPosition(this.top, this.left);
};
  this.setPosition(this.top, this.left);
  //window.dancers.push(this);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
  //Could add an animate tag
    // this.$node.animate({
    //   left: "+=20",
    //   top: "+=20",
    //   bottom: "+=20"
    //    } );
};