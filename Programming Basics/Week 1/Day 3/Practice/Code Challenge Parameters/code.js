function greet(person,time) {
    if (person=="Count Dooku"){
        console.log("I'm coming for you, Dooku!")
    }
    else if (time<=12 && time>=5 ) {
        console.log("Good morning, "+person);
    }
    else if (time<=17 && time>12 ) {
        console.log("Good afternoon, "+person);
    } else { console.log("Good evening, "+person);}
    
}
greet("Martin",7);
greet("Jerry",14);
greet("Count Dooku",14);

