
let Guest_list :string[] =['Sania', 'tayyaba', 'bushra'];
// for(let i=0; i<Guest_list.length; i++){
 // console.log('dear ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!');
// }

let absent_Guest :string = 'Sania' ;
let new_Guest :string = 'Anum' ;
Guest_list[0] = new_Guest ;

// for(let i=0; i<Guest_list.length; i++){
// console.log('dear ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!');
// }

console.log('Sania ${absent_Guest} is not coming to the party.');
console.log('Good News! We find Big Table So We are inviting 3 more guest.')

//Arry me 3 guest add kiye hai.
Guest_list.unshift('hamna') ;
Guest_list.splice(2 ,0 , 'Maryam');
Guest_list.push('laiba');

//yaha per mene 6 guest ko print kia hai.
 for(let i=0; i<Guest_list.length; i++){
 console.log('dear ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!'); 
}

//sorry guest for not invited.
console.log('\nsorry we are not arrange big table, only Two people will be invited.');

//yaha per mene guest remove kiye hai.
while(Guest_list.length > 2){
  let remove_Guest =  Guest_list.pop();
  console.log(`Sorry dear ${remove_Guest}, you are not invited for Dinner.`)
}

//hamare bachy hoe 2 invited guest.
for(let i=0; i<Guest_list.length; i++){
    console.log('dear ' + Guest_list[i] + ',\n\nyou are still invited.\n\nThank you!'); 
 }
 
//mene sary guest arry se remove kardye.
Guest_list.splice(0, 2);
console.log(Guest_list);