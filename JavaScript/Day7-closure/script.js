function outerFunction() {
  let name = "Bhuvanesh" 
  function innerFunction() {
    console.log(name); 
  }
  return innerFunction;
}
let inner = outerFunction();
inner();