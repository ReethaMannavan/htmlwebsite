// 1. Username Generator 



function user(firstname, lastname)
{
    let first = firstname.slice(0,3);
    let last = lastname.slice(0,3);
    var randVal = Math.floor(100+(Math.random()*(999-100)));

    let fullname = first.concat(last).concat(randVal);
    return fullname;
}



console.log(user("nisha","reetha"));
console.log(user("Mannavan","Elancheral"));



