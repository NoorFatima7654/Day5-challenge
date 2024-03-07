//Question no 13
let transport: string[] = ["Honda motarcycle","Tesla car","Bianchi bycycle"];
transport.forEach(transport =>{
    console.log(`i would like to own a ${transport}.`)
});
//Question no 14
let guests: string[] = ["Arish","Mishal","Noor"];
guests.forEach(guests =>{
    console.log(`you are invited to the dinner ${guests}`)
});
//Question no 15
let unableToAttend= "Noor";
console.log(`${unableToAttend}  can't make it to dinner `);

let newGuest = "Usman";
guests[guests.indexOf(unableToAttend)] = newGuest;

guests.forEach(guests => {
    console.log(`Dear ${guests} would you like to join me for dinner`)
});
