function factorialize(num) {
   let result = 1;
   while (num) {
      result *= num
      --num
   }
   console.log(result)

}

factorialize(5);
