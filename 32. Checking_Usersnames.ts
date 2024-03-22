// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used.
//  If it has, print a message that the person will need to enter a new username.
//   If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_users: string[] = ['AsAd', 'BiLal', 'AsIm', 'Farhan', 'John'];

let new_users: string[] = ['Ayan', 'AsAd', 'Babar', 'Rahim', 'Farhan'];

new_users.forEach(newUsername => {
    let lowercase: string =  newUsername.toLowerCase();

    if(current_users.map(C_user => C_user.toLowerCase()).includes(lowercase)){
        console.log(`the username ${newUsername} is not available.please write a differet username`);
    }
    else{
        console.log(`the username  ${newUsername} is available.`);
    }
})