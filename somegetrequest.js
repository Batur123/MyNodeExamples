async function GetDomain(Username,CommandArgs,ChanName)
{
    if(typeof CommandArgs[1] == 'undefined' || !Boolean(CommandArgs[1])) return control.send(1001);
    if(CommandArgs[1].length < 3) return control.send(0010);

    control.send("Process started.",0001);

    var URL = "URLTest";
    var RegisterFileNameWithFolder = "./downfolder/example.txt";
    download(URL,RegisterFileNameWithFolder,function (cb)
    {
        var TempArray = fs.readFileSync(RegisterFileNameWithFolder, 'utf8').toString().split('\r\n').filter(word => word.includes(CommandArgs[1]));
        var TempIndex = 1;

        if(typeof TempArray == 'undefined' || !Boolean(TempArray) || TempArray.length === 0) return control.send(0000);

        control.send("Start");
        for(var count = 0;count < TempArray.length; count++)
        {
            if(TempIndex <= 100)
            {
                bot.send(1100,TempIndex,TempArray[count]);
                TempIndex++;
            }        
        }
       control.send("Finish");
    });
}
