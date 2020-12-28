function output(the_string)
{
	var the_statusbar = document.getElementById("statusbar");
	var tmp_content = the_statusbar.innerHTML;
	the_statusbar.innerHTML = tmp_content + "<br>" + the_string;
	// the_statusbar.innerHTML += "<br>" + the_string;

}


var a, b, c;

a = 5;
b = 3;

c = (a > b);

var my_array = [1, 4, 17, 326, 434, 343, 3434, 656, 343];





// if (a == 0)
// {
// 	output("Oh yeah!");
// }
// else
// {
// 	output("Oh no!");
// }

// b = 0;

// if (b == 0)
// {
// 	output("Oh yeah!");
// }

// output("Nonono!");

var i = 8;


var elem;

for (i = 0; i < my_array.length; i = i + 1)
{
	elem = my_array[i];

	if (elem % 2 != 0)
	{
		output(elem);
	}
}

output("<hr>");


i = 0;

while (my_array[i] < 350)
{
	output(my_array[i]);
	i++;
}

output(k);

output("<hr>");

i = 0;

do
{
	output(my_array[i]);
	i++;
}
while  (my_array[i] < 350)

