let firstname :string = '';

firstname = prompt("what is your name?") || '' ;

if(firstname !==null && firstname !==''){
  alert (`Hello ${firstname} , would you like to learn some Python today?`)
}
else{
    alert('you have to fill your name !')
}