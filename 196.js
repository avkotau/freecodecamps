function booWho(bool) {
    console.log(typeof bool === 'boolean');
}

booWho(null);
booWho(true)// true.
booWho(false)// true.
booWho([1, 2, 3])// false.
booWho([].slice)// false.
