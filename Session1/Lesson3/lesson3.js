var a = 0;


a = b + 8;

function myFunction(myArgument, arg2 = "<", arg3 = ">")
{
	b = 0;
	return arg2 + myArgument + arg3;
}


var c = myFunction("12");

console.log(c);

// if (c == "0")
// {
// 	switch_visibility();
// 	c = 5;
// }

// myFunction("pew!");

// console.log("c = " + c);
