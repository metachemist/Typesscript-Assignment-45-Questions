

// Equality and Inequality Test 1.
console.log("Equality test with string:", "Apple" === "Apple");
// Equality and Inequality Test 2.
console.log("Inequality test with string:", ("Apple" as string) != "Orange");

//tests using the lower case function .
console.log("Lower case function test: ",  "HELLO" .toLowerCase()  === "hello");

//numerical tests involving equality.
console.log("equality test with numbers:", 21 === 21);
//numerical tests involving inequality.
console.log("inequality test with numers: " , ( 25 as number) != 35);

//greater than test.
console.log("greater than test: ", 10 > 5);
//less than test.
console.log("less than test:", 5 < 10 );

//greater than or equal to,
console.log("greater than and equal to test: " ,10 >= 10);
// less than or equal to,
console.log("less than or equal to:" , 5 <= 10 );

//tests using "and" operator.
console.log("And operator test: ", 5===5 && 10 > 5 );
//tests using "or" operator.
console.log("or operator test: ", 5===5 || false);

//Test whether an item is in a Array.
const fruit :string[] = ['strawberry', 'banana', 'apple'];
console.log('test "strawberry" in the array: ', fruit.includes("strawberry"));

//test whether an item is not in a array.
console.log('testing  "nashpati" is not in array: ' , !fruit.includes('nashpati'));