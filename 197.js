function titleCase(str) {
    console.log(str.toLowerCase().split(' ').map((n) => n[0].toUpperCase() + n.slice(1)).join(' '));
}

//or
//function titleCase(str) {
//   return str
//     .toLowerCase()
//     .replace(/(^|\s)\S/g, L => L.toUpperCase());
// }

titleCase("I'm a little tea pot");
titleCase("I'm a little tea pot")// I'm A Little Tea Pot.
titleCase("sHoRt AnD sToUt")// Short And Stout.
