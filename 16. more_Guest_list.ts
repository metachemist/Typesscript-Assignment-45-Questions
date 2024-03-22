

let Guest_list :string[] =['Sania', 'tayyaba', 'bushra'];

// for(let i=0; i<Guest_list.length; i++){

 // console.log('dear ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!');

// }

let absent_Guest :string = 'Sania' ;

let new_Guest :string = 'Anum' ;

Guest_list[0] = new_Guest ;

for(let i=0; i<Guest_list.length; i++){

console.log('dear ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!');

}

console.log('Sania ${absent_Guest} is not coming to the party.');

console.log('Good News! We find Big Table So We are inviting 3 more guest.')

Guest_list.unshift('hamna') ;
Guest_list.splice(2 ,0 , 'Maryam');
Guest_list.push('laiba');

for(let i=0; i<Guest_list.length; i++){

    console.log('dear ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!');
    
}