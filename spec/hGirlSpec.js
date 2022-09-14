describe('hGirlDancer', function() {

  var hGirlDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    hGirlDancer = new makeGirlDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(hGirlDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(hGirlDancer.$node, 'toggle');
    hGirlDancer.step();
    expect(hGirlDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(hGirlDancer, 'step');
      expect(hGirlDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(hGirlDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(hGirlDancer.step.callCount).to.be.equal(2);
    });
  });
});