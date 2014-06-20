function RunFile() {
    WshShell = new ActiveXObject("WScript.Shell");
    alert("hello");
    debugger;
    WshShell.Run("c:/windows/system32/notepad.exe", 1, false);
    }