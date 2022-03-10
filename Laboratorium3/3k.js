/*Stwórz obiekt przy pomocy inicjalizatora (object initializer),
obiekt powinien mieć przynajmniej 2-3 pola i 2-3 metody.
Napisz funkcję przyjmującą obiekt jako parametr i wypisującą wszystkie jego własności wraz z ich typami*/

function getCatInfo(given_obj){
   return "Breed:" + given_obj.breed + " "+ typeof given_obj.breed+ "\n" +
       "Name:" + given_obj.name + " "+ typeof given_obj.name+"\n"+
       "Birth Year:"+ given_obj.birth_year+ " "+ typeof given_obj.birth_year+"\n" +
       "Age:"+given_obj.getAge() + " "+ typeof given_obj.getAge()+"\n"+
       "Voice:"+given_obj.getVoice() + " "+ typeof given_obj.getVoice();
}
let cat = {
    breed: "Ragdoll",
    name: "Gennaro",
    birth_year: 2020,
    getAge: function (){
        let today = new Date();
        return today.getFullYear() - this.birth_year;
    },
    getVoice: function (){
        return "Miau!"
    }
};
console.log(getCatInfo(cat));
