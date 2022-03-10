//Funkcja podajaca monety przy pomocy ktorych powinna byc wydana konkretna kwota przy uzyciu zadanych nominalow
function amountTocoin(price,denominations){
    let sorted_nom = denominations.sort((a,b) => { // sortuje nominaly w kolejnosci od najwiekszego do najmniejszego
        if(a>b) return -1;
        if(a<b) return 1;
        return 0;
    });
    let used_nom = [];
    let i = 0;
    while(price !==0 && i < sorted_nom.length){
        if(sorted_nom[i] <= price){
           used_nom.push(sorted_nom[i]);
            price -= sorted_nom[i];
        }else{
            i ++;
        }
    }
    return used_nom;

}

console.log("Uzyte nominaly:",amountTocoin(46, [25, 10, 5, 2, 1]))
console.log("Uzyte nominaly:", amountTocoin(100,[15,5]))