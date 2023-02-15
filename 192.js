function confirmEnding(str, target) {
   console.log(str.substr(str.length - target.length, str.length) === target);
}
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")// false.
confirmEnding("Bastian", "n") //true

//substring , substr
