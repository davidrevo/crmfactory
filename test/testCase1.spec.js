/* Controller Test */
describe("Simple Reverse Function Test", function(){
  it("reverse word", function(){
    expect("DCBA").toEqual(reverse("ABCD"));
  });
});
