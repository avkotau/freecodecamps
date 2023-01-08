let count = 0;

function cc(card) {
    // Only change code below this line
    if (card >= 2 && card <= 6){
        count++;
    } else if (card === 10 || typeof card === 'string'){
        count--;
    }

    if(count > 0){
        return(count+" Bet");
    }else{
        return(count+" Hold");
    }
}

cc(3); cc(7); cc('Q'); cc(8); cc('A');
// cc(2); cc('J'); cc(9); cc(2); cc(7);
