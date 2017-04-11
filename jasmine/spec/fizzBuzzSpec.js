describe("FizzBuzz", function() {

  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  })

  describe("multiples of 3", function() {

    it("fizzes when input is divisible by 3", function() {
      expect(fizzBuzz.play(3)).toEqual('Fizz');
    });

    it("fizzes for 6", function() {
      expect(fizzBuzz.play(6)).toEqual('Fizz');
    });

  });

  describe("multiples of 5", function() {

    it("buzzes when input is divisible by 5", function() {
      expect(fizzBuzz.play(5)).toEqual('Buzz');
    });

    it("buzzes for 10", function() {
      expect(fizzBuzz.play(10)).toEqual('Buzz');
    });

  });

  describe("multiples of 15", function() {

    it("fizzbuzzes when input is divisible by 15", function() {
      expect(fizzBuzz.play(15)).toEqual('FizzBuzz');
    });

    it("fizzbuzzes for 30", function() {
      expect(fizzBuzz.play(30)).toEqual('FizzBuzz');
    });

  });

  describe("returns number when not divisible by 3 or 5", function() {
    it("returns 2 when given 2", function() {
      expect(fizzBuzz.play(2)).toEqual(2);
    });
  });

})
